const circles = document.querySelectorAll('.rounded-circle');
const displayColorCode = document.getElementById('displayColorCode');
const h1 = document.querySelector('h1');
const alertMessage = document.querySelector('.alert');
const resetBtn = document.getElementById('reset');
const modeBtn = document.querySelectorAll('.mode');
const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');

let numOfCircles = 6;

let colors = generateRandomColor(6);

let pickedRandomColor = pickRandomColor(colors);
displayColorCode.textContent = pickedRandomColor;

resetBtn.addEventListener('click', function () {
    // generate new colors
    colors = generateRandomColor(numOfCircles);
    // pick a color
    pickedRandomColor = pickRandomColor(colors);
    // display various message on this event
    h1.style.color = 'black';
    displayColorCode.textContent = pickedRandomColor;
    displayColorCode.style.color = 'black';
    alertMessage.textContent = '';
    this.textContent = "New Color";
    // display the generated color in the boxes
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i];
    }
})

function modeChange(numOfCircles) {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function () {
            // At first all selected item removed
            easyBtn.classList.remove('selected');
            mediumBtn.classList.remove('selected');
            hardBtn.classList.remove('selected');
            this.classList.add('selected');


            // Checking the button which one is click
            if (this.textContent === 'Easy') {
                numOfCircles = 3
            } else if (this.textContent === 'Medium') {
                numOfCircles = 6
            } else {
                numOfCircles = 9
            }
            colors = generateRandomColor(numOfCircles);
            pickedRandomColor = pickRandomColor(colors);
            h1.style.color = 'black';
            displayColorCode.textContent = pickedRandomColor;
            displayColorCode.style.color = 'black';
            alertMessage.textContent = '';
            for (let i = 0; i < circles.length; i++) {
                // All display none at first then colors[i] displayed
                if (colors[i]) {
                    circles[i].style.display = 'block';
                    circles[i].style.backgroundColor = colors[i];
                } else {
                    circles[i].style.display = 'none';
                }
            }
        })
    }
}



easyBtn.addEventListener('click', function () {
    this.classList.add('selected');
    mediumBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');

    // Only 3 colors code generate
    modeChange();
    // colors = generateRandomColor(numOfCircles);
    // pickedRandomColor = pickRandomColor(colors);
    // h1.style.color = 'black';
    // displayColorCode.textContent = pickedRandomColor;
    // displayColorCode.style.color = 'black';
    // alertMessage.textContent = '';
    // for (let i = 0; i < circles.length; i++) {
    //     // All display none at first then colors[i] displayed
    //     if (colors[i]) {
    //         circles[i].style.backgroundColor = colors[i];
    //     } else {
    //         circles[i].style.display = 'none';
    //     }
    // }
})

mediumBtn.addEventListener('click', function () {
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');

    // Only 6 colors code generate

    modeChange();
    // colors = generateRandomColor(numOfCircles);
    // pickedRandomColor = pickRandomColor(colors);
    // h1.style.color = 'black';
    // displayColorCode.textContent = pickedRandomColor;
    // displayColorCode.style.color = 'black';
    // alertMessage.textContent = '';
    // for (let i = 0; i < circles.length; i++) {
    //     circles[i].style.display = 'block';
    //     // All display none at first then colors[i] displayed
    //     if (colors[i]) {
    //         circles[i].style.backgroundColor = colors[i];
    //     } else {
    //         circles[i].style.display = 'none';
    //     }
    // }
})

hardBtn.addEventListener('click', function () {
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    mediumBtn.classList.remove('selected');

    // Only 9 colors code generate
    numOfCircles = 9
    colors = generateRandomColor(numOfCircles);
    pickedRandomColor = pickRandomColor(colors);
    h1.style.color = 'black';
    displayColorCode.textContent = pickedRandomColor;
    displayColorCode.style.color = 'black';
    alertMessage.textContent = '';
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i];
        // Remove display none mode that was on easy mode
        circles[i].style.display = 'block';
    }
})

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener('click', function () {
        // Compare with pickedRandomColor
        let clickedColor = this.style.backgroundColor
        console.log(clickedColor, pickedRandomColor)
        if (clickedColor === pickedRandomColor) {
            reset.textContent = "Play Again"
            h1.style.color = pickedRandomColor;
            displayColorCode.style.color = pickedRandomColor;
            alertMessage.textContent = "You are Correct!"
            alertMessage.style.color = pickedRandomColor
            matchWithRandomColor(pickedRandomColor)
        } else {
            alertMessage.textContent = "Wrong, try again."
            alertMessage.style.color = "rgb(3, 63, 43)"
            this.style.backgroundColor = 'darkslategrey'
        }
    })
}

function matchWithRandomColor(pickedRandomColor) {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = pickedRandomColor
    }
}

function pickRandomColor(colors) {
    let i = Math.floor(Math.random() * colors.length)
    return colors[i];
}

function generateRandomColor(colorBoxNum) {
    let colors = [];
    for (let i = 0; i < colorBoxNum; i++) {
        // generate color rgb (0-255, 0-255, 0-255)
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${red}, ${green}, ${blue})`
        colors.push(randomColor);
    }
    return colors;
}