import React from 'react';
import ReactLoading from 'react-loading';
import SoundButton from './SoundButton.js';
import './SoundBoard.css';

class Soundboard extends React.Component {
  /* Displays all voice responses for a particular hero. */
  constructor(props) {
    super(props);

    this.img = new Image();
    this.fullPortraitPath = this.props.location.state.hero.portrait_path.replace('_lg', '_full');
    console.log(this.props.location.state);
    this.state = {};
  }

  componentDidMount() {
    // const { heroname } = this.props.match.params;
    const { hero } = this.props.location.state;
    this.img.src = `https://storage.cloud.google.com/dota-hero-portraits/256x144/${this.fullPortraitPath}`; // force preload of image
    this.setState(() => ({ hero }));

    fetch(`${process.env.BASE_URL || 'http://localhost:5000'}/media?destination=${hero.responses_url}`, {
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
          <div className="sound-board__header">
            <img className="hero-portrait__image" src={`https://storage.cloud.google.com/dota-hero-portraits/256x144/${this.fullPortraitPath}`} alt=""></img>
          </div>
          <div className="sound-board__content">
            {this.state.mp3s.map((resource, index) => {
              return <SoundButton mp3src={resource.mp3src} text={resource.text} key={resource.mp3src+index}/>
            })}
          </div>
        </div>
      ) : <ReactLoading className="loading" type="bars" color="grey" height='4%' width='4%'/>
    )
  }
}

export default Soundboard;