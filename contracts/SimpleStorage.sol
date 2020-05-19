pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}


/*


pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage2 {
  //string public storedData;
  //address public contractAddress;
  
  address[] public creators;
  mapping(address => mapping(address => uint)) allowed;

  mapping(address => DataStruct) public data;
  
  struct DataStruct {
    string  name;
    string  about;
    string  whitepaper;
    string  roadmap;
    string CEO;  
    string  CFO;
    string  CTO;
    string  symbol;
    uint  decimals ;
    uint  icoEnds;
    uint  icoStarts;
    uint  bonus;
    uint  rate;
    uint  max_supply;
    address admin;

    
    
    }

  function setData(string data,address contractAddress) public {
    data[contractAddress] = data;
    owner[contractAddress] = msg.sender;
  }


}
//*/