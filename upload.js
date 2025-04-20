const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const uploadDir = path.join(__dirname, 'uploads');

 Buat folder uploads kalau belum ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, uploadDir);
},
  filename function (req, file, cb) {
    cb(null, Date.now() + - + file.originalname);
  }
});