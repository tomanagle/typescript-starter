import http from 'http'
import './db/connect'
import User from './model/user.model'

//create a server object:
http.createServer(async function(req, res) {
    res.write('Hello World!') //write a response
    res.end() //end the response

    const users = await User.find().exec()
}).listen(3000, function() {
    console.log('server start at port 3000') //the server object listens on port 3000
})
