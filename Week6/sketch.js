var drops = [];
var sunYpos = 500;
let x;
let y;
let opacity = 100;
let offset = 0;
let easing = 0.05;
let angle = 0;

function setup() {
  createCanvas(500, 650);
  for (var i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
  x = width/2
  y = height/2
  colorMode(RGB)
}

function draw() {
  background(40, 75, 108);
  for (var i = 20; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();   
  }
  
  noStroke()
  fill(100,200,220,opacity);
  rect(0, 0, 500, 650)
  
    
	push()
	let sun; 
	translate(320, mouseY+100);
	noStroke();
	fill(255,180,0)
	for (var r1 = 20; r1 < 120; r1++) {
	if (100) {
	triangle(80, 70, 50, 50, 70, 30);
	}
	rotate(PI / 5);
	}
    fill(255,165,50)
	circle(0, 0, 50)
	if (sunYpos > 100)
		sunYpos--;
	pop()
  
    fill(255)
    ellipse(60, mouseY+230, 80)
    ellipse(100, mouseY+220, 100)
    ellipse(150, mouseY+250, 60)
    ellipse(170, mouseY+220, 80)
  
    fill(255)
    ellipse(390, mouseY+430, 80)
    ellipse(430, mouseY+450, 100)
    ellipse(470, mouseY+440, 60)
    ellipse(370, mouseY+450, 80)
  
    fill(255)
    ellipse(100, mouseY+550, 80)
    ellipse(150, mouseY+570, 100)
    ellipse(100, mouseY+600, 60)
    ellipse(80, mouseY+570, 80)
  

  let leftWall = 150;
  let rightWall = 350;
  
  let xx = mouseX;
  let xc = constrain(mouseX, 200, 300);
  let xy = mouseY;
  let yc= constrain(mouseY, 370, 430);
  
  fill(220, 150, 80);
  ellipse(250, 400, 350, 250);
  fill(300, 210, 50)
  ellipse(250, 400, 350, yc-500);
  fill(0)
  ellipse(xc, yc, 80); 

}

function mouseMoved() {
  opacity = map (mouseY, 500, 400, 0, 100)
}