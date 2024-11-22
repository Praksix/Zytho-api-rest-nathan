import { Router } from "express";
export const router = Router();

import { getBeersController } from "../controllers/beers";
import { postBeersController } from "../controllers/beers";
import { putBeersController } from "../controllers/beers";
import { deleteBeersController } from "../controllers/beers";
import { getDetailsBeersController } from "../controllers/beers";

router.get('/', getBeersController.get);
router.post('/', postBeersController.post);
router.put('/:id', putBeersController.put);
router.delete('/:id', deleteBeersController.delete);
router.get('/:id', getDetailsBeersController.get);