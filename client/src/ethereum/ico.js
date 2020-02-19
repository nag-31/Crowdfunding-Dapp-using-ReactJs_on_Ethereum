import web3 from '../web3';
import newICO from './build/ICO.json';

const instance = new web3.eth.Contract(
  JSON.parse(newICO.interface), ''
);

export default instance; 
