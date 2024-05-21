import { Request, Response } from 'express';
import { Employee } from '../models';
class RepositoryController {
  /**
   * @swagger
   * /api/v1/endpoint:
   *   get:
   *     description: Get all items
   *     responses:
   *       200:
   *         description: Success
   *
   */
  getAllEmployee = (req: Request, res: Response) => {
    res.send("All Repos");
  };
  addNewEmployee = async (req: Request, res: Response) => {
    try {
      console.log(req.body)
      const { name, position, salary } = req.body;
      const newEmployee = await Employee.create({ name, position, salary });
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Error adding employee', error });
    }
  };
}

export default RepositoryController;
