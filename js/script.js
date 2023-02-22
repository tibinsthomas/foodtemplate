function validate() {
	let n = document.getElementById("t1").value;
	let a = document.getElementById("t2").value;
	let p = document.getElementById("t3").value;
	let ev = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (n == "") {
		alert("Name field is empty");
		return false;
	} else if (!ev.test(a)) {
		alert("not valid mail");
		return false;
	} else if (p == "") {
		alert("Message field is empty");
		return false;
	}
}
