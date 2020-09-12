require("dotenv").config();
require("./utils/database");
import app from "./app";

const port = 3000;

// koneksi yang dibutuhkan untuk server ada disini
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});
