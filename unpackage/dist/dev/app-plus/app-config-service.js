
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/order-processing/order-prssing","pages/login/login","pages/set-up/set-up","pages/set-up/set-up-account","pages/set-up/set-up-about","pages/set-up/set-up-access","pages/login/capLogin","pages/login/login-reste-pwd","pages/set-up/set-up-info","pages/order-processing/details","pages/order-history/order-history","pages/set-up/set-up","pages/map/map"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"校园骑手","navigationBarBackgroundColor":"#0099FF","backgroundColor":"#F8F8F8"},"tabBar":{"spacing":"4px","iconWidth":"30px","fontSize":"14px","height":"50upx","selectedColor":"#333333","list":[{"pagePath":"pages/order-processing/order-prssing","text":"订单处理","iconPath":"static/order-processing.png","selectedIconPath":"static/order-processing-hover.png"},{"pagePath":"pages/order-history/order-history","text":"历史订单","iconPath":"static/order-history.png","selectedIconPath":"static/order-history-hover.png"},{"pagePath":"pages/set-up/set-up","text":"设置","iconPath":"static/set-up.png","selectedIconPath":"static/set-up-hover.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"school_shop","compilerVersion":"2.6.16","entryPagePath":"pages/order-processing/order-prssing","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/order-processing/order-prssing","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/set-up/set-up","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/set-up/set-up-account","meta":{},"window":{"navigationBarTitleText":"我的账户"}},{"path":"/pages/set-up/set-up-about","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/set-up/set-up-access","meta":{},"window":{"navigationBarTitleText":"权限设置"}},{"path":"/pages/login/capLogin","meta":{},"window":{"navigationBarTitleText":"验证登录"}},{"path":"/pages/login/login-reste-pwd","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/set-up/set-up-info","meta":{},"window":{"navigationBarTitleText":"账户信息"}},{"path":"/pages/order-processing/details","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/order-history/order-history","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/map/map","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
