function block() {
        console.log("Starts");
        var url = "http://46.101.135.143:3000/find/";
        var num = document.getElementById("inp_carnum").value;
        url = url + num;
	$.get(url, function(data){
		alert("Data: " + data);
	});
}