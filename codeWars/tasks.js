// Grasshopper - Summation

var summation = function (num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i;
  }
  return res;
};

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

// esreveR

const reverse = (array) => {
  const newArr = [];
  array.forEach((item) => {
    newArr.unshift(item);
  });
  return newArr;
};

// The Feast of Many Beasts

function feast(beast, dish) {
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else return false;
}

// All Star Code Challenge #18

function strCount(str, letter) {
  let res = [];
  const newArr = str.split("").forEach((el) => {
    el === letter ? res.push(el) : null;
  });

  return res.length;
}

// Counting sheep...

function countSheeps(arrayOfSheep) {
  const newArr = arrayOfSheep.filter(
    (str) => str === true && (str != null || undefined)
  );
  return newArr.length;
}

// My head is at the wrong end!

function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Simple multiplication

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Grasshopper - Terminal game move function

function move(position, roll) {
  return position + roll * 2;
}

// Multiple of index

function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}

// Credit Card Mask

function maskify(cc) {
  const arr = cc.split("");
  arr.reverse();

  const newArr = arr.map((el, i) => {
    if (i > 3) {
      return (el = "#");
    } else return el;
  });
  return newArr.reverse().join("");
}

// Reversed Words

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Friend or Foe?

function friend(friends) {
  return friends.filter((el) => el.length === 4);
}

// Make acronym

function toAcronym(inp) {
  const arr = inp.split("");
  const abr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      abr.push(arr[i].toUpperCase());
    }
    if (arr[i] === " ") {
      abr.push(arr[i + 1].toUpperCase());
    }
  }
  return abr.join("");
}

// Breaking chocolate problem

function breakChocolate(n, m) {
  return n * m > 1 ? n * m - 1 : 0;
}

// Shortest Word

function findShort(s) {
  const atr = s.split(" ").map((el) => el.length);
  return Math.min(...atr);
}

// Switcheroo

function switcheroo(x) {
  return x
    .split("")
    .map((el) => {
      if (el === "a") return "b";
      if (el === "b") return "a";
      if (el === "c") return "c";
    })
    .join("");
}
console.log(switcheroo("abc"));

// Function 3 - multiplying two numbers

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3));

// Pythagorean Triple

function isPythagoreanTriple(integers) {
  const sortNumbs = integers.sort((a, b) => a - b);

  console.log(sortNumbs);
  return sortNumbs[0] * sortNumbs[0] + sortNumbs[1] * sortNumbs[1] ===
    sortNumbs[2] * sortNumbs[2]
    ? true
    : false;
}
console.log(isPythagoreanTriple([3, 4, 5]));

// Even or Odd

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Opposite number

function opposite(number) {
  return number * -1;
}

// Jenny's secret message

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}

// Convert a Number to a String!

function numberToString(num) {
  return num.toString();
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool === Boolean(true) ? "Yes" : "No";
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  const middleResult =
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return yourPoints > middleResult ? true : false;
}

// Sum of positive

function positiveSum(arr) {
  if (arr.length) {
    const result = arr.filter((n) => n > 0);
    return result.reduce((a, b) => a + b, 0);
  } else return 0;
}

// Online RPG: player to qualifying stage?

function playerRankUp(points) {
  if (points < 100) {
    return false;
  } else {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  }
}

// Beginner - Lost Without a Map

function maps(x) {
  return x.map((x) => x * 2);
}

// Quarter of the year

const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
};

// Removing Elements

function removeEveryOther(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 || i === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Convert a string to an array

function stringToArray(string) {
  const newArrray = string.split(" ");
  return newArrray;
}

// Remove String Spaces

function noSpace(x) {
  return x
    .split("")
    .map((el) => (el !== " " ? el : null))
    .join("");
}

// Fake Binary

function fakeBin(x) {
  const arr = x.split("");
  const res = [];
  const newArr = arr.map((el) => +el);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 5) {
      res.push(0);
    } else res.push(1);
  }
  return res.join("");
}

// Double Char

function doubleChar(str) {
  const newArr = str.split("");
  const currArr = [];
  for (let i = 0; i < newArr.length; i++) {
    currArr.push(newArr[i] + newArr[i]);
  }
  return currArr.join("");
}

// Name Shuffler

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

// Square(n) Sum

function squareSum(numbers) {
  const sqrtNum = numbers.map((num) => num * num);
  const reduceArr =
    sqrtNum.length > 0 ? sqrtNum.reduce((prev, curr) => prev + curr) : 0;
  return reduceArr;
}

console.log(squareSum([2, 3, 1]));

// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  return array.map((num) =>
    Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num
  );
}

// Grasshopper - Debug sayHello

function sayHello(name) {
  return `Hello, ${name}`;
}

// Welcome to the City

function sayHello(name, city, state) {
  const nameUser = name.join(" ");
  const res = `Hello, ${nameUser}! Welcome to ${city}, ${state}!`;
  return res;
}

// Abbreviate a Two Word Name

function abbrevName(name) {
  const newArr = name.split(" ").map((i) => i.slice(0, 1));

  newArr.splice(1, 0, ".");

  return newArr.join("").toUpperCase();
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
  return string[string.length - 1] === "!" ? string.slice(0, -1) : string;
}

// Total amount of points

function points(games) {
  let total = 0;
  games.map((item) => {
    if (item[0] > item[2]) {
      total += 3;
    } else if (item[0] === item[2]) {
      total += 1;
    } else {
      total += 0;
    }
  });
  return total;
}

// Remove First and Last Character

function removeChar(str) {
  return str.split("").slice(1, -1).join("");
}

// Area or Perimeter

const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : l * 2 + w * 2;
};

// Reversed Strings

function solution(str) {
  return str.split("").reverse().join("");
}

// Multiply

function multiply(a, b) {
  return a * b;
}
