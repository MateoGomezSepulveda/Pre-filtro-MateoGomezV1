const {Router} = require('express');
const {check} = require('express-validator');
const { getRefugio, postRefugio, deleteRefugio, putRefugio, patchRefugio } = require('../controllers/refugio.controllers');
const { validateDocuments } = require('../middlewares/validate.documents');

const router = Router();

router.get('/', getRefugio)
router.post('/',[
    check('nombre','Nombre no es valido').not().isEmpty(),
    check('direccion', 'Direccion no es valida').not().isEmpty(),
    check('contacto', 'El contacto debe de tener minimo 10 digitos').isLength({min:10}),
    validateDocuments
],postRefugio)
router.delete('/', deleteRefugio)
router.put('/', putRefugio)
router.patch('/', patchRefugio)

module.exports = router;