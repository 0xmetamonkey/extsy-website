// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract EXTSYv2 is ERC20, ERC20Burnable, Pausable, Ownable, ReentrancyGuard {
    // Token Economics
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10**18; // 1 billion tokens
    uint256 public constant COMMUNITY_AID_PERCENTAGE = 2; // 2% of transactions go to aid pool
    
    // Social Impact Structures
    struct AidRequest {
        address beneficiary;
        string description;
        uint256 amount;
        bool verified;
        bool fulfilled;
        uint256 votes;
    }

    struct VolunteerTime {
        uint256 hours;
        string activity;
        address verifier;
        bool verified;
        uint256 timestamp;
    }

    // Mappings
    mapping(uint256 => AidRequest) public aidRequests;
    mapping(address => VolunteerTime[]) public volunteerHistory;
    mapping(address => bool) public verifiers;
    mapping(address => uint256) public volunteerPoints;
    
    uint256 public aidRequestCount;
    uint256 public communityAidPool;

    // Events
    event AidRequestCreated(uint256 indexed requestId, address beneficiary, string description);
    event AidRequestFulfilled(uint256 indexed requestId, address fulfiller);
    event VolunteerTimeLogged(address indexed volunteer, uint256 hours, string activity);
    event VolunteerTimeVerified(address indexed volunteer, address verifier);
    event VerifierAdded(address indexed verifier);
    event VerifierRemoved(address indexed verifier);

    constructor() ERC20("Experience Time System V2", "XTSY") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    // Community Aid Functions
    function createAidRequest(string memory description, uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        
        aidRequests[aidRequestCount] = AidRequest({
            beneficiary: msg.sender,
            description: description,
            amount: amount,
            verified: false,
            fulfilled: false,
            votes: 0
        });

        emit AidRequestCreated(aidRequestCount, msg.sender, description);
        aidRequestCount++;
    }

    function verifyAidRequest(uint256 requestId) external {
        require(verifiers[msg.sender], "Not a verifier");
        require(!aidRequests[requestId].verified, "Already verified");
        
        aidRequests[requestId].verified = true;
    }

    function fulfillAidRequest(uint256 requestId) external nonReentrant {
        AidRequest storage request = aidRequests[requestId];
        require(request.verified, "Request not verified");
        require(!request.fulfilled, "Already fulfilled");
        require(communityAidPool >= request.amount, "Insufficient aid pool");

        communityAidPool -= request.amount;
        _transfer(address(this), request.beneficiary, request.amount);
        request.fulfilled = true;

        emit AidRequestFulfilled(requestId, msg.sender);
    }

    // Volunteer Time Functions
    function logVolunteerTime(uint256 hours, string memory activity) external {
        require(hours > 0, "Hours must be greater than 0");
        
        volunteerHistory[msg.sender].push(VolunteerTime({
            hours: hours,
            activity: activity,
            verifier: address(0),
            verified: false,
            timestamp: block.timestamp
        }));

        emit VolunteerTimeLogged(msg.sender, hours, activity);
    }

    function verifyVolunteerTime(address volunteer, uint256 index) external {
        require(verifiers[msg.sender], "Not a verifier");
        require(!volunteerHistory[volunteer][index].verified, "Already verified");

        VolunteerTime storage vTime = volunteerHistory[volunteer][index];
        vTime.verified = true;
        vTime.verifier = msg.sender;

        // Award volunteer points
        volunteerPoints[volunteer] += vTime.hours;

        emit VolunteerTimeVerified(volunteer, msg.sender);
    }

    // Verifier Management
    function addVerifier(address verifier) external onlyOwner {
        require(!verifiers[verifier], "Already a verifier");
        verifiers[verifier] = true;
        emit VerifierAdded(verifier);
    }

    function removeVerifier(address verifier) external onlyOwner {
        require(verifiers[verifier], "Not a verifier");
        verifiers[verifier] = false;
        emit VerifierRemoved(verifier);
    }

    // Transaction Override for Community Aid Pool
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        require(from != address(0), "Transfer from zero address");
        require(to != address(0), "Transfer to zero address");

        if (from != address(this) && to != address(this)) {
            uint256 aidAmount = (amount * COMMUNITY_AID_PERCENTAGE) / 100;
            super._transfer(from, address(this), aidAmount);
            communityAidPool += aidAmount;
            amount -= aidAmount;
        }

        super._transfer(from, to, amount);
    }

    // Emergency Functions
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal whenNotPaused override {
        super._beforeTokenTransfer(from, to, amount);
    }
}
