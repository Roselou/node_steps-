var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoo-api')

var AnimalModel = require('./animal');

module.exports = {
	Animal: AnimalModel
}