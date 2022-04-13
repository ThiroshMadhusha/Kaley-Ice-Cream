const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    freazerid: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    flavour: {
      type: String,
      required: true,
    },
    temparature: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);
// Inventory - Note

module.exports = Inventory;

// change 'export default Inventory"