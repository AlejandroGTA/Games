/*
 * @name Simple Draw
 * @description Touch to draw on the screen using mouseX, mouseY, pmouseX, and pmouseY values.
 */
let dimeter = 20;
let m = 20;
let img1,img2,img3;
let number = 0;
let displayHeight = 800;
let displayWidth = 800;
let flag_point = -1;
let flag_change = 0;
let flag_finish = 0;

var numberX0= [displayWidth / 2 + 52, displayHeight / 2 + 22, displayHeight / 2 + 7, displayHeight / 2 + 7, displayHeight / 2 + 26, displayHeight / 2 + 52, displayHeight / 2 + 85, displayHeight / 2 + 102, displayHeight / 2 + 104, displayHeight / 2 + 88, displayHeight / 2 + 66, displayHeight / 2 + 53];
var numberY0 = [displayHeight / 2 -98, displayHeight / 2 - 88, displayHeight / 2 - 62, displayHeight / 2 - 23, displayHeight / 2 + 11, displayHeight / 2 + 18, displayHeight / 2 + 8, displayHeight / 2 - 25, displayHeight / 2 - 64, displayHeight / 2 - 82, displayHeight / 2 - 95, displayHeight / 2 - 99];

var numberX1 = [displayWidth / 2 + 22, displayHeight / 2 + 70, displayHeight / 2 + 68];
var numberY1 = [displayHeight / 2 -72, displayWidth / 2 -96, displayHeight / 2 + 13];

var numberX2= [displayWidth / 2 + 9, displayHeight / 2 + 40, displayHeight / 2 + 67, displayWidth / 2 + 87, displayHeight / 2 + 91, displayHeight / 2 + 10, displayHeight / 2 + 104];
var numberY2 = [displayHeight / 2 -84, displayWidth / 2 -95, displayHeight / 2 -95, displayWidth / 2 - 82, displayHeight / 2 - 57, displayHeight / 2 + 11, displayHeight / 2 + 17];

var numberX3= [displayWidth / 2 + 9, displayHeight / 2 + 94, displayHeight / 2 + 39, displayWidth / 2 + 62, displayHeight / 2 + 88, displayHeight / 2 + 95, displayHeight / 2 + 79, displayHeight / 2 + 54, displayHeight / 2 + 8];
var numberY3 = [displayHeight / 2 -98, displayWidth / 2 -98, displayHeight / 2 -49, displayWidth / 2 - 46, displayHeight / 2 - 35, displayHeight / 2 - 13, displayHeight / 2 + 12, displayHeight / 2 + 19, displayHeight / 2 + 9];

var numberX4= [displayWidth / 2 + 56, displayHeight / 2 + 2, displayHeight / 2 + 111, displayWidth / 2 + 81, displayHeight / 2 + 88, displayHeight / 2 + 81];
var numberY4 = [displayHeight / 2 -95, displayWidth / 2 -12, displayHeight / 2 -9, displayWidth / 2 - 11, displayHeight / 2 - 47, displayHeight / 2 + 21];

var numberX5= [displayWidth / 2 + 92, displayHeight / 2 + 24, displayHeight / 2 + 14, displayWidth / 2 + 56, displayHeight / 2 + 95, displayHeight / 2 + 89, displayHeight / 2 + 57, displayHeight / 2 + 26, displayHeight / 2 + 10];
var numberY5 = [displayHeight / 2 -97, displayWidth / 2 -98, displayHeight / 2 -44, displayWidth / 2 - 49, displayHeight / 2 - 29, displayHeight / 2 + 2, displayHeight / 2 + 17, displayHeight / 2 + 15, displayHeight / 2 + 8];

