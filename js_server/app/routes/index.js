var express = require('express');
var router = express.Router();
var ethers = require('ethers');

let provider = ethers.getDefaultProvider('ropsten');
let contractAddress = "0xb7a15503a0ebd37903ef25eb013008b1b88946eb";
let abi = '[{  "constant": false,  "inputs": [    {      "name": "ns",      "type": "string"    },    {      "name": "cf",      "type": "string"    },    {      "name": "ct",      "type": "string"    },    {      "name": "cn",      "type": "string"    },    {      "name": "li",      "type": "string"    },    {      "name": "ud",      "type": "string"    }  ],  "name": "add_certificat",  "outputs": [],  "payable": false,  "stateMutability": "nonpayable",  "type": "function"},{  "inputs": [],  "payable": false,  "stateMutability": "nonpayable",  "type": "constructor"},{  "anonymous": false,  "inputs": [    {      "indexed": false,      "name": "city_from",      "type": "string"    },    {      "indexed": false,      "name": "city_to",      "type": "string"    }  ],  "name": "GetLicense",  "type": "event"},{  "constant": true,  "inputs": [],  "name": "cert_count",  "outputs": [    {      "name": "",      "type": "uint256"    }  ],  "payable": false,  "stateMutability": "view",  "type": "function"},{  "constant": true,  "inputs": [    {      "name": "cn",      "type": "string"    }  ],  "name": "get_certificat",  "outputs": [    {      "name": "cert_id",      "type": "uint256"    },    {      "name": "ns",      "type": "string"    },    {      "name": "li",      "type": "string"    },    {      "name": "cf",      "type": "string"    },    {      "name": "ct",      "type": "string"    },    {      "name": "ud",      "type": "string"    }  ],  "payable": false,  "stateMutability": "view",  "type": "function"}]';
let contract = new ethers.Contract(contractAddress, abi, provider);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/find/:id', async function(req, res) {
    let currentValue = await contract.get_certificat(req.params.id);
    console.log(currentValue);
    res.end(JSON.stringify(currentValue));
});

module.exports = router;
