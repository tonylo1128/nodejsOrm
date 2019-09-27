'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    content: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};