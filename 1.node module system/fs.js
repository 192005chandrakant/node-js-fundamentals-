// # file system module
const fs = require('fs')


//Reading a file
let fileContent =fs.readFileSync('f1.txt');
 console.log("data of file 1 ->" + fileContent);


//  //Writing a file

   //if the file name that is passed doesnt exists then a new file will be created with it
  //name and the data will be written on that file


  fs.writeFileSync('f4.txt','this is file f4 ');
  fs.writeFileSync('f2.txt ','this is file f2 ');
     console.log("file has been written \n");


 //Append a data on a file
  // appendfileSync methods add data to a previously written file
  fs.appendFileSync('f3.txt','i am the owner of this file f3\n');
  console.log("file has been appended");

// check whether file exist or not 
 let doesExist =fs.existsSync('os.js');
 console.log(doesExist);


// //Deleting a file
 fs.unlinkSync('f4.txt');
 console.log("file has been deleted");

// //Directories

// //create a directory //mkdir = make directory

 fs.mkdirSync('myDirectory');

//check the content inside directory
let folderpath ='C:\\Users\\Chandrakant\\node js tutorials\\myDirectory' ;
let foldercontent = fs.readdirSync(folderpath) ;
console.log("folder content is ",foldercontent);

// check whether directory exist or not 
let doesExists =fs.existsSync('myDirectory');
console.log(doesExists);

//how to delete a directory
fs.rmdirSync('mydirectory1');
console.log("file has been deleted");







