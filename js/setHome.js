//加入收藏
function AddFavorite(sURL,sTitle){
	sURL = encodeURI(sURL);//该方法的目的是对 URI 进行完整的编码 比如空格符变%20
	try{
		window.external.addFavorite(sURL,sTitle);//针对IE浏览器，.external是引用浏览器外部方法
	}
	catch(e){
		try{
			window.sidebar.addPanel(sTitle,sURL,"");//针对火狐
		}
		catch(e){
			alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
		}
	}
}

//设为首页
function setHome(url){
	if(document.all){
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	}
	else{
		alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
	}
}