const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5173; // Ensure this matches your frontend API calls

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
