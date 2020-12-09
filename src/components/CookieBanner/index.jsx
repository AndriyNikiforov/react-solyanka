import React, { Component } from 'react';

class CookieBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
    };

    this.close = this.close.bind(this);
  }

  close(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      status: !prevState,
    }));
  }

  render() {
    const { status } = this.state;

    return (!status) ? <></> : (
      <div className="cookie-banner">
        <p className="cookie-banner-text">This site using your cookie. You accept this proposition.</p>
        <button type="button" onClick={this.close}  className="cookie-banner-button">
          <span>X</span>
        </button>
      </div>
    );
  }
}

export default CookieBanner;
