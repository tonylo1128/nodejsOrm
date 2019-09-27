const postRepos = require('../repositories/postRepositories');

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
        let inputTemp = req.body.reactGetInputValue
        postRepos
        .createPost(inputTemp)
        .then( (result)=>{
            result:result
        })
    }



    
}