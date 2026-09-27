const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Students and Courses API',
        description: 'API for managing student and course information',
    },
    host: 'webservices-cse341-project2-studentcourse.onrender.com',
    schemes: ['https'], 
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);