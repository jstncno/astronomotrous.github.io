const React = require('react');
const mui = require('material-ui');
const Masonry = require('react-masonry-component')(React);

const GridItem = require('./grid-item.jsx');

const masonryOptions = {
    transitionDuration: 0
};

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

    const childElements = this.props.data.map(function(data, i) {
      return (
        <GridItem data={data} index={i} key={i}/>
      );
    });

    return (
      <div className="grid" id={this.props.elementId}>
        <Masonry
          options={masonryOptions}
          disableImagesLoaded={false} >
          {childElements}
        </Masonry>
      </div>
    );
  }

});


module.exports = Grid;
