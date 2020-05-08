const Category = require('../models/categories');
const User = require('../models/users');

//Getting all categories
exports.getCategory = (req, res, next)=>{
    
    Category.find()
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "error": error });
        });

};

//adding a new category
exports.postCategory = (req, res, next) => {

    const category = new Category({
        
        name: req.body.name
         
    });
    category.save().then(result=>{
        
        res.status(200).json({"message":"Category Successfully Created!"});

    }).catch(err=>{
        console.log(err);        
    });

};

//adding a new subject in a category
exports.createSubject = (req, res, next) => {

    const id = req.params.categoryId;
    const subjectName = req.body.name;
    Category.findByIdAndUpdate({_id:id}, {$push: {subjects: {name:subjectName}}})
    .then(result=>{
        res.status(200).json({"message":"The subject has been added"}).send(result.subjects);
                
    }).catch(err => {
        console.log(err);
        res.status(500).json({"error" : error});
    });

};