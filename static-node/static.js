const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

//Functions
//Syntax of a function
const someName = (name)=>{
    console.log("Your name is " + name)
someName("Kristashia")
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
fs.readFile('/public/home.html',(error,content)=>{
//need to handle errors first
//if there are no errors, we can output the content
})

  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 