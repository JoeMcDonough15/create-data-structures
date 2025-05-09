class MyArray {
  constructor(numElements = 0) {
    this.array = [];
    this.lengthMyArray = numElements;
    for (let i = 0; i < this.lengthMyArray; i++) {
      this.array[i] = undefined;
    }
  }

  fillMyArray = (itemToFillWith) => {
    for (let i = 0; i < this.lengthMyArray; i++) {
      this.array[i] = itemToFillWith;
    }
    return this; // return statement for chaining this method to a newly created MyArray object
  };

  pushMyArray = (...itemsToAdd) => {
    this.lengthMyArray += itemsToAdd.length;
    let startingIndex = this.lengthMyArray - itemsToAdd.length;
    for (let i = 0; i < itemsToAdd.length; i++) {
      this.array[startingIndex] = itemsToAdd[i];
      startingIndex++;
    }
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

// * Tests to create new array

// const myArr = new MyArray(); // create an empty array
// console.log(myArr.array); // []

// const myArr2 = new MyArray(3); // create an array of size 3
// console.log(myArr2.array); // [undefined, undefined, undefined]

// * Tests to fill all indices of array with a given value

// * calling .fillMyArray on MyArray objects after they are instantiated
// const myArr = new MyArray();
// myArr.fillMyArray("abc");
// console.log(myArr.array); // []

// const myArr2 = new MyArray(3);
// myArr2.fillMyArray(null);
// console.log(myArr2.array); // [null, null, null]

// * calling .fillMyArray by chaining it to the newly created MyArray object - return statement on line 14 ensures the MyArray object gets returned and assigned to the variable.
// const myArr = new MyArray().fillMyArray("abc"); // filling an empty array
// console.log(myArr.array); // []

// const myArr2 = new MyArray(3).fillMyArray(null); // more practical example by filling 3 indices of the array with null. Mimicking const myArr2 = new Array(3).fill(null)
// console.log(myArr2.array); // [null, null, null]

// * Tests to push items to MyArray

const myArr = new MyArray();
myArr.pushMyArray(5);
console.log(myArr.array); // [5]

const myArr2 = new MyArray(3);
myArr2.pushMyArray(6);
console.log(myArr2.array); // [undefined, undefined, undefined, 6]

myArr2.pushMyArray(7, 8, 9, 10); // pushMyArray with multiple arguments at once
console.log(myArr2.array); // [undefined, undefined, undefined, 6, 7, 8, 9, 10]
