
let userInput = 0;
let numDivs = 0;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let btn = document.querySelector('.startSketch');
btn.addEventListener('click', () => {
    let container = document.querySelector('.container');
    clearDivs(container);
    let userInput = prompt('How many columns/rows?');
    let numDivs = userInput*userInput;
    //let boxWidth = (vw)/userInput;
    let boxHeight = (0.6*vh)/(userInput);
    console.log(vh);
    console.log(boxHeight);

    

    for (let i=0; i<numDivs; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        //box.style.width = boxWidth+'px';
        box.style.height = boxHeight+'px';
        box.style.width = boxHeight+'px';
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'hsl(120, 90%, 10%)';
        })
        container.appendChild(box);
    }
})

function  clearDivs(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



