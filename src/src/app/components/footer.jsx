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
      backgroundColor: Colors.blueGrey800
    }

    return (
      <div style={style}>
        <div id="footer">
          <h2>THIS IS A FOOTER</h2>
        </div>
      </div>
    );
  }

});


module.exports = Footer;
