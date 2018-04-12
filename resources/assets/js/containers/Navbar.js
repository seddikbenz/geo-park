import React from "react";
import {connect} from 'react-redux'
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native-web'
import {withRouter} from 'react-router-dom'
import MdMenu from 'react-icons/lib/md/menu'


const Navbar = ({user, login, logout, toggleSidebar, toggleNavbar, navbar, history}) => (
  <View style={styles.container}>
    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginLeft: 5}} onPress={toggleSidebar}>
      <MdMenu size={24}/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push('/')}
      style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>geo-park: { user.name } </Text>
    </TouchableOpacity>
    <View style={{flexDirection: 'row'}}>
      <Button style={styles.logout} title={'logout'} onPress={logout}></Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderTopColor: '#000',
    borderTopWidth: 1,
    borderRightColor: '#000',
    borderRightWidth: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 1
  },
  logout: {
    minWidth: 100,
    margin: 10
  }
})

const mapState = state => ({
  login: state.app.login,
  user: state.auth.user,
  navbar: state.app.navbar
});
const mapDispatcher = dispatch => ({
  logout: dispatch.auth.logout,
  toggleSidebar: dispatch.app.toggleSidebar,
  toggleNavbar: dispatch.app.toggleNavbar

});

export default withRouter(connect(mapState, mapDispatcher)(Navbar))
