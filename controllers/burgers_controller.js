var express = require("express");

var router = express.Router();

//import the model to use its database functions
const burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        res.render("index",{
            burgers:data
        });
    });
});
router.post("/api/burgers",function(req,res){
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured], function(result){
        res.json({id:result.insertId});
    });

});
router.put("/api/burgers/:id",function(req,res){
    let condition = "id = " + req.params.id;
    console.log("condition ",condition);
    burger.update({
        devoured:req.body.devoured
    },condition,function(result){
        if(result.changedRows ===0){
            //if no rows were changed, then ID must not exist so 404
            return res.status(404).end();
        }
        res.status(200).end()
    });
});
router.delete("/api/burgers/:id",function(req,res){
    let condition = "id = " + req.params.id;
    console.log("condition ",condition);
    burger.delete(condition,function(result){
        if(result.changedRows ===0){
            //if no rows were changed, then ID must not exist so 404
            return res.status(404).end();
        }
        res.status(200).end()
    });
});
module.exports = router;