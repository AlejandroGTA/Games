/*
 * @name Simple Draw
 * @description Touch to draw on the screen using mouseX, mouseY, pmouseX, and pmouseY values.
 */
let dimeter = 20;
let m = 20;
let img1,img2,img3;
let number = 2;
let displayHeight = 800;
let displayWidth = 800;
let flag_point = -1;
let flag_change = 0;
let flag_finish = 0;
let vecNumeros = [];
let numeros = [];
let tablero;
let tableroNumeros = [];
let flag_draw_circles = 0;
let cantidadSaltos = 0;

function preload(){
    img0 = loadImage('assets/0.jpg'); // Cargar la imagen
    img1 = loadImage('assets/1.jpg'); // Cargar la imagen 
    img2 = loadImage('assets/2.jpg'); // Cargar la imagen 
    img3 = loadImage('assets/3.jpg'); // Cargar la imagen 
    img4 = loadImage('assets/4.jpg'); // Cargar la imagen
    img5 = loadImage('assets/5.jpg'); // Cargar la imagen 
    img6 = loadImage('assets/6.jpg'); // Cargar la imagen
    img7 = loadImage('assets/7.jpg'); // Cargar la imagen 
    img8 = loadImage('assets/8.jpg'); // Cargar la imagen
    img9 = loadImage('assets/9.jpg'); // Cargar la imagen
}

function createTable(){
    createCanvas(displayWidth, displayHeight);
    button = createButton('Generar');
    button.position(0, 65);
    button.mousePressed(crearCircle);
    button1 = createButton('imprimir');
    button1.position(0, 100);
    button1.mousePressed(imprimirVect);
    tablero =  new Tablero();
    for(let i = 0; i < 10; i++){
        numeros.push(new Numero(i));
    }
    // console.log(numeros);
}

function setup() {
    createTable();
}

function crearCircle(){
    vecNumeros.push(new Circulo());
}

function imprimirVect(){
    let stringx = "[";
    let stringy = "[";
    for(let i = 0; i < vecNumeros.length; i++){
        stringx += vecNumeros[i].x + ", ";
        stringy += vecNumeros[i].y + ", ";
    }
    stringx += "]";
    stringy += "]";
    console.log(stringx);
    console.log(stringy);
}

function draw(){
    background(255,0,0);
    if(flag_finish){
        alert("asd");
        flag_finish = 0;
        cantidadSaltos = 0;
        if(tableroNumeros.indexOf(number) < 0){
            tableroNumeros.push(number);
        }
        // console.log(tableroNumeros);
        number++;
        if(tableroNumeros.length == 10){
            alert("complete");
            number = 0;
        }
    }

    tablero.display();
    
    if(mouseIsPressed == 1){
        
    // console.clear();
        tablero.click(mouseX,  mouseY);
        // for(let i = 0; i < 10; i++){
            
        // }
    }

    for(let i= 0; i < numeros.length; i++){
        if(number == numeros[i].number){
            numeros[i].display();
            
        }
    }
    if(flag_draw_circles == 0){
        for(let i= 0; i < numeros.length; i++){
            if(number == numeros[i].number){
                numeros[i].displayCircles();
                if(mouseIsPressed == 1){
                    numeros[i].click();
                }
                else{
                    cantidadSaltos = 0;
                }
            }
        }
    }
    for(let i= 0; i < vecNumeros.length; i++){
        if(mouseIsPressed == 1){
            vecNumeros[i].move(vecNumeros, mouseX, mouseY);
        }
        vecNumeros[i].display();
    }
}

class Circulo{
    constructor(){
        this.x=250;
        this.y=250;
        this.diametro = 30;
    }

    move(array, x, y){
        let dis;
        for(let i = 0; i < array.length; i++){
            dis = dist(array[i].x, array[i].y, x, y);
            if(dis < array[i].diametro / 2){
                array[i].x = x;
                array[i].y = y;
            }
        }
    }

    display(){
        circle(this.x, this.y, this.diametro);
    }
}

