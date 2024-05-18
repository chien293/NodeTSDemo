import express from "express"
import RepositoryController from "../../controllers/RepositoryController"

const router = express.Router()

router.get('/', new RepositoryController().getAllEmployee)

export default router