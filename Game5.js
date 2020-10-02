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
let baseNube = 750, alturaNube = 300;
let baseGota = 120, alturaGota = 50;

let gotas = [];
let tarjetasNumericasR = [];
let nube;
let piso;

let tablero_Con_Numeros = [];
let numeros_faltantes = [1,2,3,4,5,6,7,8,9,10];
let correct_numbers =0;
let flag_llover = 1;
let flag_press = 0;
let cantidadGotas = 0;

function preload(){
    img0 = loadImage('assets/gotaSin.png'); // Cargar la imagen
    img1 = loadImage('assets/fondoGame4.jpg'); // Cargar la image
    img2 = loadImage('assets/cloudSin.png'); // Cargar la imagen
    
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    button = createButton('submit');
    button.position(0, 65);
    button.mousePressed(check);
    x = width;
    y = height;
    nube = new Nube();
    piso = new Piso();
}

function setup() {
    createTable();
}

function mousePressed() {
        flag_draw = 1;
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

function check(){
    let dis = [];
    let cont = 1, i = 0, ejeX = 1;
    let index = 0;
    let xT = tableros[0].x;
    let yT = tableros[0].y;
    let exit = 0;
    do{
        if(ejeX == tarjetasNumericas[i].number && ejeX <= 5){
            dis.push(dist(xT + (base * (cont)), yT, tarjetasNumericas[i].x, tarjetasNumericas[i].y));
            if(dis[i] < 10){
                tarjetasNumericas[i].x = xT + (base * (cont));
                tarjetasNumericas[i].y = yT;
            }
            i++;
        }
        else if(ejeX == tarjetasNumericas[i].number && ejeX > 5){
            dis.push(dist(xT + (base * (cont)), yT + altura, tarjetasNumericas[i].x, tarjetasNumericas[i].y));
            if(dis[i] < 10){
                tarjetasNumericas[i].x = xT + (base * (cont));
                tarjetasNumericas[i].y = yT + altura;
            }
            i++;
        }
        cont++;
        ejeX++;
        if(cont >= 6){
            cont = 1;
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
    }
    if(cont == dis.length){
        // alert("complete");
    }
}

function check1(index){
    let dis;
    let cont = 0;
    let xT = tableros[0].x;
    let yT = tableros[0].y;
    if(index + 1 <= 5){
        dis = dist(xT + (base * (index + 1)), yT, tarjetasNumericas[index].x, tarjetasNumericas[index].y);
        if(dis < 10){
            tarjetasNumericas[index].x = xT + (base * (index + 1));
            tarjetasNumericas[index].y = yT;
            numeros_faltantes[index] = 0;
        }
    }
    else if(index + 1 > 5){
       cont = index - 5;
        dis = dist(xT + (base * (cont+1)), yT + altura, tarjetasNumericas[index].x, tarjetasNumericas[index].y);
        if(dis < 10){
            tarjetasNumericas[index].x = xT + (base * (cont+1));
            tarjetasNumericas[index].y = yT + altura;
            numeros_faltantes[index] = 0;
        }
    }
    correct_numbers = 0;
   for(let i = 0; i < numeros_faltantes.length; i++){
    if(numeros_faltantes[i] == 0){
        correct_numbers++;
    }
   }
}

function check2(index){
    let dis;
    let cont = 0;
    let xT = tableros[0].x;
    let yT = tableros[0].y;
    let exit = 0;
    if(index + 1 <= 5){
        dis = dist(xT + (base * (index + 1)), yT, tarjetasNumericasR[index].x, tarjetasNumericasR[index].y);
        if(dis < 10){
            tarjetasNumericasR[index].x = xT + (base * (index + 1));
            tarjetasNumericasR[index].y = yT;
            numeros_faltantes[index] = 0;
        }
    }
    else if(index + 1 > 5){
       cont = index - 5;
        dis = dist(xT + (base * (cont+1)), yT + altura, tarjetasNumericasR[index].x, tarjetasNumericasR[index].y);
        if(dis < 10){
            tarjetasNumericasR[index].x = xT + (base * (cont+1));
            tarjetasNumericasR[index].y = yT + altura;
            numeros_faltantes[index] = 0;
        }
    }
    correct_numbers = 0;
   for(let i = 0; i < numeros_faltantes.length; i++){
    if(numeros_faltantes[i] == 0){
        correct_numbers++;
    }
   }
}

setInterval(function(){ 
    flag_llover = 1;
    // console.log(nube.x); 

}, 2000);

function draw(){
    clear();
    background(116, 255, 173 );
    nube.display();
    if(flag_llover){
        flag_llover = 0;
        cantidadGotas = round(random(1,5));
        for(let i = 0; i < cantidadGotas; i++){
            if(gotas.length <= 15){
                gotas.push(new Gota(round(random(1,15))));
            }
        }
    }
    for(let i = 0; i < gotas.length; i++){
        gotas[i].move();
        gotas[i].display();
        if(piso.tocar(gotas[i].y, i)){
            gotas.splice(i,1);
        }

        if(flag_draw == 1 ){
            let index = gotas[i].click(gotas);
            if(index >= 0){
                gotas.splice(index,1);
            }
        }
    }
    if(flag_finish){
    }
}

class Gota {
    constructor(numero) { 
        this.base = baseGota;
        this.altura = alturaGota;
        this.x = round(random(nube.base / 4, nube.base + (nube.altura / 4)));
        this.y = (nube.altura/3) + random(40, 50);
        this.number = numero;
        this.speed = random(1,2);
    }
  
    move() {
        let dis;
        let medio;
        this.y += this.speed;
    }

    click(gotasA){
        for(let i = 0; i < gotasA.length; i++){
            let dis = dist(gotasA[i].x + gotasA[i].base / 2, gotasA[i].y + gotasA[i].altura / 2, mouseX, mouseY);
            if(dis < (gotasA[i].base / 8) && dis < (gotasA[i].altura / 2)){
                flag_draw = 0;
                return i;
            }
        }
        if(flag_draw == 1){
            flag_draw = 0;
        } 
        return -1;
    }

    display() {
        image(img0, this.x, this.y, this.base, this.altura);
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

class Nube {
    constructor() {
        let xT= displayWidth / 7;
        let yT = (displayHeight / 50) - 60;
        this.base = baseNube;
        this.altura = alturaNube;
        this.x = xT;
        this.y = yT;
    }

    move() {
    //   this.x += random(-this.speed, this.speed);
    //   this.y += random(-this.speed, this.speed);
    }

    display() {
        // noStroke();
        image(img2, this.x, this.y, this.base, this.altura);
        // let cont = 1;
        // for(let i = 0; i < 5; i++){
        //     image(img2, this.x + (base * (i+1)), this.y, this.base, this.altura);
        // }
        // for(let i = 0; i < 5; i++){
        //     image(img2, this.x + (base * (i+1)), this.y + altura, this.base, this.altura);
        // }

        // for(let j = 1; j <= 10; j++){
        //     for(let i = 0; i < tablero_Con_Numeros.length; i++){ 
        //         if(j == tablero_Con_Numeros[i] && j <= 5){
        //             textSize(32);
        //             stroke(0, 0, 0);
        //             text(tablero_Con_Numeros[i], this.x + (this.base / 3) + (base * (cont)), this.y + this.altura / 1.4);
        //         }
        //         if(j == tablero_Con_Numeros[i] && j > 5){
        //             textSize(32);
        //             stroke(0, 0, 0);
        //             if(j == 10){
        //                 text(tablero_Con_Numeros[i], this.x + (this.base / 15) + (base * (cont)), this.y + (this.altura / 1.4) + altura);
        //             }
        //             else{
        //                 text(tablero_Con_Numeros[i], this.x + (this.base / 3) + (base * (cont)), this.y + (this.altura / 1.4) + altura);
        //             }
        //         }
        //     }
        //     cont++;
        //     if(cont > 5){
        //         cont = 1;
        //     }
        // }
    }
}

class Piso{
    constructor(){
        this.x = displayWidth;
        this.y = displayHeight;
        this.base = displayHeight;
        this.altura = 10;
    }

    tocar(gotaY){
        if(gotaY >= this.y){
            return 1;
        }
        return 0;
    }
}