import { Request, Response } from "express";

export const getBeersController = {
    get: async (req: Request, res: Response) => {

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            res.status(200).json({data: "ici toutes les bières"});
        } catch (error) {
            res.status(200).json({msg: error});
        }

        res.status(200).json({data: "!!!!!!! Liste des bières !!!!"});
},

    post: async (req: Request, res: Response) => {
        try {

        res.status(201).json({data: "Ajout de la bière !!!!"});
    } catch (error) {
        res.status(200).json({msg: error});
    }
    },

    put: async (req: Request, res: Response) => {
        try {

        res.status(201).json({data: "Ajout de la bière !!!!"});
    } catch (error) {
        res.status(200).json({msg: error});
    }
    },

    delete: async (req: Request, res: Response) => {
        try {

        res.status(201).json({data: "Suppression de la bière !!!!"});
    } catch (error) {
        res.status(200).json({msg: error});
    }
    },


};