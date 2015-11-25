const React = require('react');
const mui = require('material-ui');
const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const RaisedButton = mui.RaisedButton;
const FontIcon = require('material-ui/lib/font-icon');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Typography = mui.Styles.Typography;
const Colors = mui.Styles.Colors;
const ResumeIcon = require('material-ui/lib/svg-icons/action/assignment');

const extend = mui.Utils.Extend;

const Hero = React.createClass({

  getInitialState() {
    return {
      offsetHeight: 0,
      height: 0,
      color: Colors.grey400
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentDidMount() {
    // var offsetHeight,
    //     diff = window.innerHeight - (this.refs.hero.offsetHeight+100);
    // if (diff < 0) {
    //   offsetHeight = diff;
    // } else {
    //   offsetHeight = -100;
    // }
    // this.setState({
    //   offsetHeight: offsetHeight + "px",
    //   height: this.refs.hero.offsetHeight-100 + "px"
    // });
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

    const textColor = {
      color: this.state.color
    }

    const buttonStyle = {
      color: this.state.color
    }

    function heroTitle() {
      return (
        <div id="hero-title">
          <h1>Justin Cano</h1>
          <p>
            software and data engineer
            <br/>
            <RaisedButton
             linkButton={true}
             href="dl/JustinCanoCEResume.pdf"
             style={buttonStyle}
             label="Resume"
             labelPosition="after"
             target="_blank" />
          </p>
        </div>
      );
    }

    return (
      <div className="hero" style={heroStyle} ref="hero">
        {heroTitle()}
        <video style={fullWidthStyle} ref="videoPlayer" id="video-player" autoPlay loop>
          <source src="assets/skyline.mp4" type="video/mp4" />
        </video>
      </div>
    );
  },

});

module.exports = Hero;
