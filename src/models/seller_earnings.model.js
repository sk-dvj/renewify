import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.model.js';
import Order from './order.model.js';

const SellerEarning = sequelize.define('SellerEarning', {
  earning_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  amount: DataTypes.DECIMAL(10, 2),
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'orders',
      key: 'order_id',
    },
  },
  earning_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'seller_earnings',
  timestamps: false,
});

SellerEarning.belongsTo(User, { foreignKey: 'seller_id' });
SellerEarning.belongsTo(Order, { foreignKey: 'order_id' });

export default SellerEarning;