class Numero{
    constructor(numero){
        this.base = 300;
        this.altura = 300;
        this.x=  (displayWidth / 2) - (this.base/2);
        this.y=  (displayHeight / 2) - (this.altura/2);
        this.diametro = 25;
        this.number= numero;
        switch(this.number){
            case 0:
                this.puntosX = [400, 380, 364, 352, 347, 343, 342, 344, 346, 352, 363, 380, 397, 418, 437, 450, 457, 460, 460, 456, 446, 433, 418, 400];
                this.puntosY = [309, 314, 326, 343, 362, 381, 399, 418, 433, 452, 468, 481, 484, 482, 470, 453, 433, 410, 386, 363, 338, 320, 312, 309];
                this.img = img0;
            break;
            case 1:
                this.puntosX = [368, 416, 416];
                this.puntosY = [346, 311, 485];
                this.img = img1;
            break;
            case 2:
                this.puntosX = [353, 365, 380, 399, 416, 432, 442, 447, 445, 434, 419, 406, 390, 362, 353, 372, 391, 413, 432, 450];
                this.puntosY = [334, 321, 313, 310, 313, 323, 336, 352, 371, 389, 406, 419, 435, 463, 481, 483, 483, 483, 483, 483];
               
                
                this.img = img2;
            break;
            case 3:
                this.puntosX = [357, 424, 442, 431, 415, 400, 386, 410, 428, 441, 447, 448, 441, 426, 409, 389, 370, 353];
                this.puntosY = [311, 310, 313, 331, 349, 365, 384, 390, 396, 407, 423, 443, 463, 478, 484, 485, 481, 471];
                
                this.img = img3;
            break;
            case 4:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img4;
            break;
            case 5:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img5;
            break;
            case 6:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img6;
            break;
            case 7:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img7;
            break;
            case 8:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img8;
            break;
            case 9:
                this.puntosX = [368, 368, 368];
                this.puntosY = [346, 346, 346];
                this.img = img9;
            break;
        }
    }

    click(){
        let dis;
        let cont= 1;
        stroke(0);
        if(cantidadSaltos == 0){
            dis = dist(this.puntosX[0], this.puntosY[0], mouseX, mouseY);
            if(dis < this.diametro / 2){
                
                line(this.puntosX[0], this.puntosY[0], mouseX, mouseY);
                cantidadSaltos++;    
            }
        } 
        if(cantidadSaltos == 1){
            line(this.puntosX[0], this.puntosY[0], mouseX, mouseY);
            dis = dist(this.puntosX[1], this.puntosY[1], mouseX, mouseY);
            if(dis < this.diametro / 2){    
            cantidadSaltos++;
            }
        }
        // console.log(cantidadSaltos);
        for(let i = 1; i < cantidadSaltos && cantidadSaltos > 1; i++){
            cont++;
            // if(cantidadSaltos == 1){
            //     line(this.puntosX[i], this.puntosY[i], mouseX, mouseY);
            // }
            // else{
                if(i - 1 < cantidadSaltos){
                    line(this.puntosX[i - 1], this.puntosY[i - 1], this.puntosX[i], this.puntosY[i]);
                }
                
            // }
        }
        if(cantidadSaltos >= 2 && cont < this.puntosX.length){
            dis = dist(this.puntosX[cont], this.puntosY[cont], mouseX, mouseY);
            line(this.puntosX[cont - 1], this.puntosY[cont - 1], mouseX, mouseY);
            if(dis < this.diametro / 2){
               
                cantidadSaltos++;
            }
        }
        if(cont == this.puntosX.length){
            flag_finish = 1;
        }
    }

    displayCircles(){
        // noStroke();
        
        // stroke();
        for(let i = 0; i < this.puntosX.length; i++){
            circle(this.puntosX[i], this.puntosY[i], this.diametro);
        }
    }

    display(){
        image(this.img, this.x, this.y, this.base, this.altura);
        // console.log(this.puntosX[0]);
    }

}

class Tablero{
    constructor(){
        this.x = displayWidth / 5;
        this.y =   displayHeight / 30;
        this.base = 500;
        this.altura = 100;
        this.espacio = 50;
    }

    click(x, y){
        let dis;
        // console.log("");
        
        for(let i = 0; i < 10; i++){
            dis = dist(this.x + (this.espacio * i) + this.espacio / 2, this.y + (this.altura / 2), x, y);
            // text(i, this.x + (this.espacio * i), this.y + (this.altura / 1.3));
            // console.log(dis);
            if(dis < 25 && tableroNumeros.indexOf(i) < 0){
                // console.log(i);
                number = i;
            }
        }
    }

    display(){
        noFill();
        noStroke();
        rect(this.x, this.y, this.base, this.altura);
        textSize(80);
        fill(0);
        for(let  i = 0; i < 10; i++){
            // console.log(tableroNumeros.indexOf(i));
            if(tableroNumeros.indexOf(i) >= 0){
                fill(129, 129, 129);    
            }
            else{
                fill(0);
            }
            text(i, this.x + (this.espacio * i), this.y + (this.altura / 1.3));
        }
        noFill();
    }
}