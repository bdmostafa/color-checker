const circles = document.querySelectorAll('.rounded-circle');
const displayColorCode = document.getElementById('displayColorCode');
const h1 = document.querySelector('h1');
const alertMessage = document.querySelector('.alert');

const colors = generateRandomColor(6);

// [
//     "rgb(255, 147, 20)",
//     "rgb(250, 20, 150)",
//     "rgb(247, 100, 201)",
//     "rgb(25, 147, 203)",
//     "rgb(2, 147, 20)",
//     "rgb(25, 140, 201)",
// ]

let pickedRandomColor = pickRandomColor(colors);
displayColorCode.textContent = pickedRandomColor;

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener('click', function () {
        // Compare with pickedRandomColor
        if (this.style.backgroundColor === pickedRandomColor) {
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