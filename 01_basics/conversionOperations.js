/*

let score = 33
console.log(score) //OUTPUT: 33
console.log(typeof score) //OUTPUT: number

score = "33"
console.log(score) //OUTPUT: 33 
console.log(typeof (score)) //OUTPUT: string

let convertToNumber = Number(score) 
console.log(convertToNumber) //OUTPUT: 33
console.log(typeof (convertToNumber)) //OUTPUT: number 


score = null
console.log(score) //OUTPUT: null 
console.log(typeof (score)) //OUTPUT: object

score = undefined
console.log(score) //OUTPUT: undefine 
console.log(typeof (score)) //OUTPUT: undefine 

score = "33abc"
console.log(score)//OUTPUT: 33abc
console.log(typeof (score))//OUTPUT: string
convertToNumber = Number(score) 
console.log("After converting 33abc to number")
console.log(convertToNumber) //OUTPUT: NaN
console.log(typeof (convertToNumber)) //OUTPUT: number
*/

let isBooleanNumberOne = 1 
let valueIsBoolean = Boolean(isBooleanNumberOne) //converting 1 to boolean become true
console.log("isBooleanNumberOne = ", valueIsBoolean)    //OUTPUT: true
console.log();

let isBooleanNumberZero = 0 
valueIsBoolean = Boolean(isBooleanNumberZero) //converting 0 to boolean become false
console.log("isBooleanNumberZero = ", valueIsBoolean)    //OUTPUT: flase
console.log();

let isBooleanPositiveNumber = 440 
valueIsBoolean = Boolean(isBooleanPositiveNumber) //converting to boolean become true
console.log("isBooleanPositiveNumber = ", valueIsBoolean)    //OUTPUT: true
console.log();

let isBooleanNegativeNumber = -50 
valueIsBoolean = Boolean(isBooleanNegativeNumber) //converting to boolean become true
console.log("isBooleanNegativeNumber = ", valueIsBoolean)    //OUTPUT: true
console.log();

let isBooleanString = "majid" 
 valueIsBoolean = Boolean(isBooleanString) //converting to boolean become true
console.log("isBooleanNumberString = ", valueIsBoolean)    //OUTPUT: true
console.log();

let isBooleanEmptyString = "" 
 valueIsBoolean = Boolean(isBooleanEmptyString) //converting boolean become false
console.log("isBooleanEmptyString = ", valueIsBoolean)    //OUTPUT: false
console.log();

let isBooleanSpaceInString = " " 
 valueIsBoolean = Boolean(isBooleanSpaceInString) //converting to boolean become true
console.log("isBooleanSpaceInString = ", valueIsBoolean)    //OUTPUT: true
console.log();

let isBooleanNull = null
 valueIsBoolean = Boolean(isBooleanNull) //converting to boolean become false
console.log("isBooleanNull = ", valueIsBoolean)    //OUTPUT: false
console.log();

let isBooleanUndefine = undefined
 valueIsBoolean = Boolean(isBooleanUndefine) //converting to boolean become false
console.log("isBooleanUndefine = ", valueIsBoolean)    //OUTPUT: false
console.log();




