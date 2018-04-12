import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native-web';

// components
import Auth from './Auth'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const {loading, login} = this.props;
    if (loading) {
      return (
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
    if (!login) {
      return (
        <Auth/>
      )
    }

    return (
      <View style={styles.app}>
        <Navbar />
        <View style={styles.container}>
          <Sidebar />
          <Main/>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    height: '100%',
  }
});

const mapState = state => ({
  loading: state.app.loading,
  login: state.app.login,
  sidebar: state.app.sidebar,
});

const mapDispatch = dispatch => ({
  fetchUser: dispatch.app.fetchUser,
});

export default withRouter(connect(mapState, mapDispatch)(App))