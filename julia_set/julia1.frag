
// From the Art of Code
float Mandelbrot( vec2 uv, float k, vec2 m) {

    float zoom = pow(k, -m.x*k);
  
    vec2 c = uv*zoom;
  
   // c += vec2(-.6995, .37999); // changes the starting location 
  
   // Different values of c for Julia Set from Wikipedia
   // c += vec2(-0.7269, 0.1889);
    //c += vec2(-0.8, 0.156);
   //c += vec2(0.285, 0.01);
   // c += vec2(0.285, 0.0);
   //c += vec2(-0.4, 0.6);
    //c += vec2(0.45, 0.1428);
    //c += vec2(-0.70176, -0.3842);
   c += vec2(-0.835, -0.2321);
   //c += vec2(0.0, -0.8);
    
    vec2 z = vec2(0.);
    float iter = 0.;
   float n;
   const float max_iter = 100.;
  
   float h = 2. + sin(iTime);
   float ma = 10.;
   for (float i=0.; i < max_iter; i++) {
     
     z = vec2 (z.x*z.x - z.y*z.y, 2.*z.x*z.y) + c;
    
     ma = min(ma, abs(z.x));
     
     // if further away from 2 break
     if (length(z) > 2.) break;
     iter++;
     float n = iter/max_iter;
     
   }
    float f = iter/max_iter;
    // f = ma;
    float power = 1.;
  
    f = pow(f, power);
    return f;
}
