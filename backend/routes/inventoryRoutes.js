const express = require("express");

const {
    getInventoryById,
    getInventorys,
    createInventory,
    UpdateInventory,
    DeleteInventory
} = require("../controllers/inventoryController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// getNotes = getInventorys

router.route("/").get(protect, getInventorys);
router.route("/create").post(protect, createInventory);
router.route("/:id").get(getInventoryById).put(protect, UpdateInventory).delete(protect, DeleteInventory);
//     .get()
//     .put()
//     .delete();

module.exports = router;
