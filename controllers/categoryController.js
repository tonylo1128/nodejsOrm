const categeoryRepos = require("../repositories/categoryRepositories");

module.exports = {
  getData: (req, res) => {
    categeoryRepos
      .findAllCategory()
      .then(categories => {
        res.json({
          categories: categories
        });
      })
      .catch(error => {
        res.json({
          error: error
        });
      });
  }
};
