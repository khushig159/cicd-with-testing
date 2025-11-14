const User = require('../models/User')

 const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

 const createUser = async (req, res) => {
    const { name, email } = req.body
    const user = new User({
        name: name,
        email: email
    })
    try {
        const newUser=await user.save()
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports={getUsers,createUser}