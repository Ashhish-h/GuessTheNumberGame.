const ans = Math.floor((Math.random() * 100 + 1));
let guesses = 0;

document.getElementById("submitbutton").onclick = function(){
    let guess = document.getElementById("game-input").value;

    guesses += 1;
    if(guess == ans){
        alert(`${ans} is the right guess. It took you a total of ${guesses} guess`);
    }
    else if(guess < ans){
        alert("Entered number is too small!");
    }
    else if(guess > ans){
        alert("Entered number is too big!");
    }
    else if(guess > 100){
        alert("Entered number should be betweeen 1 - 100");
    }
    else{
        alert("Please enter a number a between 1 - 100");
    }
}