const express = require('express');
const cors = require('cors'); // add this
const app = express();
const PORT = 5000;

const apiRoutes = require('./routes/api');

app.use(cors()); // allow all origins for now
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
