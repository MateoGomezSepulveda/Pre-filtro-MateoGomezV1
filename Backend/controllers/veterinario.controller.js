const { generateJWT } = require('../helpers/generate.JWT.js');
const Veterinario = require('../models/Veterinario.js');

const getVeterinario = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, veterinario] = await Promise.all([
        Veterinario.countDocuments(),
        Veterinario.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        veterinario
    })
}

const postVeterinario = async(req, res) =>{
    const {nombre, contacto, especialidad} = req.body;
    const veterinario = new Veterinario({nombre, contacto, especialidad});
    await veterinario.save();

    const token = await generateJWT(veterinario.id)

    res.json({
        "message": "get API",
        veterinario,
        token
    })
}

const deleteVeterinario = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const putVeterinario = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const patchVeterinario = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

module.exports = {
    getVeterinario,
    postVeterinario,
    deleteVeterinario,
    putVeterinario,
    patchVeterinario
}