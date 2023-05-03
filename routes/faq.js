const router = require("express").Router();
const Faq = require("../models/Faq");

//Create new faq
router.post("/", async (req, res) => {

    const newFaq = new Faq(req.body);

    try {

        const savedFaq = await newFaq.save();
        res.status(200).json(savedFaq);

    } catch(err) {
        res.status(500).json(err);
    }

   
    
});

//Update new faq
router.put("/:id", async (req, res) => {

    try {
        const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        {new: true}
        );
        res.status(200).json(updatedFaq);
    } catch(err) {
        res.status(500).json(err);
    } 
});

//Delete faq
router.delete("/:id", async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        await faq.delete();
        res.status(200).json('Faq has been deleted');
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get faq
router.get('/:id', async(req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        res.status(200).json(faq);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all faq
router.get('/', async(req, res) => {
    try  {
        let faqs = await Faq.find();
        res.status(200).json(faqs);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;