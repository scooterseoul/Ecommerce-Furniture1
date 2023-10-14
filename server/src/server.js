const mongoose = require("mongoose");
const port = process.env.API_PORT || 5001;
const app = require("./app");
dotenv = require("dotenv");
dotenv.config();

const mongoDbUri = process.env.MONGO_URI || "mongodb://localhost:27017/shop";

mongoose.connect(mongoDbUri);

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
