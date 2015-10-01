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
let Paper = mui.Paper;
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
    console.log('paper'+i);
    console.log('hover: '+this.state.hover);
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
    let boundHover = this.onMouseEnterHandler.bind(this, this.props.index);

    let normal = {
      marginTop: '10px'
    };

    let hover = {
      marginTop: '50px'
    };

    var inner = normal;
    if(this.state.hover) {
      inner = hover;
    };

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
          <Paper onMouseEnter={boundHover} ref={"paper"+this.props.index} zDepth={5} style={inner}>
            <Card className="grid-item">
              <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={subtitles[this.props.data.type] + " | " + this.props.data.date}/>}>
                <img src={this.props.data.imgURL || "http://lorempixel.com/600/337/nature/"} />
              </CardMedia>
            </Card>
          </Paper>
        </div>
      </div>
    );
  }

});

module.exports = GridItem;
