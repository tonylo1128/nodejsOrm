const Model = require("../models/index");

module.exports = {
  findAllCategory() {
    return Model.Category
        .findAll()
        .then(Categories => {
            return Categories;
        });
  }
};
