var React = require('react')

var Bootstrap = require('react-bootstrap')
var Nav = Bootstrap.Nav
var Navbar = Bootstrap.Navbar
var NavItem = Bootstrap.NavItem

var Router = require('react-router')
var Link = Router.Link

require('stylesheets/components/app.less')

var App = React.createClass({

    mixins: [Router.State],

    getInitialState: function() {
        return {}
    },

    render : function(){
        return (
            <div>
                {this.topNavbar()}
                <div classNam="app-container">
                    <Router.RouteHandler />
                </div>
            </div>
        );
    },

    topNavbar: function() {

        var noBottomMargin = {
            marginBottom: '0px'
        }

        return (
            <Navbar className="app-header" style={noBottomMargin} >
                <header className=" navbar-static-top ">
                    <div className="app-header-container container">
                        <div className="navbar-header">
                            <Link to="home" className="app-header-brand navbar-brand">app title</Link>
                            <button className="app-header-toggle navbar-toggle" type="button" onClick={this.onNavBtnOnClick}>
                                <span className="sr-only">Toggle Nav</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        {this.topNavLinks()}
                    </div>
                </header>
            </Navbar>
        )
    },

    topNavLinks: function() {
        return (
            <Nav navbar={true} collapsable={true} pullRight={this.state.isPullRight}
                className="fud-navbar-collapse" role="navigation" id="top" bsClass="nav"
                expanded={this.state.isExpanded}>

                <li><Link to="foo">Foo 2</Link></li>
                <li><Link to="foo">Foo 1</Link></li>
            </Nav>
        )
    },

    onNavBtnOnClick: function() {
        var currentIsExpanded = this.state.isExpanded;
        this.setState({
            isExpanded: !currentIsExpanded,
        });
    }
})

module.exports = App
