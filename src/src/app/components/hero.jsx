const React = require('react');
const mui = require('material-ui');
const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Colors = mui.Styles.Colors;

const Hero = React.createClass({

  getInitialState() {
    return {
      offsetHeight: 0,
      height: 0
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentDidMount() {
    var offsetHeight,
        diff = window.innerHeight - (this.refs.hero.offsetHeight+100);
    if (diff < 0) {
      offsetHeight = diff;
    } else {
      offsetHeight = -65;
    }
    this.setState({
      offsetHeight: offsetHeight + "px",
      height: this.refs.hero.offsetHeight-100 + "px"
    });
  },

  componentWillUnmount() {
  },

  render() {

    const heroStyle = {
      backgroundColor: "black",
      paddingBottom: 0
    }

    const videoBackgroundStyle = {
      backgroundSize: "cover"
    }

    const fullWidthStyle = {
      marginTop: this.state.offsetHeight,
      width: "100%"
    }

    const titleStyle = {
      position: "absolute",
      display: "table-cell",
      zIndex: 10,
      // color: "rgba(172,148,86,0.6)",
      color: Colors.grey400,
      fontSize: 24,
      display: "table-cell",
      verticalAlign: "middle",
      height: this.state.height,
      textAlign: "center",
      transform: "translate(0, 25%)",
      left: 0,
      right: 0
    }

    const textColor = {
      color: Colors.grey300
    }

    return (
      <div className="hero" style={heroStyle} ref="hero">
        <div style={titleStyle}>
          <h1>Justin Cano</h1>
          <p>
            software and data engineer
          </p>
        </div>
        <video style={fullWidthStyle} ref="videoPlayer" id="video-player" autoPlay loop>
          <source src="assets/skyline.mp4" type="video/mp4" />
        </video>
      </div>
    );
  },

});

module.exports = Hero;
