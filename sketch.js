function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  let hours =hour();
  let minutes = minute();
  let seconds = second();
  let milliseconds = millis()
  stroke("#9CF6F6");
  noFill();
  ellipse(0,0, 300, 300);
  stroke("#e303fc")
  let secondangle = map(seconds, 0, 60, 0, 360);
  fill(255, 255, 255, 150)
  let minuteangle = map(minutes, 0,60,0,360)+map(seconds, 0, 60, 0, 6);
  stroke("#EF6461")
  
  let millisAngle = map(milliseconds, 0, 1000, 0, 360);
  stroke("white")
  arc(50 , 250 , 100, 100, 0, millisAngle)

  arc(0,0, 250, 250, 0,secondangle);

  stroke("#F1DEDE");
  strokeWeight(8);
  stroke("#EF6461")
  arc(0, 0, 200, 200, 0,minuteangle);
  let hourangle = map(hours %12,0,12,0,360);
  stroke("#D972FF");
  
  arc(0, 0, 150, 150, 0,hourangle);
  stroke("#D972FF");


  push();
  stroke("#F1DEDE");

  rotate(secondangle);
  line(0,0,125,0);
  pop();

  push();
  rotate(minuteangle);
  stroke("#EF6461");
  line(0,0,100,0);
  pop();

  push();
  rotate(hourangle);
  stroke("#D972FF");
  line(0,0, 75, 0);
  pop();

  push();
  rotate(-270);
  stroke(255)
  noFill();
  strokeWeight(1)
  textFont("Arial", 20);
  text("12", -10, -156);
  text("6", -10, 175);
  text("9", -175, 0);
  text("3", 175, 0);
  pop()

  push();
  rotate(-270);
  strokeWeight(1)
  textFont("Great Vibes");
  stroke("grey");
  text("made by the looper lina <3", -180, 200);
  noFill();
  strokeWeight(1)
  pop()
  
}
