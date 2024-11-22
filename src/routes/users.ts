import { Router } from "express";
export const router = Router();

import { getUsersController } from "../controllers/users";
import { postUsersController } from "../controllers/users";
import { putUsersController } from "../controllers/users";
import { deleteUsersController } from "../controllers/users";

router.get('/', getUsersController.get);
router.post('/', postUsersController.post);
router.put('/', putUsersController.put);
router.delete('/', deleteUsersController.delete);

