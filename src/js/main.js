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
var fullSizeUrl = defaultPhotoUrl;
unsplash.users.likes(username)
  .then(resp => resp.json())
  .then(json => {
    // Your code
    var pictureObj = randomElement(json);
    var photographerName = pictureObj.user.name;
    fullSizeUrl = pictureObj.urls.full;
    console.log(fullSizeUrl);
  });

var divStyle = {
  background: 'url(' + fullSizeUrl + ')',
  backgroundSize: 'cover'
};

var imgStyle = {
  flex: 1,
  resizeMode: 'cover', // or 'stretch'
};

var UnsplashBackground = React.createClass({
  render: function() {
    return (
        <div id='unsplash' style={{
          background: 'url(' + fullSizeUrl + ')',
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

//class UnsplashBackground extends React.Component {
//  render() {
//    return <div style={{
//      background: 'url(' + fullSizeUrl + ')',
//      width: this.props.width,
//      height: this.props.height
//    }}>
//      Hello, world!
//    </div>;
//  }
//}
//
UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};
//
//
//const rootInstance = ReactDOM.render(
//  <FullScreen>
//    <UnsplashBackground />
//  </FullScreen>,
//  document.getElementById('background')
//);