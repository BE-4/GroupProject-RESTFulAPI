const express = require("express")
const router = express.Router()

const {
    getAllPsikolog,
    addPsikolog,
    updatePsikolog,
    deletePsikolog
} = require ("../controllers/psikolog.controller")

router.get("/", getAllPsikolog)
router.post("/", addPsikolog)
router.patch("/:id", updatePsikolog)
router.delete("/:id", deletePsikolog)

module.exports = router