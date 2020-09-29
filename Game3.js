/*
 * @name Simple Draw
 * @description Touch to draw on the screen using mouseX, mouseY, pmouseX, and pmouseY values.
 */
// let dimeter = 20;
let m = 20;
let img0,img2,img3;
let number = 0;
let displayHeight = 700;
let displayWidth = 700;
let flag_point = -1;
let flag_change = 0;
let flag_finish = 0;
let flag_draw = 0;
let x, y;

let hojas = [];

function preload(){
    img0 = loadImage('assets/hoja.jpg'); // Cargar la imagen
}

function createTable(){
    createCanvas(displayWidth, displayHeight, WEBGL);
    translate(-220, 0, 0);
    x = width / 2;
    y = height;
    for (let i = 0; i < 1; i++) {
        hojas.push(new Hoja());
    }
    
    // imageMode(CORNER);
    // fill(0);
    // textSize(12);
    // textFont('Georgia', 200);
    // text('Georgia', 12, 30);
     
}

function setup() {
    createTable();
}

function mousePressed() {
    let distancia = 0;
    flag_draw = 1;
    // for (let i = 0; i < hojas.length; i++) {
    //     // hojas[i].move();
    //     // hojas[i].display();

    //     // console.log(mouseX + "  " + mouseY);
        
    //     distancia = dist(hojas[i].x * 4, hojas[i].y * 3, mouseX, mouseY);
    //     distancia = distancia / 4;
    //     console.log("X" + hojas[i].x + "  Y" + hojas[i].y + "   XM" + mouseX + "   YM", mouseY + "   D" + distancia);
    //     // console.log(distancia);
    //     // distancia = distancia - hojas[i].diameter / 2;
    //     // console.log(distancia);
 

    //     if(distancia < 60){
    //         // console.log(hojas[i]);
    //     }
    // }
}

function draw(){
    // clear();
    // createTable();
    background(200);
    // Draw a circle
    // stroke(50);
    // fill(100);
    // clear();
    texture(img0);
    // rotate(PI / 2);
    line(100, 100, mouseX, mouseY);
    for (let i = 0; i < hojas.length; i++) {
        hojas[i].move();
        hojas[i].display();
        
        // hojas[i].mousePressed();
        if(flag_draw){
            console.log("asd");
            strokeWeight(5);
            line(100, 100, mouseX, mouseY);
            flag_draw = 0;
        }
    }
   
}

class Hoja {
    constructor() {
        let xr = random(100, 300);
        let yr = random(100, 300);
        let dis = 0;
        let exit = 0;
        let distancia = 100;
        // console.log(hojas.length);
        

        if(xr >= 0){
            this.x = xr;
        }
        if(yr >= 0){
            this.y = yr;
        }
    //   this.x = random(width);
    //   this.y = random(height);
      this.diameter = 60;
      this.speed = 0.4;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);

    //   if(hojas.length >= 2){
    //     console.log("entra");
    //     for(let i = 0; i < hojas.length; i++){
    //         dis = dist(hojas[i].x, hojas[i].y, xr, yr);
    //         console.log(i);
    //         if(dis < distancia){
    //             console.log("co");
    //             console.log(dis);
    //             do{
    //                 xr = random(displayWidth / 4);
    //                 yr = random(displayHeight / 3);
    //                 dis = dist(hojas[i].x, hojas[i].y, xr, yr);
    //                 if(dis > distancia){
    //                     exit = 1;
    //                 }
    //             }while(exit == 0);
    //         } 
    //     }
    //     // dist();
    // }
    }
  
    // mousePressed(){
    //     console.log("asd");
    // }

    display() {
        noStroke();
        rect(this.x, this.y, this.diameter, this.diameter);
    }
  }