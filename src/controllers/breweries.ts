import { request, Request, Response } from "express";
import { query } from '../database';

export const getBreweriesController = {
    get: async (req: Request, res: Response) => {

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query('SELECT * FROM breweries');
            //console.log(result.rows);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};



export const postBreweriesController = {
    post: async (req: Request, res: Response) => {

        const { name, city, country, description, url_website } = req.body

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query("INSERT INTO beers (name, city, country, description, url_website) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, city, country, description, url_website])
            //console.log(result.rows);
            res.status(200).json({msg: 'Brewery added successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};

export const putBreweriesController = {
    put: async (req: Request, res: Response) => {

        const { name, city, country, description, url_website, id_brewery } = req.body

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query("UPDATE beers SET name = $1, city = $2, country = $3, description = $4, url_website = $5 WHERE id_brewery = $6", [name, city, country, description, url_website, id_brewery])
            //console.log(result.rows);
            res.status(200).json({msg: 'Brewery modified successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};


export const deleteBreweriesController = {
    delete: async (req: Request, res: Response) =>{

        const id_brewery = parseInt(req.params.id)

        try {
            const result = await query("DELETE FROM breweries WHERE id_brewery = $1 RETURNING *", [id_brewery]);
            res.status(200).json({msg: 'Brewery deleted successfully' });
        } catch (error) {
            res.status(404).json({msg: error, msg2: "ça bug fort"});
        }
}};



export const getDetailsBreweriesController = {
    get: async (req: Request, res: Response) => {
        const id_brewery = parseInt(req.params.id)
        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query('SELECT * FROM breweries WHERE id_brewery = $1', [id_brewery]);
            //console.log(result.rows);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};




