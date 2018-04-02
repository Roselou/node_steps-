db = require('../models')//can write out '../models.index.js'

function index (req, res){
	//res.send('made it to api animals endpoint');
	db.Animal.find({}, function(err, allAnimals){
		if(err){
			console.log(err);
		} 
			res.json(allAnimals);	
		
	})
}

// function show()){
// 	//single animal
// }

// function create(){
	
// }

// function update(){

// }

// function destroy(){
	
// }

module.exports = {
	index: index
}