console.log('==================Part 1==================');
const exampleString =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

//split the string into an array of rows
let arrayOfRows = exampleString.split('\n');

//print the array of rows
for (row in arrayOfRows) {
  console.log(arrayOfRows[row]);
}

console.log('==================Part 2==================');
const exampleString2 =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

//   Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

//split the string into an array of rows
let arrayOfRows2 = exampleString2.split('\n');
let columnOfRows = arrayOfRows2[0].split(',');
//split the first row into an array of columns
let arrayOfColumns = arrayOfRows2[0].split(',');
//Create a variable that stores the number of columns in each row of data within the CSV
let numberOfColumns = arrayOfColumns.length;
//results stored in a two-dimensional array
let part2Array = [];
for (row in arrayOfRows2) {
  let rowArray = arrayOfRows2[row].split(',');
  part2Array.push(rowArray);
}
console.log(part2Array);

console.log('==================Part 3==================');
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let part3Array = [];
let part3Object = {};
//For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
let headingRow = part2Array[0];

console.log(headingRow);
