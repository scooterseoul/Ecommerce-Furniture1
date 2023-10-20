const port = process.env.API_PORT || 5001;
const app = require("./app");
dotenv = require("dotenv");
dotenv.config();

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
