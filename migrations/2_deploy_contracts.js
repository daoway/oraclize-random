var Random_number = artifacts.require("./Random_number.sol");

module.exports = function(deployer) {
    deployer.deploy(Random_number);
};
