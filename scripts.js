//Use this file to implement Part One of your project

// console.log("test")

var animal = {}

animal.username = "Daffy";

// console.log(animal['username']);

animal["tagline"] = "Ducks Rule!";

var empty = [];
animal.noises = empty;

console.log(animal);

var i = 0
for(var key in animal){
	i++;
	console.log(i);
	// console.log(animal[key]);
	if (key === "username")
		console.log("Hi, I my name is " + animal[key]);
	else if (key === "tagline")
		console.log(animal[key]);
};

// part 2 Array exercise===========================

var noiseArray = [];

noiseArray.unshift("quack");
noiseArray.push("Woof")
noiseArray[2] = ("neow")

// console.log(noiseArray.length);
// console.log(noiseArray[2]);

animal.noises = noiseArray;
// console.log(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var squirrel = { username: 'Bob', tagline: 'Nuts for nuts!', noises: ['chirp', 'screech'] }
var cow = { username: 'Milkmaid', tagline: 'Dairy for Life', noises: ['moo', 'moo moo', 'moooooo'] }

animals = [];

animals.push(animal, quackers, squirrel, cow);

console.log(animals);
console.log(animals.length);