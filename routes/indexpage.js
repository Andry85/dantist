const router = require("express").Router();
const IndexPage = require("../models/IndexPage");
const multer = require("multer");



//Create new page
router.post("/", async (req, res) => {

    console.log(req);
    console.log(res);

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

const upload = multer({storage, fileFilter });

router.post('/upload', upload.single('photo'), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
   // console.log(req.file, req.body)
});


module.exports = router;