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
    return {imgUrl: ''};
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
  },
  render: function() {
    return (
        <div id='unsplash' style={{
          backgroundImage: 'url(' + this.state.imgUrl + ')',
          backgroundSize: 'cover',
          width: this.props.width,
          height: this.props.height
        }}>
        </div>
    );
  }
});

ReactDOM.render(
  <FullScreen>
    <UnsplashBackground />
  </FullScreen>,
  document.getElementById('background')
);

UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};
