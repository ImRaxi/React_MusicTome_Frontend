import React, { Component } from 'react';
import UserStore from './stores/UserStore';

class Logowanie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {
        if(!this.state.username) {
            return;
        }

        if(!this.state.password) {
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: this.state.username,
                  password: this.state.password  
                })

            });

            let result = await res.json();
            if(result && result.success) {
                UserStore.isLoggedIn = true;
                console.log('gggg' + UserStore.username)
                UserStore.username = result.username;
            } else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }

        catch(e) {
            this.resetForm();
        }
    }

    render() {
        return (
            <div className = "loginForm">
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Nazwa użytkownika" 
                    value={this.state.username ? this.state.username : ''}
                    onChange = {(val) => this.setInputValue('username', val.target.value)}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Hasło"
                    value = {this.state.password ? this.state.password : ''}
                    onChange = {(val) => this.setInputValue('password', val.target.value)}
                />
                <button 
                    type ="submit" 
                    value="zaloguj"
                    disabled = {this.state.buttonDisabled} 
                    onClick = {() => this.doLogin()} 
                >Zaloguj</button>
            </div>
        )
    }
}

export default Logowanie;
