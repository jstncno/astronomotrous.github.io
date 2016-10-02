import Pendulum from 'pendulumjs';

var favPendulumColors = [
  {color0: '#00D8FF', color1: '#FF8800'},
  {color0: '#40798C', color1: '#70A9A1'},
  {color0: '#0B2027', color1: '#CFD7C7'},
  {color0: '#00D8FF', color1: '#FF8800'}
];

var pendulumColor = favPendulumColors[Math.floor(Math.random() * favPendulumColors.length)];

var MyPendulum = new Pendulum({
  numBalls    : 40,           // # balls (>0)
  ballHeight  : 40,           // Canvas height (>0)
  ballRadius  : 5,            // Ball's radius (>0)
  color0      : pendulumColor.color0,    // Ball's color when far from center (string)
  color1      : pendulumColor.color1,    // Ball's color when close to center (string)
  fadeout     : 1.0           // Ball's fadeout speed (0.0 - 1.0)
});

export default MyPendulum;
