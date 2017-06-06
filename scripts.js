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
noiseArray[noiseArray.length] = ("neow")

// console.log(noiseArray.length);
// console.log(noiseArray[2]);

animal.noises = noiseArray;
// console.log(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var squirrel = { username: 'Bob', tagline: 'Nuts for nuts!', noises: ['chirp', 'screech'] }
var cow = { username: 'Milkmaid', tagline: 'Dairy for Life', noises: ['moo', 'moo moo', 'moooooo'] }

animals = [];

animals.push(animal, quackers, squirrel, cow);

console.log("Part 2- Arrays ===================================")
console.log(animals);
console.log(animals.length);

// part 3 Function exercise=====================================

var AnimalTestUser = function(username){
	var otherArgs = [];
	var args = arguments.length;
	if (args > 1) {
		for(var i=0; i<args; i++){
			if (i > 0){
			otherArgs.push(arguments[i]);
				}
			}
	}
	return { username: username,
		otherArgs
	}
}

var addFriend = function(animalFriends){
	var friends = []
	if (animalFriends){
		return friends = animalFriends.username
	}
}

var AnimalCreator = function(info){
	for(var i=0; i<arguments.length; i++){
		username = arguments[0];
		species = arguments[1];
		tagline = arguments[2];
		noises = arguments[3];
		var friendName = addFriend(arguments[4]);

		if (addFriend == undefined) {
			return { username, species, tagline, noises 
			}
		}
		else {
			return { username, species, tagline, noises, friendName
			}
		}
	}
}

var goose = AnimalCreator("George", "grey goose", "fly south", ['honk', 'hiss'], mallard)
var mallard = AnimalCreator("Bob", "duck", 'You can count on me!', ['quack', 'arrgg', 'chewchewchew'], goose )

console.log("Part 3- Functions ===================================")
// console.log(AnimalTestUser("Bob", "duck", "cat"));
console.log(mallard);


