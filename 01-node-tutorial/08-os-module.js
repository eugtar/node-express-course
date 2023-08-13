const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  cpu: os.cpus(),
  priority: os.getPriority(),
  homeDir: os.homedir(),
  hostName: os.hostname(),
  network: os.networkInterfaces(),
  eol: os.EOL,
};
console.log(currentOS);
