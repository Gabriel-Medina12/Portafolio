'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.user, {foreignKey:'userID'})
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    img: DataTypes.STRING,
    // userID:{
    //   type: DataTypes.INTEGER,
    //   references:{
    //     model: 'Users',
    //     key:'id'
    //   }
    // }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};