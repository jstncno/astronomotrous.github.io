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

let GridItem = React.createClass({

  getInitialState() {
    return {
      hover: false
    };
  },

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

  onMouseEnterHandler(i) {
    this.setState({
      hover: true
    });
  },

  onMouseLeaveHandler(i) {
    this.setState({
      hover: false
    });
  },

  handleClick(i) {
    this.refs['dialog'+i].show();
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
      { text: 'Close' }
    ];

    let boundClick = this.handleClick.bind(this, this.props.index);
    let boundEnterHover = this.onMouseEnterHandler.bind(this, this.props.index);
    let boundLeaveHover = this.onMouseLeaveHandler.bind(this, this.props.index);

    var overlay;
    if (this.state.hover) {
      overlay = <CardTitle title={this.props.data.title} subtitle={subtitles[this.props.data.type] + " | " + this.props.data.date}/>;
    } else {
      overlay = null;
    }

    return (

      <div>
        <Dialog
          actions={standardActions}
          ref={"dialog" + this.props.index}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
          <Card>
            <CardHeader
              title={this.props.data.title}
              subtitle={subtitles[this.props.data.type]}
              avatar={icons[this.props.data.type]} />
            <CardMedia>
              <img src={this.props.data.imgURL || "http://lorempixel.com/600/337/nature/"} />
            </CardMedia>
            <CardText>
              {this.props.data.text}
            </CardText>
          </Card>
        </Dialog>
        <div onClick={boundClick}>
          <Card className="grid-item">
            <CardMedia overlay={overlay} onMouseEnter={boundEnterHover} onMouseLeave={boundLeaveHover}>
              <img src={this.props.data.imgURL || "http://lorempixel.com/600/337/nature/"} />
            </CardMedia>
          </Card>
        </div>
      </div>
    );
  }

});

module.exports = GridItem;
