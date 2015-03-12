/** @jsx React.DOM */

var React = require('react')

var Router = require('react-router')
var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute

var App = require('./components/app.jsx')
var Home = require('./components/home.jsx')
var Foo = require('./components/foo.jsx')

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="home" handler={Home} />
        <Route name="foo" handler={Foo} />

        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
