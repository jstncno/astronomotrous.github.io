import Unsplash from 'unsplash-js';
import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from 'react-fullscreen';

var username = 'boost';
var clientId = 'd9d9b6bb6e8151feb35fefead943df411715301f07c49c882f5d35282aecdcbc';
var defaultPhotoUrl = 'https://hd.unsplash.com/photo-1450740199001-78e928502994';
const unsplash = new Unsplash({
  applicationId: clientId
});

function randomElement(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

var UnsplashBackground = React.createClass({
  getInitialState: function() {    
    return {
      imgUrl: '',
      helloHeight: 0,
      helloWidth: 0
    };
  },

  componentDidMount: function() {
    unsplash.users.likes(username)
    .then(resp => resp.json())
    .then(json => {
      // Your code
      var pictureObj = randomElement(json);
      var photographerName = pictureObj.user.name;
      var fullSizeUrl = pictureObj.urls.full;
      this.setState({imgUrl: fullSizeUrl});
    });
    this.setState({
      helloHeight: document.getElementById('hello').clientHeight,
      helloWidth: document.getElementById('hello').clientWidth,
      greetingHeight: document.getElementById('greeting').clientHeight,
      greetingWidth: document.getElementById('greeting').clientWidth
    });
  },

  calculateHelloTop: function() {
    return this.props.height/2 - this.state.helloHeight*1.25;
  },
  
  calculateHelloLeft: function() {
    return this.props.width/2 - this.state.helloWidth/2;
  },
  
  maxGreetingWidth: function() {
    return this.state.helloWidth*1.5;
  },
  
  calculateGreetingTop: function() {
    return this.calculateHelloTop();
  },
  
  calculateGreetingLeft: function() {
    return this.props.width/2 - this.maxGreetingWidth()/2;
  },

  render: function() {
    return (
        <div id='unsplash' style={{
          backgroundImage: 'url(' + this.state.imgUrl + ')',
          backgroundSize: 'cover',
          width: this.props.width,
          height: this.props.height
        }}>
          <div id='hello' style={{
            marginLeft: this.calculateHelloLeft(),
            marginTop: this.calculateHelloTop()
          }}>
            Hi there.
         </div>
            <div id='greeting' style={{
              textAlign: 'center',
              maxWidth: this.maxGreetingWidth(),
              marginLeft: this.calculateGreetingLeft()
            }}>
             Welcome to my site! I'm Justin, and I currently work as a Software Engineer on the Data Team @ Rally Health.
            </div>
        </div>
    );
  }
});

UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

ReactDOM.render(
  <FullScreen>
    <UnsplashBackground />
  </FullScreen>,
  document.getElementById('background')
);
