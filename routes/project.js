const router = require('express').Router();
const Project = require('../models/projectSchema');

router.post('/', (req,res,next) => {
    let data = req.body;
     
    data.alias = data.name.toLowerCase().trim().split(' ').join('-');

    let newProject = new Project(data);

    newProject.save().then(data => {
        res.status(201).json({message:"Project Created Successfully", data: data})
    }).catch(err => next(err))

});


router.get('/', (req,res,next) => {

    Project.find().countDocuments().then(totalCount => {

        Project.find({}).sort({createdOn:-1}).then(data => {

            res.status(200).json({message:"Project List", data: data, count:totalCount})

        })

    }).catch(err => next(err))

})

module.exports = router;