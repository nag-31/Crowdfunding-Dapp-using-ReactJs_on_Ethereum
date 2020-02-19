import React, {Component} from 'react';

class Roadmap extends Component {

  render(){
    return (
      <div>
        <div class="roadmap"> Roadmap </div>
        <div class="roadmapImage">
          <img src={this.props.link1} />
        </div>
      </div>
    );
  }
}

export default Roadmap;
