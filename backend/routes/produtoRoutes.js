const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para obter todos os produtos
router.get('/', produtoController.getAll);

// Rota para obter um produto específico
router.get('/:id', produtoController.getOne);

// Rota para criar um novo produto
router.post('/', produtoController.create);

// Rota para atualizar um produto existente
router.put('/:id', produtoController.update);

// Rota para excluir um produto
router.delete('/:id', produtoController.delete);

module.exports = router;
