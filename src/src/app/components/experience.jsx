const React = require('react');
const mui = require('material-ui');
const Colors = require('material-ui/lib/styles/colors');

const data = require('./data/greeting.js');

const Experience = React.createClass({

  getInitialState () {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  render() {

    return (
      <div className="content-box" id="experience">
        <h1 id="greeting-header"><strong>{data.greeting}</strong></h1>
        <p>
          Welcome to my page and thanks for visiting. My name is Justin, and I am a
          passionate and curious Software Engineer currently working a Software Data
          Engineering role at <a href="https://www.rallyhealth.com/">Rally Health</a> in San Francisco, CA.
        </p>
      </div>
    );
  }

});


module.exports = Experience;
