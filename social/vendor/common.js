(function(root, factory){
	if (typeof exports === "object" && exports) {
		factory(exports); // CommonJS
	} else {
		var hzyCommon = {};
		factory(hzyCommon);
		if (typeof define === "function" && define.amd) {
			define(hzyCommon); // AMD
		} else {
			root.hzyCommon = hzyCommon; // <script>
		}
	}

})(this, function (hzyCommon) {

	//serverIP = '192.168.199.246:8080';
	//serverIP = 'school.nicezhuanye.com';
	//serverIP = 'test.nicezhuanye.com';
	//serverIP = '192.168.199.156:8080';
	//serverIP = 'test.nicezhuanye.com';
	//serverIP = 'nicezy.wicp.net';
	serverIP = 'localhost:8080';
	debug=true;
	console=window.console||{log:function(){return;}};
	hideWechatShareMenu();
	hzyCommon.serverIP = serverIP;
	hzyCommon.debug = debug;

	function isDebug () {
		return typeof(debug) == "boolean" && debug == true;
	}

	hzyCommon.isDebug = isDebug;


	function hideWechatShareMenu(){

		var useragent = navigator.userAgent.toLowerCase();
		var href=window.location.href;
		if ((!isDebug() && href.indexOf('share')<0 && href.indexOf('/app/')>0)
			&& useragent.indexOf('android') < 0 && useragent.indexOf('iphone') <0
			&& useragent.indexOf('ipad') < 0 ) {
			// 这里警告框会阻塞当前页面继续加载
			//alert('请使用微信内置浏览器访问本页面');
			// 以下代码是用javascript强行关闭当前页面
			var opened = window.open('http://' + serverIP + '/Nicezhuanye/app/share/welcome.html', '_self');
			opened.opener = null;
			//opened.close();
			return;
		}else if(href.indexOf('/app/')<0
			|| useragent.indexOf("micromessenger")<0){
			//非手机微信网页无需调用微信分享
			return;
		}

		var array=window.location.search.split("&");

		if (isDebug()) console.log(array);
		if(!array || array.length<=0)return;
		var paras={};
		for(var i=0;i<array.length;i++){
			var tmpArr = array[i].split('=');
			if(!tmpArr || tmpArr.length<2)continue;
			if(i==0&&tmpArr[0].charAt(0)=='?')tmpArr[0]=tmpArr[0].substring(1);
			paras[tmpArr[0]]=tmpArr[1];
		}

		var token = paras['token'];
		if(!token){
			return;
		}
		var wxconfigUrl='http://' + serverIP + '/Nicezhuanye/rest'+"/wechat/WXConfig";
		var wechatData={"token":token};
		//+"&authCode="+authCode
		wechatData["url"]=encodeURIComponent(location.href.split('#')[0]);

		// 把ready方法hold住，暂时不让ready执行
		/*if(href.indexOf('share')<0){
		 $.holdReady(true);
		 }*/

		//获取微信JS SDK config信息
		$.ajax({
			type : "POST",
			url : wxconfigUrl,
			async : true,
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			data : JSON.stringify(wechatData),
			success : function(response) {
				//alert(JSON.stringify(response));
				if(isDebug())console.log(JSON.stringify(response));
				//alert(baseUrl.substring(0,baseUrl.length-5)+response.QRCode);
				if(response){
					window.shareUrl=response.url;
					if(isDebug()){
						var para={
							debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							appId: response.appId, // 必填，公众号的唯一标识
							timestamp: response.timestamp, // 必填，生成签名的时间戳
							nonceStr: response.nonceStr, // 必填，生成签名的随机串
							signature: response.signature,// 必填，签名，见附录1
							jsApiList: [
								'checkJsApi',
								'onMenuShareTimeline',
								'onMenuShareAppMessage',
								'closeWindow',
								'scanQRCode',
								'hideMenuItems'
							]//response.jsApiList.split(',') // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						};
						console.log(JSON.stringify(para));
					}
					wx.config({
						debug: isDebug(), // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: response.appId, // 必填，公众号的唯一标识
						timestamp: response.timestamp, // 必填，生成签名的时间戳
						nonceStr: response.nonceStr, // 必填，生成签名的随机串
						signature: response.signature,// 必填，签名，见附录1
						jsApiList: [
							'checkJsApi',
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'closeWindow',
							'scanQRCode',
							'hideMenuItems'
						]//response.jsApiList.split(',') // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});

					wx.ready(function(){
						// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
						if(isDebug())console.log('微信签名验证通过');
						if(href.indexOf('share')<0){
							wx.hideOptionMenu();
							wx.hideAllNonBaseMenuItem();
							// 释放ready方法，开始执行
							/*if(href.indexOf('share')<0){
							 $.holdReady(false);
							 }*/
						}else{
							var imgUrl='http://' + serverIP + '/Nicezhuanye/app/images/logo.png';
							var link=location.href.split('#')[0];//loginUrl.substring(0,loginUrl.length-10)+'my_report.html';
							var desc='小伙伴来看看我的报告吧！';
							var title='我的个人选课报告';

							wx.onMenuShareAppMessage({
								title: title, // 分享标题
								desc: desc, // 分享描述
								link: link, // 分享链接
								imgUrl: imgUrl, // 分享图标
								type: 'link', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function () {
									// 用户确认分享后执行的回调函数
									alert('分享成功');
								},
								cancel: function () {
									// 用户取消分享后执行的回调函数
									alert('已取消分享');
								}
							});
							wx.onMenuShareTimeline({
								title: title, // 分享标题
								link: link, // 分享链接
								imgUrl: imgUrl, // 分享图标
								success: function () {
									// 用户确认分享后执行的回调函数
									alert('分享成功');
								},
								cancel: function () {
									// 用户取消分享后执行的回调函数
									alert('已取消分享');
								}
							});
						}
					});
					wx.error(function(res){
						// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
						if(isDebug())console.log('微信签名验证失败');
						// 释放ready方法，开始执行
						/*if(href.indexOf('share')<0){
						 $.holdReady(false);
						 }*/
					});
				}else{
					// 释放ready方法，开始执行
					/*if(href.indexOf('share')<0){
					 $.holdReady(false);
					 }*/

				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				// 释放ready方法，开始执行
				/*if(href.indexOf('share')<0){
				 $.holdReady(false);
				 }*/
				if(isDebug())alert("Unknown Sever Error!Please Contact Us!");
			}
		});
	}
//ajax post方式 同步
	function ajaxSyncPost(url, jsondata, successfunc, errorfunc){
		if( url.indexOf("timestamp=") == -1 ) {
			if (url.indexOf("?") == -1) {
				url = url + "?timestamp="+ new Date().getTime();
			}else{
				url = url + "&timestamp="+ new Date().getTime();
			}
		}
		$.ajax({
			type : "POST",
			url : url,
			data : jsondata,
			async : false,
			contentType : "application/json; charset=utf-8",
			dataType: "json",
			success : successfunc,
			error : errorfunc
		});
	}

	hzyCommon.ajaxSyncPost = ajaxSyncPost;
//ajax post方式  异步
	function ajaxAsyncPost(url, jsondata, successfunc, errorfunc){
		if( url.indexOf("timestamp=") == -1 ) {
			if (url.indexOf("?") == -1) {
				url = url + "?timestamp="+ new Date().getTime();
			}else{
				url = url + "&timestamp="+ new Date().getTime();
			}
		}
		$.ajax({
			type : "POST",
			url : url,
			data : jsondata,
			async : true,
			contentType : "application/json; charset=utf-8",
			success : successfunc,
			error : errorfunc
		});
	}
	hzyCommon.ajaxAsyncPost = ajaxAsyncPost;
//ajax get方式 异步
	function ajaxAsyncGet(url, successfunc, errorfunc){
		if( url.indexOf("timestamp=") == -1 ) {
			if (url.indexOf("?") == -1) {
				url = url + "?timestamp="+ new Date().getTime();
			}else{
				url = url + "&timestamp="+ new Date().getTime();
			}
		}
		$.ajax({
			type : "GET",
			url : url,
			async : true,
			contentType : "application/json; charset=utf-8",
			success : successfunc,
			error : errorfunc
		});
	}
	hzyCommon.ajaxAsyncGet = ajaxAsyncGet;
//ajax get方式 同步
	function ajaxSyncGet(url, successfunc, errorfunc){
		if( url.indexOf("timestamp=") == -1 ) {
			if (url.indexOf("?") == -1) {
				url = url + "?timestamp="+ new Date().getTime();
			}else{
				url = url + "&timestamp="+ new Date().getTime();
			}
		}
		$.ajax({
			type : "GET",
			url : url,
			async : false,
			contentType : "application/json; charset=utf-8",
			success : successfunc,
			error : errorfunc
		});
	}
	hzyCommon.ajaxSyncGet = ajaxSyncGet;
//set sessionstorage
	function setValueToSessionStorage(key, value){
		if(!window.sessionStorage){
			if (isDebug()) console.log("Browser does not supprot sessionStorage! key:" + key);
			return;
		}
		window.sessionStorage.setItem(key,value);
	}
	hzyCommon.setValueToSessionStorage = setValueToSessionStorage;
//get sessionstorage
	function getValueFromSessionStorage(key, defaultValue){
		var value;
		if(!window.sessionStorage){
			if (isDebug()) console.log("Browser does not supprot sessionStorage! key:" + key);
			return defaultValue;
		}
		value = window.sessionStorage.getItem(key);
		if(!value){
			value = defaultValue;
		}
		return value;
	}
	hzyCommon.getValueFromSessionStorage = getValueFromSessionStorage;
//remove sessionstorage
	function removeSessionStorage(key){
		if(!window.sessionStorage){
			if (isDebug()) console.log("Browser does not supprot sessionStorage! key:" + key);
			return;
		}
		window.sessionStorage.removeItem(key);
	}
	hzyCommon.removeSessionStorage = removeSessionStorage;
//set localstorage
	function setValueToLocalStorage(key, value){
		if(!window.localStorage){
			if (isDebug()) console.log("Browser does not supprot localStorage! key:" + key);
			return;
		}
		window.localStorage.setItem(key,value);
	}
	hzyCommon.setValueToLocalStorage = setValueToLocalStorage;
//get localstorage
	function getValueFromLocalStorage(key, defaultValue){
		var value;
		if(!window.localStorage){
			if (isDebug()) console.log("Browser does not support localStorage! key:" + key);
			return defaultValue;
		}
		value = window.localStorage.getItem(key);
		if(!value){
			value = defaultValue;
		}
		return value;
	}
	hzyCommon.getValueFromLocalStorage = getValueFromLocalStorage;
//remove localstorage
	function removeLocalStorage(key){
		if(!window.localStorage){
			if (isDebug()) console.log("Browser does not supprot localStorage! key:" + key);
			return;
		}
		window.localStorage.removeItem(key);
	}
	hzyCommon.removeLocalStorage = removeLocalStorage;
//判断object是否为空
	function isEmptyObject( obj ) {
		if(!obj){
			return true;
		}
		for ( var name in obj ) {
			return false;
		}
		return true;
	}
	hzyCommon.isEmptyObject = isEmptyObject;
//判断object是否为数组
	function isArray(obj){
		return (typeof obj=='object')&&obj.constructor==Array;
	}
	hzyCommon.isArray = isArray;
//判断object是否为空
	function isEmptyObjectOrArray(obj){
		if( isArray(obj)){
			return obj.length == 0;
		}else{
			return isEmptyObject(obj);
		}
	}
	hzyCommon.isEmptyObjectOrArray = isEmptyObjectOrArray;

	return hzyCommon;
});


