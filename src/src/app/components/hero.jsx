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
    var offsetHeight,
        diff = window.innerHeight - (this.refs.hero.offsetHeight+65);
    if (diff < 0) {
      offsetHeight = diff;
    } else {
      offsetHeight = -65;
    }
    this.setState({
      offsetHeight: offsetHeight + "px",
      height: this.refs.hero.offsetHeight-65 + "px"
    });
  },

  componentWillUnmount() {
  },

  render() {
    console.log(Typography);

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
      // color: "rgba(172,148,86,0.6)",
      color: this.state.color,
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
      color: this.state.color
    }

    const buttonStyle = {
      color: this.state.color
    }

    const iconStyle = {
      height: '100%',
      display: 'inline-block',
      verticalAlign: 'middle',
      paddingRight: '12px',
      lineHeight: '36px',
      color: this.state.color
    }

    return (
      <div className="hero" style={heroStyle} ref="hero">
        <div style={titleStyle}>
          <h1>Justin Cano</h1>
          <p>
            software and data engineer
            <br/>
            <a href="./dl/JustinCanoCEResume.pdf">
              <RaisedButton style={buttonStyle} label="Resume" labelPosition="after">
                <ResumeIcon style={iconStyle} />
              </RaisedButton>
            </a>
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
