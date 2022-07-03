// This sketch demonstrates:
//-- how to use local storage to share colors among multiple WEBGL canvases
//-- creates four graphic elements with circles that are arranged to move in tandem across the four canvases to demonstrate a translation.
//-- how to pass colors and x and y positions to a frag file

// This sketch is based on the Local Storage tutorial by Dan Shiffman
// https://www.youtube.com/watch?v=_SRS8b4LcZ8

new p5(sa => {

    // a shader variable
    let shader0;

    // Declare variables
    let button0;
    let button;
    let c0;
    let graphics0;
    
    sa.clear = () => {
        sa.clearStorage();
    }

    sa.preload = () => {
        // load the the shader
        shader0 = sa.loadShader('translate.vert', 'translate.frag');
    }

    sa.setup = () => {
        sa.pixelDensity(1);
        sa.noStroke();

        let para = sa.createP("Demonstration of Translations");
        para.position(10,10);
        para.style('font-size', '30px');
        let divA = sa.createDiv();
        divA.position(10, 110);
        divA.style('max-width', '200px');
        divA.style('align-content', 'center');

        c0 = sa.createCanvas(200, 200, sa.WEBGL);
        c0.parent(divA);
        sa.pixelDensity(1);
        // shaders require WEBGL mode to work
        graphics0 = sa.createGraphics(200, 200, sa.WEBGL);

        button0 = sa.createButton('SAVE TILE A');
        button0.position(450, 675);
        button0.mousePressed(sa.saveTile0);
      
        button = sa.createButton("CLEAR STORAGE");
        button.position(450, 625);
        button.mousePressed(sa.clear);
      
        r1Slider = sa.createSlider(0, 255, 0);
        g1Slider = sa.createSlider(0, 255, 0);
        b1Slider = sa.createSlider(0, 255, 0);
        r2Slider = sa.createSlider(0, 255, 255);
        g2Slider = sa.createSlider(0, 255, 255);
        b2Slider = sa.createSlider(0, 255, 255);
        rad1Slider = sa.createSlider(0, 100, 50, 1);
        rad2Slider = sa.createSlider(0, 100, 25, 1);
        x1Slider = sa.createSlider(0, 300, 200, 1);
        y1Slider = sa.createSlider(0, 300, 100, 1);
        x2Slider = sa.createSlider(0, 300, 25, 1);
        y2Slider = sa.createSlider(0, 300, 10, 1);

        let colors = sa.getItem("colors");
        if (colors !== null) {
            r1Slider.value(colors.r1);
            g1Slider.value(colors.g1);
            b1Slider.value(colors.b1);
            r2Slider.value(colors.r2);
            g2Slider.value(colors.g2);
            b2Slider.value(colors.b2);
        }
        r1Slider.changed(sa.storeColors);
        g1Slider.changed(sa.storeColors);
        b1Slider.changed(sa.storeColors);
        r2Slider.changed(sa.storeColors);
        g2Slider.changed(sa.storeColors);
        b2Slider.changed(sa.storeColors);

        let parameters = sa.getItem("parameters");
        if (parameters !== null) {
            rad1Slider.value(parameters.rad1);
            rad2Slider.value(parameters.rad2);
            x1Slider.value(parameters.x1);
            y1Slider.value(parameters.y1);
            x2Slider.value(parameters.x2);
            y2Slider.value(parameters.y2);
        }
        rad1Slider.changed(sa.storeParameters);
        rad2Slider.changed(sa.storeParameters);
        x1Slider.changed(sa.storeParameters);
        y1Slider.changed(sa.storeParameters);
        x2Slider.changed(sa.storeParameters);
        y2Slider.changed(sa.storeParameters);

        // Organize the layout
        let div1 = sa.createDiv();
        // div1.style('font-size', '16px');
        div1.position(10, 525);
        colAlabel = sa.createP('Color A');
        colAlabel.parent(div1);
        // colAlabel.style("color", "#fff");
        r1Slider.parent(div1);
        g1Slider.parent(div1);
        b1Slider.parent(div1);

        let div2 = sa.createDiv();
        div2.style('font-size', '16px');
        div2.position(10, 625);
        colBlabel = sa.createP('Color B');
        colBlabel.parent(div2);
        // colBlabel.style("color", "#fff");
        r2Slider.parent(div2);
        g2Slider.parent(div2);
        b2Slider.parent(div2);

        let para2 = sa.createP("LARGE CIRCLE");
        // para2.style('font-size', '16px');
        // para2.style("color", '#fff');
        para2.position(450,100);
        let div8a = sa.createDiv();
        // div8a.style('font-size', '16px');
        div8a.position(450, 150);
        rad1label = sa.createP('Radius 1');
        rad1label.parent(div8a);
        // rad1label.style("color", "#fff");
        rad1Slider.style("width", "180px");
        rad1Slider.parent(div8a);

        let para3 = sa.createP("SMALL CIRCLE");
        para3.position(450, 350);
        let div3a = sa.createDiv();
        // div3a.style('font-size', '16px');
        div3a.position(450, 395);
        rad2label = sa.createP('Radius 2');
        rad2label.parent(div3a);
        // rad2label.style("color", "#fff");
        rad2Slider.style("width", "180px");
        rad2Slider.parent(div3a);

        let div4a = sa.createDiv();
        // div4a.style('font-size', '16px');
        div4a.position(450, 210);
        x1label = sa.createP('X1 offset');
        x1label.parent(div4a);
        // x1label.style("color", "#fff");
        x1Slider.parent(div4a);
        x1Slider.style("width", "180px");

        let div5a = sa.createDiv();
        // div5a.style('font-size', '16px');
        div5a.position(450, 270);
        y1label = sa.createP('Y1 offset');
        y1label.parent(div5a);
        // y1label.style("color", "#fff");
        y1Slider.parent(div5a);
        y1Slider.style("width", "180px");

        let div6a = sa.createDiv();
        // div6a.style('font-size', '16px');
        div6a.position(450, 455);
        x2label = sa.createP('X2 offset');
        x2label.parent(div6a);
        // x2label.style("color", "#fff");
        x2Slider.parent(div6a);
        x2Slider.style("width", "180px");

        let div7a = sa.createDiv();
        // div7a.style('font-size', '16px');
        div7a.position(450, 515);
        y2label = sa.createP('Y2 offset');
        y2label.parent(div7a);
        // y2label.style("color", "#fff");
        y2Slider.parent(div7a);
        y2Slider.style("width", "180px");

    }

    sa.draw = () => {
        let r1 = r1Slider.value();
        let g1 = g1Slider.value();
        let b1 = b1Slider.value();
        let r2 = r2Slider.value();
        let g2 = g2Slider.value();
        let b2 = b2Slider.value();

        let rad1 = rad1Slider.value();
        let newrad1 = sa.map(rad1, 0, 100, 0.0, 1.0);
        let rad2 = rad2Slider.value();
        let newrad2 = sa.map(rad2, 0, 100, 0.0, 1.0);
        let x1 = x1Slider.value();
        let x1Offset = sa.map(x1, 0, 300, -1.5, 1.5);
        let y1 = y1Slider.value();
        let y1Offset = sa.map(y1, 0, 300, -1.5, 1.5);
        let x2 = x2Slider.value();
        let x2Offset = sa.map(x2, 0, 100, -0.25, 0.25);
        let y2 = y2Slider.value();
        let y2Offset = sa.map(y2, 0, 100, -0.25, 0.25);

        //pass the uniforms to the shader
        //this is done separately for each canvas
        //instance
        shader0.setUniform('u_resolution', [sa.width, sa.height]);
        shader0.setUniform('colorAr', r1);
        shader0.setUniform('colorAg', g1);
        shader0.setUniform('colorAb', b1);
        shader0.setUniform('colorBr', r2);
        shader0.setUniform('colorBg', g2);
        shader0.setUniform('colorBb', b2);
        shader0.setUniform('rad1', newrad1);
        shader0.setUniform('rad2', newrad2);
        shader0.setUniform('offset1', [x1Offset, y1Offset]);
        shader0.setUniform('offset2', [x2Offset, y2Offset]);
        shader0.setUniform('tileChoice', 0.0);
        sa.shader(shader0);
        sa.rect(0, 0, sa.width, sa.height);
    }

    sa.storeColors = () => {
        let colors = {
            r1: r1Slider.value(),
            g1: g1Slider.value(),
            b1: b1Slider.value(),
            r2: r2Slider.value(),
            g2: g2Slider.value(),
            b2: b2Slider.value(),
        }

        sa.storeItem("colors", colors);
    }

    sa.storeParameters = () => {
        let parameters = {
            rad1: rad1Slider.value(),
            rad2: rad2Slider.value(),
            x1: x1Slider.value(),
            y1: y1Slider.value(),
            x2: x2Slider.value(),
            y2: y2Slider.value(),
        }
        sa.storeItem("parameters", parameters);
    }

    sa.saveTile0 = () => {
        //sa.saveCanvas(c0, '0.png');
        sa.storeItem("img0", c0.elt.toDataURL());
    }
    
    sa.clear = () => {
      sa.clearStorage();
    }

});

