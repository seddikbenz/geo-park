import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from 'react-native-web'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password1: '',
            password2: ''
        }
    }


    handleSignup(e) {
        e.preventDefault();
        if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            alert('email is not valid !');
            return
        }
        if (this.state.password1 !== this.state.password2) {
            alert("passwords is not the same !");
            return
        }
        if (this.state.name.length < 5) {
            alert('username less than 4!')
            return
        }
        if (this.state.password1.length < 5) {
            alert('password less than 6 !');
            return
        }
        this.props.signup({
            email: this.state.email,
            password: this.state.password1,
            name: this.state.name
        })

    };

    onChange(e) {
        switch (e.target.name) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password1':
                this.setState({password1: e.target.value});
                break;
            case 'password2':
                this.setState({password2: e.target.value});
                break;
            case 'name':
                this.setState({name: e.target.value});
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    style={styles.textInput}
                    name={'email'}
                    onChange={(e) => {
                        this.onChange(e)
                    }}
                    value={this.state.email}
                    placeholder={'email'}
                    type={'email'}/>
                <TextInput
                    style={styles.textInput}
                    name={'name'}
                    onChange={(e) => {
                        this.onChange(e)
                    }}
                    value={this.state.name}
                    placeholder={'name'}
                    type={'text'}/>
                <TextInput
                    style={styles.textInput}
                    name={'password1'}
                    onChange={(e) => {
                        this.onChange(e)
                    }}
                    value={this.state.password1}
                    placeholder={'Password'}
                    secureTextEntry={true}/>
                <TextInput
                    style={styles.textInput}
                    name={'password2'}
                    onChange={(e) => {
                        this.onChange(e)
                    }}
                    value={this.state.password2}
                    placeholder={'repeat Password'}
                    secureTextEntry={true}/>
                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={{color: 'white'}}>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text>You have an account? </Text>
                    <TouchableOpacity onPress={this.props.toLogin}>
                        <Text style={{color: 'green'}}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 26,
        width: 250,
        margin: 5,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4
    },
    button: {
        width: 250,
        padding: 5,
        margin: 5,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    }
})