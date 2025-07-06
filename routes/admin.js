const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.get('/signup', (req, res) => {
   res.json({
        message: 'signup endpoint' 
    })
})

adminRouter.get('/signin', (req, res) => {
   res.json({
        message: 'signin endpoint' 
    })
})

adminRouter.post('/createcourse',(req,res) => {
    res.json({
        message: 'create course endpoint'
    })
})

adminRouter.put('/updatecourse',(req,res) => {
    res.json({
        message: 'update course endpoint'
    })
})

adminRouter.put('/course/bulk',(req,res) => {
    res.json({
        message: 'give all courses endpoint'
    })
})

module.exports = {
    adminRouter : adminRouter
}