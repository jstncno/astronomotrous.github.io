import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  style() {
    return {
      width: this.props.width + 'px'
    }
  }
  
  render () {
    
    var contactButtons = [{
      "name" : "email",
      "fontAwesomeName" : "fa-envelope",
      "link" : "mailto:jcano001@ucr.edu"
    },
    {
      "name" : "linkedin",
      "fontAwesomeName" : "fa-linkedin-square",
      "link" : "http://linkedin.com/in/justincano"
    },
    {
      "name" : "github",
      "fontAwesomeName" : "fa-github-square",
      "link" : "http://github.com/earthican"
    },
    {
      "name" : "location",
      "fontAwesomeName" : "fa-location-arrow",
      "link" : "https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8791999,-122.4203375,8z/data=!3m1!4b1!4m2!3m1!1s0x808583a3a688d7b5:0x8c891b8457461fa9"
    }];
    
    const icons = contactButtons.map(function(data,i) {
      var fontAwesome = "fa " + data.fontAwesomeName + " fa-4x";
      return (
        <span className='icon'>
          <a href={data.link} target='_blank'>
            <i className={fontAwesome} aria-hidden='true'></i>
          </a>
        </span>
      );
    });
    
    return (
      <div id='footer' style={this.style()}>
        {icons}
      </div>
    );
  }
}
