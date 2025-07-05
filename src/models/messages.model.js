import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Message = sequelize.define('Message', {
  message_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING(100),
  email: DataTypes.STRING(100),
  subject: DataTypes.STRING(255),
  message: DataTypes.TEXT,
  subscribe_newsletter: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sent_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'messages',
  timestamps: false,
});

export default Message;
