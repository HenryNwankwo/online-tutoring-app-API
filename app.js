const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res)=>{   res.send('They app is running'); });



app.listen(port, `app running on http://localhost:${port}`);