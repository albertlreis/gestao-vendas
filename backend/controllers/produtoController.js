const { Produto } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto not found' });
      }
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async create(req, res) {
    try {
      const { nome, descricao, preco } = req.body;
      const produto = await Produto.create({ nome, descricao, preco });
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, preco } = req.body;
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto not found' });
      }
      produto.nome = nome;
      produto.descricao = descricao;
      produto.preco = preco;
      await produto.save();
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto not found' });
      }
      await produto.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};
