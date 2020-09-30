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
let flag_cath = 0;
let flag_num_to_move = 0;
let x, y;
let base = 45, altura = 50;

let tarjetasNumericas = [];
let tableros = [];

let tablero_Con_Numeros = [];
let tablero_tomar_numeros = [1,2,3,4,5,6,7,8,9,10];

function preload(){
    img0 = loadImage('assets/cuadroCut.jpg'); // Cargar la imagen
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    generarNumerosTablero();
    button = createButton('submit');
    button.position(0, 65);
    button.mousePressed(check);
    // console.log("len " + tablero_tomar_numeros.length);
    x = width;
    y = height;
    for (let i = 0; i < tablero_tomar_numeros.length; i++) {
        tarjetasNumericas.push(new tarjeta(tablero_tomar_numeros[i], i+1));
    }
    tableros.push(new tablero());
    
    // console.log("lens " + tarjetasNumericas.length);
    for (let i = 0; i < tarjetasNumericas.length; i++) {
        // console.log(tarjetasNumericas[i]);
    }
    // check();
}

function setup() {
    createTable();
}

function mousePressed() {
    if(mouseIsPressed == 1){
        flag_draw = 1;
    }
}

function generarNumerosTablero(){
    let cantidadNumerosEscritos = round(random(1, 5));
    // console.log("cantidad de numeros " + cantidadNumerosEscritos);
    let i = 0;
    let exit = 0;
    let index;
    let nuevoNumero;
    // index = tablero_tomar_numeros.indexOf(12);
    // console.log(index);
    // let pos = frutas.indexOf('Banana');
    do{
        index = 0;
        nuevoNumero = round(random(1, 10));
        // tablero_Con_Numeros.push(round(random(1, 10)));
        if(i == 0){
            index = tablero_tomar_numeros.indexOf(nuevoNumero);
            tablero_tomar_numeros.splice(index, 1);
            tablero_Con_Numeros.push(nuevoNumero);
            i++;
        }
        else if(i >= 1){
            index = tablero_tomar_numeros.indexOf(nuevoNumero);
            if(index > 0){
                // index = tablero_tomar_numeros.indexOf(tablero_Con_Numeros[i]);
                tablero_tomar_numeros.splice(index, 1);
                tablero_Con_Numeros.push(nuevoNumero);
                i++;
            }
        }
        // i++;
        if(i == cantidadNumerosEscritos){
            exit = 1;
        }
    }while(exit == 0);
    for(i = 0; i < tablero_Con_Numeros.length; i++){
        // console.log(tablero_Con_Numeros[i]);
    }
    // console.log("a tomar");
    for(i = 0; i < tablero_tomar_numeros.length; i++){
        // console.log(tablero_tomar_numeros[i]);
    }
}

function check(){
    let dis = [];
    let cont = 1, i = 0, ejeX = 1;
    let index = 0;
    let xT = tableros[0].x;
    let yT = tableros[0].y;
    let exit = 0;
    do{
        console.log(i);
        if(ejeX == tarjetasNumericas[i].number && ejeX <= 5){
            console.log("abajo " + cont);
            dis.push(dist(xT + (base * (cont)), yT, tarjetasNumericas[i].x, tarjetasNumericas[i].y));
            i++;
        }
        else if(ejeX == tarjetasNumericas[i].number && ejeX > 5){
            console.log("arr " + cont);
            dis.push(dist(xT + (base * (cont)), yT + altura, tarjetasNumericas[i].x, tarjetasNumericas[i].y));
            i++;
        }
        cont++;
        ejeX++;
        if(cont >= 6){
            cont = 1;
        }
        if(i >= tarjetasNumericas.length){
            i = tarjetasNumericas.length-1;
        }
        
        if(ejeX > 10 ){
            exit = 1;
        }
    }while(exit == 0);
    cont = 0;
    for(let i = 0; i < dis.length; i++){
        if(dis[i] < 10){
            cont++;
        }
        console.log(dis[i]);
    }
    if(cont == dis.length){
        alert("complete");
    }
}

