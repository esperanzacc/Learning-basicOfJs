//initialize Sets with the new Set() syntax.
const set = new Set(); //simialr to create map
console.log(set);

//Items can be added to a Set with the add() method.
set.add("Beethoven");
set.add("Mozart");
set.add("Chopin");
set.add("Chopin");
set.add("Chopin");
console.log(set);

// Initialize a Set from an Array
const set1 = new Set(["Beethoven", "Mozart", "Chopin", "Chopin"]);
console.log(set1);

console.log("-----分隔線-----");
//a Set can be converted into an Array with one line of code.
const arr = [...set1];
console.log(arr);

console.log("-----分隔線-----");
//Note that Set does not have a way to access a value by a key or index, like Map.get(key) or arr[index].
console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());

console.log("-----分隔線-----");
const set2 = new Set(["hi", "hello", "good day"]);

// Iterate a Set with forEach
set2.forEach((value) => console.log(value));

console.log("-----分隔線-----");
// Iterate a Set with for...of
for (const value of set2) {
  console.log(value);
}
