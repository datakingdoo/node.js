const bcrypt = require('bcrypt')

// const encryptedPassowrd = bcrypt.hashSync("1234", 10) // sync
// console.log(encryptedPassowrd)


const same = bcrypt.compareSync("1234", "$2b$10$PoRbVUtNQLt95arq0wn7auffUnwUnQ8o1HC2jM8B/IvW62CJPEyQ.") // sync
console.log(same)