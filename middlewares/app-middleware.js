module.exports.notFound = (req,res,next) => {
    res.status(404).json({message:'URL is not found'})
}

module.exports.error = (err,req,res,next) => {
    console.log(err)
    res.status(500).json({message: err.msg})
}