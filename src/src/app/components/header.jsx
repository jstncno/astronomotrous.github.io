const React = require('react');
const mui = require('material-ui');
const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Colors = mui.Styles.Colors;

const Hero = require('./hero.jsx');
const HeaderTitle = require('./header-title.jsx');

const Header = React.createClass({

  getInitialState() {
    return null;
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

    if(scrollTop > 100) {
      this.setState({
        height: "64px"
      });
    } else {
      this.setState({
        height: 0.9*window.innerHeight + "px"
      });
    }
  },

  toggleMenu() {
    this.refs.leftNav.toggle();
  },

  render() {

    const headerStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: 0
    }

    const navStyle = {
      zIndex: 20
    }

    const appBarStyle = {
      // height : this.state.height,
      position: "fixed",
      backgroundColor: "black",
    }

    return (
      <div className="header" id="header" style={headerStyle}>
        <LeftNav
         ref="leftNav"
         docked={false}
         style={navStyle}
         menuItems={this.props.menuItems} />
        <AppBar
          id="app-bar"
          style={appBarStyle}
          zDepth={3}
          onLeftIconButtonTouchTap={this.toggleMenu}
          ref="appBar" />
        <Hero ref="hero"/>
      </div>
    );
  }

});

module.exports = Header;
