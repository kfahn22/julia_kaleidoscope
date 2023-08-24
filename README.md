# Julia Set Kaleidoscope

## This repository contains a p5.js sketch that render the Julia set within the Koch curve using different values of c.

My first introduction to the Julia set was <a href="https://thecodingtrain.com/challenges/22-julia-set">Daniel Shiffman's</a> Julia Set coding challenge.  

Image rendered by Daniel's [P5 sketch](https://editor.p5js.org/codingtrain/sketches/G6qbMmaI).

<img class="img" src="assets/ct_julia_set.jpg" alt="Julia set kaleidescope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="800" height="400">

My sketch renders the Julia set within a kaleidoscope using a shader.  The code is based on the 
[Shader Coding: KIFS Fractals explained!](https://www.youtube.com/watch?v=il_Qg9AqQkE) youtube tutorial by the Art of Code.


## Animation

I am using the new p5 saveGif() function to render the GIF. 

![](juliagif.gif)  

- [P5 sketch](https://editor.p5js.org/kfahn/sketches/Zlzw2yIOL)  
- [Code](https://github.com/kfahn22/julia_kaleidescope/tree/main/animation)


## Renderings with different values of c

[Live version](https://kfahn22.github.io/julia_kaleidescope/)

Julia set kaleidoscope with c = (-0.6999, 0.37999)    

<img class="img" src="assets/julia1.jpg" alt="Julia set kaleidoscope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="600" height="600">

Julia set kaleidoscope with c = (-0.70176, 0.3842)    

<img class="img" src="assets/julia2.jpg" alt="Julia set kaleidoscope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="600" height="600">

Julia set kaleidoscope with c = (0.285, 0.01)    

<img class="img" src="assets/julia3.jpg" alt="Julia set kaleidoscope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="600" height="600">

[P5 sketch](https://editor.p5js.org/kfahn/sketches/ujLsCeNRb)  
[Code](https://github.com/kfahn22/julia_kaleidescope/tree/main/julia_set)
