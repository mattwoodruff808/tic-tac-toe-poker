// const name = 'Matt'
// console.log(name)

const gameTrackArr = [];

function play(num){
    const player = document.getElementById('player');
    const clicked = document.getElementById(num);
    clicked.innerText = player.innerText;
    
    if (player.innerText === 'X'){
        player.innerText = 'O';
        gameTrackArr[num] = 'X';
    }   else {
        player.innerText = 'X';
        gameTrackArr[num] = 'O';
    }
    // gameTrackArr.splice(num, 0, clicked.innerText); Something is wrong with this
    console.log(gameTrackArr)

    if (gameTrackArr[0] + gameTrackArr[1] + gameTrackArr[2] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[3] + gameTrackArr[4] + gameTrackArr[5] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[6] + gameTrackArr[7] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[0] + gameTrackArr[3] + gameTrackArr[6] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[1] + gameTrackArr[4] + gameTrackArr[7] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[2] + gameTrackArr[5] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[0] + gameTrackArr[4] + gameTrackArr[8] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[2] + gameTrackArr[4] + gameTrackArr[6] === 'XXX'){
        alert('Player X is the Winner!');
    } else if (gameTrackArr[3] + gameTrackArr[4] + gameTrackArr[5] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[6] + gameTrackArr[7] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[0] + gameTrackArr[3] + gameTrackArr[6] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[1] + gameTrackArr[4] + gameTrackArr[7] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[2] + gameTrackArr[5] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[0] + gameTrackArr[4] + gameTrackArr[8] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[2] + gameTrackArr[4] + gameTrackArr[6] === 'OOO'){
        alert('Player O is the Winner!');
    } else if (gameTrackArr[0] + gameTrackArr[1] + gameTrackArr[2] === 'OOO'){
        alert('Player O is the Winner!');
    } 

    const boardFull = true;

    for (let i = 0; i < gameTrackArr.length; i++){
        if (num.innerText === undefined){
            boardFull = false;
        } else if (num.innerText !== undefined){
            alert('Cat`s Game!')
        }
    }
};

