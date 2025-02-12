/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

// y = names.map(function (x) {
//   firstLetter = x.charAt(0);
//   flCap = firstLetter.toUpperCase();
//   remaining = x.slice(1);
//   capWord = flCap + remaining;
//   return capWord;
// });

y = names.map((x) => {
  return x[0].toUpperCase() + x.slice(1);
});
// console.log(y);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

y = pokemon.map((x) => `<p>${x}</p>`);

console.log(y);
