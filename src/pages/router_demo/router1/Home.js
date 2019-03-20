import React,{Component} from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import Main from './Main';
import about from './about';
import topics from './topic';

export default class Home extends Component{

    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Main}></Route>
                        <Route path='/about' component={about}></Route>
                        <Route path='/topics' component={topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
// <Route exact path='/' component={Main}></Route>
// <Route path='/about' component={about}></Route>
// <Route path='/topics' component={topics}></Route>