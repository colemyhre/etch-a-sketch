
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
            box.style.backgroundColor = darkenColor(box);
            // let checkColor = getComputedStyle(box).backgroundColor;
            // checkColor = checkColor.substring(5,checkColor.length-1);
            // checkColor = checkColor.replace(/ /g, '');
            // checkColor = checkColor.split(',');
            // console.log(checkColor);
            // let sat = checkColor[3];
            // console.log(sat);
            //box.style.backgroundColor = 'hsl(120, 90%, 90%)';
        })
        container.appendChild(box);
    }
})

function  clearDivs(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function darkenColor(box) {
    let checkColor = getComputedStyle(box).backgroundColor;
    let color = checkColor.substring(5,checkColor.length-1);
    color = color.replace(/ /g, '');
    color = color.split(',');
    let rVal = color[0];
    let gVal = color[1];
    let bVal = color[2];
    let sat = color[3];
    console.log(sat);
    sat = Number(sat);
    //sat = sat.toFixed(0);
    console.log(sat);
    
    if (sat == 1) {
        console.log(checkColor);
        return checkColor;
    }
    else if (sat == 0.9) {
        newColor = 'rgba('+rVal+', '+gVal+', '+bVal+', '+1+')';
        return newColor;
        console.log(newColor);
    }
    else {
        newColor = 'rgba('+rVal+', '+gVal+', '+bVal+', '+(sat+0.1)+')';
        return newColor;
    }
}


