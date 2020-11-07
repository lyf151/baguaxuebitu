function toggleimg(innerdiv) {
		var subDiv = innerdiv.children;
		//更换八卦背景图
		//如果图片位置Y轴的位置为0则将Y轴变为-26反之则变为0
		if (subDiv[0].style.backgroundPosition.split(" ")[1] === "0px") {
			subDiv[0].style.backgroundPosition = subDiv[0].style.backgroundPosition.split(" ")[0] + " " + "-26px";
		} else if (subDiv[0].style.backgroundPosition.split(" ")[1] === "-26px") {
			subDiv[0].style.backgroundPosition = subDiv[0].style.backgroundPosition.split(" ")[0] + " " + "0px";
		}

		if (subDiv[1].style.backgroundPosition.split(" ")[1] === "0px") {
			subDiv[1].style.backgroundPosition = subDiv[1].style.backgroundPosition.split(" ")[0] + " " + "-26px";
		} else if (subDiv[1].style.backgroundPosition.split(" ")[1] === "-26px") {
			subDiv[1].style.backgroundPosition = subDiv[1].style.backgroundPosition.split(" ")[0] + " " + "0px";
		}
	}

function create(obj) {
	var eArr = [];
	var index = 0;
	//两次嵌套循环创建元素
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {				
			(function() {
				var innerdiv = document.createElement('div');
				addClass(innerdiv, "inner");
				var innerTopdiv = document.createElement('div');
				addClass(innerTopdiv, "topDiv");
				innerdiv.appendChild(innerTopdiv);
				var innerBottomdiv = document.createElement('div');
				addClass(innerBottomdiv, "bottomDiv");
				innerdiv.appendChild(innerBottomdiv);
				innerTopdiv.style.backgroundPosition = -(i * 36) + "px" + " " + "-26px";
				innerBottomdiv.style.backgroundPosition = -(j * 36) + "px" + " " + "-26px";
				//绑定鼠标移入事件，当鼠标移入后添加样式
				innerdiv.onmouseover = function() {
					addClass(this, "hoverInnerBg");
				}
				//绑定鼠标移出事件，当鼠标移出后删除样式
				innerdiv.onmouseleave = function() {
					delClass(this, "hoverInnerBg");
				}
				//每行最后一个元素
				if (j === 7) {
					delClass(innerdiv, "inner");
					addClass(innerdiv, "RlastInner");
				}

				if (i === 7) { //最后一行
					delClass(innerdiv, "inner");
					addClass(innerdiv, "BlastInner");
				}
				//最后一个元素
				if (j === 7 && i === 7) {
					delClass(innerdiv, "inner");
					delClass(innerdiv, "RlastInner");
					delClass(innerdiv, "BlastInner");
					addClass(innerdiv, "lastInner");
				}

				innerdiv.onclick = function() {
					backDivStyle && toggleimg(backDivStyle);
					toggleimg(this);
					backDivStyle = this;
				}
				//为每一个innerdiv设置一个索引且与数组的下标相对应
				innerdiv.index = index;
				eArr.push(innerdiv);
				index += 1;
				obj.appendChild(innerdiv);

			})()

		}
	}
	//用于保存当前点的标签，当点击下一个时将其样式替换
	var backDivStyle;
	//设置默认选中第一个
	eArr[0].click();
}
