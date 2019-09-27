const Model = require("../models/index");

module.exports = {
  findAllPost() {
    return Model.post
        .findAll()
        .then(post => {
            return post;
        });
  },

  createPost(inputTemp) {
    return Model.post
    .bulkCreate([
      {content: inputTemp.content},
      {categoryId: inputTemp.categoryId}
      
    ], { returning: true } )
  }
};
