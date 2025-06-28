let message = document.getElementById("message_txt");
let input = document.getElementById("input_txt");
let guessBtn = document.getElementById("guess_btn");
let playAgain = document.getElementById("playAgain_btn");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let maxGuesses = 3;
let guessCount = 0;

console.log(typeof(randomNumber) , randomNumber);

guessBtn.addEventListener("click",function(){
    guessCount++
    message.innerHTML = "";
    let value =  Number(input.value);
    
    if(isNaN(value) || value < 1 || value > 100 ){
        message.innerHTML = "Please Enter a Valid Number Between 1 to 100";
    }else if(guessCount >= maxGuesses && value != randomNumber){    
        message.innerHTML = "You Sucks. your " + guessCount + " Counts are over! Game Over" ;
        guessBtn.disabled = true
    }else if(value == randomNumber){
        message.innerHTML = "Your guess is correct number was." + randomNumber + ". your guess count is " + guessCount ;
    }else if(value > randomNumber){
        message.innerHTML = "Your guess is too High pick a lower number . your guess count is " + guessCount ;
    }else{
        message.innerHTML = "Your guess is too Low pick a Higher number. your guess count is " + guessCount ;
    }
});

playAgain.addEventListener("click", function(){
    console.clear();
    message.innerHTML = `Your New Game started your total guess left is ${maxGuesses}`;
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    value = 0;
    
    guessBtn.disabled = false;
});