/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ReactDOM = require('react-dom');
const mui = require('material-ui');
const RaisedButton = require('material-ui/lib/raised-button');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const DarkRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const MenuItem = mui.MenuItem;

const Header = require('./header.jsx');
const Hero = require('./hero.jsx');
const Greeting = require('./greeting.jsx');
const ParallaxBox = require('./parallax-box.jsx');
const Experience = require('./experience.jsx');
const Grid = require('./grid.jsx');
const Footer = require('./footer.jsx');

const data = require('./data/data.js');

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
  },

  render() {

    const containerStyle = {
      // textAlign: 'center',
      paddingTop: this.state.heightPadding
    };

    const menuItems = [
      { type: MenuItem.Types.SUBHEADER, text: 'Nav' },
      {
         type: MenuItem.Types.LINK,
         payload: '#experience-section',
         text: 'Experience'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '#portfolio-section',
         text: 'Portfolio'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '#contact-section',
         text: 'Contact'
      },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/earthican',
         text: 'GitHub'
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'http://linkedin.com/in/justincano',
         text: 'LinkedIn',
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'mailto:jcano001@ucr.edu',
         text: 'Email',
      }
    ];

    return (
      <div style={containerStyle} id="main-container">
        <Header menuItems={menuItems} ref="header"/>
        <Greeting />
        <ParallaxBox elementId="experience-section" img="assets/aurora.jpg" title={"EXPERIENCE"} />
        <Experience data={data.experience} />
        <ParallaxBox elementId="portfolio-section" img="assets/stars.jpg" title={"PORTFOLIO"} />
        <Grid data={data.portfolio} elementId="portfolio-grid" />
        <Footer elementId="contact-section" />
      </div>
    );
  }

});

module.exports = Main;
