import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './admin';
import 'antd/dist/antd.css';

ReactDOM.render(<Admin />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept('./admin.js',()=>{
        const NextApp = require('./admin.js').default;
        ReactDOM.render(
            <NextApp />, 
            document.getElementById('root')
        )
    })
}
