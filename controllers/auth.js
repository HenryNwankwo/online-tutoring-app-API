const Category = require('../models/categories');
const User = require('../models/users');


exports.getCategory = (req, res, next)=>{

    const name = req.body.name;   


};
exports.postCategory = (req, res, next) => {

    const category = new Category({

        name: req.body.name

    });
    category.save().then(result=>{

        console.log(result);
        res.status(200).send("Successful Operation...");

    }).catch(err=>{
        console.log(err);        
    });


};