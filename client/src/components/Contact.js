import React from 'react';

import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    }
  }

  render() {
    return (
      <form className="contact-form" method="POST" action={`${process.env.BASE_URL || 'http://localhost:5000'}/contact`}>
        <fieldset>
          <legend>Contact me about shit</legend>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name"></input>

          <label htmlFor="email">Email: </label>
          <input id="email" type="text" name="email"></input>
          
          <label htmlFor="body">Comments: </label>
          <textarea id="body" cols="50" rows="10" name="body"></textarea>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default Contact;