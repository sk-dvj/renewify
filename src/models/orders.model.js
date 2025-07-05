import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.model.js';

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  total_amount: DataTypes.DECIMAL(10, 2),
  status: {
    type: DataTypes.ENUM('Processing', 'Shipped', 'Completed'),
    defaultValue: 'Processing',
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'orders',
  timestamps: false,
});

Order.belongsTo(User, { foreignKey: 'buyer_id' });

export default Order;
