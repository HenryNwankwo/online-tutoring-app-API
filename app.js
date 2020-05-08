const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(authRoutes);

mongoose.connect("mongodb+srv://nwankwohenry:"+ process.env.DATABASE_PW + "@cluster0-c9nbu.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});



app.listen(port, ()=>console.log(`app running on http://localhost:${port}`));