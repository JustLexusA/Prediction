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

// QUIZ SELECTION SCREEN, DISPLAY UPON PRESSING THE "Start Quiz" BUTTON
// function quizSelectionScreen() {
//     background(175);

//     // Quiz type selection buttons
//     let numberButtonColour = color(200, 200, 200);
//     let colourButtonColour = color(200, 200, 200);
//     // Hover effects for the buttons
//     if (mouseX > width / 2 - 150 && mouseX < width / 2 - 50 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
//         numberButtonColour = color(225, 225, 225);
//     }
//     if (mouseX > width / 2 + 50 && mouseX < width / 2 + 150 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
//         colourButtonColour = color(225, 225, 225);
//     }
//     fill(numberButtonColour);
//     rect(width / 2 - 150, height / 2 - 25, 100, 50, 10);
//     fill(colourButtonColour);
//     rect(width / 2 + 50, height / 2 - 25, 100, 50, 10);
//     fill(0);
//     textSize(20);
//     text("Number Quiz", width / 2 - 100, height / 2);
//     text("Colour Quiz", width / 2 + 100, height / 2); 
// }

// QUIZ SCREEN, DISPLAY UPON PRESSING THE "Start Quiz" BUTTON
function quizScreen() {
    background(175);

    // Display name on corner if it has been entered
    if (userName !== '') {
        textSize(16);
        fill(0);
        text(`Name: ${userName}`, width - 100, 20);
    }

    // Display only the current question
    if (currentQuestion < questions.length) {
        questions[currentQuestion].displayQuestion();
    }
}

// RESULT SCREEN, DISPLAY UPON COMPLETING THE QUIZ: COMPLETED WHEN ALL QUESTIONS HAVE BEEN ANSWERED
function resultScreen() {
    // Placeholder for result screen
    background(220);
}