const { Router } = require('express');

const router = Router();

const { CriarUsuario } = require('../controller/userController');

router.post('/store/usuario', CriarUsuario);

module.exports = router;