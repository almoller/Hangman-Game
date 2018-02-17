document.addEventListener("keyup", gameStart);

function gameStart() {
    console.log("key pressed to begin");


    var wordArray = [
        "MOUNTAIN",
        "RIVER",
        "TRAIL",
        "LAKE",
        "CAMPING",
        "FISHING",
        "SUMMIT",
        "WILDFLOWER",
        "ANIMALS",
        "MEADOW"
    ];

    //var wordIndex = 0;
    var turnCount = 10;
    var winCount = 0;
    var lossCount = 0;



    // FUNCTIONS
    //
    
    //functions to update counts/scores
    function updateTurn() {
        document.querySelector("#turnCount").innerHTML = turnCount;
    }
    function updateWin() {
        document.querySelector("#winCount").innerHTML = winCount;
    }
    function updateLoss() {
        document.querySelector("#lossCount").innerHTML = lossCount;
    }


    // MAIN SECTION
    updateTurn();
    updateWin();
    updateLoss();
    //renderWord();

    //// Select word and display it as "_ _ _ _ _"

    //function renderWord() {
        var word = wordArray[Math.floor(Math.random() * wordArray.length)]; console.log("The word is: " + word);
        var currentWord = document.getElementById("current_word");

        var word_display = [];
        for (i = 0; i < word.length; i++) {
            word_display[i] = " __ ";
            var new_word_display = word_display.join("");
        }

        var new_word = document.createElement("h5");
        new_word.innerHTML = new_word_display;
        currentWord.appendChild(new_word);
        currentWord.setAttribute("style", "color:#fff");

    //}



    document.onkeyup = function (gamePlay) {
        var userInput = gamePlay.which;

        if (userInput >= 65 && userInput <= 90) {
            console.log("Selection = " + String.fromCharCode(userInput));
            for (i = 0; i < word.length; i++) {

                if (String.fromCharCode(userInput) === word[0]) {
                    console.log(String.fromCharCode(userInput) + " is in the current word");

                    
                }
                else {
                    console.log(String.fromCharCode(userInput) + " is NOT in the current word");

                }
            }
            turnCount--;
            updateTurn();

        }
        else {
            alert("Please only use letter keys...");
        }


    }





    removeHandler();
}


function removeHandler() {
    document.removeEventListener("keyup", gameStart);
}



/////////xxxxx---  FIRST ATTEMPT  ---xxxxx/////////

/*
document.addEventListener("keyup", gameStart);

function gameStart() {
    console.log("you pressed a key to begin");

    var wordList = [
        "MOUNTAIN",
        "RIVER",
        "TRAIL",
        "LAKE",
        "CAMPING",
        "FISHING",
        "SUMMTI",
        "WILDFLOWER"
    ];
    var turnCount = 10;
    var winCount = 0;
    var lossCount = 0;
    var lettersGuessed = [];

    //// Display the current count for turns, wins, and losses

    // TURNS
    var turnCountDisplay = document.getElementById("turnCount");
    var turnCountDisplay_P = document.createElement("p");
    turnCountDisplay_P.innerHTML = turnCount;
    turnCountDisplay.appendChild(turnCountDisplay_P);

    // WINS
    var winCountDisplay = document.getElementById("winCount");
    var winCountDisplay_p = document.createElement("p");
    winCountDisplay_p.innerHTML = winCount;
    winCountDisplay.appendChild(winCountDisplay_p);

    // LOSSES
    var lossCountDisplay = document.getElementById("lossCount");
    var lossCountDisplay_p = document.createElement("p");
    lossCountDisplay_p.innerHTML = lossCount;
    lossCountDisplay.appendChild(lossCountDisplay_p);


    //// Select word and display it as "_ _ _ _ _"
    var word = wordList[Math.floor(Math.random() * wordList.length)]; console.log("The word is: " + word);
    var currentWord = document.getElementById("current_word");

    var word_display = [];
    for (i = 0; i < word.length; i++) {
        word_display[i] = " __ ";
        var new_word_display = word_display.join("");
    }

    var new_word = document.createElement("h5");
    new_word.innerHTML = new_word_display;
    currentWord.appendChild(new_word);
    currentWord.setAttribute("style", "color:#fff");

/*
    document.onkeyup = function (gamePlay) {
        var userInput = gamePlay.which;
        if (userInput >= 65 && userInput <= 90) {
            console.log("selection = " + String.fromCharCode(userInput));
            for (i = 0; i < word.length; i++) {
                //document.onkeyup = function(gamePlay) {
                //    var userInput = gamePlay.which;

                //if (userInput >= 65 && userInput <= 90) {
                //var test = word[1]; console.log("test value = " + test);
                //console.log("you chose the letter " + String.fromCharCode(userInput));
                if (String.fromCharCode(userInput) === word[i]) {
                    //if (String.fromCharCode(userInput) == word[i]) {
                   // new_word[i] = String.fromCharCode(userInput);
                    console.log(String.fromCharCode(userInput) + " IS in the word");
                    console.log(word[0]);
                }
                else {
                    console.log(String.fromCharCode(userInput) + " is NOT in the current word");
                }
            }
            //else {
            //    alert("Invalid Key -- Use Letters Only");
            //}
            //}
        }
        else {
            alert("Invalid Key");
        }

    }
//}


//// GUESS A LETTER AND COMPARE TO CURRENT WORD

    document.onkeyup = function(gamePlay) {
        var userInput = gamePlay.which;

        if (userInput >= 65 && userInput <= 90) {
            console.log("Selection = " + String.fromCharCode(userInput));
            for(i = 0; i < word.length; i++) {
               
                if (String.fromCharCode(userInput) === word[i]) {
                //   new_word[i] == String.fromCharCode(userInput);
                    console.log(String.fromCharCode(userInput) + " is in the current word");
                }
                else {
                    //console.log("this letter is NOT -A-")

                    console.log(String.fromCharCode(userInput) + " is NOT in the current word");

                }
            }

        }
        else {
            alert("Please only use letter keys..."); 
        }


    }


    turnCount--;

winCount++;

    



removeHandler();

}



function removeHandler() {
    document.removeEventListener("keyup", gameStart);
}
*/
