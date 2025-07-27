const express = require('express');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passwordRoutes);

// Catch-all for unknown routes
app.use((req, res) => {
    res.status(404).send(
        '404 Not Found. See API documentation at https://duckypass.net/api'
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});