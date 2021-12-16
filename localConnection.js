var Web3 = require('web3');

//Using ganeche to create a local server
var web3 = new Web3('http://127.0.0.1:7545');
var address = "0x05806635a58bAbc124e4612F759D438aAAD45420"
web3.eth.getBalance(address, (err, bal) => {
    balance = bal
    console.log(web3.utils.fromWei(balance, 'ether'))
})
//This converts from wei to ether 
//web3.utils.fromWei(balance, 'ether')

//To create an account using web3
// console.log(web3.eth.accounts.create());

