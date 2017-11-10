// var winCounter = 0;
// var lossCounter = 0;
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

var counter = 0;
$("#currentScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 121);
$("#targetNumber").text(targetNumber);
Crystal1 = Math.floor(Math.random() * 12);
Crystal2 = Math.floor(Math.random() * 12);
Crystal3 = Math.floor(Math.random() * 12);
Crystal4 = Math.floor(Math.random() * 12);
counter = 0;
$("#currentScore").text(counter);

}

function win() {

	alert("You win!");
	winAmount ++;
	$("#winCounter").text(winAmount);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossAmount ++;
	$("#lossCounter").text(lossAmount);
	restartGame();
}

$('#Crystal1').on ('click', function(){
    counter = counter + Crystal1;

    $('#currentScore').text(counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Crystal2').on ('click', function(){
    counter = counter + Crystal2;

    $('#currentScore').text(counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Crystal3').on ('click', function(){
    counter = counter + Crystal3;

    $('#currentScore').text(counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Crystal4').on ('click', function(){
    counter = counter + Crystal4;

    $('#currentScore').text(counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });
