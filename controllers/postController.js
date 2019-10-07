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

        categeoryRepos.findPostbyName(inputTemp.input2)
            .then(tempResult=>{
                tempA =  tempResult;
            })
            console.log("---------------------------------------------"+tempA)
        postRepos
        .createPost(inputTemp, tempA)
        .then( (result)=>{
            result:result
        })
    },

    delePost: (req,res)=>{
        let inputTemp = req.params.id;
        console.log("Someone is CALLLLING ME and here is the value: "+inputTemp)
        postRepos
        .delePost(inputTemp)

    }



    
}