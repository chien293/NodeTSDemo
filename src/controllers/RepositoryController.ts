import express from "express"
import RepositoryModel from "models/RepositoryModel"
class RepositoryController {
    getAllEmployee = (req: express.Request, res: express.Response) => {
        res.send("All Repos")
    }
    addNewEmployee = (req: express.Request, res: express.Response) => {
        const newRepo = await RepositoryModel.create({
            name: 'New Repository',
            createdAt: new Date(),
            updatedAt: new Date()
          });
    }
}

export default RepositoryController