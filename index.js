const express = ('express')
const { userRouter} = require('./routes/user')
const { adminRouter} = require('./routes/admin')
const { courseRouter } = require('./routes/course')

const app = express()

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/courses', courseRouter);

app.listen(3000);

// const port = 3000
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
