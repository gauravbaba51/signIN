const mongoose = require('mongoose');
Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: 'categoryId can\'t be empty'
    },
    quantity: {
        type: Number,
        required: 'quantity can\'t be empty'
    },
    isActive: {
        type: Boolean,
        required: 'isActive can\'t be empty'
    },
    discription: {
        type: String,
        required: 'discription can\'t be empty'
    },
    imgList: {
        type: Schema.Types.ObjectId,
        ref: 'productimage'
    }
});

// // Custom validation for email
// productSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// // Events
// productSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });


// // Methods
// productSchema.methods.verifyPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// productSchema.methods.genegenerateJwtrateJwt = function () {
//     return jwt.sign({ _id: this._id},
//         process.env.JWT_SECRET,
//     {
//         expiresIn: process.env.JWT_EXP
//     });
// }



mongoose.model('Product', productSchema);