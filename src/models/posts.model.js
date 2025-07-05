import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.model.js';

const Post = sequelize.define('Post', {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  content: DataTypes.TEXT,
  image_url: DataTypes.STRING(255),
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'posts',
  timestamps: false,
});

Post.belongsTo(User, { foreignKey: 'user_id' });

export default Post;
