//^ Assalam u Alaikum Sir , i do not have an i.t background and i started learning javascript at the end of december and i try my best to complete this assignment ......

/* 
~ NAME : "MAZZ ATHER"    &&   ROLL NUM :"00476344"  && DAY : TUESDAY 9 TO 12
*/
//? 1. Install Node.js, TypeScript and VS Code on your computer.
// ~ DONE

//? 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
const myName: string = "Mazz ather";
let message: string = `Hello, ${myName} Would You Like To Learn Typescript`;
console.log(message);
//~ DONE

//? 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and Title_case.
let fullName: string = "maZz athEr";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
 console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1,4).toLowerCase(),fullName.charAt(5).toUpperCase() + fullName.slice(6,10).toLowerCase());
//~ DONE

//? 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//?Albert Einstein once said, “A person who never made a mistake never tried anything new.”
const quote: string = "I Asked ALLAH For Wealth And He Gave Me Islam";
console.log(`Muhammad Ali Once Said, "${quote}"`);
//~ DONE

//? 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_person: string = "Andrew Tate";
const msg: string =
  "Do Not Listen To The Advice Of People Who Are Living Lives You Do not Want To Live";
console.log(`The Legend ${famous_person} said, "${msg}"`);
//~ DONE

//? 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
let personName: string = "\tMuhammad \n Tahir\t";
console.log(personName);
let newName: string = personName.trim().split("\n").join("");
console.log(newName);
// ~done

//?  7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//? 8. You should create four lines that look like this:
////ADDITION
console.log(5 + 3);
////SUBTRACTION
console.log(10 - 2);
////MULTIPLICATION
console.log(2 * 4);
////DIVISION
console.log(16 / 2);
//~DONE

//?9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const favoriteNum:number = 804;
const Message:string = "Is My Favorite Number Because Of IMRAN KHAN ";
console.log(favoriteNum, Message);
//~DONE

//?10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//* NAME : MAZZ ATHER
//! DATE : 16 - FEBRUARY - 2024
// I JUST LEARNT JAVACRIPT AND I TRY MY BEST TO COMPLETE THIS ASSIGNMENT

/*let fullName = "mazz ather";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1));*/
//*THIS PROGRAM SHOWS MY NAME IN CAPITAL LETTER ,  SMALL LETTER AND TITLE CASE
  // it is known as comment that browser does not execute
//~done

//?11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const friends: string[] = ["Ali", "Asad", "Zaid", "Junaid", "Saqib"];
for (let i = 0 ; i < friends.length ; i ++){
  console.log(friends[i]);
  
}
//~done

//?12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let myFriends: string[] = ["Asad", "Zaid", "Junaid", "Saqib"];
for (let i = 0; i < myFriends.length; i++) {
  let friendName = myFriends[i];
  let someMsg: string =
    friendName + " HAVE YOU COMPLETED YOUR 45 QUESTIONS ASSIGNMENT ";
  console.log(someMsg);
}
//~DONE

13; //? Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let myCar: string[] = ["lambo", "BMW", "Bugatti", "ferrari"];
let features:string[] = ["v10engine", "luxurious interior design", "unmatched speed"];
  console.log(`I love to drive a ${myCar[0]} because she has ${features[0]}`);
  console.log(`I love to drive a ${myCar[1]} because she has ${features[1]}`);
  console.log(`I love to drive a ${myCar[2]} because she has ${features[2]}`);
   console.log(`I love to drive a ${myCar[3]} because she has superb features like ${features}`);
//~done


//?14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests: string[]  = ["Sir Zia", "Daniyal Nangori", "Ameen Alam","sir Moiz"];
let invitationMsg: string =
  "Your presence at my table would be greatly appreciated. Would you be able to join me for dinner?";
  console.log(
    `${guests[0]} ${invitationMsg}\t\n \n${guests[1]} ${invitationMsg} \n \n${guests[2]} ${invitationMsg}\n\n${guests[3]} ${invitationMsg}`
  );
  //~done
  
//?15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(
  `hey everyone listen, ${guests[2]} won't come to dinner because he has better thing to do to earn dollars`
);
guests.pop();
//~DONE

//*• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
console.log("updated list in the form of Array");
guests.push("Sir Imran");
console.log(guests);

//*• Print a second set of invitation messages, one for each person who is still in your list.
let newMsg =
  "It would be an honor to request your presence for dinner at my place";
console.log(
  `${guests[2]} would also join us so ${newMsg}\n\n${guests[0]} ${newMsg}\n \n${guests[1]} ${newMsg} `
);
// ~ done
//*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guests.push(" Andrew Tate", " Khabib ", "Elon Musk");

