const bcrypt = require('bcrypt');


let salt = bcrypt.genSaltSync(10);
let password = 'test';


let hashedPass = bcrypt.hashSync(password, salt)

console.log(salt)
console.log(hashedPass)

let decrypt = bcrypt.compareSync(password, 'kjfgkjdfhk@4ensdjfe4e')

console.log(decrypt)