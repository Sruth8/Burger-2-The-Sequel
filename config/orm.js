var connection = require("./connection.js");
// this is a connection query that will select from the table input and then use a call back 
// to pass the result to the next file in the system contained in the models folder
var orm = {
    all: function (tableInput, callback) {
        connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
            if (err) throw err;
            callback(result)
        })
    },

// this will update when the burger is eaten 
    update: function(tableInput, condition, callback) {
        console.log(tableInput, condition, callback)
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err,result){
            if (err)throw err;
            callback(result);
        })
    },
// this will store the burger that is typed in into the database
    create: function(tableInput, val, callback){
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('"+val+"');", function(err,result){
            if (err)throw err; callback(result);
        })
    }



}

module.exports = orm;





// selectAll()
// insertOne()
// updateOne()