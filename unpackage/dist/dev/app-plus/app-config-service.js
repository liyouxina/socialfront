
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Signout/welcome/welcome","pages/Signin/oldid/index/index","pages/Signin/oldid/find/find","pages/Signin/oldid/chats/chats","pages/Signin/oldid/me/me","pages/Signout/login/login","pages/Signout/phoneLogin/phoneLogin","pages/Signout/pwdLogin/pwdLogin","pages/Signout/pwdLogin/registry/registry","pages/Signout/pwdLogin/forgetpwd/forgetpwd","pages/Signout/pwdLogin/forgetpwd/setpwd/setpwd","pages/Signin/newid/chooseSex/chooseSex","pages/Signin/newid/information/information","pages/Signin/newid/faceAi/faceAi","pages/Signin/newid/faceAi/face_error/face_error","pages/Signin/newid/wechat/wechat","pages/Signin/oldid/me/me","pages/Signin/oldid/index/release/release","pages/Signin/oldid/index/release/choose_tag/choose_tag","pages/Signin/oldid/chats/chatdetail/chatdetail","pages/Signin/oldid/me/dynamic/dynamic","pages/Signin/oldid/me/recharge/recharge","pages/Signin/oldid/me/recharge/recharge_record/recharge_record","pages/Signin/oldid/me/vip/vip","pages/Signin/oldid/me/vip/vip_record/vip_record","pages/Signin/oldid/me/invite/invite"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#eeeeee","backgroundColor":"rgb(33, 35, 48)","selectedColor":"rgb(235,100,70)","list":[{"iconPath":"/static/tabBar/yaoyue_off.png","text":"邀约","pagePath":"pages/Signin/oldid/index/index","selectedIconPath":"/static/tabBar/yaoyue_on.png"},{"iconPath":"/static/tabBar/faxian_off.png","text":"发现","pagePath":"pages/Signin/oldid/find/find","selectedIconPath":"/static/tabBar/faxian_on.png"},{"iconPath":"/static/tabBar/xiaoxi_off.png","text":"消息","pagePath":"pages/Signin/oldid/chats/chats","selectedIconPath":"/static/tabBar/xiaoxi_on.png"},{"iconPath":"/static/tabBar/wode_off.png","text":"我的","pagePath":"pages/Signin/oldid/me/me","selectedIconPath":"/static/tabBar/wode_on.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yuhangshopliaotian1","compilerVersion":"3.4.18","entryPagePath":"pages/Signin/newid/information/information","entryPageQuery":"","realEntryPagePath":"pages/Signout/welcome/welcome","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Signout/welcome/welcome","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/Signin/oldid/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/Signin/oldid/find/find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/Signin/oldid/chats/chats","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/Signin/oldid/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Signout/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signout/phoneLogin/phoneLogin","meta":{},"window":{"titleNView":{"backgroundColor":"#212330","titleColor":"#ffffff","titleText":"","buttons":[{"fontSize":"15rpx","float":"right","text":"密码登录","color":"#eb5044"}]}}},{"path":"/pages/Signout/pwdLogin/pwdLogin","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signout/pwdLogin/registry/registry","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signout/pwdLogin/forgetpwd/forgetpwd","meta":{},"window":{"navigationBarTitleText":"找回密码","enablePullDownRefresh":false,"titleNView":{"autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signout/pwdLogin/forgetpwd/setpwd/setpwd","meta":{},"window":{"navigationBarTitleText":"设置密码","enablePullDownRefresh":false}},{"path":"/pages/Signin/newid/chooseSex/chooseSex","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/Signin/newid/information/information","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/Signin/newid/faceAi/faceAi","meta":{},"window":{"navigationBarTitleText":"人脸识别","enablePullDownRefresh":false}},{"path":"/pages/Signin/newid/faceAi/face_error/face_error","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Signin/newid/wechat/wechat","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Signin/oldid/index/release/release","meta":{},"window":{"titleNView":{"autoBackButton":false,"backgroundColor":"#212330","titleColor":"#cfcfcf","titleText":"发布动态","buttons":[{"text":"","fontSrc":"/static/icomoon.ttf"}]}}},{"path":"/pages/Signin/oldid/index/release/choose_tag/choose_tag","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"backgroundColor":"#212330","autoBackButton":true,"titleText":"选择标签","titleColor":"#cfcfcf","buttons":[{"text":"完成","color":"#939393","fontSize":"30upx"}]}}},{"path":"/pages/Signin/oldid/chats/chatdetail/chatdetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signin/oldid/me/dynamic/dynamic","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"我的动态","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signin/oldid/me/recharge/recharge","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"我的钱包","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff","buttons":[{"text":"","fontSrc":"/static/icomoon.ttf","fontSize":"40upx"}]}}},{"path":"/pages/Signin/oldid/me/recharge/recharge_record/recharge_record","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"充值记录","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signin/oldid/me/vip/vip","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"会员","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff","buttons":[{"text":"","fontSrc":"/static/icomoon.ttf","fontSize":"40upx"}]}}},{"path":"/pages/Signin/oldid/me/vip/vip_record/vip_record","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"购买记录","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff"}}},{"path":"/pages/Signin/oldid/me/invite/invite","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"titleText":"邀请好友","autoBackButton":true,"backgroundColor":"#212330","titleColor":"#ffffff","buttons":[{"text":"邀请码","color":"#eb5044","fontSize":"15"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
