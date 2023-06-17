// -----------Thired party library and module---------------
const express = require("express");
require("dotenv/config");

// -----------Custom library and module---------------
const Configs = require("./configs");
const { ConnectDatabase } = require("./api/v1/helpers");
const { UserRoutes } = require("./api/v1/routes");

// -----------Global Instance---------------
const app = express();
const PORT = Configs.DEV_PORT || 3308;

// ---------------comman Middleware-------------
//Accept json
app.use(express.json());

//------------Base route------------
app.get("/", (req, res) => {
  res.status(200).json({ success: { message: `welcome to the server` } });
  // res.send("welcome to the server");
});


//-------www.google.com/api/users------
app.use("/api/users", UserRoutes);


app.get("/janith", (req, res) => {
  // res.status(200).
  res.send("welcome Janith");
});

// -----------erro route----------
app.use((req, res) => {
  res.status(404).json({ success: { message: `Not Found` } });
});


// -----------Initailize the server---------------

app.listen(PORT, () => {
  console.log(`server is runing at ${PORT}`);
  // initialize database
  ConnectDatabase()
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
});
