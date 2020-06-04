const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let EstatalSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Quiero nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Quiero corr'],
        default:"123@qwerty"
    },
    nacionalidad:{type: String},
    pintura:{type: String},
    
});

module.exports = mongoose.model('Estatal',EstatalSchema);