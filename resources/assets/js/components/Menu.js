import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native-web'
import {
    MdExpandLess,
    MdExpandMore,
    MdKeyboardArrowRight
} from 'react-icons/lib/md'

export class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    toggle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {title, Icon, color} = this.props
        return (
            <View style={{margin: 3}}>
                <TouchableOpacity style={[styles.title, {backgroundColor: color}]} onPress={() => this.toggle()}>
                    {Icon && <Icon/>}
                    <Text style={styles.textTitle}>{title}</Text>
                    {this.state.expanded ? <MdExpandLess/> : <MdExpandMore/>}
                </TouchableOpacity>
                {
                    this.state.expanded &&
                    <View style={[styles.panel, {backgroundColor: color}]}>
                        {this.props.children}
                    </View>
                }
            </View>
        )
    }
}

export class ItemLink extends React.Component {
    render() {
        const {children, Icon, navigate, color} = this.props
        return (
            <TouchableOpacity
                onPress={navigate}
                style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#000',
                    margin: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: color
                }}>
                {Icon && <Icon/>}
                <Text style={{
                    fontSize: 14,
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>{children}</Text>
                <MdKeyboardArrowRight/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#fafafa',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    textTitle: {
        fontWeight: 'bold'
    },
    iconTitle: {},
    panel: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        margin: 2,
    }
})