const express = require('express');
const path = require('path');
const app = express();

// Middleware buat nerima form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Supaya file di /public bisa diakses

// Import upload route
const uploadRoute = require('./upload/upload');
app.use(uploadRoute);

// Render index.html saat buka "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IMBAHUB backend jalan di PORT ${PORT}`);
});
