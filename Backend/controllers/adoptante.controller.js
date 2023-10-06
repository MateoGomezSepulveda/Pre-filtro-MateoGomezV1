const Adoptante = require('../models/Adoptante.js');

const getAdoptante = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, adoptante] = await Promise.all([
        Adoptante.countDocuments(),
        Adoptante.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        adoptante
    })
}

const postAdoptante = async(req, res) =>{
    const {nombre, direccion, contacto} = req.body;
    const adoptante = new Adoptante({nombre, direccion, contacto});
    await adoptante.save();
    res.json({
        "message": "get API",
        adoptante
    })
}

const deleteAdoptante = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const putAdoptante = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const patchAdoptante = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

module.exports = {
    getAdoptante,
    postAdoptante,
    deleteAdoptante,
    putAdoptante,
    patchAdoptante
}