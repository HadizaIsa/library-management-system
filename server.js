require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book-route')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig')


const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

// middleware
app.use(express.json())

app.use('/books', bookRoutes)

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})