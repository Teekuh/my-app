import React from 'react';
import Message from './Message.js';
import './App.css';

class App extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    console.log('App has mounted.');
  }

  componentDidUpdate() {
    console.log('App has updated.');
  }

  componentWillUnmount() {
    console.log('App will unmount.');
  }

  buttonClicked () {
    const authorElement = document.getElementById('author');
    const author = authorElement.value;
    const messageElement = document.getElementById('message');
    const message = messageElement.value;

    if (!author || !message) {
      alert('Author or Message cant be empty')
      return;
    }

    this.setState({messages: [
      ...this.state.messages,
      {
        dateTime: new Date().toLocaleString('de-AT'),
        author,
        message
      }
    ]});
    authorElement.value = '';
    messageElement.value = '';
  };

  render() {
    console.log('App has rerendered.');
    return (
      <div className="App">
        <div>
          Liste aller Textmessages
            {
              this.state.messages.map((messageData, index) => (
                <Message
                  key={`${index}`}
                  {...messageData}
                  isNewest={index === this.state.messages.length - 1}
                />
              ))
            }
        </div>
        <div>
          <div><label htmlFor="author">Author</label> <input id="author" name="author" /></div>
          <div><label htmlFor="message">Message</label> <input id="message" name="message" /></div>
          <button onClick={() => this.buttonClicked()}>Send</button>
        </div>
      </div>
    );
  }
}

export default App;
