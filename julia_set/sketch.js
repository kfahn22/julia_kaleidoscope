// This sketch renders the Julia set within the Koch curve using different values of c
// The code for the Koch curve is based on KIFS Fractals explained! tutorial by
// The Art of Code  Martyn 

// a shader variable
let theShader;

function preload(){
  // load the shader

  theShader = loadShader('julia_set/julia.vert', 'julia_set/julia.frag');
}

function setup() {
  pixelDensity(1);
  // shaders require WEBGL mode to work
  createCanvas(800, 600, WEBGL);
  noStroke();
}


function draw() {  
  background(0);

  // send resolution of sketch into shader
  theShader.setUniform('u_resolution', [width, height]);
  theShader.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  theShader.setUniform("iFrame", frameCount);
  theShader.setUniform("iTime", millis()/1000.);
  
  // shader() sets the active shader with our shader
  shader(theShader);
 
  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

