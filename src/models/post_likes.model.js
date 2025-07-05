import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Post from './post.model.js';
import User from './user.model.js';

const PostLike = sequelize.define('PostLike', {
  like_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'posts',
      key: 'post_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  liked_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'post_likes',
  timestamps: false,
});

PostLike.belongsTo(Post, { foreignKey: 'post_id' });
PostLike.belongsTo(User, { foreignKey: 'user_id' });

export default PostLike;
