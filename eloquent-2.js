/*
  LOOPING A TRIANGLE
*/

for (var libraPondo = "#"; libraPondo.length <= 7; libraPondo += "#" )
  console.log(libraPondo);

/*
  FIZZBUZZ
*/

var counter = "";

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
   		counter = "FizzBuzz";
   } else if (i % 3 === 0) {
   		counter = "Fizz";
   } else if (i % 5 === 0) {
   		counter = "Buzz";
   } else {
   		counter = i;
   }
  	console.log(counter);
}


/*
  CHESS BOARD
*/

var size = 8;
var kasparov = "";

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
    	if ((j + i) % 2 === 0) {
        	kasparov += " ";
        } else {
        	kasparov += "#";
        }
    }       kasparov += "\n";
}

console.log(kasparov);
