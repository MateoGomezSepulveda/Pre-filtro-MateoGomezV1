const {Router} = require('express');
const { getRefugio, postRefugio, deleteRefugio, putRefugio, patchRefugio } = require('../controllers/refugio.controllers');

const router = Router();

router.get('/', getRefugio)
router.post('/', postRefugio)
router.delete('/', deleteRefugio)
router.put('/', putRefugio)
router.patch('/', patchRefugio)

module.exports = router;