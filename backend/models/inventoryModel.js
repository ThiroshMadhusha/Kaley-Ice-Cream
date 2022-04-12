const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ingredents: {
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
    indate: {
      type: String,
      required: true,
    },
    outdate: {
      type: String,
      required: true,
    },
    freazerid: {
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