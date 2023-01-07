const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
});

const ListSchema = mongoose.model("ListSchema", listSchema);

module.exports = { ListSchema };
