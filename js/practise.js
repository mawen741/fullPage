$(function(){
		$("#fullpage").fullpage({
			lockAnchors:true,
			anchors:["page1","page2","page3","page4",'page5'],
			showActiveTooltip:true,
			navigation:true,
			navigationPosition:'right',
			navigationTooltips:["酷炫的鞋子","新品上市","特色内增高","非凡平底鞋",'甜美乐福鞋'],
			afterLoad:function(anchorLink,index){
				// console.log(anchorLink)
				// console.log(index)
				console.log("afterLoad:  " +"anchorLink="+anchorLink+" ; index="+index);
				switch(index){
					case 1:move(".s1-title-left").set("top","35%").duration('1s').end(move(".s1-title-right").set("bottom","20%").duration('1s').end());break;
							case 2:move(".s2-title").set("top","35%").rotate(360).duration('0.5s').end();break;
					case 3:move(".s3-img").set("left","0px").rotate(360).duration('1.5s').end();break;
							case 4:move(".s4-img").to(500, 200).rotate(720).end();break;
					case 5:move(".s5-title").set("bottom","20px").rotate(720).end();break;
				}
			},
			onLeave:function(index,nextIndex,direction){
				console.log("onLeave:  " +"index="+index+" ; nextIndex="+nextIndex+" ; direction="+direction);
				// console.log(index)
				// console.log(nextIndex)
				// console.log(direction)
				switch(index){
					case 1:move(".s1-title-left").set("top","-100%").end();move(".s1-title-right").set("bottom","-100%").end();break;
					case 2:move(".s2-title").set("top","-200%").rotate(-360).end();break;
					case 3:move(".s3-img").set("left","-100px").rotate(-360).end();break;
					case 4:move(".s4-img").to(0, 0).rotate(-720).end();break;
					case 5:move(".s5-title").set("bottom","0px").rotate(-720).end();break;
				}
			},
			afterRender:function(){
				console.log("afterRender:  ");
			}
		});
	})