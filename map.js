console.log("-----分隔線-----");
//intialize the map
const map = new Map();
console.log(map);

//add values to Map
map.set("firstName", "Luke");
map.set("lastName", "Skywalker");
map.set("occupation", "Jedi Knight");
console.log(map);

console.log("-----分隔線-----");
//result will be the same as above
const map1 = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
]);

console.log(map1);

console.log("-----分隔線-----");
//轉換map to object

const luke = {
  firstName: "Luke",
  lastName: "Skywalker",
  occupation: "Jedi Knight",
};
//this is just test Object.entries function
console.log(Object.entries(luke));

const map2 = new Map(Object.entries(luke));
console.log(map2);

console.log("-----分隔線-----");
//convert map to an object, which just use simple line
const obj = Object.fromEntries(map2);
console.log(obj);

console.log("-----分隔線-----");
//convert a map to an array
const arr = Array.from(map2);
console.log(arr);

//Maps accept any data type as a key, and do not allow duplicate key values.
//for example
console.log("-----分隔線-----");
const map4 = new Map();

map4.set("1", "String one");
map4.set(1, "Number one");
map4.set(1, "This will be overwritten");
map4.set(true, "A Boolean");

console.log(map4);

console.log("-----分隔線-----");
// Initialize an object with a numerical key
const obj1 = { 1: "One" };
const obj2 = { 1: "One" };
// The key is actually a string
if (obj1[1] === obj2["1"]) {
  console.log(true);
} //true

console.log("-----分隔線-----");
// Initialize a new Map
const map5 = new Map([
  ["animal", "otter"],
  ["shape", "triangle"],
  ["city", "New York"],
  ["country", "Bulgaria"],
]);
//Use the has() method to check for the existence of an item in a map. has() will return a Boolean.
// Check if a key exists in a Map
map5.has("shark"); // false
map5.has("country"); // true

console.log(map5.has("country"));

//Use the get() method to retrieve a value by key.
// Get an item from a Map
map5.get("animal"); // "otter"
console.log(map5.get("animal"));

// Get the count of items in a Map
console.log(map5.size); // 4

//Use the delete() method to remove an item from a Map by key.
//The method will return a Boolean—true if an item existed and was deleted, and false if it did not match any item.
console.log(map5.delete("city")); // true
console.log(map5);

//a Map can be cleared of all values with map.clear().
map5.clear();
flawlessly;
console.log("-----分隔線-----");
const map6 = new Map([
  [1970, "bell bottoms"],
  [1980, "leg warmers"],
  [1990, "flannel"],
]);

console.log(map6.keys());
console.log(map6.values());
console.log(map6.entries());

// Log the keys and values of the Map with forEach
map6.forEach((value, key) => {
  console.log(`${key}: ${value}`); //ES6
});

console.log("-----分隔線-----");
// Destructure the key and value out of the Map item
for (const [key, value] of map6) {
  // Log the keys and values of the Map with for...of
  console.log(`${key}: ${value}`);
}
