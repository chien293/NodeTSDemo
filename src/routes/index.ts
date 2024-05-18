import express from "express"

import repoRoute from "./repository/index"
const router = express.Router()

router.use('/repository', repoRoute)

export default router