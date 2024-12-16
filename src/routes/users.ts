import { Router } from "express";
export const router = Router();

import { getUsersController } from "../controllers/users";
import { postUsersController } from "../controllers/users";
import { putUsersController } from "../controllers/users";
import { deleteUsersController } from "../controllers/users";
import { getDetailsUsersController } from "../controllers/users";


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags:
 *      - Users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_user:
 *                     type: integer
 *                   first_name:
 *                     type: string
 *                   password:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/', getUsersController.get);






/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add a new user
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User added successfully.
 *       404:
 *         description: Failed to add user.
 */
router.post('/', postUsersController.post);



/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update an existing user by ID
 *     tags:
 *      - Users
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
 *               first_name:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       404:
 *         description: Failed to update user.
 */
router.put('/:id', putUsersController.put);


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *      - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: Failed to delete user.
 */
router.delete('/:id', deleteUsersController.delete);



/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags:
 *      - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details retrieved successfully.
 *       404:
 *         description: User not found.
 */
router.get('/:id', getDetailsUsersController.get);

