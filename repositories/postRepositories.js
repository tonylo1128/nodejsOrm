const Model = require("../models/index");


module.exports = {
  findAllPost() {
    return Model.post
    .findAll()
    .then(post => {
      return post;
    });
  },

  createPost( inputTemp, temp ) {
    
    

    console.log("This the CategoryID " + temp)
    return Model.post
    .create(
      
      {content: inputTemp.input1,
      categoryId: temp}
    , 
      { returning: true });
    
  }
  // [ {content: inputTemp.content}, {categoryId: inputTemp.categoryId} ]


  
};




