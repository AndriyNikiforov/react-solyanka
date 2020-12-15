import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Label from '../../components/Label';
import Input from '../../components/Input';

import history from '../../utils/history';
import auth from '../../actions/auth';

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(auth.registerUserAction(user)),
});

class SignUpForm extends React.Component {
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

    const { signUp } = this.props;
    const { user } = this.state;

    signUp(user);
    history.redirect('/');
  }

  render() {
    const { user } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Label
            text="Username"
            htmlFor="username"
            className="label-info"
          />
          <Input
            className="form-control"
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
            className="label-info"
          />
          <Input
            className="form-control"
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
            className="label-info"
          />
          <Input
            className="form-control"
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

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));
