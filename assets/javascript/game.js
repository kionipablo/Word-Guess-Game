//Creating a variable that contains the arrary of words to be guessed
var guessWords = ["jcole", "postmalone", "marshmello", "drake"];

//Creating variables to track count and store values
var wordToBeGuessed = "";
var lettersOfGuessWord = [];
var letterPlaceHolder = [];
var letterIndex = 0;
var wrongLetters = [];

var numGuesses = 8;
var wins = 0;




//Function to  initiate game
function startGame(){
    //Word ramdonly selected from array for user to guess
    wordToBeGuessed = guessWords[Math.floor(Math.random() * guessWords.length)];

        console.log(wordToBeGuessed);

    //Takes the randomly selected word and splits each letter into separate strings and stores the letters in the lettersOfGuessWord Array
    lettersOfGuessWord = wordToBeGuessed.split("");

        console.log(lettersOfGuessWord);

    //This is to take the length of the word to be guessed and set is as an number
    letterIndex = lettersOfGuessWord.length;
    
    //This loop is used to generate the "_" (letter placeholder) based on the length of the lettersOfGuessWord length
    for (var i = 0; i < letterIndex; i++){
        letterPlaceHolder.push(" _ ");
    }
        console.log(letterPlaceHolder);
    
    //To communicate function with HTML
    document.getElementById("guessword").innerHTML = letterPlaceHolder.join(" ");

};

//This function will be called to reset the count when the game is over
function reset(){
    numGuesses = 8;
    letterPlaceHolder = [];
    wrongLetters = [];
    startGame();
};

//Function to compare letters of the wordToBeGuessed and the letter selected by the user
function guessCheck(letter){
    var wordLetter = false;

    for (var i = 0; i < letterIndex; i++){
        if (wordToBeGuessed[i] === letter){
            wordLetter = true;
        }
    }

    if (wordLetter) {
        for (var i = 0; i < letterIndex; i++){
            if(wordToBeGuessed[i] === letter) {
                letterPlaceHolder[i] = letter;
            }
        }
    }

    else{
        wrongLetters.push(letter);
        numGuesses--;
    }
};

function endGame(){

    console.log("Wins:" + wins);
    console.log("Number of Guesses Remaining" + numGuesses);

    //To display wrong letters in the Letters Already Guessed Section of the page
    document.getElementById("lettersguessed").innerHTML = wrongLetters.join(" ");

    //To display the number guesses remaining on the page
    document.getElementById("guessesremaining").innerHTML = numGuesses;

    //To display the correct guess letters
    document.getElementById("guessword").innerHTML = letterPlaceHolder;


    if (lettersOfGuessWord.toString() == letterPlaceHolder.toString()){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        if(wordToBeGuessed === "jcole"){
            document.getElementById("image").src = "assets/images/jcole.jpg";
            document.getElementById("jcole").play();
            document.getElementById("postmalone").pause();
            document.getElementById("marshmello").pause();
            document.getElementById("drake").pause();
        }else if (wordToBeGuessed === "postmalone"){
            document.getElementById("image").src = "assets/images/postmalone.jpg";
            document.getElementById("jcole").pause();
            document.getElementById("postmalone").play();
            document.getElementById("marshmello").pause();
            document.getElementById("drake").pause();
        }else if (wordToBeGuessed === "marshmello"){
            document.getElementById("image").src = "assets/images/marshmello.jpg";
            document.getElementById("jcole").pause();
            document.getElementById("postmalone").pause();
            document.getElementById("marshmello").play();
            document.getElementById("drake").pause();
        }else if (wordToBeGuessed === "drake"){
            document.getElementById("image").src = "assets/images/drake.jpg";
            ddocument.getElementById("jcole").pause();
            document.getElementById("postmalone").pause();
            document.getElementById("marshmello").pause();
            document.getElementById("drake").play();
        }
        reset();

    } else if (numGuesses === 0){
        document.getElementById("image").src ="assets/images/gameover.gif";
        reset();
    }

};

startGame();

document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessCheck(userGuess);
    endGame();

}