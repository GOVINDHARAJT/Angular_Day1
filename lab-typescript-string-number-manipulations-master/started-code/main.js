"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(3));
        console.log(word.concat(" raju"));
        console.log(word.slice(0, 6));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var obj1 = new StringManipulations();
obj1.print("govindharaj");
obj1.printWithSpace("govindharaj");
obj1.findVowel("govindharaj");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % 2 === 0) {
            console.log("It is not prime number");
        }
        else {
            console.log("It is prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("It is Magic Number");
        }
        else {
            console.log("It is Magic Number");
        }
    };
    return NumbersManipulations;
}());
var obj2 = new NumbersManipulations();
obj2.findPrime(13);
obj2.findMagic(199);
