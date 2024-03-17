const { Venda } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const vendas = await Venda.findAll();
      return res.json(vendas);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const venda = await Venda.findByPk(id);
      if (!venda) {
        return res.status(404).json({ error: 'Venda not found' });
      }
      return res.json(venda);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async create(req, res) {
    try {
      const { clienteId, produtos } = req.body;
      const venda = await Venda.create({ clienteId, produtos });
      return res.status(201).json(venda);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { clienteId, produtos } = req.body;
      const venda = await Venda.findByPk(id);
      if (!venda) {
        return res.status(404).json({ error: 'Venda not found' });
      }
      venda.clienteId = clienteId;
      venda.produtos = produtos;
      await venda.save();
      return res.json(venda);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const venda = await Venda.findByPk(id);
      if (!venda) {
        return res.status(404).json({ error: 'Venda not found' });
      }
      await venda.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};
