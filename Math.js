onmessage = function(event) {
	console.log("recieved message")
	postMessage(+event.data);
};
