let m = 20;
let img0,img1,img2;
let number = 0;
let displayHeight = 700;
let displayWidth = 1000;
let flag_point = -1;
let flag_change = 0;
let flag_finish = 0;
let flag_draw = 0;
let flag_cath = 0;
let flag_num_to_move = 0;
let flag_reverse = 0;
let x, y;
let baseNumero = 120, alturaNumero = 50;
let basehelicoptero = 120, alturahelicoptero = 80;

let tarjetasNumericasR = [];
let helicoptero;
let numeros = [];
let piso;

let tablero_Con_Numeros = [];
let numeros_faltantes = [1,2,3,4,5,6,7,8,9,10];
let correct_numbers =0;
let flag_llover = 1;
let flag_press = 0;
let cantidadNumeros = 0;

function preload(){
    img0 = loadImage('assets/helicopteroSin.png');
    img1 = loadImage('assets/burbujaSin.png'); 
    img2 = loadImage('assets/fondoGame6.jpg'); 
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    button = createButton('submit');
    button.position(0, 65);
    x = width;
    y = height;
    helicoptero = new Helicoptero();
}

function setup() {
    createTable();
}

function generarNumerosTablero(){
    let cantidadNumerosEscritos = round(random(1, 5));
    let i = 0;
    let exit = 0;
    let index;
    let nuevoNumero;
    do{
        index = 0;
        nuevoNumero = round(random(1, 10));
        if(i == 0){
            index = tablero_tomar_numeros.indexOf(nuevoNumero);
            tablero_tomar_numeros.splice(index, 1);
            tablero_Con_Numeros.push(nuevoNumero);
            i++;
        }
        else if(i >= 1){
            index = tablero_tomar_numeros.indexOf(nuevoNumero);
            if(index > 0){
                tablero_tomar_numeros.splice(index, 1);
                tablero_Con_Numeros.push(nuevoNumero);
                i++;
            }
        }
        if(i == cantidadNumerosEscritos){
            exit = 1;
        }
    }while(exit == 0);
}

setInterval(function(){ 
    flag_llover = 1;
}, 2000);

function draw(){
    clear();
    background(116, 255, 173 );
    image(img2, 0,0, displayWidth, displayHeight);
    helicoptero.display();
    if(keyIsPressed == 1){
        if (keyCode === UP_ARROW) {
            helicoptero.move(1);
        } else if (keyCode === DOWN_ARROW) {
            helicoptero.move(2);
        }
    }
    if(flag_llover){
        flag_llover = 0;
        cantidadNumeros = round(random(1,2));
        for(let i = 0; i < cantidadNumeros; i++){
            if(numeros.length <= 15){
                numeros.push(new Numeros(round(random(1,15))));
            }
        }    
    }
    for(let i = 0; i < numeros.length; i++){
        numeros[i].move();
        numeros[i].display();
        if(numeros[i].fueraMarco() || numeros[i].colicion(helicoptero.x, helicoptero.y) == 1){
            numeros.splice(i, 1);
        }
    }
}

class Helicoptero {
    constructor(numero) { 
        this.base = basehelicoptero;
        this.altura = alturahelicoptero;
        this.x = 50;
        this.y = displayHeight / 2;
        this.speed = 3;
    }
  
    move(direccion) {
        if(direccion == 1){
            this.y -= this.speed;
        }
        if(direccion == 2){
            this.y += this.speed;
        }

        if(this.y >= displayHeight - this.altura){
            
            this.y = displayHeight - this.altura;
        }
        if(this.y <= 0){
            this.y = 0;
        }
    }

    display() {
        image(img0, this.x, this.y, this.base, this.altura);
    }
}

class Numeros {
    constructor(numero) {
        this.base = baseNumero;
        this.altura = alturaNumero;
        this.x = displayWidth + 50;
        this.y = round(random(50, displayHeight - alturaNumero ));
        this.number = numero;
        this.speed = random(1, 2);
    }

    move() {
        this.x -= this.speed;
    }

    colicion(x,y){
        let dis = dist(this.x + this.base / 2, this.y + this.altura / 2, x, y);
        if(dis < this.base){
            return 1;
        }
        return 0;
    }

    fueraMarco(){
        if(this.x <= -this.base){
            return 1;
        }
        return 0;
    }

    display() {
        image(img1, this.x, this.y, this.base, this.altura);
        textSize(32);
        stroke(0, 0, 0);
        if(this.number <= 9){
            text(this.number, this.x + this.base / 2.35, this.y + this.altura / 1.4);
        }
        else{
            text(this.number, this.x + this.base / 3, this.y + this.altura / 1.3);
        }
    }
}