window.onload = function() {
	var searchBtn = document.querySelector("#search-btn");
	var httpRequest;
	
	searchBtn.addEventListener("click", function(e) {
		e.preventDefault();
		httpRequest = new XMLHttpRequest();
		
		httpRequest.onreadystatechange = alertMsg;
    	httpRequest.open("GET", "request.php?q=definition");
    	httpRequest.send();
	});
	function alertMsg(){
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
				alert(httpRequest.responseText);
			}
		}
	};
};