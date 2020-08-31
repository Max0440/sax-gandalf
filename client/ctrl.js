const serverUrl = "ws://127.0.0.1:8081";
var ws = new WebSocket(serverUrl);

//send data to server
$('#play').click(function (e) { 
    e.preventDefault();
    console.log('play');
    ws.send('play');
});

$('#pause').click(function (e) { 
    e.preventDefault();
    console.log('pause');
    ws.send('pause');
});

$('#reset').click(function (e) { 
    e.preventDefault();
    console.log('reset');
    ws.send('reset');
});


//handels shit
ws.onerror = function (err) {
    console.log('err: ', err);
}

ws.onopen = function (event) {
    console.log('Connection is open ...');
    ws.send("New client connected");
}

ws.onclose = function() {
    console.log("Client disconnected");
}