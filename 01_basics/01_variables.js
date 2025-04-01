const accountId = 1242423
let accountEmail = "nakul@dasd.com"
var accountPassword = "23343"
accountCity = "Jaipur"
let accountState;


// accountId = 2 NOT ALLOWED

accountEmail = "asds@cs.com"
accountPassword = "1234"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountPassword, accountState])