// This file will require the ORM. This has the methods used to modify the ORM's
// that is used with the bugers database.


var orm = require("../config/orm.js");

var burger = {
    all: function(callback){
        orm.all("burgers", function(res){ //burgers  is for the table input
            callback(res); //this callback will go into the burgers_controller.js file
        })
    },
    //here is an update to the orm 
    update: function(id,callback){
        orm.update("burgers", id,callback);
    },

    create: function(name, callback){
        orm.create("burgers", name, callback);
    }
}

module.exports = burger;