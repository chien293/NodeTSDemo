import { Request, Router } from 'express';
import RepositoryController from "../controllers/RepositoryController"

export const router = Router();



router.get('/', new RepositoryController().getAllEmployee)

/**
 * @swagger
 * /api/v1/endpoint:
 *   post:
 *     description: Create a new item
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/', new RepositoryController().getAllEmployee)
export default router