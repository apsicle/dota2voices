import React from 'react';
import axios from 'axios';
import SoundButton from 'SoundButton.js';

class Soundboard extends React.Component {
  /* Displays all voice responses for a particular hero. */
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    const { heroname } = this.props.match.params;
    const { hero } = this.props.location.state;

    this.setState(() => ({ hero }));

    fetch(`http://localhost:5000/media?destination=${hero.responses_url}`, {
      method: 'GET',
     }).then((response) => {
       return response.json();
     }).then((data) => {
      console.log(data);
      this.setState(() => {
        return { responses: data };
      });
    });
    
    // axios.get('localhost:5000/media', { url: hero.responses_url })
    //   .then((response) => {
    //     this.setState(() => {
    //       return response;
    //     })
    //   });
  }

  render() {
    return (
      <div className="sound-board">
        {/* This is {this.state.hero.name}'s page. */}
        {this.state.responses.map((response) => {
          return <SoundButton mp3src={response.mp3src} text={response.text} />
        })}
      </div> 
    )
  }
}

export default Soundboard;