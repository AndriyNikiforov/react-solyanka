import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../components/Label';
import Input from '../../components/Input';

class SignUpForm extends React {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    event.preventDefault();

    const { name, value } = event.target;

    this.setState((prev) => ({
      user: {
        ...prev,
        [name]: value,
      },
    }));
  }

  onSubmit(event) {
    event.preventDefault();

    const { user } = this.state;
  }

  render() {
    const { user } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Label
            text="Username"
            htmlFor="username"
            className=""
          />
          <Input
            className=""
            name="username"
            type="text"
            value={user.username}
            placeholder="Username"
            onChange={this.onChange}
          />
        </div>
        <div>
          <Label
            text="Email"
            htmlFor="email"
            className=""
          />
          <Input
            className=""
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={this.onChange}
          />
        </div>
        <div>
          <Label
            text="Password"
            htmlFor="password"
            className=""
          />
          <Input
            className=""
            name="password"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={this.onChange}
          />
        </div>
        <div>
          <input type="submit" className="form-button-submit" />
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
};

export default SignUpForm;
