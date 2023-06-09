const express =  require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path/posix');


// підключення монгуса
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const indexPageRoute = require("./routes/indexpage");
const aboutPageRoute = require("./routes/aboutpage");
const faqRoute = require("./routes/faq");
const orderRoute = require("./routes/order");
const sliderRoute = require("./routes/slider");
const PORT = process.env.PORT || 5000;
const cookieSession = require('cookie-session');
const cors = require('cors');
let CLIENT_URL;




if (process.env.NODE_ENV === "production") {
    CLIENT_URL = 'http://smileclinic.in.ua';
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






// routs
app.use('/user', userRoute);
app.use('/indexpage', indexPageRoute);
app.use('/aboutpage', aboutPageRoute);
app.use('/faq', faqRoute);
app.use('/order', orderRoute);
app.use('/slider', sliderRoute);





app.use(express.static(path.join(__dirname, '../client/out')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/out/index.html'));
  });



app.listen(PORT, () => {
    console.log('Backend is runningggg.');
});