const {Router} = require('express');
const {check} = require('express-validator');
const { getAdoptante, postAdoptante, deleteAdoptante, putAdoptante, patchAdoptante } = require('../controllers/adoptante.controller');
const { validateDocuments } = require('../middlewares/validate.documents');


    

const router = Router();

router.get('/', getAdoptante)
router.post('/',  [
    check('nombre','Nombre no es valido').not().isEmpty(),
    check('direccion', 'Direccion no es valida').not().isEmpty(),
    check('contacto', 'El contacto debe de tener minimo 10 digitos').isLength({min:10}),
    validateDocuments
], postAdoptante)
router.delete('/', deleteAdoptante)
router.put('/', putAdoptante)
router.patch('/', patchAdoptante)

module.exports = router;