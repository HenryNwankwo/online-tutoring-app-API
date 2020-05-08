const Category = require('../models/categories');
const User = require('../models/users');

//Getting all categories
exports.getCategories = (req, res, next)=>{
    
    Category.find()
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "error": error });
        });

};

//getting all subjects in a category
exports.getSubjectsInCategory = (req, res, next) => {

    const id = req.params.categoryId;    
    Category.findById(id)
        .then(result => {

            if(result){
                res.status(200).send(result.subjects);
                return;
            }
            if(result.length<=0){ 
                res.status(404).send({"message":"No entries found!"});
                return;
            }            

        }).catch(err => {
            
            res.status(500).json({
                "Message": err.message
            });
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