const { Router } = require('express');

const router = Router();

const { storeUsuario } = require('../controller/userController');

router.post('/store/usuario', storeUsuario);

module.exports = router;