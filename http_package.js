const http = require('http')
const server = http.createServer(
        (req, res) =>{
            if(req.url == '/'){
                res.end("welcome to home page")
            }
            else if(req.url == '/about'){
                res.end("welcome to about page")
            }
            else{
                res.end(`<h1> Error: 404</h1> 
                     <p>Page does not found </p>
                     <a href = "./"> go back to home </a>`)
            }
            // res.end()
    }
)

server.listen(8000)