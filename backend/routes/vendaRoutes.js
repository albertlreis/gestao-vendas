const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

// Rota para obter todas as vendas
router.get('/', vendaController.getAll);

// Rota para obter uma venda específica
router.get('/:id', vendaController.getOne);

// Rota para criar uma nova venda
router.post('/', vendaController.create);

// Rota para atualizar uma venda existente
router.put('/:id', vendaController.update);

// Rota para excluir uma venda
router.delete('/:id', vendaController.delete);

module.exports = router;
