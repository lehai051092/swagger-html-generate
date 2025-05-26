const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const port = 5001;

// Load the Swagger document
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve static HTML (if generated)
app.use(express.static(path.join(__dirname, '../docs')));

// Start the server
app.listen(port, () => {
    console.log(`Swagger UI is running at http://localhost:${port}/api-docs`);
    console.log(`Static HTML (if generated) is available at http://localhost:${port}/index.html`);
});