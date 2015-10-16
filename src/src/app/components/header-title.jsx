let React = require('react');
let mui = require('material-ui');
let Typography = require('material-ui/lib/styles/typography');
let DefaultRawTheme = require('material-ui/lib/styles/themes/light-theme');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let HeaderTitle = React.createClass({

  getInitialState() {
    return {
      height: "350px"
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
  },

  render() {

    let styles = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: Typography.fontWeightNormal,
      color: "rgba(255, 255, 255, 0.87)",
      lineHeight: this.props.height ? this.props.height : this.state.height,
      boxFlex: 1,
      flex: '1',
      height: "100%"
    }

    return (
      <div className="header-title" style={styles}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }

});

module.exports = HeaderTitle;
