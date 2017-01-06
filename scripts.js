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
	i += 1;
	console.log(i);
	// console.log(animal[key]);
	if (key == "username")
		console.log(animal.username);
	else if (key == "tagline")
		console.log(animal.tagline);
}