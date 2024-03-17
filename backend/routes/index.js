const express = require('express');
const router = express.Router();
const clienteRoutes = require('./clienteRoutes');
const vendaRoutes = require('./vendaRoutes');
const produtoRoutes = require('./produtoRoutes');

router.use('/clientes', clienteRoutes);
router.use('/vendas', vendaRoutes);
router.use('/produtos', produtoRoutes);

module.exports = router;
