var express = require('express');
var router = express.Router();

/* GET food listing. */
router.get("/",(req,res,next)=>{
  var food=[
    {
        "name": "Dairy Products",
        "code": "DA",
        "foodDetails" : ['Milk','Paneer','kofta','Curd']
    },
    {
        "name": "Vegies",
        "code": "VE",
        "foodDetails" : [{'name':'Onion'},{'name':'Tomatoe'},'Capsicum','Beans','Spinach']

    },
    {
        "name": "Cakes",
        "code": "CK",
        "foodDetails" : [{'name':'Red Velevt'},{'name':'CheeseCake'},{'name':'Pienapple'},{'name':'Apple'},{'name':'BlackForest'},{'name':'Choclate'},{'name':'Butterscotch'}]
    },
    {
        "name": "Flowers",
        "code": "FW",
        "foodDetails" : ['Rose','Jarbara','Orchids','lily']

    },
    {
        "name": "Sweets",
        "code": "SW",
        "foodDetails" : ['Jamun','Rasgulla','Cham-cham','Peda','Ladoo']
    },
    {
        "name": "Choclates",
        "code": "CHOC",
        "foodDetails" : ['Sneakers','Eclairs','DairyMilk','Lindt','GEMS']
    },
     {
        "name": "Chillers",
        "code": "HD",
        "foodDetails" : ['Jeera','Pepsi','Coke','Thumbsup','PulpyOrange']
    },]
  res.json(food);
});
module.exports = router;
