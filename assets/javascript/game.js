//Crystal numbers are to be between 1 and 12 while the target number should be between 19 and 120  

var targetNumber ;

var aimNumber ;

var crystal = {
  red: 0,
  orange: 0,
  blue: 0,
  green: 0
}


function target(){
  targetNumber =  Math.floor(Math.random()*101)+19;
  $("#targetNumber").html(targetNumber);
};

target();

function gemGenerator(crystal, orange){
  for (key in crystal)
  return randomNumber = Math.floor(Math.random()*11)+1;
  if (gemGenerator(crystal.red) = gemGenerator(crystal.orange)){
    gemGenerator(red, orange);
  }
  
  }



console.log("red " + gemGenerator(crystal.red));
console.log("orange " + gemGenerator(crystal.orange));
console.log("blue " + gemGenerator(crystal.blue));
console.log("green " + gemGenerator(crystal.green));

 
 
 
gemGenerator();

