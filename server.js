const express = require('express');
const app = express();
const path = require('path');
const hospitalRoutes = require('./routes/hospital');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', hospitalRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
