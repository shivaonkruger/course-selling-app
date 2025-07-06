const express = require('express');
const mongoose = require("mongoose");
const app = express();
const { userRouter} = require('./routes/user')
const { adminRouter} = require('./routes/admin')
const { courseRouter } = require('./routes/course')



app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/courses', courseRouter);

async function main(){
    await mongoose.connect ('mongodb+srv://shiva:shivagupta@cluster0.drkxqxr.mongodb.net/course-selling-app')
    app.listen(3000);
    console.log('Server is running on port 3000');
}
// if the connection with the database fails the app does not listen on port 3000
main()