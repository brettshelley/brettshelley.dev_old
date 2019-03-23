var i = 0;

function work() {
	i++;
	postMessage(2**i);
	setTimeout("work()", 1000);
}

work();
