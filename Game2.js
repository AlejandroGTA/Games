
let diametroObj = 60;
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
    createCanvas(displayWidth, displayHeight);
   
    x = width / 2;
    y = height;
    for (let i = 0; i < 20; i++) {
        hojas.push(new Hoja(i + 1));
    }
    
}

function setup() {
    createTable();
}

function disObjes(obj1x, obj1y, obj2x, obj2y){
    let dis = 0;
    dis = dist(obj1x, obj1y, obj2x, obj2y);
    return dis;
}

function mousePressed() {
    let distancia = 0;
    flag_draw = 1;
    for (let i = 0; i < hojas.length; i++) {
        // hojas[i].move();
        // hojas[i].display();

        // console.log(mouseX + "  " + mouseY);
        
        distancia = disObjes(hojas[i].x, hojas[i].y, mouseX, mouseY);
        // distancia = distancia / 4;
        // console.log("X" + hojas[i].x + "  Y" + hojas[i].y + "   XM" + mouseX + "   YM", mouseY + "   D" + distancia);
        // console.log(distancia);
        // distancia = distancia - hojas[i].diameter / 2;
        // console.log(distancia);
 

        if(distancia < diametroObj + 30){
            console.log(hojas[i]);
        }
    }
}

function draw(){
    // clear();
    // createTable();
    background(200);
    // Draw a circle
    // stroke(50);
    // fill(100);
    // clear();
    circle(0,0,40);
    // texture(img0);
    // rotate(PI / 2);
    // line(100, 100, mouseX, mouseY);
    
    for (let i = 0; i < hojas.length; i++) {
        hojas[i].move();
        hojas[i].display();
        
        // hojas[i].mousePressed();
        if(flag_draw){
            // console.log("asd");
            strokeWeight(5);
            line(hojas[i].x, hojas[i].y, mouseX, mouseY);
            flag_draw = 0;
        }
    }
   
}

class Hoja {
    constructor(number) {
        let xr = random(100, 300);
        let yr = random(100, 300);
        let dis = 0;
        let exit = 0;
        let distancia = 100;
        // console.log(hojas.length);
        
        this.number = number;


        if(hojas.length >= 1){
            // console.log("entra");
            for(let i = 0; i < hojas.length; i++){
                dis = disObjes(hojas[i].x, hojas[i].y, xr, yr);
                console.log(dis);
                if(diametroObj > dis){
                    console.log("co");
            //         console.log(dis);
            //         do{
            //             xr = random(displayWidth / 4);
            //             yr = random(displayHeight / 3);
            //             dis = dist(hojas[i].x, hojas[i].y, xr, yr);
            //             if(dis > distancia){
            //                 exit = 1;
            //             }
            //         }while(exit == 0);
                } 
            }
            // dist();
        }


        if(xr >= 0){
            this.x = xr;
        }
        if(yr >= 0){
            this.y = yr;
        }
    //   this.x = random(width);
    //   this.y = random(height);
      this.diameter = diametroObj;
      this.speed = 0.4;
    }
  
    move() {
        let dis;
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        for(let i  = 0; i < hojas.length; i++){
            dis = disObjes(this.x, this.y, hojas[i].x, hojas[i].y);
            if(dis < diametroObj + 30 && dis != 0){
                // console.log(dis);
                if(this.x > hojas[i].x && (this.y - hojas[i].y)){
                    // top
                    // hojas[i].x +=  2;
                    // hojas[i].y +=  2;
                }
                else if(this.x > hojas[i].x && this.y > hojas[i].y){
                    // top
                    // hojas[i].x +=  2;
                    // hojas[i].y +=  2;
                }
                else if(this.x > hojas[i].x && this.y > hojas[i].y){
                    // top
                    // hojas[i].x +=  2;
                    // hojas[i].y +=  2;
                }
                else if(this.x > hojas[i].x && this.y > hojas[i].y){
                    // top
                    // hojas[i].x +=  2;
                    // hojas[i].y +=  2;
                }
                else if(this.x < hojas[i].x && this.y < hojas[i].y){
                    // dow right 
                    hojas[i].x +=  2;
                    hojas[i].y +=  2;
                }
                else if(this.x > hojas[i].x && this.y > hojas[i].y){
                    // top left
                    hojas[i].x +=  -2;
                    hojas[i].y +=  -2;
                }
                else if(this.x < hojas[i].x && this.y > hojas[i].y){
                    // top right
                    hojas[i].x +=  + 2;
                    hojas[i].y +=  - 2;
                }
                else if(this.x > hojas[i].x && this.y < hojas[i].y){
                    // top
                    hojas[i].x += - 2;
                    hojas[i].y += + 2;
                }
                


                if(hojas[i].x <=  0 ){
                    hojas[i].x = 0;
                }
                if(hojas[i].y <=  0 ){
                    hojas[i].y = 0;
                }
            }
        }
    }

    display() {
        noStroke();
        image(img0, this.x, this.y, this.diameter, this.diameter);
        // rect(this.x, this.y, this.diameter, this.diameter);
    }
  }