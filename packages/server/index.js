const express = require('express');

const app = express();

app.use(express.json());


app.get('/api/', function(req, res) {
    res.send('Hello World!');
})

app.listen(3001, () => {
    console.log('Server running on port 3000');

});