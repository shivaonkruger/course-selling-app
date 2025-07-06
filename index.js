const express = require('express')
const { userRoutes } = require('./routes/userRoutes')
const { courseRoutes } = require('./routes/courseRoutes')

const app = express()

app.use(express.json());
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);







app.listen(3000);

// const port = 3000
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
