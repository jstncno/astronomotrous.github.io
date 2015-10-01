/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Avatar = mui.Avatar;
let Dialog = mui.Dialog;
let Card = mui.Card;
let CardMedia = mui.CardMedia;
let CardTitle = mui.CardTitle;
let CardText = mui.CardText;
let CardHeader = mui.CardHeader;
let SchoolIcon = require('material-ui/lib/svg-icons/social/school');
let PersonalProjectIcon = require('material-ui/lib/svg-icons/hardware/computer');
let WorkIcon = require('material-ui/lib/svg-icons/action/work');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let GridItem = require('./grid-item.jsx');

let Grid = React.createClass({

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

    return (
      <div className="grid">
        <h1 marginBottom="50px">Portfolio</h1>
        {this.props.data.map(function(data, i) {

          return (
            <GridItem data={data} index={i} key={i}/>
          );
        }, this)}
      </div>
    );
  }

});

module.exports = Grid;