new p5(sb => {
    // a shader variable
    let shader1;
    let button1;
    let c1;
    let graphics1;

    sb.preload = () => {
        // load the the shader
        shader1 = sb.loadShader('translate.vert', 'translate.frag');
    }

    sb.setup = () => {
        sb.pixelDensity(1);
        sb.noStroke();

        let divB = sb.createDiv();
        divB.position(212, 110);
        divB.style('max-width', '100px');
        c1 = sb.createCanvas(200, 200, sb.WEBGL);
        c1.parent(divB);
        sb.pixelDensity(1);
        graphics1 = sb.createGraphics(100, 100, sb.WEBGL);

        button1 = sb.createButton('SAVE TILE B');
        button1.mousePressed(sb.saveTile1);
        button1.position(550, 675);

        let colors = sb.getItem("colors");
        if (colors !== null) {
            r1Slider.value(colors.r1);
            g1Slider.value(colors.g1);
            b1Slider.value(colors.b1);
            r2Slider.value(colors.r2);
            g2Slider.value(colors.g2);
            b2Slider.value(colors.b2);
        }

        let parameters = sb.getItem("parameters");
        if (parameters !== null) {
            rad1Slider.value(parameters.rad1);
            rad2Slider.value(parameters.rad2);
            x1Slider.value(parameters.x1);
            y1Slider.value(parameters.y1);
            x2Slider.value(parameters.x2);
            y2Slider.value(parameters.y2);
        }
     
    }

    sb.draw = () => {
        let r1 = r1Slider.value();
        let g1 = g1Slider.value();
        let b1 = b1Slider.value();
        let r2 = r2Slider.value();
        let g2 = g2Slider.value();
        let b2 = b2Slider.value();
        let rad1 = rad1Slider.value();  
        let newrad1 = sb.map(rad1, 0, 100, 0.0, 1.0);
        let rad2 = rad2Slider.value();  
        let newrad2 = sb.map(rad2, 0, 100, 0.0, 1.0);
        let x1 = x1Slider.value();
        let x1Offset = sb.map(x1, 0, 300, -2.5, 0.5);
        let y1 = y1Slider.value();
        let y1Offset = sb.map(y1, 0, 300, -1.5, 1.5);
        let x2 = x2Slider.value();
        let x2Offset = sb.map(x2, 0, 100, -0.25, 0.25);
        let y2 = y2Slider.value();
        let y2Offset = sb.map(y2, 0, 100, -0.25, 0.25);

        shader1.setUniform('u_resolution', [sb.width, sb.height]);
        shader1.setUniform('colorAr', r1);
        shader1.setUniform('colorAg', g1);
        shader1.setUniform('colorAb', b1);
        shader1.setUniform('colorBr', r2);
        shader1.setUniform('colorBg', g2);
        shader1.setUniform('colorBb', b2);
        shader1.setUniform('tileChoice', 1.0);
        shader1.setUniform('rad1', newrad1);
        shader1.setUniform('rad2', newrad2);
        shader1.setUniform('offset1', [x1Offset, y1Offset]);
        shader1.setUniform('offset2', [x2Offset, y2Offset]);

        sb.shader(shader1);
        sb.rect(0, 0, sb.width, sb.height)
    }


    sb.saveTile1 = () => {
        sb.storeItem("img1", c1.elt.toDataURL());
    }
});

