const {Schema, model} = require('mongoose');

const VeterinarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre del veterinario es requerido']
    },
    contacto:{
        type:String,
        required: [true, 'El contacto del veterinario es requerida']
    },
    especialidad: {
        type:String,
        required: [true, 'La especialidad del veterinario es requerido']
    }
});

module.exports = model('Veterinario', VeterinarioSchema);