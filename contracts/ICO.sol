//version 2 with refund feature

pragma solidity ^0.4.21 ;

//0x583031D1113aD414F02576BD6afaBfb302140225
//0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
//0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C

contract ERC20Interface {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}



contract ICO is ERC20Interface {
    using SafeMath for uint;
    
    //string public name;
    string public name;
    string public about;
    string public whitepaper;
    string public roadmap;
    string public team;
    string public symbol;
    uint public decimals ;
    uint public bonusEnds; 
    uint public icoEnds;
    uint public icoStarts;
    uint public bonus;
    uint public rate;
    uint public max_supply;
    uint public allcontributors;
    bool public fundingOver;
    uint allTokens;
    address admin;
    mapping(address => uint) public balances;
    mapping(address => bool) public contributors;
    mapping(address => mapping(address => uint)) allowed;
    
    function ICO () public {
    //(string _name,string _about,string _whitepaper,string _roadmap,string _team)
        //name=_name;
        about="First CrowdFund project";
        whitepaper="https://launchpad.binance.com/en/lottery/6787dd976f7b48b8aa234b86e212d894";
        roadmap=" https://cdn2.slidemodel.com/wp-content/uploads/13063-01-multi-step-roadmap-concept-for-powerpoint-16x9-1.jpg";
        team="naga-pavan-sambaa";
        name = "Wazirx";
        symbol = "WRX";
        decimals=18;
        bonusEnds =  now +(15  minutes);
        icoEnds = now + (21 days);
        icoStarts = now ;
        max_supply=10000000000000000000;
        allTokens = 2500000000000000000; // tokens sold
        admin = (msg.sender);
        balances[msg.sender] = allTokens;
        allcontributors=0;
        bonus=10;
        rate=100;
        fundingOver =false;
        
        
        
        
    }
    
        function buyTokens() public payable{
            uint tokens;
            uint _rate;
            //require(fundingOver==false);
            //require(allTokens<max_supply);
            
                tokens = msg.value*(rate+bonus);    
            
            
            balances[msg.sender] = balances[msg.sender].add(tokens);
            contributors[msg.sender] = true;
            allTokens = allTokens.add(tokens);
            emit Transfer(address(0),msg.sender,tokens);
            allcontributors+=1;
            if(allTokens>=max_supply ||  now>icoEnds ){
                fundingOver=true;
            }
            
        }
        
        function totalSupply() public constant returns(uint){
            return allTokens;
            
        }
        
        
    function balanceOf(address tokenOwner) public constant returns (uint balance) {
        return balances[tokenOwner];
    }


    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    //
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces 
    // ------------------------------------------------------------------------
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    // 
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }


        
        
        
        function myBalance() public constant returns (uint){
            return (balances[msg.sender]);
        }
        
        function myAddress() public constant returns (address){
            address myAddr=msg.sender;
            return myAddr;
        }
        
        function endSale() public {
            require(msg.sender==admin);
            if(now> icoEnds &&  allTokens>=max_supply)
                admin.transfer(address(this).balance);
            
            fundingOver=true;
            
        }
        function refund(){
            //uint tokens;
            require(contributors[msg.sender]==true);
            require(fundingOver=true);
            require(allTokens  <  max_supply );
            
            
            (msg.sender).transfer( ( balances[msg.sender]).div(rate)  );
            balances[msg.sender]=0;
            
        }
    }
        
    



/*  version 1 refund not implemented 
pragma solidity ^0.4.21 ;

//0x583031D1113aD414F02576BD6afaBfb302140225
//0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
//0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C

contract ERC20Interface {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}



contract ICO is ERC20Interface {
    using SafeMath for uint;
    
    //string public name;
    string public name;
    string public about;
    string public whitepaper;
    string public roadmap;
    string public team;
    string public symbol;
    uint public decimals ;
    uint public bonusEnds; 
    uint public icoEnds;
    uint public icoStarts;
    uint public allcontributors;
    uint allTokens;
    address admin;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) allowed;
    
    function ICO () public {
    //(string _name,string _about,string _whitepaper,string _roadmap,string _team)
        //name=_name;
        about="First CrowdFund project";
        whitepaper="https://bitcoin.org/bitcoin.pdf";
        roadmap=" https://cdn2.slidemodel.com/wp-content/uploads/13063-01-multi-step-roadmap-concept-for-powerpoint-16x9-1.jpg";
        team="nag-pavan-samba";
        name = "crowdfundcoin1";
        symbol = "CFT1";
        decimals=18;
        bonusEnds = now * 1  weeks;
        icoEnds = now * 20 weeks;
        icoStarts = now ;
        allTokens = 10000000000000000000;
        admin = (msg.sender);
        balances[msg.sender] = allTokens.div(5);
        allcontributors=1;
        
        
    }
    
        function buyTokens() public payable{
            uint tokens;
            if (now <= bonusEnds){
                tokens=msg.value.mul(1100);
            }
            else{
                tokens = msg.value*1000;    
            }
            
            balances[msg.sender] = balances[msg.sender].add(tokens);
            allTokens = allTokens.add(tokens);
            emit Transfer(address(0),msg.sender,tokens);
            allcontributors+=1;
            
        }
        
        function totalSupply() public constant returns(uint){
            return allTokens;
            
        }
        
        
    function balanceOf(address tokenOwner) public constant returns (uint balance) {
        return balances[tokenOwner];
    }


    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    //
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces 
    // ------------------------------------------------------------------------
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    // 
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }


    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }


        
        
        
        function myBalance() public constant returns (uint){
            return (balances[msg.sender]);
        }
        
        function myAddress() public constant returns (address){
            address myAddr=msg.sender;
            return myAddr;
        }
        
        function endSale() public {
            require(msg.sender==admin);
            admin.transfer(address(this).balance);
            
        }
        
    }
        
    
*/