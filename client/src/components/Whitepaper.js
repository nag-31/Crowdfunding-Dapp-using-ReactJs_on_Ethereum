import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Whitepaper extends Component {

  render() {
    return(
      <div>
        <div className="whitepaper">
          <a href={this.props.link}
          // href="https://bitcoin.org/bitcoin.pdf" 
          target="_blank" >
          <Button size="large" variant="contained" color="primary"  >
            <i className="material-icons">file_copy</i> <i>WHITEPAPER</i>
          </Button>
          </a>
        </div>
      </div>

    );
  }
}

export default Whitepaper; 
