import { Router } from "express";
export const router = Router();

import { getBeersController } from "../controllers/beers";
import { postBeersController } from "../controllers/beers";
import { putBeersController } from "../controllers/beers";
import { deleteBeersController } from "../controllers/beers";
import { getDetailsBeersController } from "../controllers/beers";
import { getBeersForBreweryController } from "../controllers/beers";



/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Retrieve a list of beers
 *     tags:
 *      - Beers
 *     responses:
 *       200:
 *         description: A list of beers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_beer:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   abv:
 *                     type: number
 *                   type:
 *                     type: string
 *                   color:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/', getBeersController.get);




/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Add a new beer
 *     tags:
 *       - Beers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               type:
 *                 type: string
 *               color:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Beer added successfully.
 *       404:
 *         description: Failed to add beer.
 */
router.post('/', postBeersController.post);



/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Update an existing beer by ID
 *     tags:
 *      - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               type:
 *                 type: string
 *               color:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Beer updated successfully.
 *       404:
 *         description: Failed to update beer.
 */
router.put('/:id', putBeersController.put);


/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Delete a beer by ID
 *     tags:
 *      - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Beer deleted successfully.
 *       404:
 *         description: Failed to delete beer.
 */
router.delete('/:id', deleteBeersController.delete);


/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Get beer details by ID
 *     tags:
 *      - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Beer details retrieved successfully.
 *       404:
 *         description: Beer not found.
 */
router.get('/:id', getDetailsBeersController.get);


router.get('/brewery/:id', getBeersForBreweryController.get);