// Chapter 14-16:- ARRAYS
// Q1. Declare an empty array using JS literal notation to store student names in future.
var empArr = [];

// Q2. Declare an empty array using JS object notation to store student names in future

// Q3. Declare and initialize a strings array.

var stringArr = ["Areeb", "Ahmed", "Ayan", "Faraz", "Waris"];

// Q4. Declare and initialize a numbers array

var numArr = [10, 5, 15, 20, 30, 40, 50];

// Q5. Declare and initialize a boolean array.
var booleanArr = [true, false];

// Q6. Declare and initialize a mixed array.
var mixedArr = ["Areeb", 10, 5, true, false, null, undefined];

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var eduInKhi = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write();
document.write(
  "<h2>Qualifications:-</h2>",
  " 1) ",
  eduInKhi[0],
  "<br>",
  " 2) ",
  eduInKhi[1],
  "<br>",
  " 3) ",
  eduInKhi[2],
  "<br>",
  " 4) ",
  eduInKhi[3],
  "<br>",
  " 5) ",
  eduInKhi[4],
  "<br>",
  " 6) ",
  eduInKhi[5],
  "<br>",
  " 7) ",
  eduInKhi[6],
  "<br>",
  " 8) ",
  eduInKhi[7],
  "<br><br>"
);

// Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

var studentName = ["Michael", "John", "Tony"];
var studentsScore = [320, 230, 450];
var percentage1 = (studentsScore[0] / 500) * 100;
var percentage2 = (studentsScore[1] / 500) * 100;
var percentage3 = (studentsScore[2] / 500) * 100;

document.write(
  "Score of ",
  studentName[0],
  " is ",
  studentsScore[0],
  ". Percentage : ",
  percentage1,
  "<br>",
  "Score of ",
  studentName[1],
  " is ",
  studentsScore[1],
  ". Percentage : ",
  percentage2,
  "<br>",
  "Score of ",
  studentName[2],
  " is ",
  studentsScore[2],
  ". Percentage : ",
  percentage3,
  "<br><br>"
);

// Q9. Initialize an array with color names. Display the array elements in your browser.

var colorNames = [" Blue ", " Black ", " Green ", " Red ", " Yellow "];
document.write(colorNames);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

var addColorInfirst = prompt("Which color you wants to add in the first?");

colorNames.unshift(addColorInfirst);

document.write("<br><br>", colorNames);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// Display the updated array in your browser.

var addColorInEnd = prompt("Which color you wants to add in the last?");

colorNames.push(addColorInEnd);

document.write("<br><br>", colorNames);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

colorNames.unshift("White ", " Maroon ");
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

var index = +prompt("Enter Index number where you want to add the colors");
var addColors = prompt("Enter Color names you want to add");

colorNames.splice(index, 0, addColors);

document.write("<br><br>", colorNames);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var indexDel = +prompt("Enter the index number where to start the deletion");

var colorDel = +prompt("Enter how many colors you want to delete");

colorNames.splice(indexDel, colorDel);

document.write("<br><br>", colorNames, "<br><br>");

// Q10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var arr = [23, 24, 17, 90, 100];

alert(arr.sort());

// Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var citiesArr = [
  "Karachi ",
  " Lahore ",
  " Islamabad ",
  " Peshawar ",
  " Multan",
];

document.write("<b>Cities list</b><br>", citiesArr, "<br><br>");
document.write("<b>Selected Cities</b><br>", citiesArr.slice(1, 3), "<br><br>");

// Q12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr1 = ["This", "is", "my", "cat."];

document.write("<b>Array</b><br>", arr1, "<br><br>");
document.write("<b>String</b><br>", arr1.join(" "), "<br><br>");

// Q13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var devices = ["Keyboard", "mouse", "Printer", "monitor"];

document.write("<b>Devices</b><br>", devices.join(", "), "<br><br>");
document.write("<b>Out</b><br>", devices.shift(), "<br>");
document.write("<b>Out</b><br>", devices.shift(), "<br>");
document.write("<b>Out</b><br>", devices.shift(), "<br>");
document.write("<b>Out</b><br>", devices.shift(), "<br><br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var devices2 = ["Keyboard", "mouse", "Printer", "monitor"];

document.write("<b>Devices</b><br>", devices2.join(", "), "<br><br>");
document.write("<b>Out</b><br>", devices2.pop(), "<br>");
document.write("<b>Out</b><br>", devices2.pop(), "<br>");
document.write("<b>Out</b><br>", devices2.pop(), "<br>");
document.write("<b>Out</b><br>", devices2.pop(), "<br><br>");

// Q15. Write a program to store phone manufacturers (Apple,   Samsung, Motorola, Nokia, Sony & Haier) in an array.   Display the following dropdown/select menu in your   browser using document.write() method:

var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(
  "<Select><option>",
  mobile[0],
  "</option><option>",
  mobile[1],
  "</option><option>",
  mobile[2],
  "</option><option>",
  mobile[3],
  "</option><option>",
  mobile[4],
  "</option><option>",
  mobile[5],
  "</option></Select><br><br>"
);

// HOME ASSIGMENT
// Chapter 15:- (Array I)

// Q1. Declare an empty array.

var empArr = [];

// Q2. Code an array with 1 string element

var strArr = ["Areeb"];

// Q3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

var alphabet = ["h", "i", "j", "k"];

alert(alphabet[2]);

// Q4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

console.log(alphabet.length);

// Q5. Declare an array with one element and Add a second element

var one = ["Areeb"];
one.splice(33, 0, " Ayesha");

alert(one);

// Chapter 16:- (Array II)

// Q1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element.

var array = ["Areeb"];
array.push("Ayesha");

console.log(array.push());
