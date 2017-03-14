var targetNumber = Math.floor(Math.random() * 101) + 19;
var aimNumber = 0;
var red;
var orange;
var blue;
var orange;
var wins = 0;
var losses = 0;
var addativeValue = []

function gem() {
  while (addativeValue.length < 5) {
    var randomnumber = Math.floor(Math.random() * 11) + 1;
    if (addativeValue.indexOf(randomnumber) > -1) continue;
    return addativeValue[addativeValue.length] = randomnumber;
  }
}

function setAllValues() {
  red = gem(addativeValue[0]);
  orange = gem(addativeValue[1]);
  blue = gem(addativeValue[2]);
  green = gem(addativeValue[3]);
  console.log(red);
  console.log(orange);
  console.log(blue);
  console.log(green);
}
setAllValues();

function game() {

  $("#targetNumber").html(targetNumber)
  $(".red").on("click", function() {
    aimNumber += red;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#wins").html(wins)
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#losses").html(losses);
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  });

  $(".orange").on("click", function() {
    aimNumber += orange;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#wins").html(wins)
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#losses").html(losses);
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  });

  $(".blue").on("click", function() {
    aimNumber += blue;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#wins").html(wins)
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#losses").html(losses);
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  });

  $(".green").on("click", function() {
    aimNumber += green;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#wins").html(wins)
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      addativeValue = [];
      gem();
      setAllValues();
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#losses").html(losses);
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  })

}

game();
