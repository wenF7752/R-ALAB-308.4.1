console.log('==================Part 1==================');
const exampleString =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

//split the string into an array of rows using the newline character as a delimiter
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
//Start the loop at 1 to skip the heading row
for (let i = 1; i < part2Array.length; i++) {
  let row = part2Array[i]; //get the row
  let obj = {};
  for (let j = 0; j < headingRow.length; j++) {
    obj[headingRow[j].toLowerCase()] = row[j]; //create the object
  }
  part3Array.push(obj); //add the object to the array
}

console.log(part3Array);

console.log('==================Part 4==================');
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

//remove the last element from the sorted array in part 3
part3Array.pop();
console.log(part3Array);

//Insert the following object at index 1
let obj1 = { id: '48', name: 'Barry', occupation: 'Runner', age: '25' };
//Add the new object at index 1, without removing any elements
part3Array.splice(1, 0, obj1);
console.log(part3Array);

//Add the following object to the end of the array
let obj2 = { id: '7', name: 'Bilbo', occupation: 'None', age: '111' };
part3Array.push(obj2);
console.log(part3Array);

console.log('==================Part 5==================');
// As a final task, transform the final set of data back into CSV format.

let part5String = '';
//Add the heading row
part5String += headingRow.join(',') + '\n';
// console.log(part5String);
//Add the rows
for (let array in part3Array) {
  //loop through the array of objects
  let obj = part3Array[array]; //get the object
  //console.log(obj);
  let row = []; //create a row
  for (let j = 0; j < headingRow.length; j++) {
    //loop through the heading row because the keys are the same
    row.push(obj[headingRow[j].toLowerCase()]); //add the value to the row using the key from the heading row
  }
  part5String += row.join(',') + '\n'; //add the row to the string with a newline character at the end
}

console.log(part5String);
