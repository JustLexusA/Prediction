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
let currentMenu = 'title'; // Possible values: 'title', 'quizSelection', 'quiz', 'result'

// VARIABLE FOR STORING THE USER'S NAME
let userName = '';

// VARIABLE FOR TRACKING THE CURRENT QUESTION
let currentQuestion = 0;

// ARRAY TO STORE THE QUESTIONS
let questions = [];

function setup() {
    // Slightly smaller than the window size to avoid scrollbars
    createCanvas(windowWidth*0.9, windowHeight*0.9);
    background(220);
    textAlign(CENTER, CENTER);

    // Add the questions into the array when the program starts then display them once the quiz starts
    questions.push(
        new question("What is your favourite number?", ["0-20", "21-40", "41-60", "61-80", "81-100"]),
        new question("What is your favourite colour?", ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "None of the above"])
    );
}

function draw() {
    clear();

    switch (currentMenu) {
        case 'title':
            titleScreen();
            break;
        case 'quizSelection':
            quizSelectionScreen();
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
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25 && currentMenu === 'title') {
        // Start the quiz (you can replace this with a function to show the quiz)
        currentMenu = 'quiz'; // Change to quiz menu
    }
}