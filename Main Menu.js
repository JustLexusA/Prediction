// VARIABLES FOR CALCULATING THE NUMBER BEING PREDICTED FROM 0 - 100
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;

// THE PREDICTED NUMBER
let predictedNumber = n1 + n2 + n3 + n4 + n5 + n6;

// VARIABLES FOR CALCULATING THE COLOUR BEING PREDICTED RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE, OR NONE OF THE ABOVE
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;

let predictedColourValue = c1 + c2 + c3 + c4 + c5 + c6;
let predictedColour = 'None of the above';

// CURRENT MENU STATE
let currentMenu = 'title'; // Possible values: 'title', 'quiz', 'result'

function setup() {
    // Slightly smaller than the window size to avoid scrollbars
    createCanvas(windowWidth*0.9, windowHeight*0.9);
    background(220);
    textAlign(CENTER, CENTER);
}

function draw() {
    clear();

    switch (currentMenu) {
        case 'title':
            titleScreen();
            break;
        case 'quiz':
            quizScreen(); // This is where the quiz and all the questions will be displayed and handled
            break;
        case 'result':
            // resultScreen(); // You can implement this function to show the results
            break;
        }
    }


// All mouse inputs on buttons and quiz options will be handled here
function mousePressed() {
    // Check if the start button is clicked
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
        // Start the quiz (you can replace this with a function to show the quiz)
        currentMenu = 'quiz';
        print("Quiz started!"); // Placeholder for starting the quiz
    }
}

// TITLE SCREEN
function titleScreen() {
    // Background and title text
    background(220);
    textSize(32);
    fill(0);
    text("Favourite number/colour predictor", width / 2, height / 4);

    // Instructions
    textSize(16);
    text("Take the quiz and see if I can predict your favourite number and colour!", width / 2, height / 4 + 50);

    // Start button
    let buttonColour = color(200, 200, 200); // RGB values for the button colour
    // Hover effect for the button
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
        buttonColour = color(225, 225, 225); // Lighter colour on hover
    }
    fill(buttonColour);
    rect(width / 2 - 75, height / 2 - 25, 150, 50, 10);
    fill(0);
    textSize(20);
    text("Start Quiz", width / 2, height / 2);
}

function quizScreen() {
    // Placeholder for quiz screen
    background(220);
    textSize(24);
    fill(0);
    text("Quiz will be here!", width / 2, height / 2);
}
