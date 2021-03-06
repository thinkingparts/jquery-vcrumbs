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
      'separator' : '&gt;',
      'islastlink' : false
    }, options);	
	var vkey = options.key;	
	var vlinks = "";
	if(vkey == undefined || vkey == null){
		alert("vcrumbs 'key' option is mandatory");
	}else{
		var vseparator = $.cookie('vcrumbs_separator');
		var vpath = $.cookie('vcrumbs_path');
		var vlastlink = $.cookie('vcrumbs_lastlink');
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
		if(options.islastlink != undefined && options.islastlink != null){
			vlastlink = options.islastlink;
			$.cookie('vcrumbs_lastlink', vlastlink,{path:'/'});
		}else if(vlastlink == undefined || vlastlink == null){
			vlastlink = settings.islastlink;
			$.cookie('vcrumbs_lastlink', vlastlink,{path:'/'});
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
			//vlinks += "<a href='"+lparams[2]+"'>"+lparams[1]+"</a>";
			if(l != clinks.length-1){
				vlinks += "<a href='"+lparams[2]+"'>"+lparams[1]+"</a> "+vseparator+" ";
			}else{
				if(eval(vlastlink)){
					vlinks += "<a href='"+lparams[2]+"'>"+lparams[1]+"</a>";
				}else{
					vlinks += lparams[1];					
				}
			}
		}
	}
	return this.each(function() {        
		$(this).html(vlinks);
    });
  };
})( jQuery );