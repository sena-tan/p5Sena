let xPos;
let yPos;
function setup() {
    createCanvas(800, 500);
    background(255, 255, 204);
    noStroke();
     for (xPos = 20; xPos < width; xPos = xPos + 40) {
        for (yPos = 50; yPos < height; yPos = yPos + 100) {
            ellipseMode(RADIUS);
            fill(xPos/4, 20, yPos/2);
            ellipse(xPos, yPos, 10,10);
        }
    }
    // for ( r = 0; r <= 255; r++ )
    // {
    //   for ( g = 0; g <= 255; g++ )
    //   {
    //     for ( b = 0; b <= 255; b++)
    //     {
    //         fill(r, g, b);
    //         for (xPos = 20; xPos < width; xPos = xPos + 40) {
    //             for (yPos = 50; yPos < height; yPos = yPos + 100) {
    //                 ellipseMode(RADIUS);
    //                 ellipse(xPos, yPos, 10,10);
    //             }
    //         }
    //     }
    //   }
    // }
    
}
function draw()  {
    noStroke();
    fill(204, 235, 102)
    for (xPos = 20; xPos < width; xPos = xPos + 40) {
        ellipseMode(CENTER);
        ellipse(xPos, height/2, 10,10);}
}