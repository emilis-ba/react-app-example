import React from 'react';

import { TimeContext } from './TimeContext.js';

export default class CurrentTimeZone extends React.Component {

  render() {
    return (
      <TimeContext.Consumer>
        { time => <p>
            Time zone name: {
              time
              ? time.timeZoneName
              : 'loading...'
            }.
          </p>
        }
      </TimeContext.Consumer>
    );
  }
}
