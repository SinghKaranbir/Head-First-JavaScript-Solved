/**
 * Created by karanbir on 27/09/15.
 */
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 +1;
var location3 = location2 +1;

var hits = 0;
var guesses = 0;
var isSunk = false;
var guess;

while(!isSunk) {

    guess = prompt("Ready, Aim then Hit! (Enter any no from 1 to 6)");

    if (0 > guess || guess > 6) {

        alert("Please enter a Valid no");
    }
    else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;
        }else{
            alert("Nice Try, but you Missed!!");
        }

        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship");
        }
    }
}
    var stats = " You took "+ guesses + " to sank my ship i.e you accuracy is "+(3/guesses);
    alert(stats);


















