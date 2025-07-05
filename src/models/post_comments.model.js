import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Post from './post.model.js';
import User from './user.model.js';

const PostComment = sequelize.define('PostComment', {
  comment_id: {
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
  comment: DataTypes.TEXT,
  commented_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'post_comments',
  timestamps: false,
});

PostComment.belongsTo(Post, { foreignKey: 'post_id' });
PostComment.belongsTo(User, { foreignKey: 'user_id' });

export default PostComment;
