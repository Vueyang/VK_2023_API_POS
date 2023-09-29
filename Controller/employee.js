const Employees = require("../Models/employee");
exports.Create = async (req, res) => {
    try {
        const employee = await Employees(req.body).save();
        if (employee) {
            console.log(req.body);
            res.status(200).json({
                RespCode: 200,
                Message: "Success",
                isSuccess: true,
                employee: employee
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                message: "Failed",
                isSuccess: false,
                Log: 1
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            RespCode: 400,
            message: "Error creating employee",
            isSuccess: false,
            Log: 2
        });
    }
};

exports.list = async (req, res) => {
    try {
        const employees = await Employees.find();
        if (employees.length > 0) {
            res.status(200).json({
                RespCode: 200,
                Message: "Success",
                isSuccess: true,
                employees: employees
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                message: "Failed",
                isSuccess: false,
                Log: 1
            });
        }
    } catch (error) {
        res.status(400).json({
            RespCode: 400,
            message: "Error listing employees",
            isSuccess: false,
            Log: 2
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const employee = await Employees.findById(req.params.id);
        if (employee) {
            res.status(200).json({
                RespCode: 200,
                Message: "Success",
                isSuccess: true,
                employee: employee
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                message: "Failed",
                isSuccess: false,
                Log: 1
            });
        };
        
    } catch (error) {
        res.status(400).json({
            RespCode: 400,
            message: "Error listing employees",
            isSuccess: false,
            Log: 2
        });
    }
};

exports.updateById = async (req, res) => {
    try {
        const employee = await Employees.findByIdAndUpdate(req.params.id, req.body);
        if (employee) {
            res.status(200).json({
                RespCode: 200,
                Message: "Success",
                isSuccess: true,
                //employee: employee
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                message: "Failed",
                isSuccess: false,
                Log: 1
            });
        };
        
    } catch (error) {
        res.status(400).json({
            RespCode: 400,
            message: "Error updateById employees",
            isSuccess: false,
            Log: 2
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if (employee) {
            res.status(200).json({
                RespCode: 200,
                Message: "Success",
                isSuccess: true,
                //employee: employee
            });
        }else {
            res.status(400).json({
                RespCode: 400,
                message: "Failed",
                isSuccess: false,
                Log: 1
            });
        };
        
    } catch (error) {
        res.status(400).json({
            RespCode: 400,
            message: "Error deleteById employees",
            isSuccess: false,
            Log: 2
        });
    }
}