const { Router } = require('express');

const router = Router();

const { storeVaga } = require('../controller/vagaController');

router.post('/store/vaga', storeVaga);

module.exports = router;