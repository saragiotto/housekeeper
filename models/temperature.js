// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var temperatureSchema = new mongoose.Schema({
	celsius: { type: Number, required: true },
	date: { type: Date, default: Date.now },
    source: { type: String, required: true }
});

// Return model
module.exports = restful.model('Temperature', temperatureSchema);