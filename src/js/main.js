import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from 'react-fullscreen';
import Pendulum from 'pendulumjs';
import UnsplashBackground from './UnsplashBackground';

var pendulum = new Pendulum({
  numBalls    : 40,           // # balls (>0)
  ballHeight  : 40,           // Canvas height (>0)
  ballRadius  : 5,            // Ball's radius (>0)
  color0      : '#FFFFFF',    // Ball's color when far from center (string)
  color1      : '#000000',    // Ball's color when close to center (string)
  fadeout     : 1.0           // Ball's fadeout speed (0.0 - 1.0)
});
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
