const router = require("express").Router();
const path = require("path");
const IndexPage = require("../models/IndexPage");
const multer = require("multer");




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


//Create new page
router.post('/upload', upload.single('photo'), (req, res) => {

   console.log(req.file, req.body)
   const text = req.body.text;
   const link = req.body.link;
   const photo = req.file.filename;

   const indeP = {
    photo,
    text,
    link
   }

   const newIndexPage = new IndexPage(indeP);
   newIndexPage.save()
   .catch(err => res.status(500).json(err));

});

//Update indexPage
router.put("/upload/:id", upload.single('photo'), (req, res) => {

        const text = req.body.text;
        const link = req.body.link;
        const photo = req.file.filename;
    
        const indeP = {
            photo,
            text,
            link
        }

        IndexPage.findByIdAndUpdate(req.params.id, {$set: indeP}, {new: true})
        .then(() => res.status(200).json('Index page updated successfully'))
        .catch(err => res.status(500).json(err));
    
  });


module.exports = router;