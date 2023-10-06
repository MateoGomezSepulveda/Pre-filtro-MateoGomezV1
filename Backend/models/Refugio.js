const {Schema, model} = require('mongoose');

const RefugioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre del refugio es requerido']
    },
    direccion:{
        type:String,
        required: [true, 'La direccion del refugio es requerida']
    },
    contacto: {
        type:String,
        required: [true, 'El contacto del refugio es requerido']
    }
});

module.exports = model('Refugio', RefugioSchema);