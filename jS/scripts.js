 ..//let's start with the back end part of this story


// we Declare an object oinkOink that we will keep using in the rest of the code...
 var oinkOink = {
 player1Score : 0,
 player2Score : 0,
// These variables will hold the scores for the two players.
// Scores will be added from the clearScore var (declared below)
// This will only happen if the dice roll result is NOT EQUAL to one...
 clearScore : 0,
 currentPlayer : 1,

 function (diceRoll) {
   var randomNum = math.floor(math.random()*6)+1; //We create a random number
   console.log(randomNum); //Log it for debugging

   if (randomNum === 1) { // If random number is equal to one:...
     this.clearScore = 0; // The score goes to zero
     this.changeTurns(); // We change turns (changeTurns) is defined below...
   }
   else {
     this.clearScore += randomNum; // Else, if the randomNum is NOT 1,
     //we add the value of randomNum to score.
   }

  function (changeTurns) {
    if (currentPlayer === 1) { // If player one is currently active...
      this.player1Score += score; // We add the score to player1Score
      this.currentPlayer = 2; // We change player to 2
    }
    else { // if player two is active:
      this.player2score += score; // We assign the value of score to player2score.
      this.currentPlayer = 1; // We switch back to player 1
    }
  }

  function (holdBtn) { // Let's define the hold button what will simply return the function changeTurns
    this.changeTurns();
    this.clearScore = 0;
  }
 }
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
 // Back end DONE DEAL!! ;) Let's move on to the front end part of this....


 var playerRoll = function() {
     var dice = game.diceRoll();
      $("#dice").text(dice);
      changeTurns();
   }

   $("button#roll").click(function(){
       playerRoll();
     });

     $("button#hold").click(function(){
       game.hold();
       changePlayerAndRefreshScores();
     });
