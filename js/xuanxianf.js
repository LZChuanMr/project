window.onload = function (){
		var oLi = document.getElementById("ul").getElementsByTagName("li");
		var oUl = document.getElementById("div1").getElementsByTagName("div");
		
		for(var i = 0; i < oLi.length; i++){
			oLi[i].index = i;
			oLi[i].onclick = function (){
				for(var n = 0; n < oLi.length; n++) oLi[n].className="";
				this.className = "chan";
				for(var n = 0; n < oUl.length; n++) oUl[n].style.display = "none";
				oUl[this.index].style.display = "block"
			}	
		}
	}