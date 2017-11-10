var winAmount = 0;
var lossAmount = 0;
var targetNumber = Math.floor(Math.random() * 121);

$("#targetNumber").html(targetNumber);



var Crystal1 = Math.floor(Math.random() * 12);
var Crystal2 = Math.floor(Math.random() * 12);
var Crystal3 = Math.floor(Math.random() * 12);
var Crystal4 = Math.floor(Math.random() * 12);

$("#winAmount").html(winAmount);
$("#lossAmount").html(lossAmount);

var amount = 0;
$("#currentScore").html(amount);

function restartGame() {

  targetNumber = Math.floor(Math.random() * 121);

  $("#targetNumber").html(targetNumber);
  Crystal1 = Math.floor(Math.random() * 12);
  Crystal2 = Math.floor(Math.random() * 12);
  Crystal3 = Math.floor(Math.random() * 12);
  Crystal4 = Math.floor(Math.random() * 12);
  amount = 0;

  $("#currentScore").html(amount);

}

function win() {

  alert("You win!");
  winAmount++;

  $("#winAmount").html(winAmount);
  restartGame();
}

function lose() {

  alert("You lose!");
  lossAmount++;

  $("#lossAmount").html(lossAmount);
  restartGame();
}

$('#Crystal1').click(function() {
  amount = amount + Crystal1;


  $('#currentScore').html(amount);

  if (amount == targetNumber) {
    win();
  } else if (amount > targetNumber) {
    lose();
  }
});

$('#Crystal2').click(function() {
  amount = amount + Crystal2;


  $('#currentScore').html(amount);

  if (amount == targetNumber) {
    win();
  } else if (amount > targetNumber) {
    lose();
  }
});

$('#Crystal3').click(function() {
  amount = amount + Crystal3;


  $('#currentScore').html(amount);

  if (amount == targetNumber) {
    win();
  } else if (amount > targetNumber) {
    lose();
  }
});

$('#Crystal4').click(function() {
  amount = amount + Crystal4;


  $('#currentScore').html(amount);

  if (amount == targetNumber) {
    win();
  } else if (amount > targetNumber) {
    lose();
  }
});
