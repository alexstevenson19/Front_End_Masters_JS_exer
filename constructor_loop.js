function AnimalMaker(name) {
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

for(var i = 0; i < animalNames.length; i++) {
	farm[i] = AnimalMaker(animalNames[i]);
}

console.log(farm);