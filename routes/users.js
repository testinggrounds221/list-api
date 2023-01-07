const { ListSchema } = require("../models/list");
const express = require("express");
const router = express.Router();

router.post("/list", async (req, res) => {
	// console.log(res)
	try {

		let l = await new ListSchema({
			text: req.body.text,

		}).save();
		res.send("Added Item");
	} catch (error) {
		res.status(400).send(error.message);
	}
});

router.get("/list", async (req, res) => {
	try {
		const all = await ListSchema.find();
		const newItems = all.map(x => x.text);
		res.send(newItems);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;
