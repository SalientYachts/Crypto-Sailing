// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./CredentialAccountFactory.sol";
import "@thirdweb-dev/contracts/smart-wallet/non-upgradeable/Account.sol";

contract CredentialAccount is Account {

     constructor(
        IEntryPoint _entrypoint,
        address _factory
    ) Account(_entrypoint, _factory) {
        _disableInitializers();
    }

    function register(
        string calldata username,
        string calldata metadataURI
    ) external {
        require(msg.sender == address(this), "CredentialAccount: only account itself can register");
        // TODO should it be possible to update username?
        CredentialAccountFactory(factory).onRegistered(username);
        _setupContractURI(metadataURI);
    }
}
