import React, { Component } from 'react';

class Team extends Component {

  render() {

    return (
        <div>
          <div class="team"> Team </div>
          <div class="teamSub"> Our people are our greatest asset and biggest differentiator.</div>
          <div class="teamSub"> They also believe in having a lot of fun along the way. </div>
          {/* {teams=this.props.team} */}
          <div class="teamPics">

            <div class="circlePic">
              <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png"/>
              <div class="userName"> {this.props.team.split('-')[0]} </div>
              <div class="userText"> The CEO and bla bla, Before </div>
              <div class="userText">  Owner and  ... </div>
            </div>

            <div class="circlePic">
              <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png"/>
              <div class="userName"> {this.props.team.split('-')[2]} </div>
              <div class="userText"> The CEO and bla bla, Before </div>
              <div class="userText">  Owner and  ... </div>
            </div>

            <div class="circlePic">
              <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png"/>
              <div class="userName"> {this.props.team.split('-')[1]} </div>
              <div class="userText"> The CEO and bla bla, Before </div>
              <div class="userText">  Owner and  ... </div>
            </div>
          </div>

        </div>

    );
  }
}

export default Team;