new p5(sc => {
    let shader2;
    let button2;
    let c2;
    let graphics2;

    sc.preload = () => {
        // load the the shader
        shader2 = sc.loadShader('translate.vert', 'translate.frag');
    }

    sc.setup = () => {
        sc.pixelDensity(1);
        sc.noStroke();

        let divC = sc.createDiv();
        divC.position(10, 312);
        divC.style('max-width', '200px');
        c2 = sc.createCanvas(200, 200, sc.WEBGL);
        c2.parent(divC);
        sc.pixelDensity(1);
        graphics2 = sc.createGraphics(200, 200, sc.WEBGL);

        button2 = sc.createButton('SAVE TILE C');
        button2.mousePressed(sc.saveTile2);
        button2.position(450, 725);

        let colors = sc.getItem("colors");
        if (colors !== null) {
            r1Slider.value(colors.r1);
            g1Slider.value(colors.g1);
            b1Slider.value(colors.b1);
            r2Slider.value(colors.r2);
            g2Slider.value(colors.g2);
            b2Slider.value(colors.b2);
        }
        let parameters = sc.getItem("parameters");
        if (parameters !== null) {
            rad1Slider.value(parameters.rad1);
            rad2Slider.value(parameters.rad2);
            x1Slider.value(parameters.x1);
            y1Slider.value(parameters.y1);
            x2Slider.value(parameters.x2);
            y2Slider.value(parameters.y2);
        }
       
    }

    sc.draw = () => {
        let r1 = r1Slider.value();
        let g1 = g1Slider.value();
        let b1 = b1Slider.value();
        let r2 = r2Slider.value();
        let g2 = g2Slider.value();
        let b2 = b2Slider.value();
        let rad1 = rad1Slider.value();  
        let newrad1 = sc.map(rad1, 0, 100, 0.0, 1.0);
        let rad2 = rad2Slider.value();  
        let newrad2 = sc.map(rad2, 0, 100, 0.0, 1.0);
        let x1 = x1Slider.value();
        let x1Offset = sc.map(x1, 0, 300, -1.5, 1.5);
        let y1 = y1Slider.value();
        let y1Offset = sc.map(y1, 0, 300, -0.5, 2.5);
        let x2 = x2Slider.value();
        let x2Offset = sc.map(x2, 0, 100, -0.25, 0.25);
        let y2 = y2Slider.value();
        let y2Offset = sc.map(y2, 0, 100, -0.25, 0.25);

        shader2.setUniform('u_resolution', [sc.width, sc.height]);
        shader2.setUniform('colorAr', r1);
        shader2.setUniform('colorAg', g1);
        shader2.setUniform('colorAb', b1);
        shader2.setUniform('colorBr', r2);
        shader2.setUniform('colorBg', g2);
        shader2.setUniform('colorBb', b2);
        shader2.setUniform('rad1', newrad1);
        shader2.setUniform('rad2', newrad2);
        shader2.setUniform('offset1', [x1Offset, y1Offset]);
        shader2.setUniform('offset2', [x2Offset, y2Offset]);
        shader2.setUniform('tileChoice', 2.0);
        sc.shader(shader2);
        sc.rect(0, 0, sc.width, sc.height)
    }

    sc.saveTile2 = () => {
        sc.storeItem("img2", c2.elt.toDataURL());
    }
});

