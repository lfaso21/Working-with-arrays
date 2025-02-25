var hobbies = [
  "Golf",
  "Video Games",
  "Cooking",
  "Sports",
  "Watching Football",
  "Spending Time With The Family",
];
console.log(hobbies.length);
hobbies.push("Watching Television");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "Fishing", "Yard Work");
console.log(hobbies);
hobbies.shift();
hobbies.unshift("Drawing");
console.log(hobbies);
var goals = ["Get A Better Job", "Make More Money", "Have Nicer Things"];
var allTheThings = hobbies.concat(goals);
var AllTheTHings = [...hobbies, ...goals];
console.log(allTheThings);
console.log(allTheThings.indexOf("Sports"));
allTheThings.splice(8, 1);
console.log(allTheThings);
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
