const jwt = require("jsonwebtoken");

const generateTokenCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_Secret, { expiresIn: "15d" });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    });
}

module.exports = { generateTokenCookie };