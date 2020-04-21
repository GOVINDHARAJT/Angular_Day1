![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Typescript - Arrays

## Introduction
In this lab, we are going to work with arrays in TypeScript. We are going to perform different operations following different strategies using Typescript. In this process, we will cover several important topics such as variable types, arrays, functions, classes, and interfaces.

Project Structure
The project structure will be as follows:
```
starter-code/
├── progression-1
    ├── index.html
    ├── main.js
    └── appservice.ts
```
You are going to work over the *.ts files.

Note: Remember that the *.js files are generated every time we save the TypeScript files in our solution.

## Learning Goals

After this lesson, you will be able to:

- Develop basic TypeScript functions.
- Develop arrays and perform some array related operations.
- Work with mixed arrays.
- Create a TypeScript interface, and use it from a class.
- Implement two different interfaces and use them from classes.

## Requirements

- Fork this repo.
- Clone this repo.
- Install Typescript on your computer using the below command.

```$ npm install -g typescript```

## Submission
Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a pull request from your master branch to the original repository master branch. In the pull request name, add your ProGrad Id and last names separated by a dash "-"

## How to run the project
To compile ths project
- Open the terminal inside VScode editor and execute the following command.
    - ``` tsc main.ts ```
- Once you complie your typescript code, main.js file gets generated automatically.
- Now, run the main.js file to see the output. To run the file, use the command given below
    - ``` node main.js ```
- You can see the output in the terminal.
- Also open the index.html and see the output in browser console.

![Complile&Run](https://i1.faceprep.in/ProGrad/typescrip-lab1.png)

## Progression #1: 
- Go to app-service.ts.
- Create an interface called StringManipulationService and don't forget to export it.
- Define the following methods inside the StringManipulationService,
    - arrayFindMultiples(myArray : any) : Array<Number>;
    - arraySeparate(myArray : any) : Array<string>;
    - arraySplit(myString : string) : Array<number>;
    - arraySort(myArray : any) : Array<string>;
    - arrayReplace(myArray : any) : Array<Number>;

## Progression #2:
- Go to main.ts.
- Create a class called as ArrayManipulations which should implement the StringManipulationService.
- Your class should implement all the 5 methods.
   - arrayFindMultiples(myArray : any) : Array<Number> method is used to find the multiples of 5 and 10 in the given array.
   - arraySeparate(myArray : any) : Array<string> method is used to find the string values in the mixed array and return them.
   - arraySplit(myString : string) : Array<number> method is used to find the prime number in the mixed array. First identify the   numbers in the array, typecast it and then check whether the number is a prime number or not.
   - arraySort(myArray : any) : Array<string> method is used to sort the given array of strings.
   - arrayReplace(myArray : any) : Array<Number> method is to used to find the numbers which are divisible by 3 and replace it with 5.    

Happy Coding ProGrad ❤️
