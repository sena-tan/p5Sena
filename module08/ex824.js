function setup() {
    createCanvas(800,500);
    background('orange');
  }
  function draw () {
    line ((width/2-100),height/2, (width/2+100),height/2);
    line ((width/2-100),height/2,(width/2-100),150);
    line ((width/2+100),height/2,(width/2+100),350);
    line ((width/2-300),150,(width/2-100),150);
    line ((width/2+100),350,(width/2+300),350)
  }