//*• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(
  `I Want your Attention ${guests.slice(
    0,
    3
  )} i've just found a bigger table so ${guests.slice(4, 7)} will also join us `
);
//*• Add one new guest to the beginning of your array.
console.log("i just add one more guest and the updated list in the form of array is down below");
guests.unshift("Cristiano Ronaldo");
console.log(guests);
// //*• Add one new guest to the middle of your array.
guests.splice(3, 0, "khamzat");
console.log(`add ${guests[3]} in the middle of array, and the updated list is`);
console.log(guests);
// //* • Use append() to add one new guest to the end of your list.
guests.push("Thomas Shelby");
console.log(`i add ${guests[9]} in the end of array, and the updated list is`);
console.log(guests);
// //*• Print a new set of invitation messages, one for each person in your list.

guests.forEach((guests) => {
  let myNewMsg = "if you come it would be an honour for me";
  console.log(guests, myNewMsg);
});
//~done

//? 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(
  "ohhhh, i  am so sorry i apologize coz i can invite only two people for dinner "
);

//*• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log(`total guests are ${guests} but i do not have enough table so i am gonna remove some of you`);

for (let i = guests.length ; i > 2 ; i--){
  let removedGuests = guests.shift(2)
   console.log(`sorry ${removedGuests} you will not come ,hope you will not mind`);
}
console.log("updated list");
console.log(guests);


//* • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${guests} both of you must come coz you are still invited`);

// *• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("i am gonna remove both you too");

guests.splice(0, 2);
console.log(guests);
//~done
//?18. Seeing the World: Think of at least five places in the world you’d like to visit.
//? Store the locations in a array. Make sure the array is not in alphabetical order.

let dreamPlaces: string[] = ["palestine", "london", "melbourne", "Edinburg", "islamabad"];

//• Print your array in its original order.
console.log("in original order");
console.log(dreamPlaces);
//• Print your array in alphabetical order without modifying the actual list.
console.log("in alphabetical order");
let order = [...dreamPlaces].sort();
console.log(order);

