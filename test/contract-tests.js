var Random_number = artifacts.require("./Random_number.sol");

contract('Random_number', function(accounts) {
    it("should init random number during init phase", function() {
        return Random_number.deployed().then(function(instance) {
            return instance.getRn();
        }).then(function(rn) {
            assert.notEqual(rn, undefined, "Wrong oraclize init. Check OID ?");
            console.log(rn);
        });
    });
});