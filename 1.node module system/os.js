//os(operating system) module is used to get the information about current system
//current system is the system where we are working now
const os =require('os');

console.log(os.arch());
//arch =Archietecture
console.log(os.platform());
 console.log(os.networkInterfaces());
 console.log(os.cpus());
 console.log(os.totalmem());
 //totalmem= total memory
 console.log(os.freemem());
 //freemem= free memory

