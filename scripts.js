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

// my original solution for addFriend=========================================
// I thought it only took one argument, the friends so it complicated things and I had to jump through extra hoops to avoid conflicts, but got it to work. Her solution, is to give the animal (that already exists, and then the friend)

// var addFriend = function(animalFriends){
// 	var friends = []
// 	if (animalFriends){
// 		return friends = animalFriends.username
// 	}
// }

var AnimalCreator = function(info){
	// for(var i=0; i<arguments.length; i++){
		username = arguments[0];
		species = arguments[1];
		tagline = arguments[2];
		noises = arguments[3];
		friends = [];
		// original solution when I called the function I made above.======================
		// var friendName = addFriend(arguments[4]);

		// if (addFriend == undefined) {
		// 	return { username, species, tagline, noises 
		// 	}
		// }
		// else {
		// 	return { username, species, tagline, noises, friendName
		// 	}
		// }
	// }
	return {username, species, tagline, noises, friends}
}

function addFriend(animal, friend){
	animal.friends.push(friend.username);
}
// original solution for myFarm was just returning undefined.=====================
// var myFarm = function(farmAnimals){
// 	barn = []
// 	for(var i=0; i<arguments.length; i++){
// 		barn.push(farmAnimals[i]);
// 	}
// 		return(barn);
// }

function addMatchesArray(barn){
	// or other loop for( var animal in barn){ barn[animal].matches = []}
	for(var i=0; i < barn.length; i++){
		barn[i].matches = []
	}
}

function giveMatches(barn){
	for (var animal in barn){
		var pickFriend = Math.floor(Math.random()*barn[animal].friends.length)
		barn[animal].matches.push(barn[animal].friends[pickFriend])
	}
}


var goose = AnimalCreator('George', 'grey goose', 'fly south', ['honk', 'hiss']);
//  original solution, I called the friend in the argument while creating the animal, instead of after when when the animal object already exists.
// var mallard = AnimalCreator('Bob', 'duck', 'You can count on me!', ['quack', 'arrgg', 'chewchewchew'], goose );
var mallard = AnimalCreator('Bob', 'duck', 'You can count on me!', ['quack', 'arrgg', 'chewchewchew']);
addFriend(goose, mallard);
var swan = AnimalCreator('Mary', 'white swan', 'I\'m not a pedal boat.', ['gargle', 'whoosh'] );
addFriend(swan, goose);
addFriend(swan, mallard);

console.log("Part 3- Functions ===================================")
// console.log(AnimalTestUser("Bob", "duck", "cat"));
// console.log(mallard);
// console.log(goose);

//  FrontEnd Masters solution is simply an array?!?----------------------------
var myFarm = [goose, mallard, swan];

addMatchesArray(myFarm);
giveMatches(myFarm);
// console.log(myFarm);






// part 4 Nesting exercise=====================================


var relationships = {}
// var friendList = {};
relationships['friendList'] = {};
// friendList.friends = {};
// friendList.matches = {};

for(var x = 0; x < myFarm.length; x++){
	relationships.friendList[myFarm[x].username + ' friends'] = myFarm[x]['friends'];
	relationships.friendList[myFarm[x].username + 'matches'] = myFarm[x]['matches'];
}

// friendList.friends[myFarm[0]['username'] + ' friends'] = myFarm[0]['friends'];
// friendList.friends[myFarm[2]['username'] + ' friends'] = myFarm[2]['friends'];

// console.log(friendList.friends);
// console.log(friendList.friends[myFarm[0]['username'] + ' friends']);
console.log("part 4 Nesting --------------------------------")
console.log(relationships);
console.log(relationships.friendList['George friends']);
// console.log(myFarm);


// part 5 Scope exercise=====================================


// closure test============================

var sayAlice = function(){

	var makeLog = function(){
		console.log(alice);
	};

	var alice = 'Why hello there, Alice!'

	return makeLog
};

var whatDoesSheSay = sayAlice();
whatDoesSheSay();
