# Review Payment API Swagger Demo

This project provides a simple Node.js application to serve the Swagger UI for the Review Payment API, which includes endpoints for validating, activating, updating, and re-reviewing payment registration status with pub/sub and Bongo integration.

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd swagger-demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage
### Generate Static HTML

1. Generate the static HTML file using Redoc:
   ```bash
   npm run generate-html
   ```

2. The generated HTML file will be available at `docs/index.html`.

3. Start the server to serve the static HTML:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5001/index.html
   ```

   This will display the static HTML documentation of the API.

## Project Structure

- `swagger/`: Contains the Swagger specification files.
  - `info.yaml`: API metadata (title, description, version).
  - `servers.yaml`: Server configuration.
  - `components/`: Reusable components (schemas).
  - `paths/`: API endpoints.
- `src/index.js`: Main Node.js application file.
- `docs/`: Generated static HTML documentation (after running `npm run gen-html`).
- `package.json`: Project dependencies and scripts.
- `README.md`: This file.

## Scripts

- `npm start`: Runs the Node.js server to serve Swagger UI on port 5001.
- `npm run gen-html`: Generates a static HTML file for the API documentation using Redoc.

## Dependencies

- `express`: Web framework for Node.js.
- `swagger-ui-express`: Middleware to serve Swagger UI.
- `redoc-cli`: CLI tool to generate static HTML documentation.
- `swagger-cli`: CLI tool to bundle Swagger files.

## Notes

- The Swagger specification is split into multiple files for better readability and maintainability.
- Ensure that port 5001 is not in use by another application when running the server.
- If you modify the Swagger files, re-run `npm run gen-html` to update the static HTML.

## License

MIT