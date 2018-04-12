import React from 'react'
import {connect} from 'react-redux'
import {
    Text,
    Button,
    View,
    ActivityIndicator
} from 'react-native-web'

import Page from '../components/Page'

class Cars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            visible: false
        }
    }

    componentDidMount() {
        this.setTimeout = setTimeout(() => this.setState({loading: false}), 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.setTimeout)
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={'large'}/>
                </View>
            )
        }
        return (
            <Page>
                <Text>Cars View</Text>
            </Page>
        )
    }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Cars)