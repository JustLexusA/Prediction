class question {
    constructor(questionText = '' , options = []) {
        this.questionText = questionText;
        this.options = options; // Array of option strings
    }
    displayQuestion() {
        textSize(18);
        fill(0);
        text(this.questionText, width / 2, height / 4);
    }
    displayOptions() {
        // Display all the answers that can be chosen for the question.
        textSize(16);
        for (let i = 0; i < this.options.length; i++) {
            rectMode(CENTER);
            let highlightColour = color(200, 200, 200);
            // Hover effect for the options
            if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 + i * 50 - 20 && mouseY < height / 2 + i * 50 + 20) {
                highlightColour = color(225, 225, 225);
            }
            fill(highlightColour);
            rect(width / 2, height / 2 + i * 50, 100 + 20, 30, 5);
            fill(0);
            text(this.options[i], width / 2, height / 2 + i * 50);
        }
    }
    mousePressed() {
        // Check if the user clicks on any of the options and update the corresponding colour value
        for (let i = 0; i < this.options.length; i++) {
            let optionX = width / 2 - textWidth(this.options[i]) / 2;
            let optionY = height / 2 + i * 50 - 10; // Adjust for text height
            let optionWidth = textWidth(this.options[i]);
            let optionHeight = 20; // Approximate height of the text
        }
    }
}    