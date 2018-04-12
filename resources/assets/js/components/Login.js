import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from 'react-native-web'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }


    loginClick(e) {
        e.preventDefault();
        if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            alert('email is not valid !');
            return
        }
        if (this.state.password.length < 5) {
            alert('password less than 6 !');
            return
        }
        this.props.login({
            email: this.state.email,
            password: this.state.password,
        })
    };

    onChange(e) {
        switch (e.target.name) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
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
                    name={'password'}
                    onChange={(e) => {
                        this.onChange(e)
                    }}
                    value={this.state.password}
                    placeholder={'Password'}
                    secureTextEntry={true}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(e) => {
                        this.loginClick(e)
                    }}
                >
                    <Text style={{color: 'white'}}>Login</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Text>Or go to </Text>
                    <TouchableOpacity onPress={this.props.toSignup}>
                        <Text style={{color: 'green'}}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
            ;
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