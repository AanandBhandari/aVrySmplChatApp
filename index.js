const express = require('express');
const app = express();
const socket = require('socket.io');
app.use(express.static('public'));
let server=app.listen(3000,() => {
    console.log('the app is listening on port number 3000');
});
let io = socket(server);
io.on('connection',(socket)=>{
    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });  

})