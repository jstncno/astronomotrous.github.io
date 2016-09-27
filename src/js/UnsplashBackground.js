import React from 'react';
import Unsplash from 'unsplash-js';
import _ from 'underscore';
import Greeting from './Greeting';
import allColors from './colors';

//console.log(new Set(_.map(allColors, function(colorObj) {
//  return colorObj.type;
//})));

const username = 'boost';
const clientId = 'd9d9b6bb6e8151feb35fefead943df411715301f07c49c882f5d35282aecdcbc';
const defaultPhotoUrl = 'https://hd.unsplash.com/photo-1450740199001-78e928502994';
const unsplash = new Unsplash({
  applicationId: clientId
});

var randomElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
      var pictureObj = randomElement(json);
      var photographerName = pictureObj.user.name;
      fullSizeUrl = pictureObj.urls.full;
      console.log(fullSizeUrl);
      
      this.setState({imgUrl: fullSizeUrl});
    });
    
    window.onload = function() {
      getDominantBackgroundColor(fullSizeUrl, function(data) {
        console.log(data);
      });
    };
  }
  
  unsplashStyle() {
    return {
      backgroundImage: 'url(' + this.state.imgUrl + ')',
      backgroundSize: 'cover',
      width: this.props.width,
      height: this.props.height
    }
  }

  render() {
    return (
      <div id='unsplash' style={this.unsplashStyle()}>
        {React.createElement(Greeting, this.props)}
        <img id='img' src={this.state.imgUrl} style={{display:'none'}}/>
      </div>
    );
  }
}

var getDominantBackgroundColor = function(url, callback) {
    var colorThief = new ColorThief();
    var image = new Image();

    image.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.id = 'backgroundImg';
      canvas.style.display = 'none';

      canvas.getContext('2d').drawImage(this, 0, 0);

      document.body.appendChild(canvas);

      var colors = colorThief.getColor(canvas);
      callback(colors);
      getPassingColors(colors);
    };

    image.src = url + '?' + new Date().getTime();
    image.setAttribute('crossOrigin', '');
};

var currentRatio = 7.0;
// https://github.com/donnieberg/accessible-color-palette/blob/41c957d69ed98dc400842fb65e0a049e1c1cfd88/js/app.js#L353
function getPassingColors(dominantBackgroundColor) {
  var passingColors = [];
  _.each(allColors, function(color) {
    var ratio = contrastRatio(color.rgb, dominantBackgroundColor);
    color.currentRatio = ratio;
    if(color.currentRatio >= currentRatio) {
      color.pass = true;
      passingColors.push(color);
    } else{
      color.pass = false;
    }
  });

//  passingColors = _.filter(passingColors, function(colorObj) {
//    return colorObj.type.indexOf('colorSibling') == -1
//    return colorObj.type == 'flatUIcolor';
//  });
  
  if(passingColors.length > 0) {
    var chosenColor = randomElement(passingColors);
    console.log('getPassingColors() is working', passingColors.length);
    console.log('chosen color:', chosenColor, chosenColor.currentRatio);

    var copy = document.getElementById('copy');
    copy.style.color = chosenColor.hex;
  }
};

function contrastRatio(foreground, background) {
  var L1 = luminance(_.map(foreground.split(','), function(intStr) {
    return parseInt(intStr);
  }));
  var L2 = luminance(background);
  return (Math.round(((Math.max(L1, L2) + 0.05)/(Math.min(L1, L2) + 0.05))*100)/100);
}

var luminance = function(rgbArr) {
  // convert RGB to sRGB
  var sRGB = _.map(rgbArr, function(value) {
    value /= 255;
    return (value <= 0.03928) ? (value / 12.92) : Math.pow( ((value+0.055)/1.055), 2.4);
  });
  // calculate luminance
  return (sRGB[0] * 0.2126) + (sRGB[1] * 0.7152) + (sRGB[2] * 0.0722);
}

UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};