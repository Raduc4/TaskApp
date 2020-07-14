const express = require('express');	
const multer = require('multer')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(userRouter)
app.use(taskRouter);

app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
}) 