/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let SectionItem = require('./section-item.jsx');

let Section = React.createClass({

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

    return (
      <div className="work-experience">
        {this.props.data.map(function(data, i) {
          return (
            <SectionItem data={data} />
          );
        }, this)}
      </div>
    );
  }

});

module.exports = Section;
