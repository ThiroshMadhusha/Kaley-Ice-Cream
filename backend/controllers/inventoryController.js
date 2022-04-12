const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const Inventory = require("../models/inventoryModel");
// Inventory=Note


const getInventorys = asyncHandler(async (req, res) => {

  // inventorys=notes
  const inventorys = await Inventory.find({ user: req.user._id });

  res.json(inventorys);
});

const createInventory = asyncHandler(async (req, res) => {
  const { ingredents, flavour, temparature, indate, outdate, freazerid } = req.body;

  if (!ingredents || !flavour || !temparature || !indate || !outdate || !freazerid) {
    
    res.status(400);
    throw new Error("Please Fill all the feilds");
    
  } else {

    // req.user comming from middleware
    const inventory = new Inventory({
      user: req.user._id,
      ingredents,
      flavour,
      temparature,
      indate,
      outdate,
      freazerid,
    });

    const createdInventory = await inventory.save();
    // note = inventory

    res.status(201).json(createdInventory);
  }
});

const getInventoryById = asyncHandler(async (req, res) => {

    const inventory = await Inventory.findById(req.params.id);

    if (inventory) {
      res.json(inventory);

    } else {
      res.status(404).json({ message: "Inventory Not Found" });
    }
  }
);

const UpdateInventory = asyncHandler(async (req, res) => {
  const { ingredents, flavour, temparature, indate, outdate, freazerid } = req.body;

  const inventory = await Inventory.findById(req.params.id);

  if (inventory.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (inventory) {
    inventory.ingredents = ingredents;
    inventory.flavour = flavour;
    inventory.temparature = temparature;
    inventory.indate = indate;
    inventory.outdate = outdate;
    inventory.freazerid = freazerid;

    const updatedInventory = await inventory.save();
    res.json(updatedInventory);

  } else {
    res.status(404);
    throw new Error("Inventory Item Is Not Found");
  }
});

const DeleteInventory = asyncHandler(async (req, res) => {
  const inventory = await Inventory.findById(req.params.id);
  
  if (inventory.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (inventory) {
    await inventory.remove();
    res.json({ message: "Inventory Item Removed Successfully" });
    
  } else {
    res.status(404);
    throw new Error("Inventory Item Is Not Found");
  }
});

module.exports = {
  getInventorys,
  createInventory,
  getInventoryById,
  UpdateInventory,
  DeleteInventory,
};

// getNotes = getInventory