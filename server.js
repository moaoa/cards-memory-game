const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const filePath = path.join(__dirname, 'client', 'build', 'index.html');

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(filePath);
});

app.listen(port, () => console.log(`server running on port ${port}`));
