import React, {Component} from 'react';

class Roadmap extends Component {

  render(){
    return (
      <div>
        <div className="roadmap"> Roadmap </div>
        <div className="roadmapImage">
          <img src={this.props.link1} />
        </div>
      </div>
    );
  }
}

export default Roadmap;
