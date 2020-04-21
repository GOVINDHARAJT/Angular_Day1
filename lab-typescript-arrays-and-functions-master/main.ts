import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayMultiply(myArray: number[]) : Array<Number> {
        let temp = [], j=0;
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%5===0 || myArray[i]%10 ===0){
                temp[j] = myArray[i];
                j++;
            }              
        }
        return temp
    }

    public arraySeparate(myArray: any) : Array<string>{
        let str = [], j=0;
        for(var i=0;i<myArray.length;i++){
            if(typeof(myArray[i]) === "string"){
                str[j] = myArray[i];
                j++;
            }              
        }
        return str;
    }

    public arraySplit(str: any): Array<number> {
        const prime = str[0].match(/\d+/gi).map(Number);
        const primeArray = [];
        let k=0;
        for (var i = 0; i < prime.length; i++) {
          if (prime[i] % 2 !== 0 && prime[i] % 5 !== 0) {
            console.log(prime[i] + " prime number");
            primeArray[k++]=prime[i];
          } else {
            console.log(prime[i] + " not a prime number");
          }
        }
        return primeArray;
      }
    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        myArray.reverse();
        return myArray;
    }

    public arrayReplace(myArray:any):Array<number>{
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%3===0)
                myArray[i] = 5;
        }
        return myArray;
    }
}

let myArray: any[] = [34, 45, 60, 23, 13, 25, 70,"govind","raju"];
let str: any[] = ["34,45,60,23,13,25,70"];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(str));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



