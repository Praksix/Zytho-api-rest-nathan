import { request, Request, Response } from "express";
import { query } from '../database';

export const getBeersController = {
    get: async (req: Request, res: Response) => {

        try {
            const result = await query('SELECT * FROM beers');
            res.status(200).json(result.rows);
            //res.status(200).json({msg: 'Beers retrieved successfully'});
        } catch (error) {
            res.status(404).json({msg: error});
            //res.status(200).json({msg: 'Beers retrieved successfully'});
        }
}};



export const postBeersController = {
    post: async (req: Request, res: Response) => {

        const { name, description, abv, type, color, price, id_brewery, liked } = req.body

        try {
            const result = await query("INSERT INTO beers (name, description, abv, type, color, price, id_brewery, liked) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [name, description, abv, type, color, price, id_brewery, liked])
            res.status(200).json({msg: 'Beers added successfully' });
        } catch (error) {
            res.status(404).json({msg: error}); 
        }
}};

export const putBeersController = {
    put: async (req: Request, res: Response) => {
        const id_beer = parseInt(req.params.id)
        const {  name, description, abv, type, color, price, liked } = req.body

        try {
            const result = await query("UPDATE beers SET name = $1, description = $2, abv = $3, type = $4, color = $5, price = $6, liked = $7 WHERE id_beer = $8", [name, description, abv, type, color, price, liked, id_beer])

            res.status(200).json({msg: 'Beers modified successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};


export const deleteBeersController = {
    delete: async (req: Request, res: Response) =>{

        const id_beer = parseInt(req.params.id)

        try {
            const result = await query("DELETE FROM beers WHERE id_beer = $1 RETURNING *", [id_beer]);
            res.status(200).json({msg: 'User deleted successfully' });
        } catch (error) {
            res.status(404).json({msg: error, msg2: "ça bug sa mère"});
        }
}};



export const getDetailsBeersController = {
    get: async (req: Request, res: Response) => {
        const id_beer = parseInt(req.params.id)
        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query('SELECT * FROM beers WHERE id_beer = $1', [id_beer]);
            //console.log(result.rows);
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};



export const getBeersForBreweryController = {
    get: async (req: Request, res: Response) => {

        try {
            const result = await query('SELECT * FROM beers WHERE id_brewery = $1', [req.params.id]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};

