var Web3 = require('web3');
// url to connect to the etherium node through infura
var url = 'https://mainnet.infura.io/v3/b4e232ec346a4f7aada16c229c5e3218';
var address = '0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf';
var web3 = new Web3(url);

web3.eth.getBalance(address, (err, bal) => {
    balance = bal
    console.log(web3.utils.fromWei(balance, 'ether'))
})
//This converts from wei to ether 
//web3.utils.fromWei(balance, 'ether')

//To create an account using web3
console.log(web3.eth.accounts.create()
);