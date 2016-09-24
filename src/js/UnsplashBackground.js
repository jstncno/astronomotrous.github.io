import React from 'react';
import Unsplash from 'unsplash-js';
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
    unsplash.users.likes(username)
    .then(resp => resp.json())
    .then(json => {
      // Your code
      var pictureObj = this.randomElement(json);
      var photographerName = pictureObj.user.name;
      var fullSizeUrl = pictureObj.urls.full;
      this.setState({imgUrl: fullSizeUrl});
    });
  }
  
  randomElement(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
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
      </div>
    );
  }
}

UnsplashBackground.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};