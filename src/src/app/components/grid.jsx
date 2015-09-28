/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Card = mui.Card;
let CardText = mui.CardText;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Grid = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
    ];

    var gridItems = this.props.data.map(function(data) {
      return (
        <Card className="col-md-4 grid-item">
          <CardText>
            <h1>{data.author}</h1>
            {data.text}
          </CardText>
        </Card>
      );
    });

    return (
      <div className="grid">
        {gridItems}
      </div>
    );
  },

});

module.exports = Grid;
