import React from 'react';

class SoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing=false;
      file=this.props.text;
    }
  }

  playAudio() {
    
  }
  
  render() {
    return (
      <div className="sound-button">
        <button onclick={playAudio} type="button">{this.props.text}</button>
      </div>
    );
  }
}