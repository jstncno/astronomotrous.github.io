/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let Card = mui.Card;
let CardText = mui.CardText;
let MenuItem = mui.MenuItem;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Header = require('./header.jsx');
let Grid = require('./grid.jsx');
let Section = require('./section.jsx');

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let menuItems = [
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

    return (
      <div>
        <Header menuItems={menuItems} />

        <div className="container">
          <div id="work-experience">
            <h1>Professional Experience</h1>
            <Section data={this.props.work}/>
          </div>

          <div id="projects">
            <h1>Personal and Academic Projects</h1>
            <Grid data={this.props.projects}/>
          </div>
        </div>

      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

});

module.exports = Main;
