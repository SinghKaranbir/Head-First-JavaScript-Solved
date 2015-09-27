/**
 * Created by karanbir on 27/09/15.
 */

var location1 = 1;
var location2 = 2;
var location3 = 3;

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
            hits = hits + 1;
        }
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship");
        }
    }
}
    var stats = " You took "+ guesses + " to sank my ship i.e you accuracy is "+(3/guesses);
    alert(stats);


















