const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    name: String,
    address: String,
    phone: String,
    items: Array,
    total: Number
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Order", orderSchema);