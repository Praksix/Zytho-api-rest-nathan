import { Router } from "express";
export const router = Router();

import { getBeersController } from "../controllers/beers";

router.get('/', getBeersController.get);
router.post('/', getBeersController.post);
router.put('/', getBeersController.put);
router.delete('/', getBeersController.delete);

