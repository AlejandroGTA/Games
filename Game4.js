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
let base = 90, altura = 90;

let tarjetasNumericas = [];
let tarjetasNumericasR = [];
let tableros = [];

let tablero_Con_Numeros = [];
let numeros_faltantes = [1,2,3,4,5,6,7,8,9,10];
let correct_numbers =0;

function preload(){
    img0 = loadImage('assets/rubySin.png'); // Cargar la imagen
    img1 = loadImage('assets/fondoGame4.jpg'); // Cargar la image
    img2 = loadImage('assets/rubyFondo.png'); // Cargar la imagen
    
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    button = createButton('submit');
    button.position(0, 65);
    button.mousePressed(check);
    x = width;
    y = height;
    for (let i = 0; i < 10; i++) {
        tarjetasNumericas.push(new tarjeta(i+1));
    }
    for (let i = 10; i >= 1; i--) {
        tarjetasNumericasR.push(new tarjeta(i));
    }
    tableros.push(new tablero());
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
function draw(){
    clear();
    image(img1, 0, 0, displayWidth, displayHeight);
    tableros[0].display();
    if(flag_reverse == 0){
        textSize(32);
        stroke(0, 0, 220);
        fill(255);
        text("normal", 500, 100);
        fill(0);
        for (let i = 0; i < tarjetasNumericas.length; i++) {
            tarjetasNumericas[i].move();
            tarjetasNumericas[i].display();
            if(mouseIsPressed == 1 ){
                if(flag_cath == 0){
                    let distancia;
                    distancia = dist(tarjetasNumericas[i].x + tarjetasNumericas[i].base / 2, tarjetasNumericas[i].y + tarjetasNumericas[i].altura / 2, mouseX, mouseY);
                    if(distancia < base / 2 && distancia < altura){
                        flag_cath = 1;
                        flag_num_to_move = i;
                    }
                }
            }
            else{
                flag_cath = 0;
            }
        }
        if(flag_cath == 1){ 
            tarjetasNumericas[flag_num_to_move].move();
            tarjetasNumericas[flag_num_to_move].x = mouseX - (tarjetasNumericas[flag_num_to_move].base / 2);
            tarjetasNumericas[flag_num_to_move].y = mouseY - (tarjetasNumericas[flag_num_to_move].altura / 2);
            // tarjetasNumericas[flag_num_to_move].move();
            check1(flag_num_to_move);
            tarjetasNumericas[flag_num_to_move].move();
            tarjetasNumericas[flag_num_to_move].display();
            if(correct_numbers == 10){
                flag_cath = 0;
                let next = confirm("YOU ARE TRY AGAIN?");
                if(next == 1){
                    flag_reverse = 1;
                    correct_numbers = 0;
                    numeros_faltantes = [10,9,8,7,6,5,4,3,2,1];
                    for(let i = 0; i < tarjetasNumericasR.length; i++){
                        tarjetasNumericasR[i].x = base * (i + 1);
                        tarjetasNumericasR[i].y = displayHeight / 3;
                    }
                }
                else{
                    
                    numeros_faltantes = [1,2,3,4,5,6,7,8,9,10];
                    for(let i = 0; i < tarjetasNumericas.length; i++){
                        tarjetasNumericas[i].x = base * (i + 1);
                        tarjetasNumericas[i].y = displayHeight / 3;
                    }
                }
            }
        }
    }
    else{
        textSize(32);
        stroke(0, 0, 220);
        fill(255);
        text("reverse", 500, 100);
        fill(0);
        for (let i = 0; i < tarjetasNumericasR.length; i++) {
            tarjetasNumericasR[i].move();
            tarjetasNumericasR[i].display();
            if(mouseIsPressed == 1 ){
                if(flag_cath == 0){
                    let distancia;
                    distancia = dist(tarjetasNumericasR[i].x + tarjetasNumericasR[i].base / 2, tarjetasNumericasR[i].y + tarjetasNumericasR[i].altura / 2, mouseX, mouseY);
                    if(distancia < base / 2 && distancia < altura){
                        flag_cath = 1;
                        flag_num_to_move = i;
                    }
                }
            }
            else{
                flag_cath = 0;
            }
        }
        if(flag_cath == 1){ 
            tarjetasNumericasR[flag_num_to_move].move();
            tarjetasNumericasR[flag_num_to_move].x = mouseX - (tarjetasNumericasR[flag_num_to_move].base / 2);
            tarjetasNumericasR[flag_num_to_move].y = mouseY - (tarjetasNumericasR[flag_num_to_move].altura / 2);
            // tarjetasNumericasR[flag_num_to_move].move();
            check2(flag_num_to_move);
            tarjetasNumericasR[flag_num_to_move].move();
            tarjetasNumericasR[flag_num_to_move].display();
        }
        if(correct_numbers == 10){
            flag_cath = 0;
            let next = confirm("YOU finish");
            if(next == 1){
                
                // flag_reverse = 1;
                // numeros_faltantes = [10,9,8,7,6,5,4,3,2,1];
            }
            else{
                flag_reverse = 0;
                correct_numbers = 0;
                numeros_faltantes = [1,2,3,4,5,6,7,8,9,10];
                for(let i = 0; i < tarjetasNumericas.length; i++){
                    tarjetasNumericas[i].x = base * (i + 1);
                    tarjetasNumericas[i].y = displayHeight / 3;
                }
            }
        }
    }
   
 
}

class tarjeta {
    constructor(numero) { 
        this.base = base;
        this.altura = altura;
        this.x = numero * base;
        this.y = displayHeight / 2;
        this.number = numero;
        this.diameter = 60;
    }
  
    move() {
        let dis;
        let medio;
        if(flag_reverse == 0){
            for(let i = 0; i < numeros_faltantes.length && flag_cath == 0; i++){
                if(numeros_faltantes[i] != 0){
                    tarjetasNumericas[i].y += 0.7;
                }
            }
            if(this.y >= displayHeight - altura){
                this.y = displayHeight - altura;
            }
            if(this.x >= displayWidth - base){
                this.x = displayWidth - base;
            }
            for(let i  = 0; i < tarjetasNumericas.length; i++){
                dis = dist(this.x, this.y, tarjetasNumericas[i].x, tarjetasNumericas[i].y);
                if(dis < base - 5 && dis != 0 && numeros_faltantes[i] != 0){
                    if(this.x > tarjetasNumericas[i].x){
                        medio = tarjetasNumericas[i].y - this.y;
                        if(medio < 0){
                            // top
                            tarjetasNumericas[i].y +=  - 0.5;
                        }
                        else{
                            // top
                            tarjetasNumericas[i].y +=  0.5;
                        }
                       
                    }
                    if(this.x < tarjetasNumericas[i].x && this.y < tarjetasNumericas[i].y){
                        // dow right 
                        tarjetasNumericas[i].x +=  0.5;
                        tarjetasNumericas[i].y +=  0.5;
                    }
                    if(this.x > tarjetasNumericas[i].x && this.y > tarjetasNumericas[i].y){
                        // top left
                        tarjetasNumericas[i].x +=  -0.5;
                        tarjetasNumericas[i].y +=  -0.5;
                    }
                    if(this.x < tarjetasNumericas[i].x && this.y > tarjetasNumericas[i].y){
                        // top right
                        tarjetasNumericas[i].x +=  + 0.5;
                        tarjetasNumericas[i].y +=  - 0.5;
                    }
                    if(this.x > tarjetasNumericas[i].x && this.y < tarjetasNumericas[i].y){
                        // top
                        tarjetasNumericas[i].x += - 0.5;
                        tarjetasNumericas[i].y += + 0.5;
                    }
                    
                    if(tarjetasNumericas[i].x <=  50 ){
                        tarjetasNumericas[i].x = 50;
                    }
                    if(tarjetasNumericas[i].y <=  50 ){
                        tarjetasNumericas[i].y = 50;
                    }
                    if(tarjetasNumericas[i].x >=  displayWidth - altura){
                        tarjetasNumericas[i].x = displayWidth - altura;
                    }
                    if(tarjetasNumericas[i].y >=  displayHeight - altura){
                        tarjetasNumericas[i].y = displayHeight - altura;
                    }
                }
            }
        }
        else{
            for(let i = 0; i < numeros_faltantes.length && flag_cath == 0; i++){
                if(numeros_faltantes[i] != 0){
                    tarjetasNumericasR[i].y += 0.7;
                }
            }
            if(this.y >= displayHeight - altura){
                this.y = displayHeight - altura;
            }
            if(this.x >= displayWidth - base){
                this.x = displayWidth - base;
            }
            for(let i  = 0; i < tarjetasNumericasR.length; i++){
                dis = dist(this.x, this.y, tarjetasNumericasR[i].x, tarjetasNumericasR[i].y);
                if(dis < base - 5 && dis != 0 && numeros_faltantes[i] != 0){
                    if(this.x > tarjetasNumericasR[i].x){
                        medio = tarjetasNumericasR[i].y - this.y;
                        if(medio < 0){
                            // top
                            tarjetasNumericasR[i].y +=  - 0.5;
                        }
                        else{
                            // top
                            tarjetasNumericasR[i].y +=  0.5;
                        }
                       
                    }
                    if(this.x < tarjetasNumericasR[i].x && this.y < tarjetasNumericasR[i].y){
                        // dow right 
                        tarjetasNumericasR[i].x +=  0.5;
                        tarjetasNumericasR[i].y +=  0.5;
                    }
                    if(this.x > tarjetasNumericasR[i].x && this.y > tarjetasNumericasR[i].y){
                        // top left
                        tarjetasNumericasR[i].x +=  -0.5;
                        tarjetasNumericasR[i].y +=  -0.5;
                    }
                    if(this.x < tarjetasNumericasR[i].x && this.y > tarjetasNumericasR[i].y){
                        // top right
                        tarjetasNumericasR[i].x +=  + 0.5;
                        tarjetasNumericasR[i].y +=  - 0.5;
                    }
                    if(this.x > tarjetasNumericasR[i].x && this.y < tarjetasNumericasR[i].y){
                        // top
                        tarjetasNumericasR[i].x += - 0.5;
                        tarjetasNumericasR[i].y += + 0.5;
                    }
                    
                    if(tarjetasNumericasR[i].x <=  50 ){
                        tarjetasNumericasR[i].x = 50;
                    }
                    if(tarjetasNumericasR[i].y <=  50 ){
                        tarjetasNumericasR[i].y = 50;
                    }
                    if(tarjetasNumericasR[i].x >=  displayWidth - altura){
                        tarjetasNumericasR[i].x = displayWidth - altura;
                    }
                    if(tarjetasNumericasR[i].y >=  displayHeight - altura){
                        tarjetasNumericasR[i].y = displayHeight - altura;
                    }
                }
            }
        }
    }

    display() {
        image(img0, this.x, this.y, this.base, this.altura);
        textSize(32);
        stroke(0, 0, 0);
        if(this.number <= 9){
            text(this.number, this.x + this.base / 2.5, this.y + this.altura / 1.6);
        }
        else{
            text(this.number, this.x + this.base / 3.5, this.y + this.altura / 1.6);
        }
    }
  }

class tablero {
    constructor() {
        let xT= displayWidth / 5;
        let yT = displayHeight / 4;
        this.base = base;
        this.altura = altura;
        this.x = xT;
        this.y = yT;
    }

    move() {
    //   this.x += random(-this.speed, this.speed);
    //   this.y += random(-this.speed, this.speed);
    }

    display() {
        // noStroke();
        let cont = 1;
        for(let i = 0; i < 5; i++){
            image(img2, this.x + (base * (i+1)), this.y, this.base, this.altura);
        }
        for(let i = 0; i < 5; i++){
            image(img2, this.x + (base * (i+1)), this.y + altura, this.base, this.altura);
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