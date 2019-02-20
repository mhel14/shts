import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import firebaseInit from '../../config/firebase';
import btnGo from '../../assets/images/desktop/btn-go.png'
import Icon from './../social-icons/social-icon';

class Hero extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: ''
  }

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state.username, this.state.password);
    firebaseInit.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
    .then((u) => {}).catch((error) => {
      // console.log(error);
      this.setState({
        errorMsg: error
      })
    });
  }

  signUp = (e) => {
    e.preventDefault();
    firebaseInit.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
    .then().catch((err) => {
      // console.log(err);
      this.setState({
        errorMsg: err
      })
    });
  }

  logout = (e) => {
    e.preventDefault();
    firebaseInit.auth().signOut();
  }

  render () {
    const isLoggedIn = this.props.authenticated;
    return (
      <div className="hero">
        <div className="soc-icon-left">
          <Icon position="left" />
        </div>
        <div className="soc-icon-right">
          <Icon position="right" />
        </div>
        <div className="hero-wrapper container">
          <div className="login">
            {isLoggedIn ? 
              <div>
                <p>welcome {this.props.user.email}</p>
                <NavLink to="/private">Admin Panel</NavLink>
                <button onClick={this.logout}>Log out</button>
              </div>
              :
              <Fragment>
                <p>Student Login</p>
                <form onSubmit={this.submitHandler}>
                  <div>
                    <div className="wrap">
                      <p>Email:</p>
                      <input 
                        type="email" 
                        placeholder="e.g., john@shts.com" 
                        required 
                        onChange={(e) => { this.setState({username: e.target.value})}}
                      />
                    </div>
                    <div className="wrap">
                      <p>Password:</p>
                      <input 
                        type="password" 
                        placeholder="e.g., ••••••••••••••" 
                        required 
                        onChange={(e) => { this.setState({password: e.target.value})}}
                      />
                    </div>
                  </div>
                  {this.state.errorMsg && <span className="error-message">{this.state.errorMsg.message}</span>}
                  <p onClick={this.signUp} className="sign-up-btn">Sign up</p>
                  <button> Sign in <img src={btnGo} alt="go"/></button>
                </form>
              </Fragment>
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
