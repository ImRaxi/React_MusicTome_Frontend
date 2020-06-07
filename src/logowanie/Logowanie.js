import React, { Component } from 'react'
import LoginForm from './LoginForm';
import UserStore from './stores/UserStore';
import { observer } from 'mobx-react';

class Logowanie extends Component {

    render() {
        console.log('Stuku puku')
        if(UserStore.loading) {
            return (
                <div className = "loadingLogin">
                    Trwa ładowanie...
                </div>
            );
        } else if(UserStore.isLoggedIn) {
            console.log('AHSHSHSHS')
            console.log('dasdasd' + UserStore.username)
            return (
                <div className = "loadingLogin">
                    Jesteś już zalogowany {UserStore.username}!
                </div>
            );
        }

        return (
            <div>
                <h1>Witam</h1>
                <LoginForm />
            </div>
        )
    }
}

export default observer (Logowanie);
