import { request, Request, Response } from "express";
import { query } from '../database';

export const getUsersController = {
    get: async (req: Request, res: Response) => {

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query('SELECT * FROM users');
            //console.log(result.rows);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};



export const postUsersController = {
    post: async (req: Request, res: Response) => {

        const { first_name, password, email } = req.body

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query("INSERT INTO users (first_name, password, email) VALUES ($1, $2, $3) RETURNING *", [first_name, password, email])
            //console.log(result.rows);
            res.status(200).json({msg: 'User added successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};

export const putUsersController = {
    put: async (req: Request, res: Response) => {

        const { first_name, password, email } = req.body

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query("UPDATE INTO users (first_name, password, email) VALUES ($1, $2, $3) RETURNING *", [first_name, password, email])
            //console.log(result.rows);
            res.status(200).json({msg: 'User modified successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};


export const deleteUsersController = {
    delete: async (req: Request, res: Response) =>{

        const { id } = req.params;

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = await query("DELETE FROM users WHERE id_user = $1 RETURNING *", [id]);
            //console.log(result.rows);
            res.status(200).json({msg: 'User deleted successfully' });
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};