import React from "react";

export default class Boundary extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <span>{this.state.error.toString()}</span>
          <div>{this.state.info.componentStack}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
