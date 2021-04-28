"use strict";

// TODO - write your code here.

let randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}
//This will radomize which player will be attacking 
let chooseOption = (opt1, opt2) => {
    let randomNum = Math.floor(Math.random() * 2); 
    return randomNum == 0 ? opt1 : opt2;
}

function attackPlayer(health) {
    return health -= randomDamage();
}
let logHealth = (player, health) => {
    console.log(`${player} Health:${health}`);

}
let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

let isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}
//putting in fight with 4 params followed by a while loop
function fight(player1, player2, player1Health, player2Health) {
    //making the while loop condition player health to end the game on either side
    while (player1Health > 0 || player2Health > 0) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health);
            if (isDead(player2Health) == true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            //only other result that can happen is the opposite of the if statement
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player2Health);
            if (isDead(player1Health) == true) {
                logDeath(player2, player1);
                break;
            }


        }
    }
}

//shape functions *****************************************************

function getSquare(width) {
    let hashtag = "";
    //this establishes how tall it will be 
    for(let i = 1; i <= width; i++) {
        //nested for loop is what places the # down in each row
        for(let j = 0; j < width; j++){
            hashtag +="#";
        }
        //makes a new line for the loop and continues on
        hashtag +="\n";
    }
    console.log(hashtag);
}


function getTriangle (width) {
    let star = "";
    //The exterior for loop sets how tall will the triangle be
    for(let i = 1; i <= width; i++) {
        //The nested for loop's conditional will constantly evolve being set to i
        //Thus adding 1 additional * each loop
        for(let j = 0; j < i; j++) {
            star += "*"
        }
        //makes a new line
        star += "\n";

        
    }
    console.log(star);
}
function hallowTriangle(height) {
    //This will determine how tall the hallow Triangle is
    for (var i = 1; i <= height; i++) {
       var x = "";
       //This will run a loop placing either * or " " to fill in the triangle
        for (var j = 1; j <= (2 * height - 1); j++) {
            if (j <= height + 1 - i || j >= height - 1 + i) {
                x += "*";
            }
            else {
                x += " ";
            }
            //bc var is set inside the loop a new line will be set /n not required
        }
        console.log(x);
    }
}
function getPyramid(size) {
    let star = "";
    for(let i = 1; i <= size; i++) {
        //this loop sets the spaces for the pyramid
        for(let j = 1; j <= size - i; j++){
            star += " ";
        }
        //this loop sets the * and prints them out
        for(let k = 0; k < 2 * i - 1; k++) {
            star += "*";
        }
        //after the stars are done looping this breaks the line to reset the first loop
        //to start the process over again
        star += "\n"
    }
    console.log(star);
} 
function getUpsidedownPyramid(size) {
    let star = "";
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < i; j++){
            star += " ";
        }
        for(let k = 0; k < 2 * (size - i) - 1; k++) {
            star += "*";
        }
        star += "\n"
    }
    console.log(star);
} 

function getDiamond(size) {
    //This fuction  should be able to be completed with code from Pyramid and upsidedown Pyramid
    let star = "";
    for(let i = 1; i <= size; i++) {
        //this loop sets the spaces for the pyramid
        for(let j = 1; j <= size - i; j++){
            star += " ";
        }
        //this loop sets the * and prints them out
        for(let k = 0; k < 2 * i - 1; k++) {
            star += "*";
        }
        //after the stars are done looping this breaks the line to reset the first loop
        //to start the process over again
        star += "\n"
    }
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < i; j++){
            star += " ";
        }
        for(let k = 0; k < 2 * (size - i) - 1; k++) {
            star += "*";
        }
        star += "\n"
    }
    console.log(star);

}

function hourGlass(size){
    let star = "";
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < i; j++){
            star += " ";
        }
        for(let k = 0; k < 2 * (size - i) - 1; k++) {
            star += "*";
        }
        star += "\n"
    }
    for(let i = 1; i <= size; i++) {
        //this loop sets the spaces for the pyramid
        for(let j = 1; j <= size - i; j++){
            star += " ";
        }
        //this loop sets the * and prints them out
        for(let k = 0; k < 2 * i - 1; k++) {
            star += "*";
        }
        //after the stars are done looping this breaks the line to reset the first loop
        //to start the process over again
        star += "\n"
    }
    console.log(star);

}


function getGrade(number) {
    if (number >= 90) {
        return "A";
    } else if (number >= 80) {
        return "B";
    } else if (number >= 70) {
        return "C";
    } else if (number >= 60) {
        return "D";
    } else {
        return "F";
    }
}

    function priority(urgent, important) {
        if (urgent == true && important == true) {
            return "Priority level - 1";
        } else if (urgent == false && important == true) {
            return "Priority level - 2";
        } else if (urgent == true && important == false) {
            return "Priority level - 3";
        } else {
            return "Priority level - 4";
        }
    }
    

fight("Greg","Steve", 100, 100);





console.log(getGrade(90));
console.log(getGrade(50));
console.log(getGrade(71));
console.log(getGrade(82));

console.log(priority(true, false));
console.log(priority(false, false));
console.log(priority(false, true));

getSquare(4);
getTriangle(8);
getPyramid(5);
getUpsidedownPyramid(5);
hallowTriangle(10);
getDiamond(5);
hourGlass(5);
