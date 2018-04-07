pragma solidity ^0.4.0;

import "./usingOraclize.sol";

contract Random_number is usingOraclize {
    string public randomNumber;

    function () payable public {}
    function Random_number() payable {
        OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
        oraclize_query("WolframAlpha", "random number between 0 and 100");
    }

    function __callback(bytes32 myid, string result, bytes proof) {
        if (msg.sender != oraclize_cbAddress()) throw;
        randomNumber = result;
    }

    function getRn() constant returns (string) {
        return randomNumber;
    }

    function updateRn() public payable {
        oraclize_query("WolframAlpha", "random number between 0 and 100");
    }
}
