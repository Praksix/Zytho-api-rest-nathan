"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBeersController = void 0;
exports.getBeersController = {
    get: async (req, res) => {
        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            res.status(200).json({ data: "ici toutes les bières" });
        }
        catch (error) {
            res.status(200).json({ msg: error });
        }
        res.status(200).json({ data: "!!!!!!! Liste des bières !!!!" });
    },
    post: async (req, res) => {
        try {
            res.status(201).json({ data: "Ajout de la bière !!!!" });
        }
        catch (error) {
            res.status(200).json({ msg: error });
        }
    },
    put: async (req, res) => {
        try {
            res.status(201).json({ data: "Ajout de la bière !!!!" });
        }
        catch (error) {
            res.status(200).json({ msg: error });
        }
    },
    delete: async (req, res) => {
        try {
            res.status(201).json({ data: "Suppression de la bière !!!!" });
        }
        catch (error) {
            res.status(200).json({ msg: error });
        }
    },
};
