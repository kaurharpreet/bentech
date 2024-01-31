const express = require("express");
const indexRouter = require("./routes/index");
const db = require("./config/database");

const app = express();
app.use(express.json());
app.use(process.env.API_BASE_PATH, indexRouter);
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${process.env.PORT}`);
});

// Test the connection.
try {
     db.authenticate();
    console.log("Connection has been established successfully.");    
} catch (error) {
    console.error("Unable to connect to the database:", error.original);
}
 
module.exports = app;