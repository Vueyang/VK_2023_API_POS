const Product_type = require('../Models/product_type');
exports.create = async (req, res) => {
    try {
        console.log( req.body );
        const newproduct_type = await Product_type(req.body).save();
        if(newproduct_type) {
            res.status(200).json({
                RespCode: 200,
                Messages: "Success",
                isSuccess: true,
                detail: newproduct_type
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                Messages: "Failed",
                isSuccess: false,
                log:1
            });
        }
        res.json(newproduct_type);
    }catch(err){
        console.log(err);
        //res.status(400).send("Server Error creating product_type");
        res.status(400).json({
            RespCode: 400,
            IsMessages: "Server Error creating product_type",
            isSuccess: false,
            log:2
        });
        
    }
}
exports.list = async (req, res) => {
    try {
        const listproduct_type = await Product_type.find().exec();
        if(listproduct_type.length > 0){
            //res.json(listproduct_type);
            res.status(200).json({
                RespCode: 200,
                Messages: "Success",
                isSuccess: true,
                detail: listproduct_type
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                IsMessages: "Failed",
                isSuccess: false,
                log:1
            });
        }
        //res.json(listproduct_type);
    }catch(err){
        console.log(err);
        //res.status(400).send("Server Error listing product_type");
        res.status(400).json({
            RespCode: 400,
            IsMessages: "Server Error listing product_type",
            isSuccess: false,
            log:2
        });
    }
};
exports.getById = async (req, res) => {
    try {
        const getByidproduct_type = await Product_type.findById(req.params.id).exec();
        if(getByidproduct_type){
            res.status(200).json({
                RespCode: 200,
                Messages: "Success",
                isSuccess: true,
                detail: getByidproduct_type
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                IsMessages: "Failed",
                isSuccess: false,
                log:1
            });
        };
        //res.json(getByidproduct_type);
    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            IsMessages: "Server Error getById product_type",
            isSuccess: false,
            log:2
        });
        
    }
};
exports.updateById = async (req, res) => {
    try {
        const updateByidproduct_type = await Product_type.findByIdAndUpdate(req.params.id, req.body).exec();
        if(updateByidproduct_type){
            res.status(200).json({
                RespCode: 200,
                Messages: "Success",
                isSuccess: true,
                //detail: updateByidproduct_type
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                IsMessages: "Failed",
                isSuccess: false,
                log:1
            });
        }
        //res.json("Success");
    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            IsMessages: "Server Error updateById product_type",
            isSuccess: false,
            log:2
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const deleteByIdproduct_type = await Product_type.findByIdAndDelete(req.params.id).exec();
        if(deleteByIdproduct_type){
            res.status(200).json({
                RespCode: 200,
                Messages: "Success",
                isSuccess: true,
                //detail: deleteByIdproduct_type
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                IsMessages: "Failed",
                isSuccess: false,
                log:1
            });
        }
        res.json("Success");
    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            IsMessages: "Server Error deleteById product_type",
            isSuccess: false,
            log:2
        });
    }
};