var numberX6= [displayWidth / 2 + 96, displayHeight / 2 + 48, displayHeight / 2 + 20, displayHeight / 2 + 11, displayHeight / 2 + 11, displayHeight / 2 + 27, displayHeight / 2 + 44, displayHeight / 2 + 75, displayHeight / 2 + 101, displayHeight / 2 + 103, displayHeight / 2 + 89, displayHeight / 2 + 67, displayHeight / 2 + 46, displayHeight / 2 + 29];
var numberY6 = [displayHeight / 2 -91, displayHeight / 2 - 95, displayHeight / 2 -79, displayHeight / 2 - 55, displayHeight / 2 - 23, displayHeight / 2 + 8, displayHeight / 2 + 19, displayHeight / 2 + 16, displayHeight / 2 - 6, displayHeight / 2 - 30, displayHeight / 2 - 42, displayHeight / 2 - 48, displayHeight / 2 - 48, displayHeight / 2 - 42];

var numberX7= [displayWidth / 2 + 5, displayHeight / 2 + 100, displayHeight / 2 + 69, displayWidth / 2 + 45, displayHeight / 2 + 32];
var numberY7 = [displayHeight / 2 -97, displayWidth / 2 -98, displayHeight / 2 -54, displayWidth / 2 - 22, displayHeight / 2 + 15];

var numberX8= [displayWidth / 2 + 57, displayHeight / 2 + 26, displayHeight / 2 + 16, displayHeight / 2 + 20, displayHeight / 2 + 38, displayHeight / 2 + 55, displayHeight / 2 + 79, displayHeight / 2 + 99, displayHeight / 2 + 95, displayHeight / 2 + 80, displayHeight / 2 + 54, displayHeight / 2 + 28, displayHeight / 2 + 13, displayHeight / 2 + 8, displayHeight / 2 + 20, displayHeight / 2 + 40, displayHeight / 2 + 56, displayHeight / 2 + 82, displayHeight / 2 + 91, displayHeight / 2 + 94, displayHeight / 2 + 80, displayHeight / 2 + 66, displayHeight / 2 + 55];
var numberY8 = [displayHeight / 2 -100, displayHeight / 2 - 93, displayHeight / 2 - 78, displayHeight / 2 - 59, displayHeight / 2 - 47, displayHeight / 2 - 42, displayHeight / 2 - 36, displayHeight / 2 - 20, displayHeight / 2 + 1, displayHeight / 2 + 14, displayHeight / 2 + 19, displayHeight / 2 + 14, displayHeight / 2 + 3, displayHeight / 2 - 16, displayHeight / 2 - 32, displayHeight / 2 - 41, displayHeight / 2 - 44, displayHeight / 2 - 49, displayHeight / 2 - 60, displayHeight / 2 - 79, displayHeight / 2 - 93, displayHeight / 2 - 97, displayHeight / 2 - 99];

var numberX9= [displayWidth / 2 + 11, displayHeight / 2 + 43, displayHeight / 2 + 80, displayHeight / 2 + 99, displayHeight / 2 + 96, displayHeight / 2 + 65, displayHeight / 2 + 28, displayHeight / 2 + 8, displayHeight / 2 + 18, displayHeight / 2 + 36, displayHeight / 2 + 63, displayHeight / 2 + 85];
var numberY9 = [displayHeight / 2 + 12, displayHeight / 2 + 18, displayHeight / 2 + 9, displayHeight / 2 - 26, displayHeight / 2 - 71, displayHeight / 2 - 98, displayHeight / 2 -92, displayHeight / 2 - 68, displayHeight / 2 - 39, displayHeight / 2 - 31, displayHeight / 2 - 31, displayHeight / 2 - 41];

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
    if(number == 0){
        image(img0, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX0,numberY0,numberX0.length);
    }
    if(number == 1){
        image(img1, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX1,numberY1,numberX1.length);
    }
    if(number == 2){
        image(img2, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX2,numberY2,numberX2.length);
    }
    if(number == 3){
        image(img3, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX3,numberY3,numberX3.length);
    }
    if(number == 4){
        image(img4, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX4,numberY4,numberX4.length);
    }
    if(number == 5){
        image(img5, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX5,numberY5,numberX5.length);
    }
    if(number == 6){
        image(img6, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX6,numberY6,numberX6.length);
    }
    if(number == 7){
        image(img7, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX7,numberY7,numberX7.length);
    }
    if(number == 8){
        image(img8, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX8,numberY8,numberX8.length);
    }
    if(number == 9){
        image(img9, displayWidth / 2.5, displayHeight / 3.05, displayWidth / 3, displayHeight / 4);
        drwaNumber(numberX9,numberY9,numberX9.length);
    }
   
    
    stroke(0);
}

