// This sketch visualizes the Julia set within the Koch curve using different values of c
// Based on The Coding Train challenges by Dainel Shiffman:
//https://thecodingtrain.com/challenges/22-s
//https://thecodingtrain.com/challenges/21-mandelbrot-set-with-p5js

// Frag code based on tutorials by the Art of Code
// More info in frag file

// CHOOSE JULIA SET
// Choices 0-9 alues from Wikipeida
// https://en.wikipedia.org/wiki/Julia_set
// Choices 10-12 from
// The Beaty of Fractals, Peitgen & Richter, p193
// Choices 13-16 from  //http://paulbourke.net/fractals/juliaset/

let c_value = [
  [-0.7269, 0.188],
  [-0.8, 0.156],
  [0.285, 0.01],
  [-0.4, 0.6],
  [0.45, 0.1428],
  [-0.70176, -0.3842],
  [-0.835, -0.2321],
  [0.0, -0.8],
  [-0.6995, 0.37999],
  [-0.194, 0.6557],
  [-0.74543, 0.11301],
  [0.27334, 0.00742],
  [0.355, 0.355],
  [-0.54, 0.54],
  [-0.4, -0.59],
  [0.32, 0.043],
];

// a shader variable
let shader0;

// Declare variables
let button0;
let button;
let c0;
let graphics0;
let angle = 0.0;
let frames = 120;

function preload() {
  // load the the shader
  shader0 = loadShader("julia.vert", "julia.frag");
}

function setup() {
  pixelDensity(1);
  noStroke();
  createCanvas(512, 512, WEBGL);

  pixelDensity(1);
  // shaders require WEBGL mode to work
  graphics0 = createGraphics(512, 512, WEBGL);
}

function draw() {
  let choice = random(c_value);
  //let choice = c_value[0];
  let m = random(0.5, 0.75);
  let mm = map(sin(angle), -1.0, 1.0, 0.01, 1.0);
  let k = random(5.0, 15.0);
  //pass the uniforms to the shader
  //this is done separately for each canvas instance
  shader0.setUniform("u_resolution", [width, height]);
  shader0.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  shader0.setUniform("choice", [choice[0], choice[1]]);
  shader0.setUniform("mm", m);
  shader0.setUniform("k", k);
  shader(shader0);
  rect(0, 0, width, height);

  angle += TWO_PI / frames;

  //uncomment to download images
  // if (frameCount < 2000) {
  //    saveFrames('julia', 'png', 1, 2000);
  // }
}
