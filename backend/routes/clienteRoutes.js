const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para obter todos os clientes
router.get('/', clienteController.getAll);

// Rota para obter um cliente específico
router.get('/:id', clienteController.getOne);

// Rota para criar um novo cliente
router.post('/', clienteController.create);

// Rota para atualizar um cliente existente
router.put('/:id', clienteController.update);

// Rota para excluir um cliente
router.delete('/:id', clienteController.delete);

module.exports = router;
