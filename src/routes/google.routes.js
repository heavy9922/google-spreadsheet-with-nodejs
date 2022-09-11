const { Router } = require("express")

const router = Router()
const { getVideos, createVideos } = require("../controllers/google.controller")

router.get("/", getVideos)
router.post("/", createVideos)

module.exports = router
