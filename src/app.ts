import express, { Application } from "express";
const app: Application = express();
import { setupSwagger } from "./swagger";


const version = "v1";
const path = `/api/${version}`;


import { router as beersRoutes } from "./routes/beers";
import { router as breweriesRoutes } from "./routes/breweries";
import { router as usersRoutes } from "./routes/users";

app.use(express.json());
setupSwagger(app); 
app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes);
app.use(`${path}/users`, usersRoutes);

app.use(express.json());


export default app;

