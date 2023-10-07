const {Router} = require('express');
const {check} = require('express-validator');
const { getVeterinario, postVeterinario, deleteVeterinario, putVeterinario, patchVeterinario } = require('../controllers/veterinario.controller');
const { validateDocuments } = require('../middlewares/validate.documents');


const router = Router();

router.get('/', getVeterinario)
router.post('/',[
    check('nombre','Nombre no es valido').not().isEmpty(),
    check('especialidad', 'especialidad no valida').not().isEmpty(),
    check('contacto', 'El contacto debe de tener minimo 10 digitos').isLength({min:10}),
    validateDocuments
], postVeterinario)
router.delete('/', deleteVeterinario)
router.put('/', putVeterinario)
router.patch('/', patchVeterinario)

module.exports = router;