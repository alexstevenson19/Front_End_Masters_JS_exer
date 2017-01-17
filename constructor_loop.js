var AnimalMaker = function(name) {
	return {
		speak: function(){
			console.log("My name is, ", name);
		},
		name: name,
		owner: 'Alex'
	};
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

// in this case we aren't using the keyword new, to keep it simplified in this case. It is just returning the object(literal).
for(var i = 0; i < animalNames.length; i++) {
	farm[i] = AnimalMaker(animalNames[i]);
	// farm.push(AnimalMaker(animalNames[i]));
}

console.log(farm);

for(var i = 0; i < farm.length; i++) {
	farm[i].speak();
}