// This sketch visualizes the Julia set within the Koch curve using different values of c
// Based on The Coding Train challenges by Dainel Shiffman: 
//https://thecodingtrain.com/challenges/22-julia-set
//https://thecodingtrain.com/challenges/21-mandelbrot-set-with-p5js

// Frag code based on tutorials by the Art of Code
// More info in frag file

  // a shader variable
  let shader0;

  // Declare variables
  let button0;
  let button;
  let c0;
  let graphics0;
  let angle = 0.0;
  let frames = 60;

  function preload() {
      // load the the shader
      shader0 = loadShader('julia.vert', 'julia.frag');
  }

   function setup() {
      pixelDensity(1);
      noStroke();

      let para = createP("Julia Set Kaleidoscope");
      para.position(10,10);
      let divA = createDiv();
      divA.position(10, 110);
      divA.style('max-width', '200px');
      divA.style('align-content', 'center');

      c0 = createCanvas(800,800, WEBGL);
      c0.parent(divA);
      pixelDensity(1);
      // shaders require WEBGL mode to work
      graphics0 = createGraphics(800, 800, WEBGL);

      button0 = createButton('SAVE TILE A');
      button0.parent(divA);
      //button0.mousePressed(saveTile0);
    
      divAr = createDiv();
      divAr. position(850, 110);
      radio = createRadio();
      radio.parent(divAr);
      radio.option('0.0', 'c = ( -0.7269, 0.188 )');
      radio.option('1.0', 'c = ( -0.8, 0.156 )');
      radio.option('2.0', 'c = ( 0.285, 0.01 )');
      radio.option('3.0', 'c = ( 0.285, 0.0)');
      radio.option('4.0', 'c = ( -0.4, 0.6 )');
      radio.option('5.0', 'c = (  0.45, 0.1428)');
      radio.option('6.0', 'c = ( -0.70176, -0.3842 )');
      radio.option('7.0', 'c = ( -0.835, -0.2321)');
      radio.option('8.0', 'c = ( 0.0, -0.8 )');
      radio.option('9.0', 'c = ( -.6995, .37999 )');
      radio.option('10.0', 'c = ( -0.194, .6557 )');
      radio.option('11.0', 'c = ( -0.74543, .11301 )');
      radio.option('12.0', 'c = ( 0.27334, .00742 )');
      radio.option('13.0', 'c = ( .355, .355 )');
      radio.option('14.0', 'c = ( -.54, 0.54 )');
      radio.option('15.0', 'c = ( -.4, -0.59 )');
      radio.option('16.0', 'c = ( 0.32, 0.043 )');
      radio.selected('6.0');
      storeC();
      let choice = getItem('choice');
      if (choice != null) {
          radio.selected('choice');
      }
     
  }

  function keyPressed() {
  if (key === 's') {
    saveGif('julia.jpg', 1);
  }
}
  draw = () => {
      let choice = radio.value();
      let mm = map(sin(angle),-1.0, 1.0, 0.25, 0.75);
     // console.log(mm);
      
      //pass the uniforms to the shader
      //this is done separately for each canvas instance
      shader0.setUniform('u_resolution', [width, height]);
      shader0.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);
      shader0.setUniform('choice', choice);
     shader0.setUniform('mm', mm);
      shader(shader0);
      rect(0, 0, width, height);
      angle += TWO_PI/frames;
  }
  
  storeC = () => {
      let c = radio.value();
      storeItem('choice', c);
  }
  



