
let diametroObj = 65;
let m = 20;
let img0,img1,img3;
let number = 0;
let displayHeight = 650;
let displayWidth = 1100;
let flag_point = -1;
let flag_change = 0;
let flag_finish = 0;
let flag_draw = 0;
let x, y;

let hojas = [];
let tablero;

function preload(){
    img0 = loadImage('assets/hojaSin.png');
    img1 = loadImage('assets/fondoGame2.jpg');
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    tablero = new Tablero();
    tablero.getRandom();
    x = width ;
    y = height;
    for (let i = 0; i < 20; i++) {
        if(i < tablero.cantidad_numeros_repetidos){
            hojas.push(new Hoja(tablero.number));
        }
        else{
            hojas.push(new Hoja(generarRandomSinRepetir(tablero.number)));
        }
    }
}

function setup() {
    createTable();
}

function generarRandomSinRepetir(numeroNoRepetir){
    let exit = 0;
    let numero = 0;
    do{
        numero = round(random(1, 10));
        if(numero != numeroNoRepetir){
            exit = 1;
        }
    }while(exit == 0);
    return numero;
}

function disObjes(obj1x, obj1y, obj2x, obj2y){
    let dis = 0;
    dis = dist(obj1x, obj1y, obj2x, obj2y);
    return dis;
}

function mousePressed() {
    flag_draw = 1;
}

function draw(){
    image(img1, 0, 0, displayWidth, displayHeight);
    tablero.display();
    
    for (let i = 0; i < hojas.length; i++) {
        hojas[i].move();
        hojas[i].display();
    }
    if(flag_finish){
        flag_finish = 0;
        let next = confirm("Try again?");
        if(next == 1){
            hojas.splice(0, hojas.length);
            tablero.getRandom();
            for (let i = 0; i < 20; i++) {
                if(i < tablero.cantidad_numeros_repetidos){
                    hojas.push(new Hoja(tablero.number));
                }
                else{
                    hojas.push(new Hoja(generarRandomSinRepetir(tablero.number)));
                }
            }
        }
    }
    if(flag_draw){
        flag_draw = 0;
        for (let i = 0; i < hojas.length; i++) {    
            distancia = disObjes(hojas[i].x + diametroObj / 2, hojas[i].y + diametroObj / 2, mouseX, mouseY);
            if(distancia < diametroObj / 2 && hojas[i].number == tablero.number){
                hojas.splice(i,1);
                if(hojas[0].number != tablero.number){
                    flag_finish = 1;
                }
            }
        }
    }
}

class Hoja {
    constructor(number) {
        let xr = random(170, displayWidth - diametroObj);
        let yr = random(100, displayHeight - 200);
        let dis = 0;
        let exit = 0;
        let distancia = 100;
        let iterations = 0;

        if(hojas.length >= 1){
            for(let i = 0; i < hojas.length; i++){
                dis = disObjes(hojas[i].x + diametroObj / 2, hojas[i].y + diametroObj / 2, xr, yr);

                if(dis < diametroObj){
                    do{
                        xr = random(170, displayWidth - diametroObj);
                        yr = random(100, displayHeight - 200);
                        dis = disObjes(hojas[i].x + diametroObj / 2, hojas[i].y + diametroObj / 2, xr, yr);
               
                        if( diametroObj > distancia){
                            exit = 1;
                        }
                        if(iterations >= 10){
                            exit = 1;
                            iterations = 0;
                        }
                        iterations++;
                    }while(exit == 0);
                } 
            }
        }

        if(xr >= 0){
            this.x = xr;
        }
        if(yr >= 0){
            this.y = yr;
        }

        this.number = number;
        this.diameter = diametroObj;
        this.speed = 0.4;
    }
  
    move() {
        let medio;
        let dis;
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        for(let i  = 0; i < hojas.length; i++){
            dis = disObjes(this.x, this.y, hojas[i].x, hojas[i].y);
            if(dis < diametroObj + 40 && dis != 0){
                if(this.x > hojas[i].x){
                    medio = hojas[i].y - this.y;
                    if(medio < 0){
                        // top
                        // hojas[i].x +=  2;
                        hojas[i].y +=  - 2;
                    }
                    else{
                        // top
                        // hojas[i].x +=  2;
                        hojas[i].y +=  2;

                    }
                    
                }
               
                 if(this.x < hojas[i].x && this.y < hojas[i].y){
                    // dow right 
                    hojas[i].x +=  5;
                    hojas[i].y +=  5;
                }
                 if(this.x > hojas[i].x && this.y > hojas[i].y){
                    // top left
                    hojas[i].x +=  -5;
                    hojas[i].y +=  -5;
                }
                 if(this.x < hojas[i].x && this.y > hojas[i].y){
                    // top right
                    hojas[i].x +=  + 5;
                    hojas[i].y +=  - 5;
                }
                 if(this.x > hojas[i].x && this.y < hojas[i].y){
                    // top
                    hojas[i].x += - 5;
                    hojas[i].y += + 5;
                }
                
                if(hojas[i].x <=  300 ){
                    hojas[i].x = 300;
                }
                if(hojas[i].y <=  50 ){
                    hojas[i].y = 50;
                }
                if(hojas[i].x >=  displayWidth - diametroObj){
                    hojas[i].x = displayWidth - diametroObj;
                }
                if(hojas[i].y >=  displayHeight - diametroObj - 200){
                    hojas[i].y = displayHeight - diametroObj - 200;
                }
            }
        }
    }

    display() {
        noStroke();
        image(img0, this.x, this.y, this.diameter, this.diameter);
        textSize(32);
        stroke(255, 255, 255);
        fill(0,30,0);
        if(this.number <= 9){
            text(this.number, this.x + diametroObj / 3, this.y + diametroObj / 1.5);
        }
        else{
            text(this.number, this.x + diametroObj / 4, this.y + diametroObj / 1.5);
        }
    }
}

class Tablero{
    constructor(){
        this.x = 50;
        this.y = 50;
        this.number = 0;
        this.base = 100;
        this.altura = 80;
        this.cantidad_numeros_repetidos = 0;
    }

    getRandom(){
        this.number = round(random(1, 10));
        this.cantidad_numeros_repetidos = round(random(1, 10));
    }

    display(){
        fill(235, 171, 59);
        noStroke();
        rect(this.x, this.y, this.base, this.altura);
        if(this.number != 0){
            if(this.number >= 10){
                textSize(32);
                stroke(0, 0, 0);
                fill(0);
                text(this.number, this.x + (this.base / 3), this.y + (this.altura / 1.6));
            }
            else if(this.number <= 9){
                textSize(32);
                stroke(0, 0, 0);
                fill(0);
                text(this.number, this.x + (this.base / 2.5), this.y + (this.altura / 1.6));
            }
        }
    }
}