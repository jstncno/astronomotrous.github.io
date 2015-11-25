const React = require('react');
const mui = require('material-ui');
const Colors = mui.Styles.Colors;
const Card = mui.Card;
const CardActions = mui.CardActions;
const CardMedia = mui.CardMedia;
const CardTitle = mui.CardTitle;
const CardText = mui.CardText;
const CardHeader = mui.CardHeader;
const Dialog = mui.Dialog;
const FlatButton = mui.FlatButton;
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

    const cardActions = this.props.data.links.map(function(data, i) {
      return (
        <FlatButton
         key={i}
         linkButton={true}
         label={data.text}
         href={data.url}
         target="_blank" />
      );
    });

    const standardActions = [
      { text: 'Close' }
    ];

    const dialogStyle = {
      maxWidth: "50%"
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
            <CardHeader
              title={this.props.data.title}
              subtitle={this.props.data.date}
              avatar="http://lorempixel.com/100/100/nature/"/>
            <CardText>
              {this.props.data.text}
            </CardText>
            <CardActions>
              {cardActions}
            </CardActions>
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
