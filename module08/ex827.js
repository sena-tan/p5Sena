function setup() {
    createCanvas(800,500);
    background('orange');
    }
  function draw () {
    noFill();
    strokeWeight(10);
    triangle(width/2,height/2,500,400,300,400);
    triangle(390,210,490,360,290,360);
    triangle(430,230,530,380,330,380);
  }