var o = null;
		var i = 0;
		online = function(id, _top, _right) {
			var me = id.charAt ? document.getElementById(id) : id, d1 = document.body, d2 = document.documentElement;
			d1.style.height = d2.style.height = '100%'; me.style.top = _top ? _top + 'px' : 0; me.style.right = _right + "px"; 
			me.style.position = 'absolute';
			me.style.display = 'block';
			setInterval(function() { me.style.top = parseInt(me.style.top) + (Math.max(d1.scrollTop, d2.scrollTop) + _top - parseInt(me.style.top)) * 0.1 + 'px'; }, 10 + parseInt(Math.random() * 20));
			return arguments.callee;
		};
		
		$(document).ready(function() {
			//alert("df");
			var html = '';
			html += '<div id="online">';
			html += '	<p class="con_pP">';
			html += '   </p>';
			html += '</div>';
			$(document.body).append(html);
			o = document.getElementById("online");
			i = parseInt(o.style.right);
			online('online', 250,10);
			
			//应季弹出框JS
			$("#online").click(function(){
				$("#cc_blackBg").show();
				$("#yJowy").show();			
			});
			//关闭应季弹出框JS
			$("#yJcloseSpan").click(function(){
				$("#cc_blackBg").hide();
				$("#yJowy").hide();			
			});
		});
