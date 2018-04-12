import React from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native-web'

const Page = ({children}) => (
  <ScrollView style={[styles.container]}>
    {children}
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRightColor: '#000',
    borderRightWidth: 1
  }
})

export default Page