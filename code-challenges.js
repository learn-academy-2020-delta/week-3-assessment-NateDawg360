// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var fiboArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];

const fibonacciWhat=(number) =>{
  let fiboArrayReturn = []
//empty array to returbn answer to^

//then iteration (for loop) to run through array
  for (let i = 0; i < number; i++) {

    //perhaps use ternary operator?

    //push sum of last and second to last numbers
    fiboArrayReturn.length < 2 ? fiboArrayReturn.push(1) : fiboArrayReturn.push(fiboArrayReturn [fiboArrayReturn.length-1] + fiboArrayReturn[fiboArrayReturn.length-2])
  }
  return fiboArrayReturn
}
console.log(fibonacciWhat(10));


// for(let i=0; i<10; i++){
//   if(fiboArray[i] !== 5){
    // console.log(fiboArray[i])
//   }
// }




//filter function and conditional?

//
// let findTen = fiboArray.filter(index =>{
//   if (number <= 55) {
//     return findTen
//   } else if (number > 0) {
//     return findTen
//   }
// })

// console.log(findTen(fiboArray));


//hardcode just to make sure i understand array destructuring and assignments.
// let newArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// console.log(newArray);
// let numFilter = fiboArray.filter(num)  =>
//   if (num <= 34, || >= 0) {
//     return numFilter
//   })

  // console.log(numFilter);

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddsArray = (array) => {

    let numbersOnly = array.filter(value => {
        return typeof value === "number"
    })

    let oddsOnly = numbersOnly.filter(value => {
        return value % 2 !== 0
    })

    let sortOddNums = oddsOnly.sort((a,b) => a-b)
    return sortOddNums
}
console.log(oddsArray(fullArr1));

// let oddArray = fullArr1.filter( (number) => {return number % 2 !== 0} );
//
// console.log(oddArray);


// const value = fullArr1.filter(number => {
//   return value.sort(number) % 2 !== 0
// })
// console.log(value);


// const oddNumbers = numbers => number % 1 === 0;
//
// const odds = fullArr1.filter(oddNumbers)
//
// console.log(odds);



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetters = (string) => {
    if (string.length % 2 === 0) {
      return string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    } else if (string.length % 2 !== 0) {
        return string.charAt(string.length / 2)
    }
}
console.log(middleLetters(middleLetters2));


// const middle = string.filter(index => {
//
//   //my attempt is to create a function that uses an if statement to determine the length of the string, and see if it is odd or even
//         if (str.length() % 2 == 0)
//         {
//             position = str.length() / 2 - 1;
//             length = 2;
//         }
//         else
//         {
//             position = str.length() / 2;
//             length = 1;
//         }
//         return str.substring(position, position + length);
//     })
//
//     //if odd, then return one middle number.  if even, then return the middle two numbers.
//     console.log(middle(middleLetters1));



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  calcArea() {
    return (4 * Math.PI * this.radius ** 2).toFixed(2)
  }
  get area() {
    return this.calcArea()
  }
}
var firstSphere = new Sphere(5)
  console.log(firstSphere.area);





   // import java.io.*;
//
//   public class SphereTest  {
//
//   public static void main(String[] args) throws Exception {
//     //TODO Auto-generated method stub
//     System.out.print1n("Enter radius");
//     BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
//     String input=br.readLine();
//     double radius=Double.parseDouble(input);
//     double pi=3.14;
//     double area=pi*4*radius*radius;
//     System.out.print1n(area);
//   }
// }

// console.log(SphereTest);
// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//consider array.reduce method ?

const arraySum = (arr) =>{
  let previousSum = 0

  return arr.map((value) =>{
    return previousSum += value
  })
}
console.log(arraySum(numbersToAdd1));


// let sum = 0
// for (let n of numbersToAdd3)
//   sum += n;
  // console.log(sum);


// const addNumArrays = (arr) => {
//   if (arr.length > 0) {
//      return arr.map((num, index) => {
//        if (index !== 0){
//          return num = num + arr[index - 1]
//        } else {
//          return num
//        }
//      })
//   }
// console.log(addNumArrays(numbersToAdd1));
