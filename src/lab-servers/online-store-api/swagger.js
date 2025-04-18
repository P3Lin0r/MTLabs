import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" })

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Online Store API',
            version: '1.0.0',
            description: 'Документація REST API для онлайн-магазину',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{ bearerAuth: [] }],
        servers: [
            { url: `http://localhost:${process.env.SERVER_PORT}/api` }
        ],
    },
    apis: ['./routes/*.js', './models/*.js'],
};

const specs = swaggerJSDoc(options);

export const swaggerMiddleware = (app) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
};