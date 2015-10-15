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

    let dateStyle = {
      "text-align": "right"
    }

    let col4 = {
      "max-width": "33.33333333%",
      "min-height": "1px",
      "padding-right": "15px",
      "padding-left": "15px"
    }

    let col8 = {
      "max-width": "66.66666667%",
      "min-height": "1px",
      "padding-right": "15px",
      "padding-left": "15px"
    }

    let col12 = {
      "max-width": "100%",
      "min-height": "1px",
      "padding-right": "15px",
      "padding-left": "15px"
    }

    return (
      <div
       className="section-item"
       onMouseEnter={this.onMouseEnterHandler}
       onMouseLeave={this.onMouseLeaveHandler}>

        <Paper className="paper-item" zDepth={this.state.zDepth}>
          <div className="row">
            <div style={col12}>
              <img className="section-img" src={this.props.data.imgUrl} />
            </div>
          </div>

          <div className="row">
            <div style={col8}>
              <h3 className="section-title"><a href={this.props.data.companyUrl}>{this.props.data.company}</a></h3>
              <h4 className="section-subtitle">{this.props.data.title}</h4>
            </div>
            <div style={col4} style={dateStyle}>
              <h4>{this.props.data.date}</h4>
            </div>
          </div>

          <div className="row">
            <ul>
              {this.props.data.description.map(function(point, i) {
                return (<li>{point}</li>);
              })}
            </ul>
          </div>
        </Paper>

      </div>
    );
  }

});

module.exports = SectionItem;
