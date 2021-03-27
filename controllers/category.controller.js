const mongoose = require('mongoose');

const sc_model9 = mongoose.model('Category');

module.exports.register = (req, res, next) => {
    console.log(req.body)
    var modeldata = new sc_model9();
    console.log(modeldata)
    modeldata.categoryName = req.body.categoryName;
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

module.exports.categorybyId = (req, res, next) =>{
    console.log(req.query)
    if (req.query.id){
        sc_model.findOne({ _id: req.query.id},
            (err, user) => {
                if (!user)
                    return res.status(404).json({ status: false, message: 'category record not found.' });
                else
                    return res.status(200).json({ status: true, category : _.pick(user,['categoryName','isActive']) });
            }
        );

    }else{
    sc_model.find({  },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'category record not found.' });
            else
                return res.status(200).json({ status: true, category : user });
        }
    );
    }
}