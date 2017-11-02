window.onload = function() {
	var searchBtn = document.getElementById("search-btn");
	var httpRequest;
	var searchItem = document.getElementById("search");
	var resultcont = document.getElementById("result");
	var getAll = document.getElementById("get-all");
	getAll.addEventListener("click", function(e) {
		e.preventDefault();
		httpRequest = new XMLHttpRequest();
		var list = document.createElement('ul');
		resultcont.innerHTML = "";
		list.setAttribute("id","list");
		resultcont.appendChild(list);
		httpRequest.onreadystatechange = getAllData;
		var url = "request.php?q=&all=true";
		httpRequest.open("GET", url);
		httpRequest.send();
		function getAllData() {
			if(httpRequest.readyState === XMLHttpRequest.DONE){
				if(httpRequest.status == 200){
					var xmlResponse = httpRequest.responseXML;
					var definition = xmlResponse.getElementsByTagName("definition");
					for (var x = 0; x < definition.length; x++) {
			        	var h3 = document.createElement("H3");
			        	var p = document.createElement("P");
			        	var p_author = document.createElement("P");
			            var def = document.createTextNode(definition[x].innerHTML);
			            var author = document.createTextNode(definition[x].getAttribute("author"));
			            var name = document.createTextNode(definition[x].getAttribute("name"));
			            h3.appendChild(name);
			            p.appendChild(def);
			            p_author.appendChild(author);
			        	resultcont.appendChild(h3);
			        	resultcont.appendChild(p);
			        	resultcont.appendChild(p_author);
			        }
				}
			}
		}
	});
	searchBtn.addEventListener("click", function(e) {
		e.preventDefault();
		var textVal = searchItem.value;
		if(textVal != ""){
			httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = alertMsg;
			var url = "request.php?q=" + textVal;
	    	httpRequest.open("GET", url);
	    	httpRequest.send();
		}
		else{
			resultcont.innerHTML = "Please enter a text in the search bar";
		}
		
	});
	function alertMsg(){
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
				resultcont.innerHTML = httpRequest.responseText;
			}
		}
	}
};