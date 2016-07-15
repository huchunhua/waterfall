
window.onload = function() {
	waterfall("main","box");
	var dataInt = { "data":
	[{"url":"http://hbimg.b0.upaiyun.com/afb7b55a310c583c4fb8b525698854ff08171fef630d7-77OaJe"},
	{"url":"http://hbimg.b0.upaiyun.com/0f7ddbabcbb746567a03cdffb4fc3a2ba9ea97ef7ae01-5Ckpd6"},
	{"url":"http://hbimg.b0.upaiyun.com/25dcd64b5fac0f4bd1406e45d863598550e330045800c-qRj8sP"},
	{"url":"http://hbimg.b0.upaiyun.com/2cabea48a3ecaafdfddd2cf7d83dee4ac19fb18713067-ZCPb9B"},
	{"url":"http://hbimg.b0.upaiyun.com/3e53ecb683ed6861ce871115d9394f252621ac67b044e-rhcEjy"},
	{"url":"http://hbimg.b0.upaiyun.com/30a51ef87dd811a4b287e6637917f4b6a1a5f779152f3-c2EGuS"},
	{"url":"http://hbimg.b0.upaiyun.com/257bf7586a444ed49f2f937dd7543b9dfaff3d66c220-rbQU5f"},
	{"url":"http://hbimg.b0.upaiyun.com/168abe43a844a0e876f9a27c592d8857578f8c0a4ea-lHII0J"},
	{"url":"http://hbimg.b0.upaiyun.com/73b495065d4fc0843495da825f0c64aa4a219d7674254-CPyEKO"},
	{"url":"http://hd.shijue.cvidea.cn/tf/140518/2333996/5378612a3dfae97a2b000001.jpg"},
	{"url":"http://hbimg.b0.upaiyun.com/6d4edaf008b8efb436d808ba7035c5cb92506dd2a95-23D37c"},
	{"url":"http://hbimg.b0.upaiyun.com/2bf464718c35268a7b85d5bf9f65ef40ff798ed584ed-JYdymj"},
	{"url":"http://hbimg.b0.upaiyun.com/168abe43a844a0e876f9a27c592d8857578f8c0a4ea-lHII0J"},
	{"url":"http://hbimg.b0.upaiyun.com/d4cd50d25e2dc85b0ee1687c194d512e01190582ff2f-IKPZR7"},
	{"url":"http://hbimg.b0.upaiyun.com/0a0e2cf0d6b868b57b866eb60c60fe79e0a6322c5e9fa-cQjGQ9"},
	{"url":"http://hbimg.b0.upaiyun.com/1fd1d4fd9cecf3b7995969302f92fcdd708433367961-hzsIQZ"},
	{"url":"http://hbimg.b0.upaiyun.com/72595c0d4792d73b6bf873839e29f28cd84fe0076606f-f7xm9l"},
	{"url":"http://hbimg.b0.upaiyun.com/f6c0a3a921c8f99e4cf13db0b290e30e6868a515124f-1bPsK8"},
	{"url":"http://hbimg.b0.upaiyun.com/8f31a3d083ad1b19f5f0dffd06d8ecbe5933e5465840a-y6PXRC"},
	{"url":"http://hbimg.b0.upaiyun.com/daa68f84174954d684ad32e1e9682a7fb792b554147f-ACuh7g"},
	{"url":"http://hbimg.b0.upaiyun.com/168abe43a844a0e876f9a27c592d8857578f8c0a4ea-lHII0J"},
	{"url":"http://hbimg.b0.upaiyun.com/a2fc8232ba3dcf83083a6cfcae2197b51458abc812e638-vKmDP9"},
	{"url":"http://hbimg.b0.upaiyun.com/35ac2bdd47591d939d815a8c6db57802e464476017c4-whyyzu"},
	{"url":"http://hbimg.b0.upaiyun.com/e5804ab4aef25f4392271b8c8013daf5042daac53e125f-sgBZTe"},
	{"url":"http://hbimg.b0.upaiyun.com/0df870c13375cd98988fc5cb7334d1d4d1521f9bd89e-S0T9zn"},
	{"url":"http://hbimg.b0.upaiyun.com/b37c94887d26448bb358d2a1540a097e08ff38ba47bce-t8GU7y"},
	{"url":"http://hbimg.b0.upaiyun.com/8e7f704ec322ea1fcc33c5d5608194aa19bc313030f0c-gtocUe"},
	{"url":"http://hbimg.b0.upaiyun.com/223f1f4ca72595c77c4bb16a4e25a44a09ae93786ed14-Tiof3H"},
	{"url":"http://hbimg.b0.upaiyun.com/8068e7a458a3d0de6073c131583ceb908799d84e2475-9b79uM"},
	{"url":"http://hbimg.b0.upaiyun.com/f2ef7081c3593433ec3f20bdc91e1f13cc2ee638d4be1-XlCiIe"},
	{"url":"http://hbimg.b0.upaiyun.com/c2fe5f987adf2847ded3f9e778f9d3466364eb7a553e4-dfdpit"},
	{"url":"http://hbimg.b0.upaiyun.com/9ec9153338287ecb5121bab754fcd7b30db9aebb28541-CwQ43A"},
	{"url":"http://hbimg.b0.upaiyun.com/b3e01396959d61ccdc0657020cd11fe98b4f5e1141350-WFrt44"},
	{"url":"http://hbimg.b0.upaiyun.com/af4918273f578307e53488929cac130aad84fd2814497-cC4uqy"},
	{"url":"http://hbimg.b0.upaiyun.com/aa568e57e685c2acca0c1becd22b2f7f5a76b8e2e292-1w2voj"},
	{"url":"http://hbimg.b0.upaiyun.com/be6dc7699e83b9efae379ecd4967a0e7ef34f3a61cc84-JWL2ij"},
	{"url":"http://hbimg.b0.upaiyun.com/fdc2dbf011e01111837f75ceb97d36f8bc7c854a26b4b-ukn5SQ"}
	]}
	window.onscroll = function () {
		if (checkScrollSlide) {
			var oParent = document.getElementById("main");
			// 将数据块渲染到当前页面的尾部
			for (var i=0;i < dataInt.data.length;i++) {
				var oBox = document.createElement("div");
				oBox.className = "box";
				oParent.appendChild(oBox);
				var oPic = document.createElement("div");
				oBox.appendChild(oPic);
				var oImg = document.createElement("img");
				oImg.src =  dataInt.data[i].url;
				oPic.appendChild(oImg);
			}
			waterfall("main","box");
		}
	}

}

