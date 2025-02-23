// // Chapter 14-16:- ARRAYS
// // Q1. Declare an empty array using JS literal notation to store student names in future.
// var empArr = [];

// // Q2. Declare an empty array using JS object notation to store student names in future

// // Q3. Declare and initialize a strings array.

// var stringArr = ["Areeb", "Ahmed", "Ayan", "Faraz", "Waris"];

// // Q4. Declare and initialize a numbers array

// var numArr = [10, 5, 15, 20, 30, 40, 50];

// // Q5. Declare and initialize a boolean array.
// var booleanArr = [true, false];

// // Q6. Declare and initialize a mixed array.
// var mixedArr = ["Areeb", 10, 5, true, false, null, undefined];

// // Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var eduInKhi = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write();
// document.write(
//   "<h2>Qualifications:-</h2>",
//   " 1) ",
//   eduInKhi[0],
//   "<br>",
//   " 2) ",
//   eduInKhi[1],
//   "<br>",
//   " 3) ",
//   eduInKhi[2],
//   "<br>",
//   " 4) ",
//   eduInKhi[3],
//   "<br>",
//   " 5) ",
//   eduInKhi[4],
//   "<br>",
//   " 6) ",
//   eduInKhi[5],
//   "<br>",
//   " 7) ",
//   eduInKhi[6],
//   "<br>",
//   " 8) ",
//   eduInKhi[7],
//   "<br><br>"
// );

// // Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var studentName = ["Michael", "John", "Tony"];
// var studentsScore = [320, 230, 450];
// var percentage1 = (studentsScore[0] / 500) * 100;
// var percentage2 = (studentsScore[1] / 500) * 100;
// var percentage3 = (studentsScore[2] / 500) * 100;

// document.write(
//   "Score of ",
//   studentName[0],
//   " is ",
//   studentsScore[0],
//   ". Percentage : ",
//   percentage1,
//   "<br>",
//   "Score of ",
//   studentName[1],
//   " is ",
//   studentsScore[1],
//   ". Percentage : ",
//   percentage2,
//   "<br>",
//   "Score of ",
//   studentName[2],
//   " is ",
//   studentsScore[2],
//   ". Percentage : ",
//   percentage3,"<br><br>"
// );

// // Q9. Initialize an array with color names. Display the array elements in your browser.

var colorNames = [" Blue ", " Black ", " Green ", " Red " , " Yellow "];
document.write(colorNames)


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

var addColorInfirst = prompt("Which color you wants to add in the first?");

colorNames.unshift( addColorInfirst );

document.write("<br><br>", colorNames)


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.

var addColorInEnd = prompt("Which color you wants to add in the last?");

colorNames.push(addColorInEnd);

document.write("<br><br>", colorNames);


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

colorNames.unshift("White "," Maroon ");
document.write("<br><br>", colorNames);


// d. Delete the first color in the array. 
// Display the updated array in your browser

colorNames.shift();
document.write("<br><br>", colorNames);

// e. Delete the last color in the array. 
// Display the updated array in your browser.

colorNames.pop();
document.write("<br><br>", colorNames);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . 
// Display the updated array in your browser.

var index = splice() ;








