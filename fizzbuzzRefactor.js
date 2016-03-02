/*Earlier you built a FizzBuzz app. As per our instructions, your app was required to list out the numbers from 1 to 100, using the FizzBuzz rules for substituting in multiples of 3, 5 and both 3 and 5 (a.k.a. 15). For this assignment, take your original FizzBuzz app and refactor it so it uses a function and meets the following requirements:

When the page loads, the user should be prompted to supply a number. The easiest way to do this would be with the prompt() function.
You’ll need to write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting “fizz”, “buzz”, and “fizzbuzz” accordingly.
You’ll need to convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. 
To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string “22”, you could convert that to a number with +”22”.
Note that if you try to convert something like "this is a string" to an integer with +"this is a string", it will evaluate to NaN. 
Your app should ensure that the user supplied value does not evaluate to NaN. If it does, you should supply a message telling them they need to supply a number.
Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out this answer on Stack Overflow.
As usual, use Git to store your changes. When you’ve completed this assignment, push it up to GitHub pages, and share a link with your mentor and fellow students.*/


var val = prompt("Please pick a number between 1-100");

    if ((+val) === NaN || val % 1 != 0) {alert("Please try again, that is not a number");
    } else {
        for (var i = 1; i < +val; i++) {
        if ((i%3 === 0) && (i%5 === 0)) {
                console.log("fizzbuzz");
        } else if (i%3 === 0) {
            console.log("fizz");
        } else if (i%5 === 0) {
            console.log("buzz");
        } else {console.log(i);}
}
}
