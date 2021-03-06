import React, { Component } from 'react'
import UserStore from '../logowanie/stores/UserStore';
import { Redirect } from 'react-router-dom';
import './Rejestracja.scss';

class Rejestracja extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
        }
    }

    setInputValue(prop, val) {
        val = val.trim();
        if(prop !== 'email' && val.length > 12) {
            return;
        }
        this.setState({
            [prop]: val
        })
    }

    async doRegister() {
        if(!this.state.username) {
            return;
        }

        if(!this.state.email) {
            return;
        }

        if(!this.state.password) {
            return;
        }

        if(!this.state.password_confirmation) {
            return;
        }

        if(this.state.password !== this.state.password_confirmation) {
            return;
        }

         try {
            let res = await fetch('/register', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    username: this.state.username,
                    password_confirmation: this.state.password_confirmation
                })
            });

            let result = await res.json();
            if(result && result.success) {
                this.resetForm();
                return <Redirect to='/logowanie' />
            } else {
                console.log(result.msg);
            }

            
        } catch (e) {
            console.log('registr error');
        }
    }

    resetForm() {
        this.setState({
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
        })
    }

    render() {
        if(!UserStore.isLoggedIn) {
            return (
                <div>
                    <div className="xxxx">
                    <label>Email</label><br />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="email"
                        value = { this.state.email ? this.state.email : '' }
                        onChange = {(e) => this.setInputValue('email', e.target.value)}
                    />
                    </div>

                    <div className="xxxx">
                    <label>Nazwa użytkownika</label><br />
                    <input 
                        type="username" 
                        name="username" 
                        placeholder="Username" 
                        className="login"
                        value = { this.state.username ? this.state.username : '' }
                        onChange = {(e) => this.setInputValue('username', e.target.value)}
                    />
                    </div>

                    <div className="xxxx">
                    <label>Hasło</label><br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="password"
                        value = { this.state.password ? this.state.password : '' }
                        onChange = {(e) => this.setInputValue('password', e.target.value)}
                    />
                    </div>

                    <div className="xxxx">
                    <label>Powtórz hasło</label><br />
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        placeholder="Password confirmation" 
                        className="password-again"
                        value = { this.state.password_confirmation ? this.state.password_confirmation : '' }
                        onChange = {(e) => this.setInputValue('password_confirmation', e.target.value)}
                    />
                    </div>

                    <button 
                        type="submit"
                        value = "register"
                        onClick = {() => this.doRegister()}
                        className="submit"
                    >Zarejestruj</button>
                </div>
            )
        } else {
            return (<p>Already logged in</p>)
        }
    }
}

export default Rejestracja;
