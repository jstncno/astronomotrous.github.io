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

  handleClick: function(i) {
    console.log(i);
    this.refs[i].show();
  },

  render() {

    let subtitles = {
      'school': 'School Project',
      'work': 'Work Experience',
      'personal': 'Personal Project',
      'hackathon': 'Hackathon'
    };

    let icons = {
      'school': <SchoolIcon />,
      'work': <WorkIcon />,
      'personal': <PersonalProjectIcon />,
      'hackathon': <PersonalProjectIcon />
    };

    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];

    return (
      <div className="grid">
       {this.props.data.map(function(data, i) {
         var boundClick = this.handleClick.bind(this, i);

          return (
            <div key={i}>
              <Dialog
                actions={standardActions}
                ref={i}
                autoDetectWindowHeight={true}
                autoScrollBodyContent={true}>
                <Card>
                  <CardHeader
                    title={data.title}
                    subtitle={subtitles[data.type]}
                    avatar={icons[data.type]} />
                  <CardMedia>
                    <img src={data.imgURL || "http://lorempixel.com/600/337/nature/"} />
                  </CardMedia>
                  <CardText>
                    {data.text}
                  </CardText>
                </Card>
              </Dialog>
              <div onClick={boundClick}>
                <Card
                  className="grid-item">
                  <CardMedia overlay={<CardTitle title={data.title} subtitle={subtitles[data.type] + " | " + data.date}/>}>
                    <img src={data.imgURL || "http://lorempixel.com/600/337/nature/"} />
                  </CardMedia>
                </Card>
              </div>
            </div>
          );
        }, this)}
      </div>
    );
  }

});

module.exports = Grid;
