let input = 'turpentine and turtles';
input.toLowerCase();

const vowels= ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let b = 0; b < vowels.length; b++) {

    if (input[i] === vowels[b]) {
    resultArray.push(input[i])
  }
  }
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]); 
  }  
};

console.log(resultArray.join('').toUpperCase())
