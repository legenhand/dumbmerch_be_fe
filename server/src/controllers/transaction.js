const {transaction, user, product} = require('../../models');

exports.addTransaction = async (req,res) => {
    try {
        const data = req.body;

        let createData = await transaction.create(data);

        res.send({
            status: 'success',
            message: 'Add transaction finished',
            createData
        });
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
}

exports.getAllTransaction = async (req,res) => {
    try {

        const data = await transaction.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'idBuyer', 'idSeller', 'idProduct']
            },
            include: [
                {
                    model: product,
                    as: 'product',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'idUser', 'qty', 'price']
                    }
                },
                {
                    model: user,
                    as: 'buyer',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password', 'status']
                    }
                },
                {
                    model: user,
                    as: 'seller',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password', 'status']
                    }
                },
            ]
        })

        res.send({
            status: 'success',
            data
        });
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}