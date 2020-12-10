// const name = 'Matt'
// console.log(name)

let gameTrackArr = [];

function play(num){
    const player = document.getElementById('player');
    const clicked = document.getElementById(num);
    let gameEnded = false;
    
    if (clicked.innerText !== 'X' && clicked.innerText !== 'O'){
        clicked.innerText = player.innerText;
        gameTrackArr[num] = player.innerText;
    }
    
    if (player.innerText === 'X'){
        player.innerText = 'O';
    }   else {
        player.innerText = 'X';
    }
    // gameTrackArr.splice(num, 0, clicked.innerText); Something is wrong with this
    console.log(gameTrackArr)

    if (gameTrackArr[0] + gameTrackArr[1] + gameTrackArr[2] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[3] + gameTrackArr[4] + gameTrackArr[5] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[6] + gameTrackArr[7] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[0] + gameTrackArr[3] + gameTrackArr[6] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[1] + gameTrackArr[4] + gameTrackArr[7] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[2] + gameTrackArr[5] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[0] + gameTrackArr[4] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[2] + gameTrackArr[4] + gameTrackArr[6] === 'XXX'){
        alert('Player X is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[3] + gameTrackArr[4] + gameTrackArr[5] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[6] + gameTrackArr[7] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[0] + gameTrackArr[3] + gameTrackArr[6] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[1] + gameTrackArr[4] + gameTrackArr[7] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[2] + gameTrackArr[5] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[0] + gameTrackArr[4] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[2] + gameTrackArr[4] + gameTrackArr[6] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } else if (gameTrackArr[0] + gameTrackArr[1] + gameTrackArr[2] === 'OOO'){
        alert('Player O is the Winner!');
        gameEnded = true;
    } 

    let boardFull = true;

    for (let i = 0; i <= 8; i++){
        if (gameTrackArr[i] === undefined){
            boardFull = false;
        }
    } 
    if (boardFull === true){
        alert('Cat`s Game!');
    }
    
    if (gameEnded === true || boardFull === true){
        resetBoard();
    }
};

function resetBoard(){
    gameTrackArr = [];
    for (let i = 0; i <= 8; i++){
        let cell = document.getElementById(i);
        cell.innerText = '';
    }
};