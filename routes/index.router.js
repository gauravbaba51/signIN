const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const product = require('../controllers/product.controller');
const category = require('../controllers/category.controller');
const productimage = require('../controllers/product.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/product', product.register);
router.post('/category', category.register);
router.post('/productimage', productimage.register);

router.get('/productbyId',product.productbyId);
router.get('/categorybyId',category.categorybyId);
router.get('/productimagebyId',productimage.productbyId);


router.post("/productimage/image", (req, res, next) => {
    console.log("hello",req.files)
    console.log(req.body.newname)
      let sampleFile = req.files.file;
      let Name=req.body.newname
    
      productimage.insertimg(sampleFile,Name+".jpg", (err, result) => {
        // res.writeHead(200, {"Content-Type": "text/plain"});
        if (err) {
          return res.status(500).send(err);
        }
        res.send('File uploaded to ' + uploadPath);
      });
});




module.exports = router;



