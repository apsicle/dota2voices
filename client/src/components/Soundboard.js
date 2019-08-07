import React from 'react';
import ReactLoading from 'react-loading';
import SoundButton from './SoundButton.js';
import './SoundBoard.css';

class Soundboard extends React.Component {
  /* Displays all voice responses for a particular hero. */
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    // const { heroname } = this.props.match.params;
    const { hero } = this.props.location.state;

    this.setState(() => ({ hero }));

    fetch(`http://localhost:5000/media?destination=${hero.responses_url}`, {
      method: 'GET',
     }).then((response) => {
       return response.json();
     }).then((data) => {
      console.log(data);
      let usableMp3s = data.mp3s.filter((mp3) => {
        return mp3.text.trim() !== ""; // some mp3s will have " " as text content, just don't use these.
      });
      this.setState(() => {
        return { mp3s: usableMp3s };
      });
    });
  }

  render() {
    return (
      this.state.mp3s ? (
        <div className="sound-board">
          {this.state.mp3s.map((resource, index) => {
            return <SoundButton mp3src={resource.mp3src} text={resource.text} key={resource.mp3src+index}/>
        })}
        </div>
      ) : <ReactLoading className="loading" type="bars" color="grey" height='4%' width='4%'/>
    )
  }
}

export default Soundboard;