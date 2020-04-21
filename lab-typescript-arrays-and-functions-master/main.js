"use strict";
exports.__esModule = true;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i]) === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var prime = str[0].match(/\d+/gi).map(Number);
        var primeArray = [];
        var k = 0;
        for (var i = 0; i < prime.length; i++) {
            if (prime[i] % 2 !== 0 && prime[i] % 5 !== 0) {
                console.log(prime[i] + " prime number");
                primeArray[k++] = prime[i];
            }
            else {
                console.log(prime[i] + " not a prime number");
            }
        }
        return primeArray;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70, "govind", "raju"];
var str = ["34,45,60,23,13,25,70"];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(str));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
