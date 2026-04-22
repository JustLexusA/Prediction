// VARIABLES FOR CALCULATING THE NUMBER BEING PREDICTED FROM 0 - 100
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
let n7 = 0;
let n8 = 0;
let n9 = 0;
let n10 = 0;

// THE PREDICTED NUMBER
let predictedNumber = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;

// VARIABLES FOR CALCULATING THE COLOUR BEING PREDICTED RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE, OR NONE OF THE ABOVE
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
let c10 = 0;

let predictedColourValue = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10;
let predictedColour = 'None of the above';

function setup() {
    // Slightly smaller than the window size to avoid scrollbars
    createCanvas(windowWidth*0.9, windowHeight*0.9);
    background(220);
    textAlign(CENTER, CENTER);
}

function draw() {
    clear();
}

// TITLE SCREEN
function titleScreen() {
    background(220);
    textSize(32);
    fill(0);
    text("Favourite number/colour predictor", width / 2, height / 2 - 40);
}
