const router = require("express").Router();
const Post = require("../models/IndexPage");
const fs = require('fs');

//Create new page
router.post("/", async (req, res) => {

    const newIndexPage = new Post(req.body);

    try {
        const savedIndexpage = await newIndexPage.save();
        res.status(200).json(savedIndexpage);

    } catch(err) {
        res.status(500).json(err);
    }

   
    
});