import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './pages/Login/';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Message from './pages/ui/messages';
import Notice from './pages/ui/notice';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormLogin from './pages/form/login.js';
import Tabs from './pages/ui/tabs';
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
                      <Route path='/admin/ui/loadings' component={Loadings}/>
                      <Route path='/admin/ui/notification' component={Notice}/>
                      <Route path='/admin/ui/messages' component={Message}/>
                      <Route path='/admin/ui/tabs' component={Tabs}/>
                      <Route path='/admin/ui/gallery' component={Gallery}/>
                      <Route path='/admin/ui/carousel' component={Carousel}/>
                      <Route path='/admin/form/login' component={FormLogin}/>
                      <Route component={NoMatch}/>
                    </Switch>
                    
                </Admin>
            }/>
        </App>
      </HashRouter>
    )
  }
}
