import React, { Component } from 'react'
import LoginForm from './LoginForm';
import UserStore from './stores/UserStore';
import { observer } from 'mobx-react';
import Rejestracja from '../rejestracja/Rejestracja';
import './Logowanie.scss'; 

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
                <div className="container l-container">
                    <div className="row">
                        <div className="col-sm-6 l-logowanie">
                            <div className="title">Logowanie</div>
                            <LoginForm />
                        </div>
                        <div className="col-sm-6 l-rejestracja">
                            <div className="title">Rejestracja</div>
                            <Rejestracja />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer (Logowanie);
