import { Router } from "express";
export const router = Router();

import { getBreweriesController } from "../controllers/breweries";
import { postBreweriesController } from "../controllers/breweries";
import { putBreweriesController } from "../controllers/breweries";
import { deleteBreweriesController } from "../controllers/breweries";
import { getDetailsBreweriesController } from "../controllers/breweries";




/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Retrieve a list of breweries
 *     tags:
 *      - Breweries
 *     responses:
 *       200:
 *         description: A list of breweries.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_brewery:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   city:
 *                     type: string
 *                   country:
 *                     type: string
 *                   description:
 *                     type: string
 *                   url_website:
 *                     type: string
 */
router.get('/', getBreweriesController.get);


/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Add a new brewery
 *     tags:
 *      - Breweries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *               description:
 *                 type: string
 *               url_website:
 *                 type: string
 *     responses:
 *       200:
 *         description: Brewery added successfully.
 *       404:
 *         description: Failed to add brewery.
 */
router.post('/', postBreweriesController.post);


/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Update an existing brewery by ID
 *     tags:
 *      - Breweries
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
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *               description:
 *                 type: string
 *               url_website:
 *                 type: string
 *     responses:
 *       200:
 *         description: Brewery updated successfully.
 *       404:
 *         description: Failed to update brewery.
 */
router.put('/:id', putBreweriesController.put);


/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Delete a brewery by ID
  *     tags:
 *       - Breweries
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Brewery deleted successfully.
 *       404:
 *         description: Failed to delete brewery.
 */
router.delete('/:id', deleteBreweriesController.delete);


/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Get brewery details by ID
 *     tags:
 *      - Breweries
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Brewery details retrieved successfully.
 *       404:
 *         description: Brewery not found.
 */
router.get('/:id', getDetailsBreweriesController.get);