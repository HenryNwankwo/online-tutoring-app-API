const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(authRoutes);



app.listen(port, ()=>console.log(`app running on http://localhost:${port}`));