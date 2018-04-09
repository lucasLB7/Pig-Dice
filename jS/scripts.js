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
    return rollDice;
  }
  else {
    this.cacheScore += rollDice;
    console.log(this.cacheScore);
    console.log(rollDice);
  }
  return rollDice;
}


player.prototype.hold = function() {
  this.totalScore += this.cacheScore;
  this.cacheScore = 0;
  return this.totalScore;
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// FRONT END. HERE WE DO MOST OF THE WORK FROM HIDDING & DISPLAYING PANELS
// TOBDEFINING WHAT HAPPENS WITH EACH BUTTON

$(document).ready(function(formSubmit) {
  $("form#playerNameInput").submit(function(event) {
    var playerOneName = $("input#p1Name").val();
    var playerTwoName = $("input#p2Name").val();
    var maxScore = parseInt($("#maxScore").val());
    if (playerOneName === ""){

    alert("Please fill the form");
    }
    else {
    $(".gamescreen").show();
    $(".formgame").hide();
  }
// WE HAVE STATED THAT WE WANT TO HIDE THE FORM (formgame)

    event.preventDefault();



    var user1 = new player(playerOneName);
    var user2 = new player(playerTwoName);
    $("#nameStyle1").text(playerOneName);
    $("#nameStyle2").text(playerTwoName);
// WE PRINT THE VALUES OF PLAYER ONE & TWO ON THE WEBPAGE



    $("button#rolledDice1").click(function() {

      var rolledDice1 = user1.roll();
      var cacheScore1 = user1.cacheScore;


      $("#player1session").text("Session scrore is "+cacheScore1+"!");
      $("#player1Rolled").text("You have rolled: "+rolledDice1+"!");
        var total1 = user1.totalScore;
      $("#player1Score").text("Cumulative score is: "+total1+"!");

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
      var totalDice1 = user1.hold();
      $("#player1Score").text("Your total score is: "+totalDice1+"!");
      var cacheScore1 = user1.cacheScore;
      $("#player1session").text("Cumulative score is "+cacheScore1+"!");

      if(totalDice1 >= maxScore) {
        alert(user1.name+" has won the game!");

      }
      else {
        $("#userOne").addClass("panel-disable");
        $("button#rolledDice1").addClass("button-disable");
        $("#holdDice1").addClass("button-disable")
        $("#userTwo").removeClass("panel-disable");
        $("button#rolledDice2").removeClass("button-disable");
        $("#holdDice2").removeClass("button-disable")
      }



    });
    $("button#rolledDice2").click(function() {
      var rolledDice2 = user2.roll();
      var cacheScore2 = user2.cacheScore;
      $("#player2session").text("Session scrore is "+cacheScore2+"!");
      $("#player2Rolled").text("You have rolled: "+rolledDice2+"!");
        var total2 = user2.totalScore;
      $("#player2Score").text("Cumulative score is: "+total2+"!");

      if (rolledDice2 === 1) {
        $("#userTwo").addClass("panel-disable");
        $("button#rolledDice2").addClass("button-disable");
        $("#holdDice2").addClass("button-disable")

        $("#userOne").removeClass("panel-disable");
        $("button#rolledDice1").removeClass("button-disable");
        $("#holdDice1").removeClass("button-disable")

      }
      else {
        var cacheScore2 = user2.cacheScore;
        $("#player2ession").text("Session scrore is "+cacheScore2+"!");
      }
    });


    $("button#holdDice2").click(function() {
      var totalDice2 = user2.hold();
      $("#player2Score").text("Your total score is: "+totalDice2+"!");
      var cacheScore2 = user1.cacheScore;
      $("#player2session").text("Cumulative score is "+cacheScore2+"!");

      if(totalDice2 >= maxScore) {
        alert(user1.name+" has won the game!")
      }
      else {
        $("#userTwo").addClass("panel-disable");
        $("button#rolledDice2").addClass("button-disable");
        $("#holdDice2").addClass("button-disable")
        $("#userOne").removeClass("panel-disable");
        $("button#rolledDice1").removeClass("button-disable");
        $("#holdDice1").removeClass("button-disable")
      }
    });
  });
});
