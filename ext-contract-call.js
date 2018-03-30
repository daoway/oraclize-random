const artifacts = require('./build/contracts/Random_number.json');
const contract = require('truffle-contract');

const Random_number = contract(artifacts);
Random_number.setProvider(web3.currentProvider);

module.exports = function (callback) {
    return Random_number.deployed().then(function (instance) {
        return instance.getRn();
    }).then(function (value) {
        console.log(value);
    });
};