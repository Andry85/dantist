const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

  
// login endpoint
router.post("/login", (request, response) => {
    // check if email exists

    console.log(request.body.username);
    console.log(request.body.password);


    User.findOne({ username: request.body.username })

  
      // if email exists
      .then((user) => {

        console.log(user);

        // compare the password entered and the hashed password found

        if (request.body.password === user.password) {
          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userName: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            username: user.username,
            token,
          });
        } else {
          return response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        }

      })
      // catch error if email does not exist
      .catch((e) => {
        response.status(404).send({
          message: "user not found",
          e,
        });
      });
});
  
module.exports = router;