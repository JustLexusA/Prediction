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
let c1 = 0; // Red
let c2 = 0; // Orange
let c3 = 0; // Yellow
let c4 = 0; // Green
let c5 = 0; // Blue
let c6 = 0; // Purple
let c7 = 0; // None of the above

// THE PREDICTED COLOUR WILL BE DETEREMINED BASED ON WHICH OF THE ABOVE VARIABLES HAS THE HIGHEST VALUE

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
        new question("What is your gender?", ["Male", "Female"]),
        new question("Which do you prefer, summer or winter?", ["Summer", "Winter"]),
        new question("Do you prefer indoor or outdoor sports?", ["Indoor", "Outdoor"]),
        new question("Which arts would you choose, Visual Arts (Drawing, Painting and maybe Sculpture) or Music Arts (Instrumental or Vocal)?", ["Visual Arts", "Music Arts"]),
        new question("Do you like team sports?", ["Yes", "No"]),
        new question("Do you like team sports?", ["Yes", "No"]),
        new question("Do you like team sports?", ["Yes", "No"]),
        
    );
}

function draw() {
    clear();

    switch (currentMenu) {
        case 'title':
            titleScreen();
            break;
        case 'nameInput':
            nameInputScreen();
            break;
        // case 'quizSelection':
        //     quizSelectionScreen();
        //     break;
        case 'quiz':
            quizScreen(); // This is where the quiz and all the questions will be displayed and handled
            break;
        case 'result':
            resultScreen(); // You can implement this function to show the results
            break;
        }
    }


// All mouse inputs on buttons and quiz options will be handled here
function mousePressed() {
    // Check if the start button is clicked on title screen
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25 && currentMenu === 'title') {
        // Go to name input screen
        currentMenu = 'nameInput';
    }
    
    // Check if the confirm button is clicked on name input screen
    if (mouseX > width / 2 - 60 && mouseX < width / 2 + 60 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100 && currentMenu === 'nameInput') {
        // Only proceed if a name has been entered
        if (userName.trim() !== '') {
            currentMenu = 'quiz';
        }
    }

    // Check if an answer is clicked during the quiz
    if (currentMenu === 'quiz' && currentQuestion < questions.length) {
        questions[currentQuestion].checkOptionClick();
    }
}

// Handle keyboard input for the name input screen (The agent automatically had this typed out for me.. I had no idea how to do this.)
function keyPressed() {
    if (currentMenu === 'nameInput') {
        if (keyCode === BACKSPACE) {
            // Remove the last character when backspace is pressed
            userName = userName.slice(0, -1);
            return false; // Prevent default behavior
        } else if (keyCode === ENTER) {
            // Proceed to quiz when Enter is pressed
            if (userName.trim() !== '') {
                currentMenu = 'quiz';
            }
            return false;
        } else if (key.length === 1 && userName.length < 20) {
            // Add the typed character to userName (limit to 20 characters)
            userName += key;
            return false;
        }
    }
}