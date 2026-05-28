const app = require('../server.js');
const { connectDB, initializeDatabase } = require('../database.js');

module.exports = async (req, res) => {
    try {
        // Ensure the database connection is resolved before handing off to Express
        await connectDB();
        await initializeDatabase();
        
        // Hand the request to Express
        return app(req, res);
    } catch (err) {
        console.error("Database connection error:", err);
        return res.status(500).json({ error: "Internal Server Error: Database connection failed." });
    }
};
