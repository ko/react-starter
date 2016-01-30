import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute, Link } from 'react-router';

import request from 'superagent';

import './style.css'

const serverUrl = 'http://localhost:3000';

class App extends React.Component {

    // Component Lifecycle

    constructor(props) {
        super(props);

        this.state = {
            headerMode: 'slideshow',
        };
    }

    render() {

        return (
            <div id='outer-container'> 

                <main id="page-wrap">
                    {this.props.children}
                </main>

            </div>
        ); 
    }
};

class MainView extends React.Component {

    render() {

        return (

            <div>
                <h1>hello world</h1>
                <p>contents here</p>
            </div>
        );
    }
};

ReactDOM.render((
    <Router 
        history={browserHistory}>

        <Route path="/" 
            component={App}>
            <IndexRoute 
                component={MainView}/>
        </Route>
    </Router>
), document.getElementById('container'));
