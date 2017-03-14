//Crystal numbers are to be between 1 and 12 while the target number should be between 19 and 120  

var targetNumber = Math.floor(Math.random() * 101) + 19;


var aimNumber = 0;

var red = 0;
var orange = 0;
var blue = 0;
var orange = 0;
var addativeNumber = gem();


var wins = 0;

var losses = 0;

var a;
var b;
var c;
var d;


function gem() {
  return Math.floor(Math.random() * 11) + 1;
  // return a = Math.floor(Math.random() * 11) + 1;
  // return b = Math.floor(Math.random() * 11) + 1;
  // return c = Math.floor(Math.random() * 11) + 1;
  // return d = Math.floor(Math.random() * 11) + 1;
  // if ( gem(a) === gem(b) || gem(a) === gem(c) || gem(a) === gem(d) || gem(b) === gem(c) || gem(b) === gem(d) || gem(c) === gem(d)) {
  //   gem(); 
  // }
}

// var isFixedValue = false;



function setAllValues() {
  // if (isFixedValue === false) {
    red = gem();
    orange = gem();
    blue = gem();
    green = gem();
  // }
  isFixedValue = true;
  console.log(red);
  console.log(orange);
  console.log(blue);
  console.log(green);
}

setAllValues();

// $("#targetNumber").html(targetNumber)
// $(".red").on("click", function() {
//   aimNumber = aimNumber + red;
//   $("#aimNumber").html(aimNumber)
// });

// $(".orange").on("click", function() {
//   aimNumber = aimNumber + orange;
//   $("#aimNumber").html(aimNumber)
// });

// $(".blue").on("click", function() {
//   aimNumber = aimNumber + blue;
//   $("#aimNumber").html(aimNumber)
// });

// $(".green").on("click", function() {
//   aimNumber = aimNumber + green;
//   $("#aimNumber").html(aimNumber)
// })


// $("#targetNumber").html(10)
function game() {

  $("#targetNumber").html(targetNumber)
  $(".red").on("click", function() {
    aimNumber += red;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
    $("#wins").html(wins);
    $("#losses").html(losses);
  });

  $(".orange").on("click", function() {
    aimNumber += orange;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(0);
    } else if (aimNumber > targetNumber) {
      losses++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  });

  $(".blue").on("click", function() {
    aimNumber += blue;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber);
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  });

  $(".green").on("click", function() {
    aimNumber += green;
    $("#aimNumber").html(aimNumber)
    if (aimNumber === targetNumber) {
      wins++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber);
      aimNumber = 0;
      $("#aimNumber").html(aimNumber);
    } else if (aimNumber > targetNumber) {
      losses++;
      targetNumber = Math.floor(Math.random() * 101) + 19;
      aimNumber = 0;
      $("#targetNumber").html(targetNumber)
      $("#aimNumber").html(aimNumber);
    }
  })
  
}

game();
