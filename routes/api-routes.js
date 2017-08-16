var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.List.findAll({}).then(function(data) {
       var listObject = {
      list: data
    };
      res.render("index", listObject);
    });
  });

  app.post("/", function(req, res) {

    db.List.create({
      thingsTODO: req.body.thingsTODO,
      isDone: req.body.isDone
    }).then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.delete("/:id", function(req, res) {
    db.List.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.redirect("/");
    });

  });

  app.put("/:id", function(req, res) {

    console.log("this is done: " + req.body.isDone);
    console.log("this is id: " + req.body.id);
    db.List.update({
      isDone: req.body.isDone,
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.json(err);
    });
  });
};
