const React = require('react');
const mui = require('material-ui');
const Colors = mui.Styles.Colors;

const Footer = React.createClass({

  getInitialState () {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  render() {

    const style = {
      position: "absolute",
      width: "100%",
      left: 0,
      right: 0,
      backgroundColor: Colors.blueGrey800,
      paddingBottom: "25px"
    }

    const iconStyle = {
      display: "inline-block",
      width: "25%"
    }

    const linkStyle = {
      textDecoration: "none",
      color: "inherit"
    }

    var contactButtons = [{
      "name" : "email",
      "fontAwesomeName" : "fa-envelope",
      "link" : "mailto:jcano001@ucr.edu"
    },
    {
      "name" : "linkedin",
      "fontAwesomeName" : "fa-linkedin-square",
      "link" : "http://linkedin.com/in/justincano"
    },
    {
      "name" : "github",
      "fontAwesomeName" : "fa-github-square",
      "link" : "http://github.com/earthican"
    },
    {
      "name" : "location",
      "fontAwesomeName" : "fa-location-arrow",
      "link" : "https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8791999,-122.4203375,8z/data=!3m1!4b1!4m2!3m1!1s0x808583a3a688d7b5:0x8c891b8457461fa9"
    }];

    const icons = contactButtons.map(function(data,i) {
      var fontAwesome = "fa " + data.fontAwesomeName + " fa-5x";
      return (
        <div style={iconStyle}>
          <a href={data.link} style={linkStyle}>
            <i className={fontAwesome}></i>
          </a>
        </div>
      );
    });

    return (
      <div id={this.props.elementId} style={style}>
        <div id="footer" className="content-box">
          <h2>Contact</h2>
          {icons}
        </div>
      </div>
    );
  }

});


module.exports = Footer;
