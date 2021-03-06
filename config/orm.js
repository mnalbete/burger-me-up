var connection = require("./connection.js.js.js");
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
};
  
  // Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {
    all: function(table,cb){
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString,(err,result)=>{
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table,columns,values,cb){
    let sqlString = "INSERT INTO " + table + "(" + columns.toString() + ")" + "VALUES(" + printQuestionMarks(values.length) +")";
    connection.query(sqlString,values,(err,result)=>{
        if(err) throw err;
            cb(result);
        });
    },

    update:function(table,objColVal,condition,cb){
        let sqlString = "UPDATE " + table + " " + "SET" + " "+ objToSql(objColVal) + " " + "WHERE " + condition;
        
        connection.query(sqlString,(err,res)=>{
            if(err){
                throw err;
            }
            cb(res);
        });
    },


    delete:function(table,condition,cb){
        let sqlString = "DELETE FROM " + table + " " + "WHERE " + condition;
        connection.query(sqlString,(err,result)=>{
            if(err){
                throw err;
            }
            cb(result);
        });
    }

    //Delete function is next
};
module.exports = orm;
