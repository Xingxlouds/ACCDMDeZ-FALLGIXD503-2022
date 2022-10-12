function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    frameRate(200);
  }
  
  function draw() {
      fill(252, 222, 156);
      for( var x = 50; x < width ; x = x+100){
     for (var y = 50 ; y < height ; y = y+100){
       
      fill(50,50,80);
      rect(x- 10, y-10, 80)
       
      fill(130, 70, 20);
      ellipse( x +80, y -20, 30)
       
    fill(252, 222, 100)
    ellipse(300, 300, 150, 100, 50);
    fill(0, 50, 255)
    ellipse(300, 300, 150, 60, 50);
    fill(80, 60, 80)
    ellipse(300, 300, frameCount, frameCount);
       
    fill(252, 30, 100)
    ellipse(100, 100, 150, 100, 50);
    fill(0, 50, 80)
    ellipse(100, 100, 150, 60, 50);
    fill(100, 50, 50)
    ellipse(100, 100, 50, 50, 50);
       
       
    fill(10, 30, 100)
    ellipse(500, 500, 150, 100, 50);
    fill(0, 50, 80)
    ellipse(500, 500, 150, 60, 50);
    fill(20, 80, 50)
    ellipse(500, 500, 50, 50, 50);
  
     }
    }
  
  
  }