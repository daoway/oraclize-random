const artifacts = require('./build/contracts/Random_number.json');
const contract = require('truffle-contract');

const Random_number = contract(artifacts);
Random_number.setProvider(web3.currentProvider);

module.exports = function (callback) {
    return Random_number.deployed().then(function (instance) {
        return web3.eth.sendTransaction({
            from:web3.eth.accounts[1],
            to:instance.address,
            value: web3.toWei(1, "ether"),
            gas: "2200000"
        });
    }).then(function (value) {
        console.log(value);
    });
};