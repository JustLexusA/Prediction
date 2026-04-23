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
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25 && currentMenu === 'title') {
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

// QUIZ SCREEN, DISPLAY UPON PRESSING THE "Start Quiz" BUTTON
function quizScreen() {
    // Variable for tracking the current question and which variable from n1 to n6 or c1 to c6 is being updated based on the user's answers
    let currentQuestion = 0; // Set to 0 for asking for the user's name, then increment for each subsequent question
    // Placeholder for quiz screen
    background(220);
}

// RESULT SCREEN, DISPLAY UPON COMPLETING THE QUIZ: COMPLETED WHEN ALL QUESTIONS HAVE BEEN ANSWERED
function resultScreen() {
    // Placeholder for result screen
    background(220);
}