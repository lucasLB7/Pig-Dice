// BACKEND OF THE PROGRAM WE KEEP IT SIMPLE


var player = function(name) {
  this.name = name;
  this.cacheScore = 0;
  this.totalScore = 0;
}


player.prototype.roll = function() {
  var rollDice = Math.floor(Math.random()*6+1);

// WE CREATE A LOOP TO DISTINGUISH IF THE VALUE OF ROLLDICE IS 1 OR NOT..
// AND WHAT HAPPENS ACCORDINGLY
  if (rollDice === 1) {
    this.cacheScore = 0;
    return this.cacheScore;
  }
  else {
    this.cacheScore += rollDice;
    console.log(this.cacheScore);
    console.log(rollDice);
  }
  return this.cacheScore;
}


player.prototype.hold = function() {

  this.totalScore += this.cacheScore;
  this.cacheScore = 0;
  return totalScore;
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// FRONT END. HERE WE DO MOST OF THE WORK FROM HIDDING & DISPLAYING PANELS
// TOBDEFINING WHAT HAPPENS WITH EACH BUTTON

$(document).ready(function() {
  $("form#playerNameInput").submit(function(event) {
    $(".gamescreen").show();
    $(".formgame").hide();
// WE HAVE STATED THAT WE WANT TO HIDE THE FORM (formgame)

    event.preventDefault();


    var playerOneName = $("input#p1Name").val();
    var playerTwoName = $("input#p2Name").val();
    var maxScore = parseInt($("#maxScore").val());

    var user1 = new player(playerOneName);
    var user2 = new player(playerTwoName);



    $("#nameStyle1").text(playerOneName);
    $("#nameStyle2").text(playerTwoName);
// WE PRINT THE VALUES OF PLAYER ONE & TWO ON THE WEBPAGE



    $("button#rolledDice1").click(function() {
      var rolledDice1 = user1.roll();

      $("#player1Rolled").text("You have rolled: "+rolledDice1+"!");
        var total1 = user1.totalScore;
      $("#player1Score").text("Your total score is: "+total1+"!");

      if (rolledDice1 === 1) {
        $("#userOne").addClass("panel-disable");
        $("button#rolledDice1").addClass("button-disable");
        $("#holdDice1").addClass("button-disable")

        $("#userTwo").removeClass("panel-disable");
        $("button#rolledDice2").removeClass("button-disable");
        $("#holdDice2").removeClass("button-disable")

      }
      else {
        var cacheScore1 = user1.cacheScore;
        $("#player1ession").text("Session scrore is "+cacheScore1+"!");
      }
    });




    $("button#holdDice1").click(function() {
      var holdDice1 = user1.hold();


    });

  });
});
