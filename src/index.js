require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

const middlewareLogRequest =  require('./middleware/logs');
const usersRoutes = require('./routes/users');

const app = express();

// MIDDLEWARE
app.use(middlewareLogRequest)
app.use(express.json());

// USER
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})