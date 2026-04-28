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

    // Check if an option was clicked
    checkOptionClick() {
        for (let i = 0; i < this.options.length; i++) {
            if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 + i * 50 - 20 && mouseY < height / 2 + i * 50 + 20) {
                // Handle the option selection (e.g., store the answer, move to the next question)
                console.log(`Selected option: ${this.options[i]}`);
                currentQuestion++; // Move to the next question

                // Checks which question is being answered and adds to the score for the corresponding personality type based on the answer chosen
                if (currentQuestion === 1) {
                    if (this.options[i] === "Visual Arts") {
                        c1++;
                        n1 += 10;
                    } else {
                        c2++;
                        n1 += 20;
                    }
                } else if (currentQuestion === 2) {
                    if (this.options[i] === "Yes") {
                        c3++;
                        n2 += 10;
                    } else {
                        c4++;
                        n2 += 20;
                    }
                } else if (currentQuestion === 3) {
                    if (this.options[i] === "Indoor") {
                        c5++;
                        n3 += 10;
                    }
                return true;
            }
        }
        }
        return false;
    }
}    