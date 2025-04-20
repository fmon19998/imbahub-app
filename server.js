const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("video"), (req, res) => {
  res.send("Video berhasil diupload!");
});

// ✅ Tambahkan ini bro
app.get("/files", (req, res) => {
  const dir = path.join(__dirname, "uploads");
  fs.readdir(dir, (err, files) => {
    if (err) {
      return res.status(500).send("Gagal membaca folder uploads");
    }
    res.json(files);
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
// server.js
const uploadRoute = require('./upload/upload'); // kalau file-nya di folder upload/
app.use(uploadRoute);
