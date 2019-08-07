import React from 'react';

import './SoundButton.css';

class SoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = {
      playing:false,
    }
  }

  playAudio() {
    console.log(this.buttonRef.current);
    var audio = new Audio(this.buttonRef.current.getAttribute('data-src'));
    audio.play();
  }
  
  render() {
    return (
      <button className="sound-button" data-src={this.props.mp3src} ref={this.buttonRef}
        type="button" onClick={this.playAudio.bind(this)}>
        {this.props.text}
      </button>
    );
  }
}

export default SoundButton;