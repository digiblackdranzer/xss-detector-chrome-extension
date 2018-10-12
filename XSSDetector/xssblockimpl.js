//alert('Hola DEA');
var patt = new RegExp("^.*((%3C)|<)script.*((%3E)|>).*((%3C)|<)((%2F)|/)script((%3E)|>).*$");
if(patt.test(document.URL))
{
	alert("Whole Script XSS Attack was attempted");
	window.open("about:blank","_self");
}

var a = document.getElementsByTagName('form');


for (i=0;i<a.length;i++)
{
	//alert('Hola DEA 2');
		
		//alert('Hola DEA 3');
		var x = window;
		a[i].addEventListener("submit",function(){
		var b = document.getElementsByTagName('input');	
		for (i=0;i<b.length;i++)
		{	
			//alert('Hola DEA 4');
			if(b[i].type=="text")
			{
				tar = b[i].value;
				var patt = new RegExp("^.*((%3C)|<)script.*((%3E)|>).*((%3C)|<)((%2F)|/)script((%3E)|>).*$");
				//var patt = new RegExp("script");
				if(patt.test(tar))
				{
					if(this.method=="POST")
					alert("Whole Script XSS Attack was attempted");
					this.action="";

				}	
			}	
		}	

		},true);
		
}
