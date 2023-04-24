const router = require("express").Router();
const IndexPage = require("../models/IndexPage");
const multer = require("multer");
const path = require('path/posix');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
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

const upload = multer({storage, fileFilter })

//Create new page
router.post("/", upload.single('photo'), async (req, res) => {
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