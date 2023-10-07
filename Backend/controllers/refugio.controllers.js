const { generateJWT } = require('../helpers/generate.JWT.js');
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
    const {id,nombre, direccion, contacto} = req.body;
    const refugio = new Refugio({id,nombre, direccion, contacto});
    await refugio.save();

    // generacion para Validacion JSON WEB TOKEN

    const token = await generateJWT(refugio.id)

    res.json({
        "msg": "ok",
        refugio,
        token
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