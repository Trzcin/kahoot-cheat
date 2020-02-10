const express = require("express");
const app = express();
const path = require("path");
const uiRouter = require("./routes/uiRoutes");
const apiRouter = require("./routes/apiRoutes");

app.use(express.urlencoded({
    extended: true
}));
app.use("/", uiRouter);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
