let orm = require("../config/orm.js");

const burger = {
    all:function(cb){
        orm.all("burgers",function(res){
            cb(res);
        });
    },
    insertOne:function(columns,values,cb){
        orm.insertOne("burgers",columns,values, function(res){
            cb(res);
        });

    },
    update:function(objColVal,condition,cb){
        orm.update("burgers",objColVal,condition,function(res){
            cb(res);
        });
    },
    delete:function(condition,cb){
        orm.delete("burgers",condition,function(res){
            cb(res);
        });
    }
};
module.exports = burger;