function draw(){
    clear();
    background(210);
    tableros[0].display();
    for (let i = 0; i < tarjetasNumericas.length; i++) {
        
        tarjetasNumericas[i].move();
        tarjetasNumericas[i].display();
        
        if(mouseIsPressed == 1 ){
            if(flag_cath == 0){
                let distancia;
                distancia = dist(tarjetasNumericas[i].x + tarjetasNumericas[i].base / 2, tarjetasNumericas[i].y + tarjetasNumericas[i].altura / 2, mouseX, mouseY);
                if(distancia < base / 2 && distancia < altura){
                    console.log(tarjetasNumericas[i]);
                    flag_cath = 1;
                    flag_num_to_move = i;
                    
                    // console.log(flag_num_to_move);
                }
            }
        }
        else{
            flag_cath = 0;
            
        }
    }
    if(flag_cath == 1){

        tarjetasNumericas[flag_num_to_move].x = mouseX - (tarjetasNumericas[flag_num_to_move].base / 2);
        tarjetasNumericas[flag_num_to_move].y = mouseY - (tarjetasNumericas[flag_num_to_move].altura / 2);
        tarjetasNumericas[flag_num_to_move].move();
        tarjetasNumericas[flag_num_to_move].display();
    }
}

class tarjeta {
    constructor(numero, index) { 
        this.base = base;
        this.altura = altura;
        this.x = index * base;
        this.y = 0;
        this.number = numero;
        this.diameter = 60;
    }
  
    move() {
    //   this.x += random(-this.speed, this.speed);
    //   this.y += random(-this.speed, this.speed);

    
    }

    display() {
        // noStroke();
        image(img0, this.x, this.y, this.base, this.altura);
        textSize(32);
        stroke(0, 0, 0);
        // fill(255,255,255);
        if(this.number <= 9){
            // fill(0, 102, 153);
            text(this.number, this.x + this.base / 3, this.y + this.altura / 1.4);
        }
        else{
            text(this.number, this.x + this.base / 15, this.y + this.altura / 1.4);
        }
    }
  }

class tablero {
    constructor() {
        let xT= displayWidth / 3;
        let yT = displayHeight / 4;
        this.base = base;
        this.altura = altura;
        this.x = xT;
        this.y = yT;
        // this.number = numero;
    }

    move() {
    //   this.x += random(-this.speed, this.speed);
    //   this.y += random(-this.speed, this.speed);
    }

    display() {
        // noStroke();
        let cont = 1;
        for(let i = 0; i < 5; i++){
            rect(this.x + (base * (i+1)), this.y, this.base, this.altura);
        }
        for(let i = 0; i < 5; i++){
            rect(this.x + (base * (i+1)), this.y + altura, this.base, this.altura);
        }

        for(let j = 1; j <= 10; j++){
            for(let i = 0; i < tablero_Con_Numeros.length; i++){
                
                if(j == tablero_Con_Numeros[i] && j <= 5){
                    textSize(32);
                    stroke(0, 0, 0);
                    text(tablero_Con_Numeros[i], this.x + (this.base / 3) + (base * (cont)), this.y + this.altura / 1.4);
                }
                if(j == tablero_Con_Numeros[i] && j > 5){
                    textSize(32);
                    stroke(0, 0, 0);
                    if(j == 10){
                        text(tablero_Con_Numeros[i], this.x + (this.base / 15) + (base * (cont)), this.y + (this.altura / 1.4) + altura);
                    }
                    else{
                        text(tablero_Con_Numeros[i], this.x + (this.base / 3) + (base * (cont)), this.y + (this.altura / 1.4) + altura);
                    }
                }
            }
            cont++;
            if(cont > 5){
                cont = 1;
            }
        }
    }
}