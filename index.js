// postgres://dcsngsll:9XcBthf7g_L0CFW--KFMBZLG_3yX6nWM@tyke.db.elephantsql.com/dcsngsll

const express = require("express");
const app = express();
const port = 3000;

const { Pool } = require("pg");

const pool = new Pool({
  user: "dcsngsll",
  host: "tyke.db.elephantsql.com",
  database: "dcsngsll",
  password: "9XcBthf7g_L0CFW--KFMBZLG_3yX6nWM",
  port: 5432,
});

/*
1. import pg and create the pool 
2. We will need to insert the credentials 
3. We can do the first query to get all the users 
*/

app.get("/", (req, res) => {
  // We insert the SQL Query
  /*
    1. Use the pool with the function query 
    2. Create the SQL statement 
    3. Send back the results when the database answers 
    4. Catch if there is any mistake 
  */
  pool
    .query("SELECT * FROM users;")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e.stack));

  // res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/:id", (req, res) => {
  res.send("Hello World!");
});

app.delete("/:id", (req, res) => {
  res.send("Hello World!");
});

/*
app
  .route("/")
  .get((req, res) => {
    res.send("Hello World!");
  })
  .post((req, res) => {
    res.send("Hello World!");
  });

app.route("/:id").get().put().delete();*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
