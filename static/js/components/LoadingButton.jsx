import React from 'react';
import { Button } from 'react-bootstrap';

export default class LoadingButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props)

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.props.onClick()
    this.setState({ isLoading: true });

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
    );
  }
}
