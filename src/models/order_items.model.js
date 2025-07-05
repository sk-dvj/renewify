import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Order from './order.model.js';
import Product from './product.model.js';
import User from './user.model.js';

const OrderItem = sequelize.define('OrderItem', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'orders',
      key: 'order_id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'product_id',
    },
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  price: DataTypes.DECIMAL(10, 2),
}, {
  tableName: 'order_items',
  timestamps: false,
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
OrderItem.belongsTo(User, { foreignKey: 'seller_id' });

export default OrderItem;
