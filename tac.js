let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".winningMessage");
let resetBtn = document.querySelector(".rst-btn");
let nextGame = document.querySelector(".nxt-game");

let scoreX = document.querySelector(".pX");
let scoreY = document.querySelector(".pY");

let countX = 0;
scoreX.innerText = countX;
let countY = 0;
scoreY.innerText = countY;

let turnX = false;

let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("button Clicked");
        if(turnX)
        {
            box.innerText = "O";
            turnX = false;
        }
        else{
            box.innerText = "X";
            turnX = true;
        }
        box.disabled = true; // to disable the button for another click.
        checkWinner();
        checkDraw();
    });
})

const checkWinner = () => {
    for ( let pattern of winningPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
            console.log("Winner ", pos1);
            message.innerText = `Winner: ${pos1}`;
            printWinner(pos1);
            }  
        }
    }
}

const checkDraw = () => {
    let allBoxesFilled = true;

    for (let box of boxes) {
        if (box.innerText === "") {
            allBoxesFilled = false;
            break;
        }
    }

    if (allBoxesFilled) {
        message.innerText = "It's a Draw!";
        disableBoxes();
        return true;
    }
}

const printWinner = (winner) => {
    message.innerText = `Congratulations ${winner} is the Winner.`;
        winCount(winner);
    disableBoxes();
}

const disableBoxes = () =>{
    for(box of boxes)
    {
        box.disabled = true; // to disable left over boxes
    }
}
const enableBoxes = () =>{
    for(box of boxes)
    {
        box.disabled = false; // to disable left over boxes
        box.innerText = "";
    }
    message.innerText = "";
}

const resetGame = () => {
// resets all the game 
    turnX = false;
    countX = 0;
    scoreX.innerText = countX;
    countY = 0;
    scoreY.innerText = countY;
    enableBoxes();
}

const newGame = () => {
// resets all the game 
    turnX = false;
    enableBoxes();
}

const winCount = (winner) => {
    if(winner == "X")
    {
        countX ++;
        scoreX.innerText = countX;
    }
    else
    {
        countY ++;
        scoreY.innerText = countY;
    }
}

// This will resets the game on button click.
resetBtn.addEventListener("click", resetGame);
nextGame.addEventListener("click", newGame);