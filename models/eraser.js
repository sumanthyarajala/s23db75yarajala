const mongoose = require("mongoose")
const eraserSchema = mongoose.Schema({
eraser: String,
size: String,
cost: Number
})
module.exports = mongoose.model("eraser",
eraserSchema)