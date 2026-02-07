const express = require('express');
const app = express();

app.use(express.json());

// Mount post routes
const postRoutes = require('./routes/posts.routes');
app.use('/api/v1/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
