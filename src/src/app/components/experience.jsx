const React = require('react');
const mui = require('material-ui');
const Colors = require('material-ui/lib/styles/colors');

const Item = require('./experience-item.jsx');

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
        {this.props.data.map(function(work, i) {
          return (
            <Item key={i} data={work} />
          );
        }, this)}
      </div>
    );
  }

});


module.exports = Experience;
