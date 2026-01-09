const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/TheBedroom', (req, res) => {
    res.send('c02b1bc715e17b67cdcb5934a8e1369c');
});

app.use((req, res) => {
    res.status(404).send('404');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
