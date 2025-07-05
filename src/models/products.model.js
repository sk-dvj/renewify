import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Category from './category.model.js';
import User from './user.model.js';

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING(255),
  description: DataTypes.TEXT,
  price: DataTypes.DECIMAL(10, 2),
  stock_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  materials_used: DataTypes.STRING(255),
  image_url: DataTypes.STRING(255),
  rating: DataTypes.DECIMAL(2,1),
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'category_id',
    },
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
}, {
  tableName: 'products',
  timestamps: false,
});

Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.belongsTo(User, { foreignKey: 'seller_id' });

export default Product;
