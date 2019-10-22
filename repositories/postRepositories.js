const Model = require("../models/index");


module.exports = {
  findAllPost() {
    return Model.post
    .findAll()
    .then(post => {
      console.log(post)
      return post;
      
    });
  },

  createPost( inputTemp, temp ) {
    console.log("This the CategoryID " + temp)
    return Model.post
    .create(
      
      {content: inputTemp ,
      categoryId: temp}
    , 
      { returning: true });
    
  },

  delePost(inputTemp){
    console.log("We are in the repost now "+inputTemp)
    return Model.post
    .destroy({
      where:{
        id:inputTemp
      }
    })
  }
  // [ {content: inputTemp.content}, {categoryId: inputTemp.categoryId} ]
};




