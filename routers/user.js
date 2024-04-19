const express = require('express');
const multer = require('multer');
const {uploadFileName} = require('../controller/user')
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./storage");
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + '-' + file.originalname;
        cb(null, uniqueFileName);
    }
});


const upload = multer({storage : storage})

router.post('/uploadFile',upload.single('profileImg') , uploadFileName)

module.exports = router;