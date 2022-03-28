// Code your solution here
// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(arr, str) {
  return arr.filter((element) => element.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter((element) => element.slice(0, str.length) === str);
}

function matchName(arr, str) {
  return arr.filter((element) => element.name === str);
}
