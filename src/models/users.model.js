import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

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

// using hooks from sequelize directly just before creating and updating data in database
hooks:{
      beforeCreate:async (user,options)=>{
        if((user.password_hash) && (user.changed("password_hash"))){
          user.password_hash=await bcrypt.hash(user.password_hash,13);
        }
        },
        beforeUpdate:async (user,options)=>{
          if(user.changed("password_hash") && user.password_hash){
            user.password_hash=await bcrypt.hash(user.password_hash,13);
          }
        }

}

});
// once password generation and validation is done
//tokens are genereated, instance of function that generate
//refresh and access tokens.
User.prototype.generateRefreshToken = function(){
  return jwt.sign(
    {
      user_id:this.user_id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
User.prototype.generateAccessToken = function(){
  return jwt.sign(
    {
      id:this.user_id,
      full_name:this.full_name,
      email:this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

export default User;
