class MyArray {
  constructor(numElements = 0) {
    this.array = [];
    // loop while iteration variable is less than numElements
    for (let i = 0; i < numElements; i++) {
      //    place undefined at each index
      this.array[i] = undefined;
    }
    this.lengthMyArray = numElements;
  }

  fillMyArray = (itemToFillWith) => {
    // loop lengthMyArray times
    //     place itemToFillWith at each index
  };

  pushMyArray = (itemToAdd) => {
    // increment lengthMyArray by 1
    // index this.array at sizeOfArray - 1 and set it to itemToAdd
  };

  unshiftMyArray = (itemToAdd) => {
    // increment lengthMyArray by 1
    // if lengthMyArray is empty, set this.array[0] to itemToAdd and then return
    // declare a variable called previous
    // loop lengthOfArray times
    //     store what is at the current index as current
    //     if we are at index 0, set the itemToAdd to that index
    //     else, replace what is at the current index with what was stored as previous
    //     replace previous with whatever was stored as current to prepare for the next iteration
  };
}

const myArr = new MyArray(); // create an empty array
const myArr2 = new MyArray(3); // create an array of size 3
console.log(myArr.array); // []
console.log(myArr2.array); // [undefined, undefined, undefined]
