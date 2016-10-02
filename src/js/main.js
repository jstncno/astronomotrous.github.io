import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from 'react-fullscreen';
import UnsplashBackground from './UnsplashBackground';
import MyPendulum from './Pendulum';

var pendulum = MyPendulum;
var pendulumDiv = document.getElementById('pendulum');
var verticalCenter = (window.innerHeight / 2) - (pendulum.canvas.height / 2);
pendulumDiv.style.top = verticalCenter + 'px';
pendulumDiv.appendChild(pendulum.canvas);

const rootInstance = ReactDOM.render(
  <FullScreen>
    <UnsplashBackground />
  </FullScreen>,
  document.getElementById('background')
);
