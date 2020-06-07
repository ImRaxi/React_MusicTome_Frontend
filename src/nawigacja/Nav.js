import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserStore from '../logowanie/stores/UserStore';

class Nav extends Component {

    async doLogout() {
        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
    
            let result = await res.json();
            
            if(result && result.success) {
              UserStore.isLoggedIn = false;
              UserStore.username ='';
            }
        }
    
        catch(e) {
          console.log(e);
        }
    }

    render() {
        console.log('navi');
        if(this.props.loginStatus) {
            return (
                <div>
                    <ul>
                        <Link to ="/"><li>Nowości</li></Link>
                        <Link to ="/premiery"><li>Premiery</li></Link>
                        <Link to ="/koncerty"><li>Koncerty</li></Link>
                        <Link to ="/artysci"><li>Artyści</li></Link>
                        <Link to ="/profil"><li>Profil</li></Link>
                        <Link to ="/logout" onClick = {() => this.doLogout()}><li>Wyloguj</li></Link>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        <Link to ="/"><li>Nowości</li></Link>
                        <Link to ="/premiery"><li>Premiery</li></Link>
                        <Link to ="/koncerty"><li>Koncerty</li></Link>
                        <Link to ="/artysci"><li>Artyści</li></Link>
                        <Link to ="/logowanie"><li>Logowanie</li></Link>
                        <Link to ="/rejestracja"><li>Rejestracja</li></Link>
                    </ul>
                </div>
            )
        }
    }
}

export default Nav;