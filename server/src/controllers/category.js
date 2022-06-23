const { category } = require('../../models');
exports.addCategory = async (req,res) => {
    try {
        let data = await category.create(req.body);
        res.send({
            status: "success",
            data: {
                product: {
                    id: data.id,
                    name: data.name
                }
            }
        })
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getAllCategory = async (req,res) => {
    try {
        const categories = await category.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        res.send({
            status: "success",
            data: {
                categories
            }
        })
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getCategoryDetail = async (req,res) => {
    const { id } = req.params;
    try {
        const data = await category.findOne({
            where: {id},
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        res.send({
            status: "success",
            data
        })
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.updateCategory = async (req,res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const data = await category.findOne({
            where: {
                id
            }
        });

        if(!data){
            return res.send({
                message: `category with ID: ${id} not found!`
            })
        }

        await category.update(newData, {
            where: {
                id: id
            }
        });

        res.send({
            status: "success",
            data: {
                category: {
                    id: id,
                    name: newData.name,
                }
            }
        })
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.deleteCategory = async (req,res) => {
    try {
        const { id } = req.params;
        await category.destroy({
            where: {
                id
            }
        });
        res.send({
            status: "success",
            data: {
                id: id,
            }
        });
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
}