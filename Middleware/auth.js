const jwt =  require("jsonwebtoken");
exports.auth = async (req, res, next) => {
    try {
        const token = req.headers["authtoken"]
        if (!token) {
            res.status(401).send("Unauthorized");
        }else {
            const secretKey = "your-secret-key";
            const decoded = jwt.verify(token, secretKey.toString());
            console.log(decoded);
            next();
        }
    } catch (error) {
        res.status(500).send("Token Invalid");
        next(error);
    }
};