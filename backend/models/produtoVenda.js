'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutoVenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProdutoVenda.belongsTo(models.Venda, {
        foreignKey: 'venda_id',
        as: 'venda'
      });
      ProdutoVenda.belongsTo(models.Produto, {
        foreignKey: 'produto_id',
        as: 'produto'
      });
    }
  }
  ProdutoVenda.init({
    venda_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProdutoVenda',
    tableName: 'produto_venda',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ProdutoVenda;
};