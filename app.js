const express = require('express');
const app = express();

app.use(express.static('views/public', { extensions: ['html'] }));

app.get('/random', (req, res) => {
    res.send(`${Math.random()}`);
})

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Frontend listening on port ${port}`));