//• Show that your array is still in its original order by printing it.
console.log("in original order");
console.log(dreamPlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("in reverse alphabetical order");
let unordered = [...dreamPlaces].sort().reverse();
console.log(unordered);

// • Show that your array is still in its original order by printing it again
console.log("still in its original order");
console.log(dreamPlaces);

// • Reverse the order of your list. Print the array to show that its order has changed.
let DreamPlaces:string[] = ["islamabad", "Edinburg", "melbourne", "london", "palestine"];
console.log(DreamPlaces);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("reverse order");
let reverse = [...DreamPlaces].reverse();
console.log(reverse);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("in alphabetical order");
let alphabet = [...DreamPlaces].sort();
console.log(alphabet);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("in reverse alphabetical order");
let rev = [...DreamPlaces].sort().reverse();
console.log(rev);
//~done

//?19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let people = `i invited no one because in the end i removed all of them ${guests}`;
console.log(people);
console.log(guests);

//~done

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries:{[key:string]:string} = {
  germany: "dream country of every student",
  saudia: "dream country of every muslim",
  scotland: "dream country of every introvert",
  america: "dream country of every businessman",
};
console.log(countries);
//~done

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let languages:{[key:string]:string} = {
  english: "to unlock unlimited opportunities",
  spanish: "most spoken language in the world",
  arabic: "our most beloved language",
  chinese: "hardest language",
  urdu :"most lovely language"
};
console.log(languages);
//~done

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. 

let Places: string[] = ["islamabad", "Edinburg", "melbourne", "london", "palestine"];
console.log(Places[5]); //! it cause an index error

// Make sure you correct the error before closing the program.
let places: string[] = [
  "islamabad",
  "Edinburg",
  "melbourne",
  "london",
  "palestine",
  "sweden",
];
console.log(places[5]); //! i add one more index to prevent error
//~done

//?23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
let x:number = 10;
let y:number = 5;
console.log("x = 10 , y = 5");
console.log("x > y", "i predict true");
console.log(x > y);
console.log("x < y", "i predict false");
console.log(x < y);

let aCar:string = "lamborghini";
console.log(`my car ${aCar}`);
console.log("is aCar == lamborghini? I Predict true");
console.log(aCar == "lamborghini");
console.log("is aCar == ferrari? I Predict False");
console.log(aCar === "ferrari");

let myLaptop:string = "ASUS";
console.log(`my laptop ${myLaptop}`);
console.log("is myLaptop == lenovo? I Predict false");
console.log(myLaptop == "lenovo");
console.log("is myLaptop == ASUS? I Predict true");
console.log(myLaptop == "ASUS");

let myRollNum:number = 476344;
console.log(`my Roll number: ${myRollNum}`);
console.log("is myRollNum == 576344? I Predict false");
console.log(myRollNum == 576344);
console.log("is myRollNum == 476344? I Predict true");
console.log(myRollNum == 476344);

let ourPM: string = "Imran Khan";

console.log(`our PM ${ourPM}`);
console.log("is ourPM == Imran Khan? I Predict true");
console.log(ourPM == "Imran Khan");
console.log("is ourPM == nawaz sharif? I Predict false");
console.log(ourPM == "nawaz sharif");

//~DONE 5 EVALUATES TO TRUE AND 5 EVALUATES TO FALSE

//?  24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
let str1: string = "mazz ather";
let str2: string = "MAZZ ATHER";
let str3: string = "mazz ather";
console.log(`${str1}==${str2} I Predict False`);
console.log(str1 == str2);

console.log(`${str1}==${str3} I Predict True`);
console.log(str1 == str3);

//• Tests using the lower case function
let test1: string = "IMRANKHAN";
console.log(`${test1}=="imrankhan" I Predict false`);
console.log(test1 == test1.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

////equality and inequality
let r: number = 7;
let s: number = 17;
console.log(`r = ${r} s = ${s}`);
console.log("r == s", "i predict false");
console.log(r == s);
console.log("r !== s", "i predict true");
console.log(r !== s);

////greater than and less than
let q: number = 10;
let w: number = 50;
console.log(`q = ${q} w = ${w}`);
console.log("q > w", "i predict false");
console.log(q > w);
console.log("q < w", "i predict true");
console.log(q < w);

//// greater than or equal to, and less than or equal to
let l: number = 9;
let m: number = 1;
console.log(`l = ${l} m = ${m}`);
console.log("l >= m", "i predict true");
console.log(l >= m);
console.log("l <= m", "i predict false");
console.log(l <= m);

//• Tests using "and" and "or" operators
let o: number = 12;
let n: number = 13;
console.log(`o = ${o} n = ${n}`);
console.log("o >= n && o <= n", "i predict false");
console.log(o >= n && o <= n);
console.log("o <= n || o <= n", "i predict true");
console.log(o <= n || o <= n);

// • Test whether an item is in a array
let pets: string[] = ["cats", "dogs", "sheep"];
console.log(pets);
console.log(`if this is an array it shows true \n${pets.includes("cats")}`);

// • Test whether an item is not in a array
let animals: string[] = ["cats", "dogs", "sheep"];
console.log(
  `if this is not an array it shows false \n${!pets.includes("cats")}`
);
// ~done

//? 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color:string = "green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
  console.log("congratulations you just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (alien_color == "green") {
  console.log("this test will pass ");
} else {
}
//? 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. • If the alien’s color isn’t green, print a statement that the player just earned 10 points.• Write one version of this program that runs the if block and another that runs the else block.

let newAlienColor: string = "yellow";
if (newAlienColor == "green") {
  console.log("player just earned 5 points for shooting the alien");
} else {
  console.log(" player just earned 10 points.");
} //~ DONE

//? 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//!• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//• If the alien is green, print a message that the player earned 5 points.
let alien1: string = "green";
if (alien1 == "red") {
  console.log("player earned 15 points");
} else {
  console.log(" player just earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.

let alien2: string = "yellow";
if (alien1 == "red") {
  console.log("player earned 15 points");
} else {
  console.log(" player just earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
let alien3: string = "red";
if (alien3 == "red") {
  console.log("player earned 15 points");
} // ~done

//?28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age:number =parseInt(prompt("enter your age")|| "0");
//• If the person is less than 2 years old, print a message that the person is a baby.
if (age <= 2) {
  console.log("this person is a baby");
} else if (age <= 4) {
  console.log("this person is a toddler");
} else if (age < 13) {
  console.log("this person is a kid");
} else if (age < 20) {
  console.log("this person is a teenager");
} else if (age < 65) {
  console.log("this person is an adult");
} else {
  console.log("this person is an elder");
}
// ~Done

//?29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.• Make a array of your three favorite fruits and call it favorite_fruits.• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["apple", "banana", "mango"];

if (favorite_fruits.includes("banana")) {
  console.log(`yeah you really liked ${favorite_fruits[1]}`);
} else {
  console.log(`${favorite_fruits[1]} fruit is not in your list`);
}

if (favorite_fruits.includes("strawberry")) {
  console.log("yeah you really liked strawberry");
} else {
  console.log("strawberry fruit is not in your list");
}

if (favorite_fruits.includes("mango")) {
  console.log(`yeah you really liked ${favorite_fruits[2]}`);
} else {
  console.log(`${favorite_fruits[2]} fruit is not in your list`);
}

if (favorite_fruits.includes("pineapple")) {
  console.log("yeah you really liked pineapple");
} else {
  console.log("pineapple fruit is not in your list");
}

if (favorite_fruits.includes("apple")) {
  console.log(`yeah you really liked ${favorite_fruits[0]}`);
} else {
  console.log(`${favorite_fruits[0]} fruit is not in your list`);
}
// ~done

//**30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?• Otherwise, print a generic greeting, such as Hello Eric, thank yu for logging in again*/

let usernames: string[] = [
  "admin",
  "maaz_ather@",
  "muhammad_tahir123",
  "ueditz143",
  "sqbmaaz@",
  "imrankhanniazi",
];
for (let username of usernames) {
  if (username === "admin") {
    console.log(`Hello ${username} would you like to see a status report?`);
  } else {
    console.log(` Hello ${username} Thank you for logging in again`);
  }
} //~ DONE
// ? 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. • If the list is empty, print the message We need to find some users! • Remove all of the usernames from your array, and make sure the correct message is printed.
let user = [];
if (user.length === 0) {
  console.log(" We need to find some users");
}
//~done
//? 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.• Make a list of five or more usernames called current_users.• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = [
  "daniyal_nagori",
  "sir_zya",
  "ameen_alam",
  "sir_imran",
  "hamza",
];
let new_users = ["Daniyal_nagori", "sir_zya", "ali", "mazz", "khalid"];

for (let new_user of new_users) {
  if (current_users.includes(new_user.toLowerCase())) {
    console.log(
      `${new_user} username is not available you will need to enter a new username`
    )
  } else {
    console.log(`${new_user} username is available`);
  }
}
// ~done

//? 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.• Store the numbers 1 through 9 in a array.• Loop through the array.• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let suffix;

  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log(`${number}${suffix}`);
} //~ done

//? 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let pizzas:string[] = ["fajita", "bbq", "pepperoni"];
for (let i = 1; i <= 1; i++) {
  console.log(pizzas);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 1; i <= 1; i++) {
  console.log(`I like ${pizzas[1]} pizza`);
}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log(
  `i love these ${pizzas}  pizzas so so so much and i wanna talk about a lot but due to short time i am gonna stop here `
);
//~done
// ? 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let Animals: string[] = ["dog", "cat", "duck"];
for (let i = 1; i <= 1; i++) {
  console.log(Animals);
}
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log(` A ${Animals[0]} would make a great pet`);

console.log(` A ${Animals[1]} would make a cute pet`);

console.log(` A ${Animals[2]} would make a naughty pet`);
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

console.log(`${Animals} are human friendly`);
//~done

//?36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

let makeshirt = (size: string = "medium", inform: string = "this shirt is amazing"): string =>`my shirt size is ${size} and i wanna say that ${inform}`;{
  console.log( makeshirt());
}

//~done

// ? 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const makeshirts=(size: string = "large", inform: string = "I Love Typescript"): string => 
  `yours shirt's size is ${size} and your shirt print says ${inform}`;

  console.log(makeshirts());
 console.log(makeshirts("medium"));
 console.log(makeshirts("large" , " i love javascript"));

 //~done~
//? 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string, country:string = "Pakistan") {
  console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Moscow", "Russia");
describe_city("Sydney", "Australia");
//~done

// ? 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country:string) {
  console.log(city + country );
}
 city_country("karachi", " Pakistan");
city_country("rome", " italy");
city_country("london", " england");
//~done

//? 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
////do not understand the question correctly
function make_album(artist: string, title: string) {
  console.log(artist + title)
}
 make_album("imran khan ", " naya pakistan");
 make_album("arijit singh ", " ohh my love");
 make_album("ali zafar ", " psl");

//~done
// ? 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names:string[] = ["A.K Mujahid", "simon", "david", "helen"];
function showMagician ( magician_names: string) {
  for (let i = 1; i < magician_names.length; i++) {
    return;
  }
}
console.log(magician_names);
// ~done

//? 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["A.K Mujahid", "simon", "david", "helen"];

let greatMagician: string[] = magicians.map((magician) => magician + " the Great");

console.log(magicians); ////old
console.log(greatMagician); ////new
//~done

// ? 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.

function make_great(magicians: string) {
  return;
}
console.log(magicians);
//** Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
let newArr: string[] = ["ali", "ahmed", "saqib", "khalid"];
function show_magicians(newArr: string) {
  return;
}
console.log(magicians);
console.log(greatMagician);
console.log(newArr);
//!hope i solved the question correct;
//~done

//? 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwhich(...items:string[]) {
  console.log(`order sandwhich ${items}`);
}
sandwhich(( "bread" + " beef"));
sandwhich(("chicken" + " tomato"));
sandwhich(("cucumber" + " tomato_paste" + " mustard_paste"));

// ~done

//? 45. Cars: Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.  Print the Object that’s returned to make sure all the information was stored correctly.
function cars(manufacturer:string, modelName:string) {
  console.log(manufacturer + modelName );
    
}
cars("lamborghini" , "Aventandor");


//&                  ALHAMDULILLAH DONE
