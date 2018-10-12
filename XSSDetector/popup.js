chrome.webRequest.onBeforeRequest.addListener(
		function(detective){
				var meth = detective.method;
				var patt = new RegExp("^.*((%3C)|<)script.*((%3E)|>).*((%3C)|<)((%2F)|/)script((%3E)|>).*$");
				var suc = false;
				if(meth=="GET")
				{
					if(patt.test(detective.url))
					suc = true;
				}
				else
				{
					for(var x in detective.requestBody.formData)
					if(patt.test(detective.requestBody.formData[x]))
					suc = true;
				}		
			return {cancel:suc};
		},{urls:["<all_urls>"]},["blocking","requestBody"]
	);