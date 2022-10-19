
let x=0;
let y=0;
let a=0;
let b=0;
let c=0;
let d=0;

var fade;
var fadeAmount = 1

function setup() {
  createCanvas (900, 900);
  strokeWeight(2);
  colorMode(HSB);
  d=height/2;  
  textFont('Impact');
  textSize(425)
  fade = 0
}

function draw() {
  background(255);
  

  noFill()
  rect(20, 20, 860)
  
//   fill(0, 255, 100, fade/150)
//   text("LOOK", 20,220)
//  if (fade<0) fadeAmount=1; 
//   if (fade>=50) fadeAmount=-50; 
//   fade += fadeAmount; 
//   print(fade)
  
  fill(0, 255, 100, fade/300)
  text("LOOK", 20,610)
  
  
  
  fill(0, 255, 100, fade/600)
  text("LOOK", 20,1000)
  
  
  
  x+=.05;
  y+=.05;
  sinX=sin(x);
  cosY=cos(y);
  x1=map(sinX, 100, 90, 1, 5);
  x2=map(sinX, -1, 1, 0, 70);
  y2=map(cosY, -1, 5, 0, 100);
  
  // box01
  fill(20,20,30)
  rect(80, 70, 200, 200);
  
  fill(10,20,50)
  ellipse(180, 190, 200, 150);
  
  fill(50,20,90)
  ellipse(180, 190, 200, y2+80);
  // curve(5, 26, 5, 26, 73, 24, 73, 61);
  fill(0)
  ellipse(x2+150, cosY+190, 70, 70);
  
  // box02
  fill(41, 100, 70)
  rect(350, 70, 200, 200);
  fill(41, 100, 50)
  ellipse(450, 190, 200, 150);
  fill(20, 20, 91)
  ellipse(450, 190, 200, y2+50);
  fill(0)
  ellipse(x2+410, y2+170, 30, 30);
  
  // box03
  fill(47, 56, 40);
  rect(610, 70, 200, 200);
  fill(47, 80, 90);
  ellipse(710, 190, 200, 150);
  fill(247, 23, 80)
  ellipse(710, 190, 200, y2+90);
  fill(0)
  ellipse(710, 190, x1+15, y2-70);
  
  a+=.05;
  b+=5;
  sinA=sin(a);
  cosB=cos(b);
  b1=map(cosB, -1, 5, 0, 100);
  
  // box04
  fill(255)
  rect(80, 350, 200, 200);
  fill(255)
  ellipse(180, 470, 200, 150);
  fill(255)
  ellipse(180, 470, 200, b1+100);
  fill(random(256), random(256), random(256))
  ellipse(180, 470, 70, 70);

  
  
  // box05
  fill(127,30,90)
  rect(350, 350, 200, 200);
  fill(127,30,30)
  ellipse(450, 470, 200, 150);
  fill(13, 30, 95)
  ellipse(450, 470, 200, 55);
  fill(0)
  ellipse(450, 470, 50, 50);
  // ellipse(x2+405, 470, x1+5, 45);
  ellipse(x2+410, 470, x1+10, 48);

  
  // box06
  fill(341,30, 48)
  rect(610, 350, 200, 200);
  fill(341,30, 80)
  ellipse(710, 470, 200, 150);
  fill(137, 20, 90)
  ellipse(710, 470, 200, y2+60);


  // box07
  fill(79,82,70)
  rect(80, 630, 200, 200);
  fill(79,20,90)
  ellipse(180, 750, 200, 150);
  fill(250,50,90)
  ellipse(180, 750, 200, 90);
 
  push()
   noFill()
  translate(180, 750)
  rotate(frameCount*.03)
  ellipseMode(CENTER)
  ellipse(0, 0, 80, 30);
  rotate(frameCount*.01)
  ellipse(0, 0, 85, 31);
  rotate(frameCount*.01)
  ellipse(0, 0, 85, 31);
  pop()
  
  
  
   // box08
  fill(266, 100, 80)
  rect(350, 630, 200, 200);
  fill(266, 100, 50)
  ellipse(450, 750, 200, 150);
  fill(89, 50, 90)
  ellipse(x2+415, cosY+750, x1+82, 70);
  fill(0)
  ellipse(x2+400, 750, 50, 50);
  
  // box09
  fill(229, 55, 42)
  rect(610, 630, 200, 200);
  fill(229, 55, 80)
  ellipse(710, 750, 200, 150);
  fill(25, 27, 90)
  ellipse(710, 750, 200, y2+50);
  

  
  noFill()
  c+=.05;
  d+=.05;
  sinC=sin(c);
  cosD=cos(d);
  // x1=map(sinX, 100, 90, 1, 5);
  // x2=map(sinX, -1, 1, 0, 70);
  c1=map(sinC, -1, 2.5, 0, 500);
  d1=map(cosD, -1, 2.5, 0, 500);
  ellipse(710, d1+470, 50, 50);
  ellipse(710, d1+470, 55, 55);
  ellipse(710, c1+470, 30, 30);
  fill(0)
  ellipse(710, c1+470, 20, 20);
  
    push()
  noStroke()
  fill(255)
  rect(30, 551, 780, 78)
  pop()


  }