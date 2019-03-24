// function block() {
//         console.log("Starts");
//         var url = "http://46.101.135.143:3000/find/";
//         var num = document.getElementById("inp_carnum").value;
//         url = url + num;
// 	$.get(url, function(data){
// 		alert("Data: " + data);
// 	});
// }

function block() {
    // console.log("Hello World");
    // console.log(s);
    var s = document.getElementById("inp_carnum");
    // var cont1 = document.getElementById("output1");
    // cont1.innerHTML = "";
    var cont = document.getElementById("output");
    cont.innerHTML = "";
    var get = '/find/' + s.value;
    var xhr = new XMLHttpRequest();          // Создание объекта для HTTP запроса.
    xhr.open("GET", get, true);  // Настройка объекта для отправки асинхронного GET запроса
    xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4) { // если получен ответ
	        if (xhr.status == 200) { // и если статус код ответа 200
	            jsonObject = JSON.parse(xhr.responseText)
	            for (var x in jsonObject) {
	            	console.log(x);
	                var div = document.createElement('div');
	                div.innerHTML = x + " = " + jsonObject[x];
	                cont.appendChild(div);
	            }
	            // document.getElementById("output").innerHTML = xhr.responseText; // responseText - текст ответа полученного с сервера.
	        }
	    }
    }
    var str_json = JSON.stringify(s)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    alert(str_json);
    // xhr.send(str_json)
}