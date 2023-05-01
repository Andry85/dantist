const router = require("express").Router();
const Slider = require("../models/Slider");
const multer = require("multer");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({storage, fileFilter });

//Create new slide
router.post('/upload', upload.single('photo'), (req, res) => {

    console.log(req.file, req.body)
    const description = req.body.description;
    const photo = req.file?.filename;

    const SlideObj = {
        photo,
        description
    }

    const newSlide = new Slider(SlideObj);
    newSlide.save()
    .then(() => res.status(200).json('Slide added successfully'))
    .catch(err => res.status(500).json(err));

});

//Update new slider
router.put("/upload/:id", upload.single('photo'), (req, res) => {

    console.log(req.params.id, 'req.params.id');

    const description = req.body.description;
    const photo = req.file?.filename;

    const SlideObj = {
        photo,
        description
    }

    Slider.findByIdAndUpdate(req.params.id, {$set: SlideObj}, {new: true})
    .then(() => res.status(200).json('Index page updated successfully'))
    .catch(err => res.status(500).json(err));
});

//Delete slide
router.delete("/:id", async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        await slider.delete();
        res.status(200).json('Slide has been deleted');
    } catch(err) {
        res.status(500).json(err);
    }
});

//Delete slide
router.delete("/:id", async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        await slider.delete();
        res.status(200).json('Slide has been deleted');
    } catch(err) {
        res.status(500).json(err);
    }
});

//Delete slide image
router.delete("/deleteImg/:image", (req, res) => {

    let path = `./images/${req.params.image}`;
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
});

// Get slider
router.get('/:id', async(req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        res.status(200).json(slider);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all slides
router.get('/', async(req, res) => {
    try  {
        let slides = await Slider.find();
        res.status(200).json(slides);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;