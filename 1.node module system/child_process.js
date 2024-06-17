//Different types of Modules
//* 1] child process module  //cp = child process
//child process is a node module used to crate sub process within a script
//you can perform different tasks with your script by just using some methods 
const cp =require('child_process');
 cp.execSync('calc');
 cp.execSync('start chrome');
cp.execSync('start chrome https://www.scaler.com/');
console.log ('output:'+cp.execSync('node demo.js'));
