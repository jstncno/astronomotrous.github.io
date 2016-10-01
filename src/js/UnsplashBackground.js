import React from 'react';
import Unsplash from 'unsplash-js';
import Pendulum from 'pendulumjs';
import Greeting from './Greeting';

const username = 'boost';
const clientId = 'd9d9b6bb6e8151feb35fefead943df411715301f07c49c882f5d35282aecdcbc';
const defaultPhotoUrl = 'https://hd.unsplash.com/photo-1450740199001-78e928502994';
const unsplash = new Unsplash({
  applicationId: clientId
});

export default class UnsplashBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
    };
  }

  componentDidMount() {
    var fullSizeUrl = '';
    unsplash.users.likes(username)
    .then(resp => resp.json())
    .then(json => {
      // Your code
      var pictureObj = this.randomElement(json);
      var photographerName = pictureObj.user.name;
      fullSizeUrl = pictureObj.urls.full;
      console.log(fullSizeUrl);
      
      this.setState({imgUrl: fullSizeUrl});
    });
    
    window.onload = function() {
//      getDataUri(fullSizeUrl, function(rgbArr) {
//        var rgbColor = 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')'
//        var overlay = document.getElementById('overlay');
//        overlay.style.backgroundColor = rgbColor;
//      });
    };
  }
  
  randomElement(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
  }
  
  unsplashStyle() {
    return {
      backgroundImage: 'url(' + this.state.imgUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: this.props.width,
      height: this.props.height
    }
  }

  render() {
    return (
      <div id='unsplash' style={this.unsplashStyle()}>
        {React.createElement(Greeting, this.props)}
        <div id='overlay'></div>
        <img id='img' src={this.state.imgUrl} style={{display:'none'}}/>
      </div>
    );
  }
}

// https://davidwalsh.name/convert-image-data-uri-javascript
var getDataUri = function(url, callback) {
    var colorThief = new ColorThief();
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.id = 'backgroundImg';
        canvas.style.display = 'none';

        canvas.getContext('2d').drawImage(this, 0, 0);
      
        document.body.appendChild(canvas);

        var color = colorThief.getColor(canvas);
        callback(color);
    };

    image.src = url + '?' + new Date().getTime();
    image.setAttribute('crossOrigin', '');
}

var pendulum = new Pendulum({
  numBalls    : 40,           // # balls (>0)
  ballHeight  : 40,           // Canvas height (>0)
  ballRadius  : 5,            // Ball's radius (>0)
  color0      : '#FFFFFF',    // Ball's color when far from center (string)
  color1      : '#000000',    // Ball's color when close to center (string)
  fadeout     : 1.0           // Ball's fadeout speed (0.0 - 1.0)
});
var pendulumDiv = document.createElement('div');
pendulumDiv.appendChild(pendulum.canvas);
document.querySelector('body').appendChild(pendulumDiv);



UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};