//Types of modules

//read a file
/*const fs=require('fs')

fs.readFile('one.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data);
})*/
//Write file
/*const fs=require('fs')
fs.writeFile("one.txt","Adding into file",(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("file executed sucessfully")
    }
})*/
//os module
/*const os=require('os')
console.log(os.type())
console.log(os.version());
console.log(os.freemem());*/
//path module
/*const path=require('path')
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));*/

//http module
const port=5500
const http=require('http')
const myServer=http.createServer((request,response)=>{
    response,write("welcome to http module ");
    response.end();

})
myServer.listen(port,()=>{
    console.log(`My server is running on port ${port}`)
});
    
