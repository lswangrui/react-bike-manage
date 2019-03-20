import React from 'react';
import ReactDOM from 'react-dom';
// import Admin from './admin';
// import Admin from './pages/router_demo/router3/router';
import 'antd/dist/antd.css';
import Router from './router'

ReactDOM.render(<Router />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept('./router.js',()=>{
        const NextApp = require('./router.js').default;
        ReactDOM.render(
            <NextApp />, 
            document.getElementById('root')
        )
    })
}
