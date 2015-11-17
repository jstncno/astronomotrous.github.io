/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const mui = require('material-ui');
const RaisedButton = require('material-ui/lib/raised-button');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const DarkRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const MenuItem = mui.MenuItem;

const Header = require('./header.jsx');

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;

    newMuiTheme.appBar.color = Colors.grey900;
    newMuiTheme.appBar.textColor = Colors.grey300;

    this.setState({muiTheme: newMuiTheme});
  },

  render() {

    const containerStyle = {
      // textAlign: 'center',
    };

    const menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
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

    const tempStyle = {
      width: "350px",
      paddingTop: 1.5*window.innerHeight
    }

    return (
      <div style={containerStyle}>
        <Header menuItems={menuItems} />
        Hello, world!
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        Hello again!
      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

});

module.exports = Main;
