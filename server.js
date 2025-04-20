const express = require('express');
const multer = require('multer');
const path = require('path');

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

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
