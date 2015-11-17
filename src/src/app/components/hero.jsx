const React = require('react');
const mui = require('material-ui');
const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Colors = mui.Styles.Colors;

const Hero = React.createClass({

  getInitialState() {
    return {
      offsetHeight: 0
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentDidMount() {
    var offsetHeight,
        diff = window.innerHeight - (this.refs.hero.offsetHeight+65);
    if (diff < 0) {
      offsetHeight = diff;
    } else {
      offsetHeight = 0;
    }
    this.setState({
      offsetHeight: offsetHeight + "px"
    });
  },

  componentWillUnmount() {
  },

  render() {

    const heroStyle = {
      height : this.state.height,
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

    const videoContainerStyle = {

    }

    const textColor = {
      color: Colors.grey300
    }

    return (
      <div className="hero" style={heroStyle} ref="hero">
        <div style={videoContainerStyle}>
          <video style={fullWidthStyle} ref="videoPlayer" id="video-player" autoPlay loop>
            <source src="assets/skyline.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  },

});

module.exports = Hero;
