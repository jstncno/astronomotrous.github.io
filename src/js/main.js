import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from 'react-fullscreen';
import UnsplashBackground from './UnsplashBackground';

const rootInstance = ReactDOM.render(
  <FullScreen>
    <UnsplashBackground />
  </FullScreen>,
  document.getElementById('background')
);
