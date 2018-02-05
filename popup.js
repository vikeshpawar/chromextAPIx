window.onload = function () {
	document.getElementById("btn").addEventListener('click', function(){
		
		
		chrome.tabs.executeScript(null, {
			
            file: "aloknath.js"
        }, function () {});
		
	});

}