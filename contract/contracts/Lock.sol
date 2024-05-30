// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

 import "hardhat/console.sol";

contract Lock{
    uint256 transactionCount;

    event Transfer(address from , address reciever, uint amount, string message , uint256 timestamp,string keyword);

    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //transaction an array of TransferStruct
    TransferStruct[] transaction; 

    function addToBlockchain(address payable receiver,uint amount,string memory message,string memory keyword) public {
        transactionCount=transactionCount+1;
        transaction.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));

        emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);

        receiver.transfer(amount); //transfer the amount to the receiver

    }

    function getAllTransactions() public view returns(TransferStruct[] memory){
        return transaction;

    }

    function getTransactionCount() public view returns(uint256){
        return transactionCount;
    }

}