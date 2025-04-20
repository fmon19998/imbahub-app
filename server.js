const express = require('express');
const path = require('path');
const app = express();

// Serve file HTML (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Upload route
const uploadRoute = require('./upload/upload');
app.use(uploadRoute);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
