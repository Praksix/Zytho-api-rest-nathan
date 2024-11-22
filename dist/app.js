"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const version = "v1";
const path = `/api/${version}`;
const beers_1 = require("./routes/beers");
const breweries_1 = require("./routes/breweries");
//middlewares : observateur entre.
app.use(`${path}/beers`, beers_1.router);
app.use(`${path}/breweries`, breweries_1.router);
app.use(`${path}/users`, breweries_1.router);
exports.default = app;
