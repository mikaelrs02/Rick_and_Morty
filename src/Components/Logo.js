import React, { Component } from "react";
class Logo extends Component {
  render() {
    return (
      <>
        <section>
          <img src={this.props.image} alt="Logo" />
        </section>
      </>
    );
  }
}
export default Logo;