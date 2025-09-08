// import fs from "fs";

// Sync method
// fs.writeFileSync("./test.txt", "Hello World Sync");
// console.log("File written synchronously!");

// // Async method  => in async methods we pass err 
// fs.writeFile("./test.txt", "Hello World Async", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written asynchronously!");
// });

//  // here "utf-8"     is default parameter 
// const result = fs.readFileSync("./contact.txt"  , "utf-8")
// console.log(result);



// async does not  return anything  it a  void 

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("File content:", result);
//   }
// });

// appende sync adds the file  it does not ovewrite it has many use casess


// fs.appendFileSync("./test.tect"   , `${Date.now()} hey there\n`)

// appn is used in may ways  for login and various cases


// then copy sync
// fs.cpSync it copies from source to destination
// fs.unlinksync it deletes


// fs.mkdir => it cretes a directory 


