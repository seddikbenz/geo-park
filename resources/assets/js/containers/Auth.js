import React from "react";
import {dispatch} from '@rematch/core'

import Login from "../components/Login";
import Signup from "../components/Signup";
class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            window: "login"
        }
    }
  toggleWindow () {
    if (this.state.window === "login") {
      this.setState({ window: "register" });
    } else {
      this.setState({ window: "login" });
    }
  }

  signup ({email, password, name}) {
    dispatch.auth.register({
      email,
      password,
      name
    })
  }

  login ({email, password}) {
    dispatch.auth.login({
      email,
      password
    })
  }


  render() {
    if (this.state.window === "login") {
      return (
        <Login login={this.login} toSignup={this.toggleWindow} />
      );
    } else {
      return (
        <Signup signup={this.signup} toLogin={this.toggleWindow}/>
      );
    }
  }
}

export default Auth;
