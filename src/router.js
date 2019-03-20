import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './pages/Login/';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import NoMatch from './pages/nomatch/';
export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
            <Route path='/login' component={Login}/>
            <Route path='/admin' render={()=>
                <Admin>
                    <Switch>
                      <Route path='/admin/ui/buttons' component={Buttons}/>
                      <Route path='/admin/ui/modals' component={Modals}/>
                      <Route component={NoMatch}/>
                    </Switch>
                    
                </Admin>
            }/>
        </App>
      </HashRouter>
    )
  }
}