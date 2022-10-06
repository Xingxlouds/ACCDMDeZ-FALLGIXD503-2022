let gridStep =50;
let radius=20;

let velX, velY = 0.2;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, height, 100);

}

function draw() {
    background(0);
  
  //showgrid();
  noStroke();
  for(let x=0; x<width/gridStep; x++){
    for(let y=0; y<height/gridStep; y++){
      
      let posX = (x * gridStep) + (gridStep * 0.5)
      let posY = (y * gridStep) + (gridStep * .5)
      //posX += random(-5,5);
      //posY += random(-5,5);
      posX += 20;
      posY += 20;
      
      fill(posX, 500, 60) 
      //console.log(posX)
      circle(posX, posY, radius*2)
    }
  }
}


function showgrid() {
  stroke(0);
  for (let x = 0; x < width; x = x + gridStep) {
    line(x, 0, x, height);
  }
  stroke(250, 100, 100);
  for (let y = 0; y < height; y += gridStep) {
    line(0, y, width, y);
  }
}