function setup() {
    createTable();
}

function mousePressed() {
    var d;
   switch(number){
    case 0:
        d = dist(mouseX, mouseY, numberX0[0], numberY0[0]);
    break;
    case 1:
         d = dist(mouseX, mouseY, numberX1[0], numberY1[0]);
    break;
    case 2:
         d = dist(mouseX, mouseY, numberX2[0], numberY2[0]);
    break;
    case 3:
         d = dist(mouseX, mouseY, numberX3[0], numberY3[0]);
    break;
    case 4:
         d = dist(mouseX, mouseY, numberX4[0], numberY4[0]);
    break;
    case 5:
         d = dist(mouseX, mouseY, numberX5[0], numberY5[0]);
    break;
    case 6:
         d = dist(mouseX, mouseY, numberX6[0], numberY6[0]);
    break;
    case 7:
         d = dist(mouseX, mouseY, numberX7[0], numberY7[0]);
    break;
    case 8:
         d = dist(mouseX, mouseY, numberX8[0], numberY8[0]);
    break;
    case 9:
         d = dist(mouseX, mouseY, numberX9[0], numberY9[0]);
    break;
    }
    if (d < (dimeter/2) && flag_point == -1) {
        flag_point = 0;
        flag_change = 0;
        
    }
    let x = mouseX - 400;
    let y = mouseY - 400;
    print(x + " " + y);
  }

