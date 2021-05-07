import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Label from '../../components/Label';
import Input from '../../components/Input';

import auth from '../../actions/auth';

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(auth.loginUserAction(user)),
});

class SignInForm extends React.Component {
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
    const { target } = event;

    this.setState((state) => ({
      user: {
        ...state.user,
        [target.name]: target.value,
      },
    }));
  }

  onSubmit(event) {
    event.preventDefault();

    const { signIn, history } = this.props;
    const { user } = this.state;

    signIn(user);
    history.push('/');
  }

  render() {
    const { user } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
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

export default withRouter(connect(null, mapDispatchToProps)(SignInForm));
