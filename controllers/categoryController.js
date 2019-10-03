const categeoryRepos = require("../repositories/categoryRepositories");

module.exports = {
  getData: (req, res) => {
    console.log(
      "Someone for the outside is calling for the getData Function 1"
    );
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
