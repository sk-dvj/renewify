import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  full_name: DataTypes.STRING(100),
  email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  password_hash: DataTypes.STRING(255),
  profile_image: DataTypes.STRING(255),
  bio: DataTypes.TEXT,
  is_seller: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  joined_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
