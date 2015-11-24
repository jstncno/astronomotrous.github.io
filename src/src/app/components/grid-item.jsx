const React = require('react');
const mui = require('material-ui');
const Card = mui.Card;
const CardMedia = mui.CardMedia;
const CardTitle = mui.CardTitle;
const CardText = mui.CardText;
const CardHeader = mui.CardHeader;

const GridItem = React.createClass({

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
      <div className="grid-item">
        <Card>
          <CardMedia>
            <img src={this.props.data.imgUrl || "http://lorempixel.com/600/337/nature/"} />
          </CardMedia>
        </Card>
      </div>
    );
  }

});

module.exports = GridItem;