function waterfall(parent,box) {
	// 将class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);
	// 计算显示列数
	var oBoxW = oBoxs[0].offsetWidth;
	var cols =Math.floor(document.documentElement.clientWidth / oBoxW);
	// 设置整个瀑布流宽度
	oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto';
	var hArr = [];
	for(var i=0;i < oBoxs.length;i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}
		else {
			var minH = Math.min.apply(null,hArr);
		 	var index = getMinhIndex(hArr,minH);
		 	oBoxs[i].style.position = "absolute";
		 	oBoxs[i].style.top = minH + "px";
		 	oBoxs[i].style.left = oBoxs[index].offsetLeft + "px";
		 	hArr[index] += oBoxs[i].offsetHeight;
		}
	}
}

function getByClass(pt,clsName) {
	var boxArr = []; //用来存储所有class为box的元素
	  	oElements = pt.getElementsByTagName("*");
	for (i=0;i<oElements.length;i++) {
		if (oElements[i].className ==clsName) {
			boxArr.push(oElements[i])
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val) {
	 for (i in arr) {
	 	if (arr[i] == val) {
	 		return i;
	 	}
	 }
}

// 检测是否加载数据块
function checkScrollSlide() {
	var oParent = document.getElementById("main");
	var oBoxs = getByClass(oParent,'box');
	var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || documen.documentElement.clientHeight;
	return (lastBoxH < scrollTop + height) ? true :false;
}







$(window).on('load',function(){
    var t = [];
    var ar = [];
    for (var i=0;i < dataInt.data.length;i++) {
        t.push(dataInt.data[i]);
        if (t.length == 5) {
            ar.push(t);
            t = [];
        }
    }
	waterfall();
	$(window).one('scroll',function() {
        for (var i=0;i<ar.length;i++) {
            $.each(ar[i],function(key,value) {
                var oBox = $('<div>').addClass('box').appendTo($('#main'));
                var oPic = $('<div>').appendTo($(oBox));
                var oImg = $('<img>');
                $(oImg).css('width','165px');
                $(oImg).css('height',$(value).attr('height') / $(value).attr('width') * 165 +'px');
                $(oImg).appendTo($(oPic));
                if (checkScrollSlide) {
                    $(oImg).attr('src', 'http://hbimg.b0.upaiyun.com/' + $(value).attr('key'));
                }
            })
            waterfall();
        }			
	})
})










var arr = dataInt.data;
$(window).on('load',function() {
    waterfall();
    $(window).on('scroll',function() {
        if (! checkScrollSlide) {
            return;
        }

         else {
            var ar =  arr.splice(0,5);
            arr = arr;
            $.each(ar,function(key,value) {   
                var oImg =$('<img>');
                $(oImg).css('width','165px');
                $(oImg).css('height',$(value).attr('height') / $(value).attr('width') * 165 +'px');
                $(oImg).attr('scr','../img/load.gif').css('padding','20px');
                var oPic = $('<div>').append($(oImg));
                var oBox = $('<div>').addClass('box').append($(oPic));
                $(oImg).attr('src', 'http://hbimg.b0.upaiyun.com/' + $(value).attr('key'));
                $(oBox).appendTo($('#main'));
                waterfall();
            })
        }
    })
})