const accountId = 1235;
var accountEmail = "Vishal@yahoo.com";
let accountPassword = "0009"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountPassword = "87487"
accountCity = "Dausa"

/*
Prefer not to use var 
beccause of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);