function draw(){
    let d = 0;
    if(flag_finish == 1 && confirm("COMPLETE NUMBER") == 1){
        flag_finish = 0;
        flag_point = -1;
        number++;
        if(number > 9){
            let flag_againt = confirm("YOU ARE TRY AGAIN?");
            if(flag_againt){
                number = 0;
            }
        }
        createTable();
    }
    if(mouseIsPressed == 1 && flag_point > -1 && flag_finish == 0){
        let i= 0;
        let steps = 0;
        
        clear();
        createTable();
        do{
            if(flag_point == 0){
                switch(number){
                    case 0:
                        d = dist(mouseX, mouseY, numberX0[i + 1], numberY0[i + 1]);
                        line(numberX0[i], numberY0[i], mouseX, mouseY);
                        NextStep(numberX0[i+1],numberY0[i+1]);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 1:
                        d = dist(mouseX, mouseY, numberX1[i + 1], numberY1[i + 1]);
                        line(numberX1[i], numberY1[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 2:
                        d = dist(mouseX, mouseY, numberX2[i + 1], numberY2[i + 1]);
                        line(numberX2[i], numberY2[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 3:
                        d = dist(mouseX, mouseY, numberX3[i + 1], numberY3[i + 1]);
                        line(numberX3[i], numberY3[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 4:
                        d = dist(mouseX, mouseY, numberX4[i + 1], numberY4[i + 1]);
                        line(numberX4[i], numberY4[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 5:
                        d = dist(mouseX, mouseY, numberX5[i + 1], numberY5[i + 1]);
                        line(numberX5[i], numberY5[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 6:
                        d = dist(mouseX, mouseY, numberX6[i + 1], numberY6[i + 1]);
                        line(numberX6[i], numberY6[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 7:
                        d = dist(mouseX, mouseY, numberX7[i + 1], numberY7[i + 1]);
                        line(numberX7[i], numberY7[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 8:
                        d = dist(mouseX, mouseY, numberX8[i + 1], numberY8[i + 1]);
                        line(numberX8[i], numberY8[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                    case 9:
                        d = dist(mouseX, mouseY, numberX9[i + 1], numberY9[i + 1]);
                        line(numberX9[i], numberY9[i], mouseX, mouseY);
                        if(d <= dimeter / 2){
                            flag_point++;
                        } 
                    break;
                }
            }
            else{
                switch(number){
                    case 0:
                        if(steps <= flag_point){
                            line(numberX0[i], numberY0[i], numberX0[i + 1], numberY0[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX0[i + 1], numberY0[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX0.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 1:
                        if(steps <= flag_point){
                            line(numberX1[i], numberY1[i], numberX1[i + 1], numberY1[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX1[i + 1], numberY1[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX1.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                    break;
                    case 2:
                        if(steps <= flag_point){
                            line(numberX2[i], numberY2[i], numberX2[i + 1], numberY2[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX2[i + 1], numberY2[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX2.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 3:
                        if(steps <= flag_point){
                            line(numberX3[i], numberY3[i], numberX3[i + 1], numberY3[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX3[i + 1], numberY3[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX3.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 4:
                        if(steps <= flag_point){
                            line(numberX4[i], numberY4[i], numberX4[i + 1], numberY4[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX4[i + 1], numberY4[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX4.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 5:
                        if(steps <= flag_point){
                            line(numberX5[i], numberY5[i], numberX5[i + 1], numberY5[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX5[i + 1], numberY5[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX5.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 6:
                        if(steps <= flag_point){
                            line(numberX6[i], numberY6[i], numberX6[i + 1], numberY6[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX6[i + 1], numberY6[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX6.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 7:
                        if(steps <= flag_point){
                            line(numberX7[i], numberY7[i], numberX7[i + 1], numberY7[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX7[i + 1], numberY7[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX7.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 8:
                        if(steps <= flag_point){
                            line(numberX8[i], numberY8[i], numberX8[i + 1], numberY8[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX8[i + 1], numberY8[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX8.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                    case 9:
                        if(steps <= flag_point){
                            line(numberX9[i], numberY9[i], numberX9[i + 1], numberY9[i + 1]);
                            steps++;
                            i++;
                        }
                        
                        if(steps == flag_point && flag_finish == 0){
                            
                            d = dist(mouseX, mouseY, numberX9[i + 1], numberY9[i + 1]);
                            if(d <= dimeter / 2){
                                flag_point++;
                            } 
                            if(numberX9.length - 1 == flag_point){
                                flag_finish = 1;
                            }
                            
                        }
                       
                    break;
                }
            }
        }while(steps != flag_point);
        switch(number){
            case 0:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX0[i], numberY0[i], mouseX, mouseY);
                    
                    if( i+1 < numberX0.length){
                        NextStep(numberX0[i+1],numberY0[i+1]);
                    }
                }
            break;
            case 1:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX1[i], numberY1[i], mouseX, mouseY);
                }
            break;
            case 2:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX2[i], numberY2[i], mouseX, mouseY);
                }
            break;
            case 3:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX3[i], numberY3[i], mouseX, mouseY);
                }
            break;
            case 4:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX4[i], numberY4[i], mouseX, mouseY);
                }
            break;
            case 5:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX5[i], numberY5[i], mouseX, mouseY);
                }
            break;
            case 6:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX6[i], numberY6[i], mouseX, mouseY);
                }
            break;
            case 7:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX7[i], numberY7[i], mouseX, mouseY);
                }
            break;
            case 8:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX8[i], numberY8[i], mouseX, mouseY);
                }
            break;
            case 9:
                if(flag_point >= 1 && flag_finish == 0){
                    line(numberX9[i], numberY9[i], mouseX, mouseY);
                }
            break;
        }
        
    }
    else if(flag_finish == 0){
        clear();
        createTable();
        flag_point = -1;
    }
}

function drwaNumber(numX, numY, numlenght){
    strokeWeight(4);
    // for(let i=0; i< numberX.length; i++){
    //     circle(numberX[i][0], numberY[i][0], dimeter); 
    // }
    for(let i=0; i< numlenght; i++){
        if(i == 0){
            stroke(255, 0, 0);
        }
        else{
            stroke(245, 0, 245);
        }
        if(i == numlenght - 1){
            stroke(9, 245, 9);
        }
        circle(numX[i], numY[i], dimeter); 
    }
    stroke(0);
}

function NextStep(numX, numY){
    strokeWeight(2);
    stroke(50);
    line(numX, numY, mouseX, mouseY);
}