import React, { Component } from 'react';
import { HashRouter as Router,Route,Link } from 'react-router-dom';
import Home from './Home';
import Main from '../router1/Main';
import about from '../router1/about';
import topics from '../router1/topic';

export default class IRouter extends Component {
  render() {
    return (
      <div>
        <Router>
            <Home>
                <Route path='/main' render={()=>
                    <Main>
                        <Route path='/main/a' component={about}></Route>
                    </Main>
                }></Route>
                <Route exact path='/about' component={about}></Route>
                <Route exact path='/topics' component={topics}></Route>
            </Home>
        </Router>
      </div>
    )
  }
}
