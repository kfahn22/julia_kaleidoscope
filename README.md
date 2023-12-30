# Julia Set Kaleidoscope

## This repository contains a p5.js sketch that render the Julia set within the Koch curve using different values of c.

My first introduction to the Julia set was <a href="https://thecodingtrain.com/challenges/22-julia-set">Daniel Shiffman's</a> Julia Set coding challenge.

Image rendered by Daniel Shiffman's [P5 sketch](https://editor.p5js.org/codingtrain/sketches/G6qbMmaI).

<img class="img" src="assets/ct_julia_set.jpg" alt="Julia set kaleidescope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="800" height="400">

<!-- IMAGE-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""> <img class="img" src="assets/julia1.jpg" alt="Julia Kaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b>c = (-0.6999, 0.37999)<br/>Julia Kaleidescope</b></sub></a></td>
      <td align="center"><a href=""> <img class="img" src="assets/julia2.jpg" alt="Julia Kaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b>c = (-0.70176, 0.3842)<br/>Julia Kaleidescope</b></sub></a></td>
      <td align="center"><a href=""> <img class="img" src="assets/julia3.jpg" alt="Julia Kaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b>c = (0.285, 0.01)<br/>Julia Kaleidescope</b></sub></a></td>
    </tr>
     <tr>
      <td align="center"><a href=""> <img class="img" src="assets/mandelbulb_kaleidescope1.png" alt="Mandelbulb Kaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b><br/>Mandelbulb Kaleidescope</b></sub></a></td>
      <td align="center"><a href=""> <img class="img" src="assets/mandelbulb_kaleidescope2.png" alt="JMandelbulbKaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b><br/>Mandelbulb Kaleidescope</b></sub></a></td>
      <td align="center"><a href=""> <img class="img" src="assets/mandelbulb_kaleidescope3.png" alt="Mandelbulb Kaleidescope" style="vertical-align:top;" width="500" /><br /><sub><b><br/>Mandelbulb Kaleidescope</b></sub></a></td>
    </tr>
     </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- IMAGE-LIST:END -->

My sketch renders the Julia set within a kaleidoscope using a shader. The code is based on the
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
