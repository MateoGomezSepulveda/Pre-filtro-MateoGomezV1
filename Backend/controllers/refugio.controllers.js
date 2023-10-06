const Refugio = require('../models/Refugio.js');

const getRefugio = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, refugios] = await Promise.all([
        Refugio.countDocuments(),
        Refugio.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        refugios
    })
}

const postRefugio = async(req, res) =>{
    const {nombre, direccion, contacto} = req.body;
    const refugio = new Refugio({nombre, direccion, contacto});
    await refugio.save();
    res.json({
        "msg": "post api",
        refugio
    })
}

const deleteRefugio = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const putRefugio = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const patchRefugio = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

module.exports = {
    getRefugio,
    postRefugio,
    deleteRefugio,
    putRefugio,
    patchRefugio
}