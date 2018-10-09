import React from 'react';

import getTime from './get-time';
import { TimeContext } from './TimeContext.js';
import * as timeState from './time-state.js';


export default class TimeZoneProvider extends React.Component {

  state = timeState.getInitialState();

  componentDidMount() {

    this.setState({ isLoading: true });

    getTime( this.props.timeZone )
      .then(
        time => this.setState( timeState.onGetTime( time ))
      )
      .catch(
        error => this.setState(
          timeState.onGetError( error )
        )
      )
  }

  render() {

    return (
      <TimeContext.Provider value={ this.state.time }>
        { this.props.children }
      </TimeContext.Provider>
    );
  }
}
