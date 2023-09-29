const User = require('../Models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.Register = async (req, res) => {
    try {
        // 1 check User
        const { username, password } = req.body;
        var user = await User.findOne({username});
        if (user) {
            res.status(400).json({
                RespCode: 400,
                message: 'User already in database!!!',
                isSuccess: false,
                log:1,
            });
        }
        // 2 Encrypt password
        //const salt = await bcrypt.genSalt(30);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(String(password), salt);
        user = new User({
            username,
            password : hashedPassword
        })
        
        console.log(user);
        // 3 save User
         await user.save();
        if (user) {
            res.status(200).json({
                RespCode: 200,
                message: 'Success',
                isSuccess: true,
                user: user
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                message: 'Failed',
                isSuccess: false,
                log:1
            });
        }
    } catch (error) {
        res.status(500).json({
            RespCode: 500,
            message: "Server Error",
            isSuccess: false,
        });
    }
};

exports.Login = async (req, res) => {
    try {
        // 1 check User
        const { username, password } = req.body;
        const user = await User.findOneAndUpdate({
            username
        }, { new: true });
        if (user) {
            const isMatch = await bcrypt.compare(String(password), user.password);
            if (!isMatch) {
                res.status(400).json({
                    RespCode: 400,
                    message: 'password Invalid!!!',
                    isSuccess: false,
                });
            }else{
                // 2 Payload
                var payload = {
                    user: {
                        username: user.username
                    }
                }
                // Generate Token
                jwt.sign(payload, 'your-secret-key', { expiresIn: "1d" }, (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        RespCode: 200,
                        message: 'Success',
                        isSuccess: true,
                        token: token,
                        payload: payload
                    });
                });
                /*res.status(200).json({
                    RespCode: 200,
                    message: 'Success',
                    isSuccess: true,
                    token: token,
                    user: user.username,
                });*/
            }
        }else {
            res.status(400).json({
                RespCode: 400,
                message: 'User not found!!!',
                isSuccess: false,
            });
        }
    } catch (error) {
        res.status(500).json({
            RespCode: 500,
            message: "Server Error",
            isSuccess: false,
        });
    }
}