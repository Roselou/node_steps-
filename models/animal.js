var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema ({
	name: String, 
	species: String,
	hasOffspring: Boolean, 
	age: Number
});

var Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;