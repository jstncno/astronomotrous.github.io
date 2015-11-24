const React = require('react');

const ExperienceItem = React.createClass({

  getInitialState () {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  render() {

    const subheaderStyle = {
      marginBottom: "12px"
    }

    const listStyle = {
      paddingLeft: "15px"
    }

    return (
      <div className="experience-item">
        <h2 className="content-subheader" style={subheaderStyle}>{this.props.data.employer}</h2>
        <strong>{this.props.data.title}</strong> | <em>{this.props.data.date}</em>
        <ul style={listStyle}>
        {this.props.data.responsibilities.map(function(r, i) {
          return (
              <li key={i}>{r.text}</li>
          );
        }, this)}
        </ul>
      </div>
    );
  }

});

module.exports = ExperienceItem;
