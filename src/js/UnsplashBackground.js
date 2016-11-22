import React from 'react';
import Unsplash from 'unsplash-js';
import Greeting from './Greeting';
import PhotoCredits from './PhotoCredits';

const username = 'boost';
const clientId = 'd9d9b6bb6e8151feb35fefead943df411715301f07c49c882f5d35282aecdcbc';
const defaultPhotoUrl = 'https://images.unsplash.com/photo-1467348733814-f93fc480bec6';
const unsplash = new Unsplash({
  applicationId: clientId
});

export default class UnsplashBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      photographer: '',
      photographerUrl: ''
    };
  }

  componentDidMount() {
    var fullSizeUrl = defaultPhotoUrl;
    unsplash.users.likes(username)
    .then(resp => resp.json())
    .then(json => {
      // Your code
      var pictureObj = this.randomElement(json);
      var photographerName = pictureObj.user.name;
      var photographerUrl = pictureObj.user.portfolio_url;
      fullSizeUrl = pictureObj.urls.full;
      console.log(fullSizeUrl);
      
      this.setState({
        imgUrl: fullSizeUrl,
        photographer: photographerName,
        photographerUrl: photographerUrl
      });
    });
  }
  
  randomElement(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
  }
  
  unsplashStyle() {
    console.log('width', this.props.width);
    return {
      backgroundImage: 'url(' + this.state.imgUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: this.props.width,
      height: this.props.height
    }
  }

  fadeOutLoader() {
    function hideLoaderWrapper() {
      var loaderWrapper = document.getElementById('loader-wrapper');
      loaderWrapper.style.display = 'none';
    }
    var loaderWrapper = document.getElementById('loader-wrapper');
    var loader = document.getElementById('loader');
    loader.remove();
    loaderWrapper.className += ' fadeOut';
    setTimeout(hideLoaderWrapper, 2000);
  }

  render() {
    return (
      <div id='unsplash' style={this.unsplashStyle()}>
        {React.createElement(Greeting, this.props)}
        {React.createElement(PhotoCredits, Object.assign({}, this.props, this.state))}

        <div id='overlay'></div>
        <img id='img'
          src={this.state.imgUrl}
          style={{display:'none'}}
          onLoad={this.fadeOutLoader}/>
      </div>
    );
  }
}

UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};