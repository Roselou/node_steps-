var db = require('./models');

var allAnimalsIWantToCreate = [
	{
		name: 'Stella', 
		species: 'Dog',
		hasOffspring: false, 
		age: 4
	},
	{
		name: 'Kitty', 
		species: 'Cat',
		hasOffspring: true, 
		age: 8
	},
	{
		name: 'Teako', 
		species: 'Dog',
		hasOffspring: false, 
		age: 5
	}
]

db.Animal.remove({}, function(err, removedAnimals){
	db.Animal.create(allAnimalsIWantToCreate, function(err, createdAnimals){
		console.log('created ' + allAnimalsIWantToCreate.length + " animals");
		process.exit(); //so terminal exits the process
	})
})