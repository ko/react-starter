/** @jsx React.DOM */

var React = require('react')

var Router = require('react-router')
var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute

var App = require('./components/app.jsx')

var routes = (
    <Route name="app" path="/" handler={App}>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
