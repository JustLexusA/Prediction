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
        // You can add functionality to select an option and move to the next question. 
    }
}