new p5(sd => {
    // a shader variable
    let shader3;
    let button3;
    let c3;
    let graphics3;

    sd.preload = () => {
        // load the the shader
        shader3 = sd.loadShader('translate.vert', 'translate.frag');
    }

    sd.setup = () => {
        sd.pixelDensity(1);
        sd.noStroke();

        let divD = sd.createDiv();
        divD.position(212, 312);
        divD.style('max-width', '200px');
        c3 = sd.createCanvas(200, 200, sd.WEBGL);
        c3.parent(divD);
        sd.pixelDensity(1);
        graphics3 = sd.createGraphics(200, 200, sd.WEBGL);

        button3 = sd.createButton('SAVE TILE D');
        button3.mousePressed(sd.saveTile3);
        button3.position(550, 725);

        let colors = sd.getItem("colors");
        if (colors !== null) {
            r1Slider.value(colors.r1);
            g1Slider.value(colors.g1);
            b1Slider.value(colors.b1);
            r2Slider.value(colors.r2);
            g2Slider.value(colors.g2);
            b2Slider.value(colors.b2);
        }
        let parameters = sd.getItem("parameters");
        if (parameters !== null) {
            rad1Slider.value(parameters.rad1);
            rad2Slider.value(parameters.rad2);
            x1Slider.value(parameters.x1);
            y1Slider.value(parameters.y1);
            x2Slider.value(parameters.x2);
            y2Slider.value(parameters.y2);
        }
    }

    sd.draw = () => {
        let r1 = r1Slider.value();
        let g1 = g1Slider.value();
        let b1 = b1Slider.value();
        let r2 = r2Slider.value();
        let g2 = g2Slider.value();
        let b2 = b2Slider.value();
        let rad1 = rad1Slider.value();  
        let newrad1 = sd.map(rad1, 0, 100, 0.0, 1.0);
        let rad2 = rad2Slider.value();  
        let newrad2 = sd.map(rad2, 0, 100, 0.0, 1.0);
        let x1 = x1Slider.value();
        let x1Offset = sd.map(x1, 0, 300, -2.5, 0.5);
        let y1 = y1Slider.value();
        let y1Offset = sd.map(y1, 0, 300, -0.5, 2.5);
        let x2 = x2Slider.value();
        let x2Offset = sd.map(x2, 0, 100, -0.25, 0.25);
        let y2 = y2Slider.value();
        let y2Offset = sd.map(y2, 0, 100, -0.25, 0.25);

        shader3.setUniform('u_resolution', [sd.width, sd.height]);
        shader3.setUniform('colorAr', r1);
        shader3.setUniform('colorAg', g1);
        shader3.setUniform('colorAb', b1);
        shader3.setUniform('colorBr', r2);
        shader3.setUniform('colorBg', g2);
        shader3.setUniform('colorBb', b2);
        shader3.setUniform('tileChoice', 3.0);
        shader3.setUniform('rad1', newrad1);
        shader3.setUniform('rad2', newrad2);
        shader3.setUniform('offset1', [x1Offset, y1Offset]);
        shader3.setUniform('offset2', [x2Offset, y2Offset]);
        sd.shader(shader3);
        sd.rect(0, 0, sd.width, sd.height)
    }

    sd.saveTile3 = () => {
        sd.storeItem("img3", c3.elt.toDataURL());
    }
});