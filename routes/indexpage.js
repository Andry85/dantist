const router = require("express").Router();
const IndexPage = require("../models/IndexPage");
const fs = require('fs');

//Create new page
router.post("/", async (req, res) => {
    const newIndexPage = new IndexPage(req.body);
    try {
        const savedIndexpage = await newIndexPage.save();
        res.status(200).json(savedIndexpage);

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/', async(req, res) => {

    try {
        let indexpage = await IndexPage.find();
        res.status(200).json(indexpage);

    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;