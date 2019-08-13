import React from 'react';
import './SearchModal.css';

class SearchModal extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      text: "",
      hide: true,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    
  }

  handleKeyDown = (event) => {
    this.searchInputDebounced(event);
  }

  searchInputDebounced = (() => {
    let timeout = null;
    let validCharset = new RegExp('^[a-zA-Z ]$');

    let charIsValid = (char) => {
      return validCharset.test(char);
    }

    return (event) => {
      /* Event handler */
      let char = event.key;
      console.log(char);
      if (event.keyCode === 8) {
        // Delete the last char if backspace was pressed.
        console.log(this.state.text.length);
        this.setState((state) => {
          return {
            text: state.text.slice(0, state.text.length - 1),
            hide: false,
          }
        }, () => {
          this.props.handleUpdate(this.state.text);
        });
      } else if (event.keyCode === 27) {
        // Clear all search text, and hide modal.
        this.setState((state) => {
          return {
            text: '',
            hide: true,
          }
        }, () => {
          this.props.handleUpdate(this.state.text);
        });

        clearTimeout(timeout);
        return;
      } else {
        this.setState((state) => {
          return {
            text: state.text + (charIsValid(char) ? char : ''),
            hide: false,
          }
        }, () => {
          this.props.handleUpdate(this.state.text);
        });
      }

      clearTimeout(timeout);

      // Reset search text and hide modal after 1.5s.
      timeout = setTimeout(() => {
        this.hideModal = true;

        this.setState((state) => {
          return {
            text: "",
            hide: true
          }
        })
      }, 1000)
    } 
  })();

  render() {
    return (
      <div className={this.state.hide ? "search-modal hidden" : "search-modal"}>
        {this.state.text.toUpperCase()}
      </div>
    )
  }
}

export default SearchModal;