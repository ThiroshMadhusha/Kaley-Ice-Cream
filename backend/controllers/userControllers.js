const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email }); //Find the email in db and retern it user
    if (userExists) {
        res.status(400)
        throw new Error("User Already Exists ...!");
    }
    // User if not inside the database create new user
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id:user.id,
            name: user.name,
            email: user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
        })
    } else {
        res.status(400)
        throw new Error("Error Occured !!")
    }
    
});


const aurth = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

});

module.exports = { registerUser };