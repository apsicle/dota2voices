import React from 'react';
import './SearchModal.css';

class SearchModal extends React.Component {
  constructor(props) {
    super(props); 
    this.modalRef = React.createRef();
    
    this.state = {
      text: "",
      hidden: true,
      fading: false,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    
  }

  getClassState() {
    if (this.state.hidden === true) {
      return "search-modal hidden";
    } else if (this.state.fading === true) {
      return "search-modal fading";
    } else {
      return "search-modal";
    }
  }

  handleKeyDown = (event) => {
    this.searchInputDebounced(event);
  }

  searchInputDebounced = (() => {
    let timeout1 = null;
    let timeout2 = null;
    let validCharset = new RegExp('^[a-zA-Z ]$');

    let charIsValid = (char) => {
      return validCharset.test(char);
    }

    return (event) => {
      /* Event handler */
      let char = event.key;

      switch(event.keyCode) {
        case 8:
          // Backspace: Delete the last char.
          this.setState((state) => {
            return {
              text: state.text.slice(0, state.text.length - 1),
              hidden: false,
              fading: false,
            }
          }, () => {
            this.props.handleUpdate(this.state.text);
          });
          
          break;
        case 27:
          // Escape: Clear all search text and immediately hide modal.
          this.setState((state) => {
            return {
              text: '',
              hidden: true,
              fading: false,
            }
          }, () => {
            this.props.handleUpdate(this.state.text);
          });

          clearTimeout(timeout1);
          clearTimeout(timeout2);
          return;
        default:
          // Any other key: If it is A-Z or " ", add it to the stored search text.
          this.setState((state) => {
            return {
              text: state.text + (charIsValid(char) ? char : ''),
              hidden: false,
              fading: false,
            }
          }, () => {
            this.props.handleUpdate(this.state.text);
          });
      }

      clearTimeout(timeout1); // first delayed function hides the search modal.
      clearTimeout(timeout2); // second one clears the text, it's timed so once the search text completely fades,
      // the text is cleared.

      // Reset search text and hide modal after 1.5s.
      timeout1 = setTimeout(() => {
        this.setState((state) => {
          return {
            fading: true
          }
        })
      }, 500)

      timeout2 = setTimeout(() => {
        this.setState((state) => {
          return {
            text: "",
            hidden: true,
          }
        })
      }, 1000)
    } 
  })();

  render() {
    return (
      <div className={this.getClassState()} ref={this.modalRef}>
        {this.state.text.toUpperCase()}
      </div>
    )
  }
}

export default SearchModal;