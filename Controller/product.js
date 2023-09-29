//import module
const Product = require('../Models/Product');
const fs = require('fs');
exports.create = async(req, res) =>{
    try {
        const data = req.body
        if(req.file){
            data.image = req.file.filename
        }
        const newProduct = await Product(data).save();
        if(newProduct){
            res.status(200).json({
                RespCode: 200,
                Message: 'Success',
                isSuccess: true,
                detail: newProduct
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                Message: 'Failed',
                isSuccess: false,
                log: 1
            });
        }
        //res.status(200).send(newProduct);

    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            Message: 'Server Create Error',
            isSuccess: false,
            log: 2
        });
    }
}
exports.list = async(req, res) =>{
    try {
        const listProducts = await Product.find({}).exec();
        if(listProducts.length > 0){
            res.status(200).json({
                RespCode: 200,
                Message: 'Success',
                isSuccess: true,
                detail: listProducts
            });
        }else{
            res.status(200).json({
                RespCode: 400,
                Message: 'Failed',
                isSuccess: false,
                log: 1
            });
        }
        //res.json(listProducts);
        //res.status(200).send(products);
    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            Message: 'Server List Error',
            isSuccess: false,
            log: 2
        });
    }
}
exports.getById = async(req, res) =>{
    try {
        /*console.log(req.params.id);
        const id = req.params.id;
        const productById =  await Product.findOne({_id: id}).exec();*/
        const productById = await Product.findById(req.params.id).exec();
        if(productById){
            res.status(200).json({
                RespCode: 200,
                Message: 'Success',
                isSuccess: true,
                detail: productById
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                Message: 'Failed',
                isSuccess: false,
                log: 1
            });
        }
        //res.json(productById);
        //res.status(200).send(product);
    }catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            Message: 'Server GetById Error',
            isSuccess: false,
            log: 2
        });
    }
}
exports.UpdateById = async(req, res) =>{
    try {
        const UpdateByIdproduct = await Product.findByIdAndUpdate(req.params.id, req.body).exec();
        if(UpdateByIdproduct){
            res.status(200).json({
                RespCode: 200,
                Message: 'Success',
                isSuccess: true,
                //detail: UpdateByIdproduct
            });
        }else{
            res.status(400).json({
                RespCode: 400,
                Message: 'Failed',
                isSuccess: false,
                log: 1
            });
        };
        //res.json("Success");
        //res.status(200).send(product);
    } catch(err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            Message: 'Server UpdateById Error',
            isSuccess: false,
            log: 2
        });
    }
}
exports.DelectById = async(req, res) =>{
    try {
        const DelectByIdproduct = await Product.findByIdAndDelete(req.params.id).exec();
        if(DelectByIdproduct?.image){
            await fs.unlink('../Upload/' + DelectByIdproduct.image, (err) => {
                if(err){
                    res.status(400).json({
                        RespCode: 400,
                        Message: 'Failed',
                        isSuccess: false,
                        log: 1
                    });
                }else{
                    res.status(200).json({
                        RespCode: 200,
                        Message: 'Success',
                        isSuccess: true,
                        //detail: DelectByIdproduct
                    });
                };
            });
        }
        
        //res.json("Success");
        //res.status(200).send(product);
    }catch (err){
        console.log(err);
        res.status(400).json({
            RespCode: 400,
            Message: 'Server DelectById Error',
            isSuccess: false,
            log: 2
        });
    }
}