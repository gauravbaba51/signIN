const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const sc_model = mongoose.model('Productimage');

module.exports.register = (req, res, next) => {
    console.log(req.body)
    var modeldata = new sc_model();
    console.log(modeldata)
    modeldata.path = req.body.path;
    modeldata.productId = req.body.productId;
    modeldata.isActive = true;
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





module.exports.productImagebyId = (req, res, next) =>{
    sc_model.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Product record not found.' });
            else
                return res.status(200).json({ status: true, productImage : _.pick(user,['path']) });
        }
    );
}