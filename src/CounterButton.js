import React from 'react';

export default class CounterButton extends React.Component {

  state = { count: this.props.initialValue  };

  onClick = evt => {

    this.setState( oldState => ({
      count: oldState.count + 1,
    }));
  };

  render() {

    return (
      <button onClick={ this.onClick }>
        Count: { this.state.count }.
        (up from { this.props.initialValue })
      </button>
    );
  }
}
