const express = require('express');
const path = require('path');

const app = express();
const port = 5001;

// Serve static HTML (if generated)
app.use(express.static(path.join(__dirname, '../docs')));

// Start the server
app.listen(port, () => {
    console.log(`Static HTML (if generated) is available at http://localhost:${port}/index.html`);
});