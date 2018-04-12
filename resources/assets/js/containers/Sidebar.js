import React from 'react'
import {connect} from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity
} from 'react-native-web'
import * as Menu from '../components/Menu'
import {withRouter} from "react-router-dom";
// import {
//   MdDirectionsCar,
//   MdSearch,
//   MdPerson,
//   MdCompareArrows,
//   MdApps
// } from 'react-icons/md'
import MdDirectionsCar from 'react-icons/lib/md/directions-car'
import MdSearch from 'react-icons/lib/md/search'
import MdPerson from 'react-icons/lib/md/person'
import MdCompareArrows from 'react-icons/lib/md/compare-arrows'
import MdApps from 'react-icons/lib/md/apps'

const Sidebar = ({width, show, history}) => (
  <Animated.View style={{marginLeft: width}}>
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
        <TextInput autoFocus={true} style={styles.textInput} placeholder={'Search ...'}/>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <MdSearch />
        </TouchableOpacity>
      </View>

      <Menu.ItemLink color={'#E2F7F4'} Icon={MdDirectionsCar} navigate={()=>history.push('/cars')}>Cars</Menu.ItemLink>
      <Menu.ItemLink color={'#F3FFFC'} Icon={MdPerson} navigate={()=>history.push('/drivers')}>Drivers</Menu.ItemLink>
      <Menu.ItemLink Icon={MdCompareArrows} navigate={()=>history.push('/assignment')}>Assignment</Menu.ItemLink>
      <Menu.Menu color={'#C8EBD1'} Icon={MdApps} title={'Divers'} >
        <Menu.Menu color={'#E2F7F4'} Icon={MdDirectionsCar} title={'Cars'} >
          <Menu.ItemLink navigate={()=>history.push('/parks')}>Category</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Types</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Markes</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Models</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Fuels</Menu.ItemLink>
        </Menu.Menu>
        <Menu.Menu color={'#F3FFFC'} Icon={MdPerson} title={'Drivers'} >
          <Menu.ItemLink navigate={()=>history.push('/parks')}>Category</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Groupes</Menu.ItemLink>
          <Menu.ItemLink navigate={()=>history.push('/')}>Affiliation</Menu.ItemLink>
        </Menu.Menu>
        <Menu.ItemLink color={'#fafafa'} navigate={()=>history.push('/parks')}>Parks</Menu.ItemLink>
      </Menu.Menu>
    </ScrollView>
  </Animated.View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: 251,
    borderRightColor: '#000',
    borderRightWidth: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 35,
    padding: 5,
    outline: 'none',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  }
})

const mapState = state => ({
  show: state.app.sidebar,
  width: state.app.sidebarWidth
});
const mapDispatcher = dispatch => ({
  toggleSidebar: dispatch.app.toggleSidebar,
});

export default withRouter(connect(mapState, mapDispatcher)(Sidebar));
