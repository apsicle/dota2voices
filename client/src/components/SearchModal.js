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
    window.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
    
  }

  searchInputDebounced = (() => {
    let timeout = null;
    let validCharset = new RegExp('^[a-zA-Z ]$');

    let charIsValid = (char) => {
      return validCharset.test(char);
    }

    return (char) => {
      // Update search text
      this.setState((state) => {
        return {
          text: state.text + (charIsValid(char) ? char : ''),
          hide: false,
        }
      }, () => {
        this.props.handleUpdate(this.state.text);
      });
      
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
      }, 1500)
    } 
  })();

  handleKeyPress = (event) => {

    // event.preventDefault();
    let str = event.key;
    this.searchInputDebounced(str);
    // this.setState((state) => {
    //   return {
    //     searchInput: state.searchInput + str
    //   }
    // })
  }

  handleChange(event) {
    console.log('change', event)
  }

  render() {
    return (
      <div className={this.state.hide ? "search-modal hidden" : "search-modal"}>
        {this.state.text.toUpperCase()}
      </div>
    )
  }
}

export default SearchModal;