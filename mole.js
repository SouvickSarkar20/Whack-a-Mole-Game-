let currMoleTile;
let curplant;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    // set up the grid for the game board in HTML
    for(let i = 0; i < 9; i++){
        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
        tile.addEventListener("click",selectTile);
    }
    setInterval(setMole,2000);
    //The mole will appear on a pipe after every 2 sec equivakent  2000 miliseconds
    setInterval(setPlant,3000);

}

//get the randome tile from which the mole appears
//math.random-->(0-1)*9=(0-9)---->Round down to (0-8) integers
function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

//creating the mole
function setMole(){
    if(gameOver){
        return;
    }
    //to clear the previous mole
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"
    let num = getRandomTile();

    //Return when the mole when both the mole and plant reach the same tile
    if(curplant && curplant.id==num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

//to make the plant come nd go
function setPlant(){
    if(gameOver){
        return;
    }
    if(curplant){
        curplant.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    curplant = document.getElementById(num);
    curplant.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }

    //check if that tile u clicked on just now has the image of the mole or not
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
        //updating the score in the header tag
    }
    else if(this == curplant){
        document.getElementById("score").innerText = "GAME OVER: " +score.toString();
        gameOver = true;
    }
}

function refreshPage(){
    location.reload();
}
 
