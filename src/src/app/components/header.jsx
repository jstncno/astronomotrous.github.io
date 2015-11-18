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

    console.log(this.state.height);

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

    const appBarStyle = {
      // height : this.state.height,
      backgroundColor: "black"
    }

    return (
      <div className="header" style={headerStyle}>
        <LeftNav ref="leftNav" docked={false} menuItems={this.props.menuItems} />
        <AppBar
          id="appbar"
          style={appBarStyle}
          zDepth={0}
          onLeftIconButtonTouchTap={this.toggleMenu} />
        <Hero ref="hero"/>
      </div>
    );
  }

});

module.exports = Header;
