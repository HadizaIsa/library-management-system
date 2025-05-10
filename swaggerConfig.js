const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library Management API',
            version: '1.0.0',
            description: `
            This API allows users to manage book borrowing and return in a library system.

            To run the application locally:
            1. Clone the repository: \`git clone <repository_url>\`
            2. Install dependencies: \`npm install\`
            3. Create a .env file with the following keys:
               - \`PORT=<your_port>\`
               - \`MONGO_URI=<your_mongodb_connection_string>\`
            4. Start the server: \`npm start\`
            5. Access the API documentation: [http://localhost:<your_port>/api-docs](http://localhost:<your_port>/api-docs)
        `,
            
        },
        servers: [
            {
                url: process.env.NODE_ENV === "production" 
                    ? "https://your-heroku-app.herokuapp.com" 
                    : "http://localhost:3000",
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
