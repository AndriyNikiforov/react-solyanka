import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import auth from '../../actions/auth';

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(auth.logoutUserAction(data)),
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    const token = Cookies.get('token');

    this.setState({ token: token });
  }

  logoutUser() {
    const { history, logout, data } = this.props;

    Cookies.remove('token');
    history.push('/login');
    logout(data);
  }

  render() {
    const { token } = this.state;

    return (
      <header className="header">
        <nav>
          <ul className="list">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            {
              (token)
                ? (
                  <>
                    <li className="link">
                      <Link to="/create">Todo</Link>
                    </li>
                    <li className="link">
                      <a href="#" onClick={() => this.logoutUser()}>Logout</a>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className="link">
                      <Link to="/login">SignIn</Link>
                    </li>
                    <li className="link">
                      <Link to="/signup">SignUp</Link>
                    </li>
                  </>
                )
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
