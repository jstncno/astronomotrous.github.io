const React = require('react');
const mui = require('material-ui');

const GridItem = require('./grid-item.jsx');

const Grid = React.createClass({

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
      <div className="grid" id={this.props.elementId}>
        {this.props.data.map(function(data, i) {
          return (
            <GridItem data={data} index={i} key={i}/>
          );
        }, this)}
      </div>
    );
  }

});


module.exports = Grid;
