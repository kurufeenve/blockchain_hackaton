import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3'
import Tx from 'ethereumjs-tx'
import secp256k1 from 'secp256k1'
import { PassThrough } from 'stream';


class App extends Component {
  

  componentWillMount() {
  }

  render() {
    return (
      <div className="container">
        <h1>add to chain</h1>
        <input type="submit" value='add baby' onClick={this.AddBaby.bind(this)} />
      </div>
 )
  }

  async AddBaby(event) {

    const network ='https://ropsten.infura.io/v3/723c0eab8d2e4f30a10fc4a2ce2a08f9';
    const web3 = new Web3(network)
    const ABI = [
      {
        "constant": false,
        "inputs": [
          {
            "name": "ns",
            "type": "string"
          },
          {
            "name": "cf",
            "type": "string"
          },
          {
            "name": "ct",
            "type": "string"
          },
          {
            "name": "cn",
            "type": "string"
          },
          {
            "name": "li",
            "type": "string"
          }
        ],
        "name": "add_certificat",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "cn",
            "type": "string"
          }
        ],
        "name": "get_certificat",
        "outputs": [
          {
            "name": "cert_id",
            "type": "uint256"
          },
          {
            "name": "ns",
            "type": "string"
          },
          {
            "name": "li",
            "type": "string"
          },
          {
            "name": "cf",
            "type": "string"
          },
          {
            "name": "ct",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "cert_count",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "city_from",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "city_to",
            "type": "string"
          }
        ],
        "name": "GetLicense",
        "type": "event"
      }
    ]
    const contract_addr = '0xcc9ab81e04c6301ac300e1a4ef2e70a91244f613'
    let contract;
    try {
      contract = new web3.eth.Contract(ABI, contract_addr)
    }
    catch(e)  {
      console.log('error', e);
    }
    const sertificat = await contract.methods.get_certificat("an4095it").call()
    console.log(sertificat)

}
}

export default App;
