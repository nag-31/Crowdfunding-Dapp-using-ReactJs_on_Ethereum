import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import scrollToComponent from 'react-scroll-to-component';
import App from '../App';

//import getWeb3 from '../getWeb3';
//import ico from "../contracts/ICO.json"; 

//import ico from '../ethereum/ico';


class Start extends Component {
  constructor(props) {
    super(props);


    this.state = {
      contributers: '11',
      totalSupply: '11',
      days:'11',
      hours:'11',
      minutes:'11',
      seconds:'111',
      web3:this.props.web3,
      ico:this.props.ico,
    }
  }
componentDidMount = async () =>{
  //console.log("component did mount");

  const web3=this.state.web3;
  const ico=this.state.ico;
  
  //let contributers = await ico.methods.allContributers().call();
  let totalSupply = await ico.methods.totalSupply().call();
  //const web3 = await getWeb3();
  totalSupply = web3.utils.fromWei(totalSupply.toString(), 'ether');
  //console.log("totalSupply");

  let icoEndTime = await ico.methods.icoEnds().call();
  //console.log(icoEndTime)
  //let timeNow = Math.round((new Date()).getTime() / 1000);
  let timeNow = new Date().getTime(); 
  //console.log(timeNow)
  let timeLeft = icoEndTime - timeNow;
  console.log(timeLeft);
  let date = new Date(timeLeft);
  //date=Date.parse(date.toString());
  console.log(date);
  let days = date.getDate();
  console.log(days);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //console.log("component did mount");

  this.setState({
     
    totalSupply, days, hours, minutes, seconds})
}


  render() {
    //console.log(this.state.totalSupply+"totalSupply");

    return (
      <div>

        <div className="container">
          <div className="containerMiddle">
            <div className="header1">#ICO Landing page for your cryptocurrency project</div>
            <div className="flex">
              <div className="textArea">
                <div>Decentralized Demo Platform for ICO Developers, Advisors, Crypto-Experts
                     and Investors. </div>
                <div className="buttonContainer">
                  <div> <Button variant="contained" color="primary"> SIGN UP TO JOIN </Button> </div>
                </div>
              </div>

              <div className="movieContainer">
                <Player poster="https://blog.sodio.tech/wp-content/uploads/2018/03/ethex-is-decentralized2x.1551cb1c.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
                  <BigPlayButton position="center" />
                   <ControlBar autoHide={false} disableCompletely={true} />
                </Player>
              </div>
            </div>

            <div className="tokenSaleContainer flex">
              <div className="tokenSaleLeftSide">
                <div className="flex space-between">
                  <div className="tokensSold">Total-Supply</div>
                  <div className="contributors">Contributers:<b> {this.state.contributers}</b></div>
                </div>
                <div className="totalSuppy"> {this.state.totalSupply}<b>  {this.state.symbol} </b></div>
                <div ><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}>BUY TOKENS | 25% Bonus</Button></div>
              </div>

              <div className="tokenSaleRightSide">
                <div className="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div className="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
                <div className="time flex space-around">
                  <div>
                    <div className="headerTime">{this.state.days}</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div className="headerTime" >{this.state.hours}</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div className="headerTime" >{this.state.minutes}</div>
                    <div>Min</div>
                  </div>
                  <div>
                    <div className="headerTime" >{this.state.seconds}</div>
                    <div>Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Icons space-around flex">
          <i className="fab fa-bitcoin"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-telegram-plane"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-reddit-alien"></i>
        </div>

      </div>

    );
  }

}

export default Start;





/*


import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import App from '../App';
import scrollToComponent from 'react-scroll-to-component';


className Start extends Component {

  render() {
    return (
      <div>

        <div className="container">
          <div className="containerMiddle">
            <div className="header1">#ICO Landing page for your cryptocurrency project</div>
            <div className="flex">
              <div className="textArea">
                <div>Decentralized Demo Platform for ICO Developers, Advisors, Crypto-Experts
                     and Investors. </div>
                <div className="buttonContainer">
                  <div> <Button variant="contained" color="primary"> SIGN UP TO JOIN </Button> </div>
                </div>
              </div>

              <div className="movieContainer">
                <Player poster="https://blog.sodio.tech/wp-content/uploads/2018/03/ethex-is-decentralized2x.1551cb1c.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
                  <BigPlayButton position="center" />
                   <ControlBar autoHide={false} disableCompletely={true} />
                </Player>
              </div>
            </div>

            <div className="tokenSaleContainer flex">
              <div className="tokenSaleLeftSide">
                <div className="flex space-between">
                  <div className="tokensSold">Tokens Sold: 20</div>
                  <div className="contributors">Contributers:<b> 50</b></div>
                </div>
                <div className="totalSuppy">10 <b>DC</b></div>
                <div ><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}>BUY TOKENS | 25% Bonus</Button></div>
              </div>

              <div className="tokenSaleRightSide">
                <div className="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div className="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
                <div className="time flex space-around">
                  <div>
                    <div className="headerTime">23</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div className="headerTime" >12</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div className="headerTime" >49</div>
                    <div>Min</div>
                  </div>
                  <div>
                    <div className="headerTime" >2</div>
                    <div>Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Icons space-around flex">
          <i className="fab fa-bitcoin"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-telegram-plane"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-reddit-alien"></i>
        </div>
         
      </div>

    );
  }

}

export default Start;
*/