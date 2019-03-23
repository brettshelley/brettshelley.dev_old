function alertFun() {
	window.alert("Hello");
}

function changeFun() {
	var input = document.forms["titleForm"]["text"].value;
	if (input != "") {
		document.getElementById("title").innerHTML = input;
		document.forms["titleForm"]["text"].value = "";
	}
}

var w;

function webWorker() {
	if (typeof(Worker) == "undefined") {
		window.alert("Your browser does not support web workers")
	} else {
		if (typeof(w) == "undefined") {
			w = new Worker("/js/testWorker.js");
		}
		w.onmessage = function(event) {
			document.getElementById("worker_data").innerHTML = event.data;
		};
	}
}

function killWorker() {
	w.terminate();
	w = undefined;
}
