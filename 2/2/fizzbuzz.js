let counter = 0;

do {
    counter++;
    
    if (!(counter % 15)) console.log("FizzBuzz");
    else if (!(counter % 3)) console.log("Fizz");
    else if (!(counter % 5)) console.log("Buzz");
    else console.log(counter);

} while (counter < 100);