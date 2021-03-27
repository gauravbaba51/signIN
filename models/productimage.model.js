const mongoose = require('mongoose');
Schema = mongoose.Schema;

var productimageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    isActive: {
        type: Boolean,
        required: 'isActive can\'t be empty'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: 'productId can\'t be empty'
    },
});


module.exports.insertimg = function (sampleFile,Name, callback) {
    console.log(Name)
        filename = Name
        // uploadPath = __dirname + '..\models\config' + filename;
        uploadPath = './public/images/' + filename;
        console.log(uploadPath)
        sampleFile.mv(uploadPath,callback)
    
    }

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



mongoose.model('Productimage', productimageSchema);