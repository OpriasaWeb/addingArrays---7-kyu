// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).


function arrAdder(arr) {


  var cmpltLetter = '';

  for(let i = 0; i < arr.length; i++){ // I have now access to all of the "arr" stuff
    

    for(let j = 0; j < arr[i].length; j++){

      cmpltLetter += arr[j][i]
    }

    cmpltLetter += ' ';
    
  }

  return cmpltLetter.trim() // trim - A string with removed whitespace from both ends.
}

console.log(arrAdder(
  [
    ['J','L','L','M']
    ,['u','i','i','a']
    ,['s','v','f','n']
    ,['t','e','e','']
  ]
));

