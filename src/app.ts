import express, { Application } from "express";
const app: Application = express();
import { setupSwagger } from "./swagger";


const version = "v1";
const path = `/api/${version}`;


import { router as beersRoutes } from "./routes/beers";
import { router as breweriesRoutes } from "./routes/breweries";
import { router as usersRoutes } from "./routes/users";

//middlewares : observateur entre.
app.use(express.json());
setupSwagger(app);
app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes);
app.use(`${path}/users`, usersRoutes);

app.use(express.json());// accepter le format json sur les requetes




// Configurer Swagger

export default app;



//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from '../../API-REST/swagger.json' assert { type: 'json' };

//app.use(express.json());// accepter le format json sur les requetes
//napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));