const {Router}= require("express");

const courseRoutes = Router();

courseRoutes.post('/course/purchases', (req, res) => {
   res.json({
        message: 'purchase endpoint' 
    })
})

courseRoutes.get('/course', (req, res) => {
   res.json({
        message: 'course endpoint' 
    })
})

module.exports = {
    courseRoutes : courseRoutes
}