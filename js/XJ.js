function hasClass(obj,cls){
	var reg = RegExp("\\b"+cls+"\\b");
	// console.log(reg)
	return(reg.test(obj.className));
}

function addClass(obj,cls){
	if(!hasClass(obj,cls)){
		if(obj.className === ""){
			obj.className = cls;
		}else{
			obj.className += " " + cls;
		}
	}
}

function delClass(obj,cls){
	if(hasClass(obj,cls)){
		
		var reg = RegExp("\\b"+cls+"\\b");
		//匹配多个class时前后空格
		var preg = RegExp("\\b\\s"+cls+"\\b");
		var breg = RegExp("\\b"+cls+"\\s\\b");
		obj.className = obj.className.replace(preg,"");
		obj.className = obj.className.replace(breg,"");
		obj.className = obj.className.replace(reg,"");
	}
}


function toggleClass(obj,cls){
	if(hasClass(obj,cls)){
		delClass(obj,cls);
	}else{
		addClass(obj,cls);
	}
}