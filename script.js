(function () {
    let numOfCircles = 6;
    let colors = [];
    let pickedRandomColor;

    const circles = document.querySelectorAll('.rounded-circle');
    const displayColorCode = document.getElementById('displayColorCode');
    const h1 = document.querySelector('h1');
    const alertMessage = document.querySelector('.alert');
    const resetBtn = document.getElementById('reset');
    const modeBtn = document.querySelectorAll('.mode');
    const easyBtn = document.getElementById('easy');
    const mediumBtn = document.getElementById('medium');
    const hardBtn = document.getElementById('hard');

    displayColorCode.textContent = pickedRandomColor;

    function initialize() {
        reset();

        // Playing game by clicking circles and get results (correct or wrong)
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = colors[i];
            circles[i].addEventListener('click', function () {

                // Compare clickedColor with pickedRandomColor
                let clickedColor = this.style.backgroundColor
                if (clickedColor === pickedRandomColor) {
                    h1.style.color = pickedRandomColor;
                    displayColorCode.style.color = pickedRandomColor;
                    alertMessage.innerHTML = `You are Correct! <img src="winner.gif"/>`
                    resetBtn.textContent = "Play Again"
                    alertMessage.style.color = pickedRandomColor
                    matchWithRandomColor(pickedRandomColor)
                } else {
                    alertMessage.textContent = "Wrong, try again."
                    alertMessage.style.color = "rgb(3, 63, 43)"
                    this.style.backgroundColor = 'darkslategrey'
                }
            })
        }

        // Event listening on Easy, Medium and Hard button
        for (let i = 0; i < modeBtn.length; i++) {
            modeBtn[i].addEventListener('click', function () {
                // At first all selected item removed
                easyBtn.classList.remove('selected');
                mediumBtn.classList.remove('selected');
                hardBtn.classList.remove('selected');
                this.classList.add('selected');

                // Checking the button which one is click and 
                numOfCircles = (this.textContent === 'Easy') ? 3 : (this.textContent === 'Medium') ? 6 : 9

                reset();

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
    initialize()

    resetBtn.addEventListener('click', function () {
        reset();
        this.textContent = "New Color";
        // display the generated color in the boxes
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = colors[i];
        }
    })

    function reset() {
        // generate new colors
        colors = generateRandomColor(numOfCircles);
        // pick a color
        pickedRandomColor = pickRandomColor(colors);
        // display various message on this event
        h1.style.color = 'black';
        displayColorCode.textContent = pickedRandomColor;
        displayColorCode.style.color = 'black';
        alertMessage.textContent = '';
        resetBtn.textContent = 'New Color';
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
})()