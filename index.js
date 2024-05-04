// Basic types
var str = "Test";
var num = 10;
var isBoolean = true;
var strArr = ["1", "2", "3"];
var strArr2 = ["1", "2", "3"];
var numArr = [1, 2, 3];
var numArr2 = [1, 2, 3];
var person = {
    name: "Tohid",
    // age: 22,
};
// any and unknow;
var not = "test1";
var numbers = 10;
numbers = not; // any give not error
var unknowType;
//number = unknowType // give an error
// Union Types
var val = 10; // "10";
// Literal Types
var customType = 5;
// Typle
var customArr; // ===> Array<number,number,number>   ;
customArr = [1, 2, 3];
var arr = [
    {
        name: "Tohid",
    },
];
var arr2 = [
    {
        name: 10,
    },
];
var arr3 = [
    {
        name: true,
    },
];
var obj = {
    name: "a",
};
var obj_2 = {
    name: 10,
};
var ob_3j = {
    name: false,
};
// functions
var calc = function (x, y) {
    return x + y;
};
var sum = calc;
console.log(sum(1, 2)); // output = 3
var calc2 = function (x, y) {
    // return x + y; // void yenu hec ne return etmir sadece oxutdura bilersen
};
var sum2 = calc2;
console.log(sum2(1, 2)); // output = 3
var calcSum = function (_a) {
    var x = _a.x, y = _a.y, z = _a.z;
    return x + y + z;
};
//let cvb: (params: FunctionParametrTypes) => number = calcSum;
var result = calcSum({ x: 1, y: 2, z: 3 });
console.log(result); // Output: 6
var persons = {
    name: "Tohid",
    age: 22,
    skills: ["HTML", "Js"],
    hobbies: [1, 2],
};
var Tohid = {};
var qadir = {}; // Required keyword makes all fields required
var user = {
    name: "name",
};
// Readonly keyword make the object fields freeze you can't change the value of fields
var Ruslan = {};
;
var Tohid = {
    age: 
};
// Omit keyword it delete a field in a Type
