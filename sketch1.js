/*
 * @name Simple Draw
 * @description Touch to draw on the screen using mouseX, mouseY, pmouseX, and pmouseY values.
 */
let dimeter = 150;
let m = 150;
let numberX = [
  0.6792041681479 * m,
  0.771311581754* m,
  0.6884149095085* m,
  0.4903839702556* m,
  0.3660389618875* m,
  0.0298469022256* m,
  -0.1083142181834* m,
  -0.3523988642393* m,
  -0.4214794244438* m,
  -0.4214794244438* m,
  -0.1267357009046* m,
  -0.1221303302243* m,
  -0.2510807092727* m,
  -0.310950528116* m,
  -0.3892418296817* m
  
];
let numberY = [
  -0.3830136954662 * m, 
  -0.0928753426073 * m, 
  0.1512093034487 * m,
  0.3216080186198* m,
  0.340029501341* m,
  0.3077919065789* m,
  -0.0652431185255* m,
  -0.2909062818602* m,
  -0.5211748158752* m,
  -0.6961789017266* m,
  -0.6501251949236* m,
  -0.3369599886632* m,
  0.1373931914078* m,
  0.2755543118168* m,
  0.5012174751515* m
  ];
let cnv;
// let displayWidth = 2000;
// let displayHeight = 100;
(0.1512093034487, 0.6884149095085)

function setup() {
  createCanvas(displayWidth, displayHeight);
  drwaNumber();
}

function draw(){
  print(mouseX); 
}

function drwaNumber(){
  strokeWeight(4);
  for(let i=0; i< numberX.length; i++){
    circle(displayWidth/2 + numberX[i], displayWidth /  2 + numberY[i], displayWidth/dimeter);
    // for(let j= 0; j< 2; j++){
    //   circle(numberX[i], numberY[j], displayWidth/dimeter);
    // }    
  }
    stroke(0);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
