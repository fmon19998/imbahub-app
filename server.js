const express = require('express');
const app = express();

// Import route upload
const uploadRoute = require('./upload/upload');
app.use(uploadRoute); // semua route di-handle uploadRoute

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
