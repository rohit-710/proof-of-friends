// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bet {
    address public owner;
    address public player1;
    address public player2;
    uint256 public betAmount;
    bool public betAccepted;
    bool public betSettled;
    address public winner;

    event BetCreated(address indexed player1, uint256 amount);
    event BetAccepted(address indexed player2);
    event BetSettled(address indexed winner);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyPlayers() {
        require(msg.sender == player1 || msg.sender == player2, "Only the players can perform this action");
        _;
    }

    modifier betNotAccepted() {
        require(!betAccepted, "Bet already accepted");
        _;
    }

    modifier betIsAccepted() {
        require(betAccepted, "Bet not accepted yet");
        _;
    }

    modifier betNotSettled() {
        require(!betSettled, "Bet already settled");
        _;
    }

    function createBet() external payable betNotAccepted {
        require(msg.value > 0, "Bet amount must be greater than zero");
        player1 = msg.sender;
        betAmount = msg.value;
        emit BetCreated(player1, betAmount);
    }

    function acceptBet() external payable betNotAccepted {
        require(msg.sender != player1, "Player1 cannot accept their own bet");
        require(msg.value == betAmount, "Bet amount must be equal to the initial bet");
        player2 = msg.sender;
        betAccepted = true;
        emit BetAccepted(player2);
    }

    function settleBet(address _winner) external onlyOwner betIsAccepted betNotSettled {
        require(_winner == player1 || _winner == player2, "Winner must be one of the players");
        winner = _winner;
        betSettled = true;
        payable(winner).transfer(address(this).balance);
        emit BetSettled(winner);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
