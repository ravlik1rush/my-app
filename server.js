const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Віддаємо всі файли зі змінної папки (наприклад — поточної)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`🎵 Сервер запущено на порту ${PORT}`);
});
