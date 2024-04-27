'use strict';

// Important Note:
// Kindly use map loop instead of for in all of your solutions

// Resource:
// Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use map to calculate the square of the values.
//  
// Input: [ 2, 8, 3, 5 ]
// Output: [ 4, 64, 9, 25 ]
// 

function square(arr) {
    // write your code here
   /* let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[i] * arr[i];
    }
    return res*/
    return arr.map((numb) => numb * numb);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given an array of objects of students' first and last name, use the map to return an array off students' full names.
//
// note: the full names should be combined between student's first and last names.
//
// Input:
// [
//     {
//         firstName: 'Adam',
//         lastName: 'Anderson',
//     },
//     {
//         firstName: 'Ben',
//         lastName: 'Zeller',
//     }, 
//     {
//         firstName: 'Peter',
//         lastName: 'Mccord',
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Sagar',
//     },
//     {
//         firstName: 'Nathan',
//         lastName: 'Weiss',
//     }
// ]
//
// Output: ['Adam Anderson', 'Ben Zeller', 'Peter Mccord', 'Fred Sagar', 'Nathan Weiss']

function fullName(arr) {
    // write your code here
    /*let resl = [];
    for (let i = 0; i < arr.length; i++) {
        resl[i] = arr[i].firstName + ' ' + arr[i].lastName;
    }
    return resl;*/

    return arr.map((student) => `${student.firstName} ${student.lastName}`);

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:

// Given an array of objects use map to calculate the average of the grades 
// and return an array of the objects with a new property called avg (that represent the average of the grades).
//  

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62, 50, 80, 90, 39, 45, 60, 50]
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
// }
// ]
//
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// -------------

function gradesAvg(arr) {
    // write your code here
    /*let res3 = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].gradsList.length; j++) {
            sum += arr[i].gradsList[j];
        }
        let avg3 = sum / arr[i].gradsList.length;
        res3.push({
            firstName: arr[i].firstName,
            lastName: arr[i].lastName,
            gradsList: arr[i].gradsList,
            avg3: avg3
        });
    }
    return res3;*/
    return arr.map(student => {
        const sum = student.gradsList.reduce((total, grade) => total + grade, 0);
        const avg = sum / student.gradsList.length;
        student.avg = avg;
        return student;
    });
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Using the previous function result, determine if the student pass or failed,
// and return the array of the objects with a new property called result (with Passed or Failed) 
//
// Note: if his/her avg equal or above 50 the result will be Passed, and Failed if it's less than that

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//          lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//          lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//          lastName: 'Mccord',
// 	        gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//          lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//          avg: 11.75
// 	}
//]
// 
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75,
//      result: 'Failed'
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8,
//      result: 'Failed'
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5,
//      result: 'Passed'
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75,
//      result: 'Failed'
// 	}
// ]

function studentsResult(arr) {
    // write your code here
  /*  let result = [];
    for (let i = 0; i < arr.length; i++) {
        let resultStatus = arr[i].avg >= 50 ? 'Passed' : 'Failed';
        let student = { ...arr[i], result: resultStatus };
        result.push(student);
    }
    return result;*/
    return arr.map((student) => {
        const result = student.avg >= 50 ? 'Passed' : 'Failed';
        return { ...student, result };
    });
}
// -------------------------------------------------------------------------------------------------------

module.exports = { square, fullName, gradesAvg, studentsResult };
