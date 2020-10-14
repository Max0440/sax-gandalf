const serverUrl = "ws://127.0.0.1:8081";

function connect() {
    var ws = new WebSocket(serverUrl);

    //handels shit
    ws.onerror = function (err) {
        console.log('err: ', err);
    }
    
    ws.onopen = function (event) {
        console.log('Connection is open ...');
        ws.send("New client connected");
    }
    
    ws.onclose = function() {
        console.log("Client disconnected, reconnect");
        setTimeout(() => {
            connect();
        }, 1000);
    }

    //send data to server
    $('#play').click(function (e) { 
        e.preventDefault();
        ws.send('play');
    });
    
    $('#pause').click(function (e) { 
        e.preventDefault();
        ws.send('pause');
    });
    
    $('#reset').click(function (e) { 
        e.preventDefault();
        ws.send('reset');
    });
}

connect();
