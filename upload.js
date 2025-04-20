const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const uploadDir = path.join(__dirname, '../uploads');

// Buat folder uploads kalau belum ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Setup penyimpanan video
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpoint upload video
router.post('/upload', upload.single('video'), (req, res) => {
  res.send('Video berhasil diupload!');
});

// Endpoint list semua file di folder uploads
router.get('/files', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).send('Gagal membaca folder uploads');
    res.json(files);
  });
});

// Endpoint root cek status (optional)
router.get('/status', (req, res) => {
  res.send('IMBAHUB API ONLINE 🔥 - Endpoint utama: POST /upload');
});

module.exports = router;
