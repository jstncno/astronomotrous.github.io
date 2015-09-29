/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Avatar = mui.Avatar;
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

    let subtitles = {
      'school': 'School Project',
      'work': 'Work Experience',
      'personal': 'Personal Project',
      'hackathon': 'Hackathon'
    }

    let icons = {
      'school': <SchoolIcon />,
      'work': <WorkIcon />,
      'personal': <PersonalProjectIcon />
    }

    var gridItems = this.props.data.map(function(data) {
      return (
        <Card className="col-md-3 grid-item">
          <CardMedia overlay={<CardTitle title={data.title} subtitle={subtitles[data.type]}/>}>
            <img src={data.imgURL || "http://lorempixel.com/600/337/nature/"} />
          </CardMedia>
          <CardText>
            {data.text}
          </CardText>
        </Card>
      );
    });

    return (
      <div className="grid">
        {gridItems}
      </div>
    );
  },

});

module.exports = Grid;
