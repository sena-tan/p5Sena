function setup() {
	createCanvas(800,600);
	background('grey');
	}
function draw () {
    ellipseMode(RADIUS);
    fill("purple");
    ellipse(width/2,height/2,200);
    fill("white");
    ellipse(320,height/3,50);
    ellipse(480,height/3,50);
    ellipse(width/2,400,70);
    ellipseMode(CORNERS);
    fill("black");
    ellipse(295,height/3,345,250);
    ellipse(455,height/3,505,250)
   
  }