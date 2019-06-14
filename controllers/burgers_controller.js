var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js'); // referance to burger.js file




//set up the router here
router.post("/burgers/update/:id", function(req,res){
    console.log(req.params);
    burger.update(req.params.id, function(result){
        console.log(result);
        res.redirect("/");
    });
});
router.get("/", function(req,res){
    burger.all(function(burgerInfo){ //passing burgerInfo into the function
        console.log(burgerInfo);
        res.render("index", 
        {burgerInfo});
    })
    
})


//this will post the burger that was created by the user
router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
         res.redirect("/");
    })

})

module.exports = router;