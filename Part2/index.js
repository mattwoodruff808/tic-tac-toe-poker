// const name = 'Matt';
// console.log(name)

let grabType = document.getElementById('grab-type');
let colorGrab = document.getElementById('color-grab');
// console.log(grab)
// console.log(style)

function setCard(){
    let card = document.getElementById(grabType.value);
    // console.log(card)

    card.style.color = colorGrab.value;
};

function resetCard(){
    let card = document.getElementById('diamonds')
    let card2 = document.getElementById('clubs')
    let card3 = document.getElementById('hearts')
    let card4 = document.getElementById('spades')
    
    card.style = 'color: grey';
    card2.style = 'color: grey';
    card3.style = 'color: grey';
    card4.style = 'color: grey';
};