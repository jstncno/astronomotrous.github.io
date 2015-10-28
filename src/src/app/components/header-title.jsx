const React = require('react');
const mui = require('material-ui');
const Typography = require('material-ui/lib/styles/typography');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Colors = mui.Styles.Colors;

const HeaderTitle = React.createClass({

  getInitialState() {
    return {
      height: "350px"
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentWillMount() {
  },

  render() {

    const imgContainerstyle = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // margin: 0,
      "margin-left": "auto",
      "margin-right": "auto",
      paddingTop: 0,
      constterSpacing: 0,
      fontSize: 24,
      fontWeight: Typography.fontWeightNormal,
      color: "rgba(255, 255, 255, 0.87)",
      // lineHeight: this.props.height ? this.props.height : this.state.height,
      boxFlex: 1,
      flex: '1',
      height: this.props.height,
      display: "table-cell",
      "vertical-align": "middle"
    }

    const imgStyle = {
      height: "75%",
      width: "80%"
    }

    return (
      <div className="header-title">
        <div style={imgContainerstyle}>
          Justin Cano
        </div>
      </div>
    );
  }

});

module.exports = HeaderTitle;
