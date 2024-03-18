const { Cliente, Venda } = require('../models');

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
      const { nome, email } = req.body;
      console.log('nome, email::: ', nome, email)
      // Validar campos obrigatórios
      if (!nome || !email) {
        return res.status(400).json({ error: 'Nome and email are required fields' });
      }
      // Verificar se o e-mail já está cadastrado
      const existingCliente = await Cliente.findOne({ where: { email } });
      if (existingCliente) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      const cliente = await Cliente.create({ nome, email });
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      // Validar campos obrigatórios
      if (!nome || !email) {
        return res.status(400).json({ error: 'Nome and email are required fields' });
      }
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      cliente.nome = nome;
      cliente.email = email;
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
      // Verificar se o cliente possui vendas cadastradas
      const vendas = await Venda.findAll({ where: { clienteId: id } });
      if (vendas.length > 0) {
        return res.status(400).json({ error: 'Cannot delete client with associated sales' });
      }
      await cliente.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};
