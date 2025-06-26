let userConsent = confirm("Do you want to play the game?");
 
if (userConsent){
//     // logic
    let attempts = 0;
    let gameNumber = Math.floor(Math.random()* 100 +1);
    console.log (gameNumber);
   
    let guessInput;
    let guessButton = document.getElementById("guessButton");

    guessButton.addEventListener("click" , function(){
        let guessInput = document.getElementById("guessInput").value;
        console.log(guessInput);
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
        console.log(attempts);
        if(gameNumber == guessInput){
            alert("Right " + guessInput + " is Correct");
        }else{
            alert("Wrong no " + guessInput + " is Incorrect");
        }
    })

}else{
    alert("Ok May be some other time.")
}