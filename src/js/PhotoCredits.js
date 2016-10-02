import React from 'react';

export default class PhotoCredits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.setState({
      height: document.getElementById('photo-credits').clientHeight,
      width: document.getElementById('photo-credits').clientWidth
    });
  }
  
  calculateLeft() {
    return this.props.width * (3/4);
  }
  
  calculateTop() {
    return (this.props.height * 0.95) - this.state.height;
  }

  style() {
    return {      
      marginLeft: this.calculateLeft(),
      marginTop: this.calculateTop()
    }
  }

  render() {
    return (
      <div className='copy' style={{zIndex: 2}}>
        <div id='photo-credits' style={this.style()}>
          Photo by <a href={this.props.photographerUrl}>{this.props.photographer}</a>
          <br />
          via <a href="http://www.unsplash.com">Unsplash</a>.
        </div>
      </div>
    );
  }
}