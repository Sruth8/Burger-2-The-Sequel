var express = require("express");
var router = express.Router();
var db = require('../models/'); // referance to burger.js file


// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});




// Trying to set a "find all " to get burger models
router.get("/burgers", function (req, res) {
  db.Burger.findAll()
    .then(function (dbBurger) {
      console.log(dbBurger);
      var hbsObject = { burger: dbBurger }
      return res.render("index", hbsObject);
    });

});

// ==this routes to the index file
router.get("/", function (req, res) {
  db.burger.all(function (dbBurger) { //passing dbBurger into the function
    console.log(dbBurger);
    res.render("index",
      { dbBurger });
  });

});


//this will post the burger that was created by the user
router.post("/burgers/create", function (req, res) {
  db.Burger.create({ burger_name: req.body.burger_name }).then(function (dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });

});




//set up the routers here
router.put("/burgers/update", function (req, res) {
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.body.burger_id
      }
    }

  )
    .then(function (dbBurger) {
      console.log(dbBurger);
      res.redirect("/");
    });
});

// router.post("/burgers/update/:id", function(req,res){
//     console.log(req.params);
//     db.burger.update(req.params.id, function(dbBurger){
//         console.log(dbBurger);
//         res.redirect("/");
//     });
// });


module.exports = router;