const {Router} = require('express');
const { getAdoptante, postAdoptante, deleteAdoptante, putAdoptante, patchAdoptante } = require('../controllers/adoptante.controller');


    

const router = Router();

router.get('/', getAdoptante)
router.post('/', postAdoptante)
router.delete('/', deleteAdoptante)
router.put('/', putAdoptante)
router.patch('/', patchAdoptante)

module.exports = router;