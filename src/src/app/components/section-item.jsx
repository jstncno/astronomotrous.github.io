/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Paper = mui.Paper;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let SectionItem = React.createClass({

  getInitialState() {
    return {
      zDepth: 1
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  onMouseEnterHandler() {
    this.setState({
      zDepth: 5
    });
  },

  onMouseLeaveHandler() {
    this.setState({
      zDepth: 1
    });
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
      <div
       className="section-item"
       onMouseEnter={this.onMouseEnterHandler}
       onMouseLeave={this.onMouseLeaveHandler}>

        <Paper className="paper-item" zDepth={this.state.zDepth}>
          <div>
            <h2 className="section-title">{this.props.data.title}</h2>
            <h3 className="section-subtitle"><a href={this.props.data.companyUrl}>{this.props.data.company}</a></h3>
            <p>
              <ul>
                {this.props.data.description.map(function(point, i) {
                  return (<li>{point}</li>);
                })}
              </ul>
            </p>
          </div>
        </Paper>

      </div>
    );
  }

});

module.exports = SectionItem;
