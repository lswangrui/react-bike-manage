import React, { Component } from 'react';
import { HashRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import Info from './info';
import topics from '../router1/topic';
import about from '../router1/about';
import NoMatch from './NoMatch'

export default class IRouter extends Component {
  render() {
    return (
      <div>
        <Router>
            <Home>
              <Switch>
                <Route path='/main' render={()=>
                    <Main>
                        <Route path='/main/:mainId' component={Info}></Route>
                    </Main>
                }></Route>
                <Route exact path='/about' component={about}></Route>
                <Route exact path='/topics' component={topics}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </Home>
            
        </Router>
      </div>
    )
  }
}
