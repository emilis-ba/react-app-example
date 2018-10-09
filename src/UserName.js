import React from 'react';

import { TimeContext } from './TimeContext.js';

export default class CurrentTime extends React.Component {


  render() {
    return (
      <TimeContext.Consumer>
        { time => 
          <dl>
            <dt>Current time:</dt>
            <dd>{
              time
              ? time.currentDateTime
              : 'loading...'
            }</dd>
          </dl>
        }
      </TimeContext.Consumer>
    );
  }
}
