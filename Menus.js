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
    if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= height / 2 - 25 && mouseY <= height / 2 + 25) {
        buttonColour = color(225, 225, 225); // Lighter colour on hover
    }
    fill(buttonColour);
    rect(width / 2 - 75, height / 2 - 25, 150, 50, 10);
    fill(0);
    textSize(20);
    text("Start Quiz", width / 2, height / 2);
}

// NAME INPUT SCREEN, DISPLAY AFTER PRESSING "Start Quiz" BUTTON
function nameInputScreen() {
    background(220);
    
    // Title
    textSize(28);
    fill(0);
    text("What's your name?", width / 2, height / 4);
    
    // Input box
    textSize(16);
    fill(255); // White background for input box
    stroke(0);
    strokeWeight(2);
    rect(width / 2 - 150, height / 2 - 30, 300, 50, 10);
    
    // Display the name being typed
    fill(0);
    noStroke();
    textSize(18);
    text(userName, width / 2 - 140, height / 2);
    
    // Cursor
    fill(0);
    rect(width / 2 - 140 + textWidth(userName), height / 2 - 20, 2, 30);
    
    // Confirm button
    let buttonColour = color(100, 200, 100); // Green button
    if (mouseX >= width / 2 - 60 && mouseX <= width / 2 + 60 && mouseY >= height / 2 + 50 && mouseY <= height / 2 + 100) {
        buttonColour = color(130, 230, 130); // Lighter green on hover
    }
    fill(buttonColour);
    rect(width / 2 - 60, height / 2 + 50, 120, 50, 10);
    
    fill(0);
    textSize(18);
    text("Start Quiz", width / 2, height / 2 + 75);
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

// QUIZ SCREEN, DISPLAY UPON PRESSING THE "Start Quiz" BUTTON AFTER ENTERING NAME
function quizScreen() {
    background(175);

    // Display name on corner if it has been entered
    if (userName !== '') {
        textSize(16);
        fill(0);
        text(`Hello ${userName}!`, width - 100, 20);
    }

    // Display only the current question
    if (currentQuestion < questions.length && userName != '') {
        questions[currentQuestion].displayQuestion();
        questions[currentQuestion].displayOptions();
    }

    // If all questions have been answered, go to the result screen
    if (currentQuestion >= questions.length) {
        currentMenu = 'result';
    }
}

// RESULT SCREEN, DISPLAY UPON COMPLETING THE QUIZ: COMPLETED WHEN ALL QUESTIONS HAVE BEEN ANSWERED
function resultScreen() {
    background(220);

    // Display the predicted number and colour
    textSize(24);
    fill(0);
    text(`Your predicted favourite number is: ${predictedNumber}`, width / 2, height / 3);
    text(`Your predicted favourite colour is: ${predictedColour}`, width / 2, height / 3 + 50);
}