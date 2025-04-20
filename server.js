const express = require('express');
const app = express();

// Pastikan ini benar:
const uploadRoute = require('./upload');
app.use(uploadRoute);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
