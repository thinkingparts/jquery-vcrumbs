/*!
* jQuery VCrumbs Plugin
* https://github.com/thinkingparts/jquery-vcrumbs
*
* Copyright 2012, Thinking Parts 
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function( $ ){
  $.fn.vcrumbs = function(options) {
   var settings = $.extend( {
      'separator' : '&gt;'
    }, options);	
	var vkey = options.key;	
	var vlinks = "";
	if(vkey == undefined || vkey == null){
		alert("vcrumbs 'key' option is mandatory");
	}else{
		var vseparator = $.cookie('vcrumbs_separator');
		var vpath = $.cookie('vcrumbs_path');
		var vtitle = "";
		if(options.title != undefined && options.title != null){
			vtitle = options.title;
		}else{
			vtitle = document.title;
		}			
		if(options.separator != undefined && options.separator != null){
			vseparator = options.separator;
			$.cookie('vcrumbs_separator', vseparator,{path:'/'});
		}else if(vseparator == undefined || vseparator == null){
		  vseparator = settings.separator;
		  $.cookie('vcrumbs_separator', vseparator,{path:'/'});
		}
		if(vpath == undefined || vpath == null){
			vpath = "`"+vkey+"~"+vtitle+"~"+window.location.pathname;
		}else{
			var index = vpath.indexOf("`"+vkey+"~");
			if( index == -1){
				vpath += "`"+vkey+"~"+vtitle+"~"+window.location.pathname;
			}else{
				var nextIndex = vpath.indexOf("~",index+1);			
				if(nextIndex != -1){
					vpath = vpath.substring(0,nextIndex);
					vpath += "~"+vtitle+"~"+window.location.pathname;
				}
			}
		}
		$.cookie('vcrumbs_path', vpath,{path:'/'});
		vpath = vpath.substring(1);		
		var clinks = vpath.split('`');
		for(l=0; l<clinks.length; l++){
			var lparams = clinks[l].split('~');
			vlinks += "<a href='"+lparams[2]+"'>"+lparams[1]+"</a>";
			if(l != clinks.length-1){
				vlinks += " "+vseparator+" ";
			}
		}
	}
	return this.each(function() {        
		$(this).html(vlinks);
    });
  };
})( jQuery );