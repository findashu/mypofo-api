const router = require('express').Router();
const User = require('../models/userSchema')

router.get('/', (req,res) => {
    res.send('API Up and running')
});

router.post('/signup', (req,res,next) => {
    let bdata = req.body;

    let newUser = new User(bdata);

    newUser.save().then(data => {
        res.status(201).json({'message':"Signup Success", user : data})
    }).catch(err => next(err))

})

router.post('/login', (req,res,next) => {
    let bdata = req.body;
    if(bdata.email == null || bdata.password == null) {
       return res.status(401).json({message:'Email and password required'})
    }

    User.findOne({email:bdata.email}).then(data => {
        console.log(data)
        if(data) {
            if(!data.decrypt(bdata.password)) {
                res.status(401).json({message:"Wrong Password"})
            }else {
                res.status(200).json({data:data, message:'Login success'})               
            }
        }else {
            res.status(404).json({message:'User not found'})
        }
    }).catch(err => next(err))
})


module.exports = router;