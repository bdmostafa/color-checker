const circles = document.querySelectorAll('.rounded-circle');
const displayColorCode = document.getElementById('displayColorCode');
const h1 = document.querySelector('h1');
const alertMessage = document.querySelector('.alert');

const colors = [
    "rgb(255, 147, 20)",
    "rgb(250, 20, 150)",
    "rgb(247, 100, 201)",
    "rgb(25, 147, 203)",
    "rgb(2, 147, 20)",
    "rgb(25, 140, 201)",
]

let randomColor = colors[3];
displayColorCode.textContent = randomColor;
console.log(randomColor)
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener('click', function () {
        // Compare with randomColor
        if (this.style.backgroundColor === randomColor) {
            h1.style.color = randomColor;
            alertMessage.textContent = "You are Correct!"
            alertMessage.style.color = randomColor
            matchWithRandomColor(randomColor)
        } else {
            alertMessage.textContent = "Wrong, try again."
            alertMessage.style.color = "rgb(3, 63, 43)"
            this.style.backgroundColor = 'darkslategrey'
        }
    })
}

function matchWithRandomColor(rightColor) {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = rightColor
    }
}