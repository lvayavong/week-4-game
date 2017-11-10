
var winAmount = 0;
var lossAmount = 0;
var targetNumber = Math.floor(Math.random() * 121);
$("#targetNumber").text(targetNumber);



var Crystal1 = Math.floor(Math.random() * 12);
var Crystal2 = Math.floor(Math.random() * 12);
var Crystal3 = Math.floor(Math.random() * 12);
var Crystal4 = Math.floor(Math.random() * 12);

$("#winAmount").html(winAmount);
$("#lossAmount").html(lossAmount);

var amount = 0;
$("#currentScore").text(amount);

function restartGame() {

targetNumber = Math.floor(Math.random() * 121);
$("#targetNumber").text(targetNumber);
Crystal1 = Math.floor(Math.random() * 12);
Crystal2 = Math.floor(Math.random() * 12);
Crystal3 = Math.floor(Math.random() * 12);
Crystal4 = Math.floor(Math.random() * 12);
counter = 0;
$("#currentScore").text(amount);

}

function win() {

	alert("You win!");
	winAmount ++;
	$("#winAmount").text(winAmount);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossAmount ++;
	$("#lossAmount").text(lossAmount);
	restartGame();
}

$('#Crystal1').on ('click', function(){
    amount = amount + Crystal1;

    $('#currentScore').text(amount);

        if (amount == targetNumber){
          win();
        }
        else if (amount > targetNumber){
          lose();
        }
  });

$('#Crystal2').on ('click', function(){
    amount = amount + Crystal2;

    $('#currentScore').text(amount);

        if (amount == targetNumber){
          win();
        }
        else if (amount > targetNumber){
          lose();
        }
  });

$('#Crystal3').on ('click', function(){
    amount = amount + Crystal3;

    $('#currentScore').text(amount);

        if (amount == targetNumber){
          win();
        }
        else if (amount> targetNumber){
          lose();
        }
  });

$('#Crystal4').on ('click', function(){
    amount = amount + Crystal4;

    $('#currentScore').text(amount);

        if (amount == targetNumber){
          win();
        }
        else if (amount > targetNumber){
          lose();
        }
  });
