pragma solidity ^0.4.0;

import "./usingOraclize.sol";

contract Random_number is usingOraclize {
    string public randomNumber;

    function Random_number() {
        OAR = OraclizeAddrResolverI(0x9061579777076feCCf8daa27534c5Cca14751597);
        oraclize_query("WolframAlpha", "random number between 0 and 100");
    }

    function __callback(bytes32 myid, string result, bytes proof) {
        if (msg.sender != oraclize_cbAddress()) throw;
        randomNumber = result;
    }

    function getRn() constant returns (string) {
        return randomNumber;
    }
}
