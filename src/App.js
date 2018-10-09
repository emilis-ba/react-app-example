import React, { Component } from 'react';

import CounterButton from './CounterButton.js';
import logo from './logo.svg';
import CurrentTime from './UserName.js';
import CurrentTimeZone from './CurrentTimeZone.js';
import  TimeZoneProvider from './TimeZoneProvider.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>

          <TimeZoneProvider timeZone="pst">
            <CurrentTime />
            <CurrentTimeZone />
          </TimeZoneProvider>

          <CounterButton initialValue={ 3 }/>
        </main>
        <footer className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
