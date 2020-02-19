import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import ico from "./contracts/ICO.json";

//import "./App.css";
import './css/App.css';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Team from './components/Team';
import scrollToComponent from 'react-scroll-to-component';



class App extends Component {

  
  state = { storageValue: 0, web3: null, accounts: null, contract: null,contract2:null,myvalue:null,
    myBalance: '88888',
    myEther: '',
    myAddress: '',
    accounts:[],
    whitepaper:'',
    roadmap:'',
    team:''
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const deployedNetwork2 = ico.networks[networkId];
      const instance2 = new web3.eth.Contract(
        ico.abi,
        deployedNetwork2 && deployedNetwork2.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      
      
      let myBalance = await instance2.methods.myBalance().call().then(console.log(myBalance));
      myBalance = web3.utils.fromWei(myBalance, 'ether');
      
      
      let myBalanceEther = await web3.eth.getBalance(accounts[0]);
      myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
      let myEther = myBalanceEther;
      
      this.setState({myBalance, myEther});

      

     
      
      this.setState({ web3, accounts, contract: instance,contract2:instance2,myBalance }, this.runExample);

      
  

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract,contract2 } = this.state;

    // Stores a given value, 5 by default.
    //await contract.methods.set(5).send({ from: accounts[0] });
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
    const response2 = await contract2.methods.symbol().call();
    const whitepaper = await  contract2.methods.whitepaper().call();
    const roadmap = await  contract2.methods.roadmap().call();
    const team = await  contract2.methods.team().call();

    // Update state with the result.
    this.setState({ storageValue: response,myvalue:response2 ,whitepaper,roadmap,team });

   


  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <div>The my value is: {this.state.myvalue}</div>
        <div>The my2 value is: {this.state.whitepaper}</div>
        <div>The my2 value is: {this.state.roadmap}</div>
      

        <div>
        <nav>
          <a href="/" class="titleICO">
            <i class="material-icons">group_work</i>
            <div>DEMOICO</div>
          </a>
          <div class="middleNav">
            <a onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}><Button>About</Button></a>
            <a onClick={() => scrollToComponent(this.Whitepaper, { offset: -70, align: 'top', duration: 1500})}><Button>Whitepaper</Button></a>
            <a onClick={() => scrollToComponent(this.Roadmap, { offset: -70, align: 'top', duration: 1500})}><Button>Roadmap</Button></a>
            <a onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}><Button>Contribute</Button></a>
            <a onClick={() => scrollToComponent(this.Team, { offset: -70, align: 'top', duration: 1500})}><Button>Team</Button></a>
          </div>

          <div class="rightNav">
            <i class="material-icons">account_box</i>

            <div class="myAccountBox">
              <div class="address">{"ADDRESS: " + this.state.accounts[0]}</div>
              <div class="eth">{"My Ether: " + this.state.myEther}</div>
              <div class="dctoken">{"My DC: " + this.state.myBalance}</div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}> <Whitepaper link = {this.state.whitepaper} /> </div>
        <div ref={(section) => { this.Roadmap = section; }}> <Roadmap link1={ this.state.roadmap} /> </div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Team = section; }}> <Team team={this.state.team} /> </div>

      </div>
 
      
      
      </div>

    );
  }
}

export default App;
