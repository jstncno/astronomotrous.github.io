const React = require('react');
const mui = require('material-ui');
const Colors = mui.Styles.Colors;
const Card = mui.Card;
const CardMedia = mui.CardMedia;
const CardTitle = mui.CardTitle;
const CardText = mui.CardText;
const CardHeader = mui.CardHeader;
const Dialog = mui.Dialog;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

const GridItem = React.createClass({

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  handleClick(i) {
    this.refs['dialog'+i].show();
  },

  render() {

    const boundClick = this.handleClick.bind(this, this.props.index);

    const standardActions = [
      { text: 'Close' }
    ];

    const dialogStyle = {
      background: "#fff"
    }

    const style = {
      backgroundColor: Colors.grey50
    };

    return (
      <div className="grid-item">
        <Dialog
          actions={standardActions}
          ref={"dialog" + this.props.index}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
          <Card>
            <CardMedia>
              <img src={this.props.data.imgUrl || "http://lorempixel.com/600/337/nature/"} />
            </CardMedia>
            <CardText>
              {this.props.data.text}
            </CardText>
          </Card>
        </Dialog>
        <div onClick={boundClick}>
          <Card style={style}>
            <CardMedia>
              <img src={this.props.data.imgUrl || "http://lorempixel.com/450/450/nature/"} />
            </CardMedia>
            <CardTitle title={this.props.data.title} />
          </Card>
        </div>
      </div>
    );
  }

});

module.exports = GridItem;
