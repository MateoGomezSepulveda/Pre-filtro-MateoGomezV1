const {Router} = require('express');
const { getVeterinario, postVeterinario, deleteVeterinario, putVeterinario, patchVeterinario } = require('../controllers/veterinario.controller');


const router = Router();

router.get('/', getVeterinario)
router.post('/', postVeterinario)
router.delete('/', deleteVeterinario)
router.put('/', putVeterinario)
router.patch('/', patchVeterinario)

module.exports = router;