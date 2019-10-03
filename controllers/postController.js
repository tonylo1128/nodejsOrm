const postRepos = require('../repositories/postRepositories');
const categeoryRepos = require("../repositories/categoryRepositories");
var tempA;

module.exports = {

    findPost: (req, res)=>{
        postRepos
        .findAllPost()
        .then( post =>{
            res.json({
                post: post
            })
        })
        .catch(error=>{
            res.json({
                error
            })
        } )
    },

    createPost: (req, res)=>{
        let inputTemp = req.body.reactGetInputValue;

        categeoryRepos.findPostbyInput(inputTemp.input2)
            .then(tempResult=>{
                tempA =  tempResult;
                // console.log("---------------------------------------------"+tempResult)
                // tempA = parseInt(tempResult);
            })
   
            
            console.log("---------------------------------------------"+tempA)
                

        postRepos
        .createPost(inputTemp, tempA)
        .then( (result)=>{
            result:result
        })
    }



    
}