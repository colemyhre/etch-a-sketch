
let userInput = 0;
let numDivs = 0;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


let btn = document.querySelector('.startSketch');
btn.addEventListener('click', () => {
    let container = document.querySelector('.container');
    clearDivs(container);
    let userInput = prompt('How many columns/rows? (Max 100)');
    let dropDown = document.querySelector('select');
    console.log(dropDown.value);

    if (userInput > 100) {
        alert('Too large! Select a number under 100.');
    }
    else {
        let numDivs = userInput*userInput;
        //let boxWidth = (vw)/userInput;
        let boxHeight = (0.8*vh)/(userInput);
        console.log(0.8*vh);
        console.log(boxHeight);


        for (let i=0; i<numDivs; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.height = boxHeight+'px';
            box.style.width = boxHeight+'px';
            box.addEventListener('mouseover', () => {
                if (dropDown.value == 'Black and White') {
                    box.style.backgroundColor = darkenColor(box);
                }
                else if (dropDown.value == 'RGB') {
                    box.style.backgroundColor = changeColor(box);
                }
            })
            container.appendChild(box);
        }
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
    sat = Number(sat);
    
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

function changeColor(box) {
    let checkColor = getComputedStyle(box).backgroundColor;
    let color = checkColor.substring(5,checkColor.length-1);
    color = color.replace(/ /g, '');
    color = color.split(',');
    let rVal = color[0];
    let gVal = color[1];
    let bVal = color[2];
    let sat = color[3];
    sat = Number(sat);

    rVal = (Math.random())*255;
    gVal = (Math.random())*255;
    bVal = (Math.random())*255;
    
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


