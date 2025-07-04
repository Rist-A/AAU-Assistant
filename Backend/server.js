const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const openaiRoute = require('./routes/openai');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/openai', openaiRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
