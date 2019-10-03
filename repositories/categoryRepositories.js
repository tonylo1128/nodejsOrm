const Model = require("../models/index");

module.exports = {
  findAllCategory() {
    return Model.Category
        .findAll()
        .then(Categories => {
            return Categories;
        });
  },

  // findPostbyInput( inputTemp ) {
  //   return Model.Category
  //   .findAll({
  //     attributes:["id"],
  //     where:{Category: inputTemp}
  //   }, 
  //     { returning: true });
    
  // }
  findPostbyInput( inputTemp ) {
    return Model.Category
    .findAll({
      attributes:["id"],
      where:{Category: inputTemp}
    })
    .then(tempResult=>{
      // return tempResult
      return tempResult[0].dataValues.id;
    });
    
  }
};
