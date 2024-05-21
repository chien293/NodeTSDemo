import { Request, Router } from "express";
import RepositoryController from "../controllers/RepositoryController";

export const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Get all employees
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/", new RepositoryController().getAllEmployee);

/**
 * @swagger
 * component:
 *  schemas:
 *      Book:
 *         type: object
 *         required:
 *          - name
 *          properties:
 *            id:
 *              type: integer
 *  get:
 *      description: Create a new item
 *      responses:
 *       200:
 *         description: Success
 *
 */
router.get("/createNew", (req: Request, res) => {
  res.send("New Repo");
});

router.post("/addNewEmployee", new RepositoryController().addNewEmployee);
