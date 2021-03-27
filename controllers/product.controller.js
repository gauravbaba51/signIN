const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const sc_model = mongoose.model('Product');

module.exports.register = (req, res, next) => {
    console.log(req.body)
    var modeldata = new sc_model();
    console.log(modeldata)
    modeldata.productName = req.body.productName;
    modeldata.categoryId = req.body.categoryId;
    modeldata.quantity = req.body.quantity;
    modeldata.discription = req.body.discription;
    modeldata.isActive = true;
    modeldata.imgList = req.body.imgList;
    modeldata.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.productbyId = (req, res, next) =>{
    console.log(req.query)
    if (req.query.id){
        sc_model.findOne({ _id: req.query.id },
            (err, user) => {
                console.log("user",user)
                if (!user)
                    return res.status(404).json({ status: false, message: 'Product record not found.' });
                else
                    return res.status(200).json({ status: true, product : _.pick(user,['productName','quantity','discription','isActive']) });
            }
        );
    }else{
        console.log("else")
        sc_model.find({},
            (err, user) => {
                console.log("user",user)
                if (!user)
                    return res.status(404).json({ status: false, message: 'Product record not found.' });
                else
                return res.status(200).json({ status: true, product : user });
                // return res.status(200).json({ status: true, product : _.pick(user,['productName','quantity','discription','isActive']) });
            }
        );

    }

    
}