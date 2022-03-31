const registerUser = async (reg, res) => {
    const { name, email, password, pic } = req.body;

    res.json(
        {
            name,
            email,
        }
    );
    
};

module.exports = { registerUser };