const React = require('react');
const Parallax = require('react-parallax');

const ParallaxBox = React.createClass({

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
      margin: 0,
      padding: 0
    }

    return (
      <div className="parallax-box" style={style}>
        <Parallax bgImage={this.props.img} strength={400}>
          <div className="parallax-box-title">
            <h1>// {this.props.title}</h1>
          </div>
        </Parallax>
      </div>
    );
  }

});


module.exports = ParallaxBox;
