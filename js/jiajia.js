//商品一
	function add(){
        var txt=document.getElementById("txt");
        var xf=document.getElementById("xj");
        var a=txt.value;
        var a1=xf.value;
        var a1=Number(a1);
        //alert(typeof(a1))
        a++;
        a1+=52.00;
        txt.value=a;
        xf.value=Number(a1);
    }
	function sub(){
        var txt=document.getElementById("txt");
        var xf=document.getElementById("xj");
        var a=txt.value;
        var a1=xf.value;
        var a1=Number(a1);
        if(a>1&&a1>1){
            a--;
            a1-=52.00;
            txt.value=a;
            xf.value=a1;
        }else{
            txt.value=1;
            xf.value=52.00;
        } 
    }
//商品二
	function add01(){
        var txt1=document.getElementById("txt01");
        var xf=document.getElementById("xj01");
        var b=txt1.value;
        var a1=xf.value;
        var a1=Number(a1);
        //alert(typeof(a1))
        a1+=52.00;
        xf.value=Number(a1);
        ++b;
        txt1.value=b;
    }
	function sub01(){
        var txt1=document.getElementById("txt01");
        var xf=document.getElementById("xj01");
        var b=txt1.value;
        var a1=xf.value;
        var a1=Number(a1);
        if(b>1&&a1>1){
            b--;
            txt1.value=b;
             a1-=52.00;
            xf.value=a1;
        }else{
            txt1.value=1;
            xf.value=52.00;
        } 
    }
//商品三
	function add02(){
        
        var txt2=document.getElementById("txt02");
        var xf=document.getElementById("xj02");
        var c=txt2.value;
        var a1=xf.value;
        var a1=Number(a1);
        ++c;
        txt2.value=c;
        a1+=52.00;
        xf.value=Number(a1);
  }
	function sub02(){
        var txt2=document.getElementById("txt02");
        var xf=document.getElementById("xj02");
        var c=txt2.value;
        var a1=xf.value;
        var a1=Number(a1);
        if(c>1&&a1>1){
            c--;
            txt2.value=c;
            a1-=52.00;
            xf.value=a1;
        }else{
            txt2.value=1;
            xf.value=52.00;
        } 
    }