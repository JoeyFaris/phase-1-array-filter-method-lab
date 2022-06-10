// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    return array.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase()
    );
  }


  function fuzzyMatch() {
    
  }