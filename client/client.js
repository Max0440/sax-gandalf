const serverUrl = "ws://127.0.0.1:8081";
var ws = new WebSocket(serverUrl);

//recive data form server
ws.onmessage = function (event) {
    if (event.data == "play") {
        console.log("play");
        $("#video").trigger("play");
    } else if (event.data == "reset") {
        console.log("reset");
        document.getElementById("video").currentTime = 0;
    } else {
        console.log("pause");
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
    console.log("Client disconnected");
};
