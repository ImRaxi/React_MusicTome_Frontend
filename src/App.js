import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Artysci from './artysci/Artysci';
import Koncerty from './koncerty/Koncerty';
import Logowanie from './logowanie/Logowanie';
import Nowosci from './nowosci/Nowosci';
import Rejestracja from './rejestracja/Rejestracja';
import Nav from './nawigacja/Nav';
import Premiery from './premiery/Premiery';
import Footer from './footer/Footer';
import NowyPost from './nowyPost/NowyPost';
import Profil from './profil/Profil';

import UserStore from './logowanie/stores/UserStore';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// class component
class App extends Component {

  async componentDidMount() {
      try {
          let res = await fetch('/isLoggedIn', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          });

          let result = await res.json();
          
          if(result && result.success) {
            UserStore.loading = false;
            UserStore.isLoggedIn = true;
            UserStore.username = result.username;
          } else {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
          }
      }

      catch(e) {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
  }

  render() {

    console.log('dasdasdas'+UserStore.isLoggedIn)
    return (
      <Router>
        <div className="App">
          <Nav 
            loginStatus = {UserStore.isLoggedIn}
          />
            <Switch>
              <Route exact path = "/" component={Nowosci}/>
              <Route path="/premiery" component={Premiery} />
              <Route path="/koncerty" component={Koncerty} />
              <Route path="/artysci" component={Artysci} />
              <Route path="/logowanie" component={Logowanie} />
              <Route path="/rejestracja" component={Rejestracja} />
              <Route path="/nowypost" component={NowyPost} />
              <Route path="/profil" component={Profil} />
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default observer (App);