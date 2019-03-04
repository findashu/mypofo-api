const router = require('express').Router();


router.get('/', (req,res) => {
    res.send('API Up and running')
});



module.exports = router;