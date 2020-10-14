const serverUrl = "ws://127.0.0.1:8081";

function connect() {
    var ws = new WebSocket(serverUrl);

    //recive data form server
    ws.onmessage = function (event) {
        console.log(event.data);
        
        if (event.data == "play") {
            $("#video").trigger("play");
        } else if (event.data == "reset") {
            document.getElementById("video").currentTime = 0;
        } else if (event.data == "pause") {
            $("#video").trigger("pause");
        }
    };
    
    //handels shit
    ws.onerror = function (err) {
        console.log("err: ", err);
    };
    
    ws.onopen = function (event) {
        console.log("Connection is open ...");
        ws.send("New client connected");
    };
    
    ws.onclose = function () {
        console.log("Client disconnected, reconnect");
        setTimeout(() => {
            connect();
        }, 1000);
    }
}

connect();