const {Router} = require('express');
const adminrouter = Router();

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

module.exports = {
    adminRouter : adminRouter
}