import React from 'react'
import {connect} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native-web'
import MdNotifications from 'react-icons/lib/md/notifications'
import MdCheck from 'react-icons/lib/md/check'

const Footer = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <TouchableOpacity>
        <MdCheck />
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', marginLeft: 5}}>geo-park v1.0.0</Text>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.row}>
        <Text>105 </Text>
        <MdNotifications />
      </TouchableOpacity>
    </View>
  </View>
)
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#000',
    borderTopWidth: 1,
    backgroundColor: '#fafafa',
    borderRightColor: '#000',
    borderRightWidth: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  badge:{
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: 2,
    position: 'absolute',
    right: 15,
    top: -3,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Footer)