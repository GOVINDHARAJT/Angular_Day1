import {
    StringManipulationService,
    NumberManipulationService
  } from "./main-service";

class StringManipulations implements StringManipulationService {
    public print(word: string): void {
      console.log(word);
      console.log(word.toUpperCase());
      console.log(word.toLowerCase());
      console.log(word.charAt(3));
      console.log(word.concat(" raju"));
      console.log(word.slice(0, 6));
      console.log(word.length);
    }
    printWithSpace(sentence: string): void {
      console.log(sentence);
      console.log(sentence.split("").join(" "));
    }
  
    findVowel(str: string): void {
      console.log(str);
      console.log(str.replace(/[^aeiou]/gi, "").length);
    }
  }
  let obj1 = new StringManipulations();
  
  obj1.print("govindharaj");
  obj1.printWithSpace("govindharaj");
  obj1.findVowel("govindharaj");


  class NumbersManipulations implements NumberManipulationService {
    findPrime(num: number): void {
      console.log(num);
      if (num % 2 === 0) {
        console.log("It is not prime number");
      } else {
        console.log("It is prime number");
      }
    }
  
    findMagic(num: number): void {
      console.log(num);
      if (num % 9 == 1) {
        console.log("It is Magic Number");
      } else {
        console.log("It is not Magic Number");
      }
    }
  }
  
  let obj2 = new NumbersManipulations();
  obj2.findPrime(13);
  obj2.findMagic(199);
  
 
