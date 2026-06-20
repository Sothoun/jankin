const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Parse JSON request bodies
app.use(express.json());
// Parse URL-encoded request bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Mount all the API routes at root, so endpoints become:
// POST   /login
// GET    /view
// GET    /search
// PUT    /updateprofile
// DELETE /del
app.use('/', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
