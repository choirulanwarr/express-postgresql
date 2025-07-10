require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const usersRoutes = require('./routes/users');
const InboundLogger =  require('./middleware/logs');

// MIDDLEWARE
app.use(InboundLogger);
app.use(express.json());
app.use(cors());

// USER
app.use('/users', usersRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running :${process.env.PORT}`);
});