const { product, category, categoryProduct, user } = require('../../models');

exports.addProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { category: categoryName , ...data } = req.body;
        const newProduct = await product.create({
            ...req.body,
            image: req.file.filename,
            idUser: req.user.id
        });
        const categoryData = await category.findOne({
            where: {
                name: categoryName,
            },
        });

        if (categoryData) {
            await categoryProduct.create({
                idCategory: categoryData.id,
                idProduct: newProduct.id,
            });
        } else {
            const newCategory = await category.create({ name: categoryName });
            await categoryProduct.create({
                idCategory: newCategory.id,
                idProduct: newProduct.id,
            });
        }
        const productData = await product.findOne({
            where: {
                id: newProduct.id,
            },
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                },
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: categoryProduct,
                        as: "bridge",
                        attributes: [],
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idUser"],
            },
        });
        res.send({
            status: "success...",
            data: productData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.getAllProduct = async (req,res) => {
    try {
        const data = await product.findAll({
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                },
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: categoryProduct,
                        as: "bridge",
                        attributes: [],
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idUser"],
            },
        });

        res.send({
            status: "success...",
            data,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
}

exports.getProductDetail = async (req,res) => {

    try {
        const { id } = req.params;
        const data = await product.findOne({
            include: [
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: categoryProduct,
                        as: "bridge",
                        attributes: [],
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idUser"],
            },
            where: {
                id : id
            }
        });

        res.send({
            status: "success...",
            data,
        });
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.updateProduct = async (req,res) => {

    try {
        const { id } = req.params;
        const newData = req.body;
        const data = await product.findOne({
            where: {
                id
            }
        });

        if(!data){
            return res.send({
                message: `Product with ID: ${id} not found!`
            })
        }

        await product.update(newData, {
            where : {
                id : id
            }
        })

        res.send({
            status: "success",
            data: {
                product: newData
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

exports.deleteProduct = async (req,res) => {
    try {
        const { id } = req.params;
        await product.destroy({
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