const os = require('os')

const user = os.userInfo();
console.log(user);
console.log(`the system up-time is ${os.uptime()}`);


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalM : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS);