const express = require('express');
const cors = require("cors");
const ctrl = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/api/houses`, ctrl.getAllHouses);
app.delete(`/api/houses/:id`, ctrl.deleteHouse);
app.post(`/api/houses`, ctrl.createHouse);
app.put(`/api/houses/:id`, ctrl.updateHouse);

const port = 4050
app.listen(port, () => console.log(`Server is running on port ${port}`));