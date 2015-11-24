/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ReactDOM = require('react-dom');
const mui = require('material-ui');
const RaisedButton = require('material-ui/lib/raised-button');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const DarkRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const MenuItem = mui.MenuItem;

const $ = require('jquery');

const Header = require('./header.jsx');
const Hero = require('./hero.jsx');
const Greeting = require('./greeting.jsx');
const ParallaxBox = require('./parallax-box.jsx');
const Experience = require('./experience.jsx');
const Footer = require('./footer.jsx');

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkRawTheme),
      heightPadding: "65px"
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentDidMount() {
    var headerHeight = ReactDOM.findDOMNode(this.refs.header).offsetHeight;
    var appBarHeight = ReactDOM.findDOMNode(this.refs.header.refs.appBar).offsetHeight;

    this.setState({
      headerHeight: headerHeight,
      heightPadding: headerHeight + appBarHeight + "px"
    });
  },

  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;

    newMuiTheme.appBar.color = Colors.grey900;
    newMuiTheme.appBar.textColor = Colors.grey400;

    this.setState({muiTheme: newMuiTheme});

    window.removeEventListener("video-rendered");
  },

  render() {

    const containerStyle = {
      // textAlign: 'center',
      paddingTop: this.state.heightPadding
    };

    const menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/earthican',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];

    return (
      <div style={containerStyle} id="main-container">
        <Header menuItems={menuItems} ref="header"/>
        <Greeting />
        <ParallaxBox img="assets/aurora.jpg" title={"EXPERIENCE"} />
        <Experience />
        <ParallaxBox img="assets/stars.jpg" title={"PORTFOLIO"} />
        <Experience />
        <ParallaxBox img="assets/abstract.png" title={"CONTACT"} />
        <Experience />
        <Footer />
      </div>
    );
  }

});

module.exports = Main;
