function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees instead of radians
}

function draw() {
  background(204, 204, 255);
  
  // Move the origin to the center of the canvas
  translate(width / 2, height / 2); 
  // Rotate the drawing to start from the top (12 o'clock)
  rotate(-90); 
  
  //GIve the variables values
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  noFill();
  
  // Draw second hand
  let secondAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(secondAngle);
  // Peach color for seconds hand
  stroke(255, 128, 128); 
  line(0, 0, 100, 0);
  pop();

  // Draw minute hand
  let minuteAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(minuteAngle);
  // Violet color for minutes hand
  stroke(204, 20, 255);
  line(0, 0, 75, 0);
  pop();

  // Draw hour hand
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hourAngle);
  // Blue color for hours hand
  stroke(0, 0, 255); 
  line(0, 0, 50, 0);
  pop();

  // Draw the clock center point
  stroke(0);
  point(0, 0);
}
