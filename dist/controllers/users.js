"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const database_1 = require("../database");
exports.getUsersController = {
    get: async (req, res) => {
        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await (0, database_1.query)('SELECT * FROM users');
            console.log(result.rows);
            res.status(200).json({ data: "ici toutes les bières" });
        }
        catch (error) {
            res.status(200).json({ msg: error });
        }
        res.status(200).json({ data: "!!!!!!! Liste des bières !!!!" });
    }
};
