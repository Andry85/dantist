const express =  require('express');
const app = express();
const dotenv = require('dotenv');
const fs = require('fs');
const multer = require("multer");
const path = require('path/posix');


// підключення монгуса
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const indexPageRoute = require("./routes/indexpage");
const PORT = process.env.PORT || 5000;
const cookieSession = require('cookie-session');
const cors = require('cors');
let CLIENT_URL;




if (process.env.NODE_ENV === "production") {
    CLIENT_URL = 'https://parkovka.in.ua';
} else {
    CLIENT_URL = 'http://localhost:3000'; 
}



dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cookieSession(
    {
        name: "session",
        keys: ["lama"],
        maxAge: 24*60*60*100
    }

));

app.use(cors({
    origin: CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));



// підключення монго дб
mongoose.connect(process.env.MONGO_URL)
.then(
    console.log('connected mongo')
)
.catch( err => {
    console.log(err)
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

app.post('/api/upload', upload.single('photo'), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log(req.file, req.body)
});





app.use('/user', userRoute);
app.use('/indexpage', indexPageRoute);






app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/.next/server/pages', 'index.html'));
});



app.listen(PORT, () => {
    console.log('Backend is runningggg.');
});