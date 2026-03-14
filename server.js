const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/TheBedroom', (req, res) => {
    res.send('d3605d4c7815cc831c98f74c78db30b3');
});

app.use((req, res) => {
    res.status(404).send('404');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
