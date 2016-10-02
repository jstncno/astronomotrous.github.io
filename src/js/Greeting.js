import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloHeight: 10,
      helloWidth: 10,
      greetingHeight: 10,
      greetingWidth: 10
    };
  }

  componentDidMount() {
    this.setState({
      helloHeight: document.getElementById('hello').clientHeight,
      helloWidth: document.getElementById('hello').clientWidth,
      greetingHeight: document.getElementById('greeting').clientHeight,
      greetingWidth: document.getElementById('greeting').clientWidth
    });
  }

  calculateHelloTop() {
    return this.props.height/2 - this.state.helloHeight*1.25;
  }
  
  calculateHelloLeft() {
    return this.props.width/2 - this.state.helloWidth/2;
  }
  
  maxGreetingWidth() {
    return this.state.helloWidth*1.5;
  }
  
  calculateGreetingTop() {
    return this.calculateHelloTop();
  }
  
  calculateGreetingLeft() {
    return this.props.width/2 - this.maxGreetingWidth()/2;
  }
    
  calculateHelloTop() {
    return this.props.height/2 - this.state.helloHeight*1.25;
  }
  
  calculateHelloLeft() {
    return this.props.width/2 - this.state.helloWidth/2;
  }
  
  maxGreetingWidth() {
    return this.state.helloWidth*1.5;
  }
  
  calculateGreetingTop() {
    return this.calculateHelloTop();
  }
  
  calculateGreetingLeft() {
    return this.props.width/2 - this.maxGreetingWidth()/2;
  }
    
  helloStyle() {
    return {      
      marginLeft: this.calculateHelloLeft(),
      marginTop: this.calculateHelloTop()
    }
  }
  
  greetingStyle() {
    return {
      textAlign: 'center',
      maxWidth: this.maxGreetingWidth(),
      marginLeft: this.calculateGreetingLeft()
    }
  }

  render() {
    return (
      <div className='copy'>
        <div id='hello' style={this.helloStyle()}>Hi there.</div>
        <div id='greeting' style={this.greetingStyle()}>
          Welcome to my site! My name is Justin, and I currently work as a Software Engineer on the Data Team @ <a href="https://www.rallyhealth.com/">Rally Health</a>.
        </div>
      </div>
    );
  }
}
