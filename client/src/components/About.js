import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
        <div className="whatIs"> What is Wazirx token?</div>
          <div className="textAreaWhatIs flex">
            <div>
              <div className="whatIsHeader">Wazirx </div>
              <div>
                    WazirX is a cryptocurrency exchange with an advanced trading interface and features to buy, sell & trade cryptocurrencies. It is an exchange with a Live Open Order Book system that allows users to trade 80+ digital assets like Bitcoin, BNB, Bitcoin Cash, Litecoin, Dash & many more. Users can deposit/withdraw cryptocurrencies and also cash in/cash out USDT via Peer-to-Peer (“P2P”) to Indian Rupees (“INR”) with ease and speed, as well as securely store one’s digital assets in the WazirX wallet.</div>
              <div className="whatIsHeader">BEST FEATURE</div>
              <div>
                WazirX P2P: With the world’s first auto-matching P2P engine, WazirX P2P is the next generation P2P system that has simplified the process of depositing and withdrawing fiat tremendously. WazirX P2P is the go-to method for depositing and withdrawing INR (fiat) for 1 Billion people of India. After tremendous success in India, WazirX plans to solve the fiat  cryptocurrency conversion problem globally for many more countries.
                </div>
              <div className="whatIsHeader"></div>
              <div>   </div>
            </div>
            <img src="https://steemitimages.com/DQmakmLJRqucg1vt9RGa6xRDDEE7mWLyorUZwC5dBKGqEik/image.png"/>
         </div>
      </div>
    );
  }
}

export default About;
