const houses = require('./db.json');
let globalId = 4;

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const houseIndex = houses.findIndex((house) => house.id === Number(req.params.id));
        houses.splice(houseIndex, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let newHouse = {
            id: globalId,
            address: req.body.address,
            price: req.body.price,
            imageURL: req.body.imageURL,
        };
        houses.push(newHouse);
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let requestID = req.params.id;
        let houseIndex = houses.findIndex((house) => house.id === parseInt(req.params.id));

        if (req.body.type === 'plus') {
            houses[houseIndex].price += 10000;
        } else if (req.body.type === 'minus') {
            houses[houseIndex].price -= 10000;
        }
        res.status(200).send(houses)
    }
}