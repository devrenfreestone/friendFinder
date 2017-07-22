const server = require('../server.js');

app.get("/all", function(req, res) {
  res.json(tables);
});

app.post("/reserve/new", function(req, res) {
  let newTable = req.body;
  console.log("New Table" + JSON.stringify(newTable));
  addNewTable(newTable);
  res.json(newTable);
  console.log(tables);
  console.log(numOfReservations);
});