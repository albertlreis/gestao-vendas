const { Cliente } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async create(req, res) {
    try {
      const { nome, email, senha } = req.body;
      const cliente = await Cliente.create({ nome, email, senha });
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      cliente.nome = nome;
      cliente.email = email;
      cliente.senha = senha;
      await cliente.save();
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      await cliente.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};
