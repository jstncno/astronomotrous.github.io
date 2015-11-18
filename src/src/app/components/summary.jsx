const React = require('react');
const mui = require('material-ui');
const Colors = require('material-ui/lib/styles/colors');

const Summary = React.createClass({

  getInitialState () {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  render() {

    const summaryStyle = {
      textAlign: "center"
    };

    return (
      <div style={summaryStyle}>
        <p>
          Hello, world!
          <br/>
          Passionate and curious Software Engineer currently working a Software Data Engineering role at Rally Health in San Francisco, CA.
        </p>
      </div>
    );
  }

});


module.exports = Summary;
