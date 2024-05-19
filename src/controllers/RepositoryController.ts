import express from "express";
import RepositoryModel from "models/RepositoryModel";
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
  getAllEmployee = (req: express.Request, res: express.Response) => {
    res.send("All Repos");
  };
  addNewEmployee = (req: express.Request, res: express.Response) => {
    // const newRepo = await RepositoryModel.create({
    //     name: 'New Repository',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   });
    res.send("New Repo");
  };
}

export default RepositoryController;
