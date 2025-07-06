const {Router}= require("express");

const userRouter = Router();

userRouter.get('/signup', (req, res) => {
    res.json({
        message: 'signup endpoint' 
    })
})

userRouter.post('/signin', (req, res) => {
   res.json({
        message: 'signin endpoint' 
    })
})

userRouter.get('/courses', (req, res) => {
    res.json({
        message: 'courses endpoint' 
    })
})

module.exports = {
    userRouter : userRouter
}