// BACKEND OF THE PROGRAM WE KEEP IT SIMPLE


var player = function(name) {
  this.name = name;
  this.cacheScore = 0;
  this.totalScore = 0;
}
player.prototype.roll = function() {
  var rollDice = Math.floor(Math.random()*6+1);
  if (rollDice === 1) {
    this.cacheScore = 0;
  }
  else {
    this.cacheScore += rollDice;
  }
  return rollDice;
}
player.prototype.hold = function() {
  this.cacheScore += this.totalScore;
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

    event.preventDefault();
    var playerOneName = $("input#p1Name").val();
    var playerTwoName = $("input#p2Name").val();
    var maxScore = parseInt($("#maxScore").val());

    var user1 = new player(playerOneName);
    var user2 = new player(playerTwoName);

    $("#nameStyle1").text(playerOneName);
        $("#nameStyle2").text(playerTwoName);

    $("button#rolledDice1").click(function() {
      var rolledDice1 = user1.roll();
      if (rolledDice1 === 1) {
        $("#userOne").addClass("panel-disable");
        $("button#rolledDice1").addClass("button-disable");
        $("#holdDice1").addClass("button-disable")

        $("#userTwo").removeClass("panel-disable");
        $("button#rolledDice2").removeClass("button-disable");
        $("#holdDice2").removeClass("button-disable")

        $("#player1Rolled").text("You have rolled: "+rolledDice1+"!");
          var total1 = user1.totalScore;
        $("#player1Score").text("You have rolled: "+total1+"!");

      }
      else {
        var cacheScore1 = user1.cacheScore;
        $("#player1ession").text("Session scrore is "+cacheScore1+"!");
      }
    });

  });
});

function turnDice() {
  var img = document.getElementById("image");
  img.setAttribute("class", "rotated-image");
}
