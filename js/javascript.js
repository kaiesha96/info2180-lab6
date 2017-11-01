window.onload = function() {
	var searchBtn = document.querySelector("#search-btn");
	var httpRequest;
	var searchItem = document.getElementById("search");
	var resultcont = document.getElementById("result");
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