function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
function _toConsumableArray(e){
if(Array.isArray(e)){
for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];
return o;
}
return Array.from(e);
}
define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_wap/utils/device.js","appmsg/weapp_common.js","common/utils.js","biz_wap/utils/mmversion.js","biz_common/base64.js","appmsg/popup_report.js","biz_wap/utils/jsmonitor_report.js","common/tap_highlight.js"],function(e){
"use strict";
function t(e,t,o){
var n=new Image;
n.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+o+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024);
}
function o(e,t,o,n,i,a,r){
h({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:n||0,
weapp_nickname:o||0,
type:i||0,
scene:window.source||-1,
weapp_type:a,
is_confirm:r||0,
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function n(e){
var t=e.innerHTML,o=/<img.*src=[\'\"]/,n=/background-image:(\s*)url\(/,i=/background:[^;"']+url\(/;
return o.test(t)||n.test(t)||i.test(t)?!0:!1;
}
function i(){
return!0;
}
function a(){
var e=c("js_content");
if(!e)return!1;
z=e.getElementsByTagName("mp-weapp")||[],A=e.getElementsByTagName("mp-miniprogram")||[],
B=[];
for(var t=e.getElementsByTagName("a"),o=0,n=t.length;n>o;o++){
var i=t[o],a=i.getAttribute("data-miniprogram-appid");
a&&B.push(i);
}
return z.length<=0&&A.length<=0&&0==B.length?!1:K&&0!=K.length?!0:(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1),
!1);
}
function r(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function p(e,t,n,i,a){
o(e,t,n,i,4,a),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103);
}
function s(e,t,n,i,a){
o(e,t,n,i,5,a);
}
function d(){
function e(e){
e.preventDefault();
}
function a(e){
e&&(m=setTimeout(function(){
e.style.display="none",c=-1;
},100));
}
window.reportWeappid=[];
for(var d=0;d<K.length;d++)window.reportWeappid.push(K[d].appid);
var l=function(){};
y.on(document.getElementById("js_minipro_dialog_ok"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var o=document.getElementById("js_minipro_dialog"),n=document.querySelector("#js_article");
n&&n.removeAttribute("aria-hidden"),o.style.display="none",l&&l(),C.report([4,1,"",window.img_popup?1:0,window.source,o._appid],!0);
}),y.on(document.getElementById("js_minipro_dialog_cancel"),"click",function(t){
t.stopPropagation(),t.preventDefault(),document.querySelector("body").removeEventListener("touchmove",e);
var n=document.getElementById("js_minipro_dialog"),i=document.querySelector("#js_article");
i&&i.removeAttribute("aria-hidden"),n.style.display="none",o(n._appid,n._i,n._nickname,n._title,3,1,1),
window.__addIdKeyReport&&window.__addIdKeyReport("28307",116),C.report([3,1,"",window.img_popup?1:0,window.source,n._appid],!0);
});
var m,c,h=j.os.pc,z=document.getElementById("js_pc_weapp_code"),A=document.getElementById("js_pc_weapp_code_img"),B=document.getElementById("js_pc_weapp_code_des");
h&&(y.on(z,"mouseenter",function(){
clearTimeout(m);
}),y.on(z,"mouseleave",function(){
a(z);
})),k.getAppidInfo({
onSuccess:function(j){
console.log("WeappCommon.getAppidInfo onsuccess");
var T=j.data.infoMap;
if(!T)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
for(d=0;d<x.length;d++)(function(d){
window.__addIdKeyReport("111535",1);
var I=x[d].appid,K=x[d].path,N=x[d].imageUrl,S=x[d].title,q=x[d].elem,W=T[I];
if(!W)return void(window.__addIdKeyReport&&window.__addIdKeyReport("27613","52",1));
var P=q.tagName.toLowerCase(),L=q.firstChild&&1==q.firstChild.nodeType&&"IMG"===q.firstChild.tagName;
if(L=L||q.firstElementChild&&"IMG"===q.firstElementChild.tagName,"a"!=P)q.innerHTML=v.tmpl(g,{
imageUrl:r(N),
title:r(S),
nickname:r(W.nickname),
avatar:r(W.logo_url)
},!1);else{
if(L){
var U=q.firstChild;
U&&b.addClass(q,"weapp_image_link");
}else b.addClass(q,"weapp_text_link");
q.setAttribute("href","");
}
if(j.resp&&j.resp.weapp_info&&j.resp.weapp_info.length)for(var J=0;J<j.resp.weapp_info.length;J++){
var M=q.getElementsByClassName("js_guarantee")[0],D=q.getElementsByClassName("js_relived_buy")[0];
if(j.resp.weapp_info[J].weapp_appid===I&&1===j.resp.weapp_info[J].has_guarantee_flag){
M&&b.addClass(M,"show");
break;
}
if(j.resp.weapp_info[J].weapp_appid===I&&1===j.resp.weapp_info[J].relieved_buy_flag){
D&&b.addClass(D,"show");
break;
}
}
y.on(q,"click",function(a){
"a"!==q.tagName.toLowerCase()&&q.firstChild?R.highlightEle(q.firstChild):L||(b.addClass(q,"wx_tap_link"),
R.highlightEle(q)),l=function(){
var e=L?1:"a"==P?2:0,n=+(window.__weapp_scene__||1058),i="",a=0;
switch(e){
case 0:
i=S;
break;

case 1:
i=encodeURIComponent(q.querySelector("img").dataset.src);
break;

case 2:
i=q.innerHTML;
}
return k.jumpUrl({
sceneNote:[encodeURIComponent(location.href),cgiData.user_name||user_name,cgiData.msg_title||msg_title].concat(_toConsumableArray(1058===n?[e,i,K,a]:[])).join(":"),
appid:I,
path:K,
scene:window.__weapp_scene__||1058,
beforeNonWechatWarn:function(){
s(I,d,W.nickname,S,e);
},
beforeJumpBackupPage:function(){
p(I,d,W.nickname,S,e);
},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",102),
t(107,new Error(e.err_msg),"");
}
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),o(I,d,W.nickname,S,3,e,L?2:0),
L&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",115),!1;
},L&&C.report([2,1,"",window.img_popup?1:0,window.source,I]),E.setSum(299174,0,1);
var r=a.composedPath&&a.composedPath()||a.path||[],m=!1;
if(r)for(var c=0;c<r.length&&("DIV"!==r[c].tagName||"js_content"!==r[c].id);c++){
var u=r[c].style.opacity;
if(u&&Number(u)<.5){
m=!0,E.setSum(299174,2,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("webapp popup in appmsg","url:"+location.href,{
mid:"mmbizwap:Appmsg_weapp",
view:"wap_business"
});
break;
}
}
if(m||(L||b.hasClass(q,"weapp_text_link")&&(n(q)||i(q)))&&window.img_popup){
var _=function(){
var t=document.getElementById("js_minipro_dialog_head"),n=document.getElementById("js_minipro_dialog_body");
t.innerText="即将打开小程序",n.innerText=W.nickname;
var i=document.getElementById("js_minipro_dialog"),a=document.querySelector("#js_article");
return i.style.display="block",setTimeout(function(){
t&&t.focus();
},100),a&&a.setAttribute("aria-hidden","true"),document.querySelector("body").addEventListener("touchmove",e,{
passive:!1
}),i._appid=I,i._i=d,i._nickname=W.nickname,i._title=S,o(I,d,W.nickname,S,3,1,0),
k.canJumpOnTap&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",114),{
v:!1
};
}();
if("object"===("undefined"==typeof _?"undefined":_typeof(_)))return _.v;
}
return l();
},"a"==P),y.on(q,"click",function(e){
e.preventDefault(),e.stopPropagation();
},"a"==P),h&&(y.on(q,"mouseenter",function(){
function e(e){
function t(){
if(!m&&c===d){
z.style.display="block",m=!0;
var e=z.offsetHeight,t=z.offsetWidth;
"a"!=P||L?o>t?(f(z,"right-center"),z.style.left=o-t-l+"px",z.style.top=n+"px"):(f(z),
z.style.top=n+s-e-l+"px",z.style.left=o+p-t-l+"px"):(z.style.left=i>o+p/2-t/2?i+"px":o+p/2+t/2>i+a?i+a-t+"px":o+p/2-t/2+"px",
r>e?(f(z,"down-center"),z.style.top=n-e-l+"px"):(f(z,"up-center"),z.style.top=n+s-l+"px"));
}
}
if(e){
var o=u(q),n=_(L?q.firstElementChild:q),i=u(q.parentNode),a=q.parentNode.offsetWidth,r=q.getBoundingClientRect().top,p=L?q.firstElementChild.offsetWidth:q.offsetWidth,s=L?q.firstElementChild.offsetHeight:q.offsetHeight,l=8,m=!1;
B.innerText=w(W.nickname,48),A.onload=t,A.src=e,(A.complete||A.width)&&t();
}
}
clearTimeout(m),c!==d&&(z.style.display="none",c=d,k.getAppidCode({
appid:I,
path:K
},e));
}),y.on(q,"mouseleave",function(){
a(z);
}));
})(d);
var K=null,S=function(){
K=null;
for(var e=0;e<N.length;e++){
var t=N[e].elem,n=t.tagName.toLowerCase(),i=t.firstChild&&1==t.firstChild.nodeType,a=i?1:"a"==n?2:0,r=N[e].elem.getBoundingClientRect();
if(r.top<I.getInnerHeight()&&r.bottom>0){
setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0);
var p=N[e].appid;
p&&T[p]&&T[p].nickname&&o(p,e,T[p].nickname,N[e].title,2,a),N.splice(e--,1);
}
}
};
S(),y.on(window,"scroll",function(){
K||(K=setTimeout(S,100));
});
},
onError:function(e){
3==e.code&&t(106,e.catchErr,"parsing weapp info error");
}
});
}
function l(){
for(var e=0,t=0;t<A.length+z.length;t++){
var o=t<A.length,n=o?A[t]:z[t-A.length],i=n.getAttribute(o?"data-miniprogram-appid":"data-weapp-appid")||"",a=n.getAttribute(o?"data-miniprogram-path":"data-weapp-path")||"",r=n.getAttribute(o?"data-miniprogram-imageUrl":"data-weapp-imageUrl")||"",p=n.getAttribute(o?"data-miniprogram-title":"data-weapp-title")||"",s=document.createElement("span");
n.setAttribute("class",""),s.setAttribute("class","weapp_display_element js_weapp_display_element"),
s.setAttribute("role","link"),x.push({
appid:i,
path:a,
imageUrl:r,
title:p,
elem:s
}),N.push({
appid:i,
elem:s,
title:p
}),n.parentNode.insertBefore(s,n.nextSibling),m(r)||e++;
}
for(var t=0;t<B.length;t++){
var d=B[t];
x.push({
appid:d.getAttribute("data-miniprogram-appid"),
path:d.getAttribute("data-miniprogram-path")||"",
elem:d
});
}
e>0&&E.setSum(64469,33,e);
}
function m(e){
for(var t,o=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i],n=0;t=o[n++];)if(t.test(e))return!0;
return!1;
}
function c(e){
return document.getElementById(e);
}
function u(e){
for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;
return t;
}
function _(e){
for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;
return t;
}
function f(e,t){
for(var o=0;3>o;o++)b.removeClass(e,"weui-desktop-popover_pos-up-"+S[o]),b.removeClass(e,"weui-desktop-popover_pos-down-"+S[o]),
b.removeClass(e,"weui-desktop-popover_pos-left-"+q[o]),b.removeClass(e,"weui-desktop-popover_pos-right-"+q[o]);
b.removeClass(e,"weui-desktop-popover_hide-arrow"),t?b.addClass(e,"weui-desktop-popover_pos-"+t):b.addClass(e,"weui-desktop-popover_hide-arrow");
}
function w(e,t){
var o=/[^\x00-\xff]/g;
if(e.replace(o,"**").length>t)for(var n=Math.floor(t/2),i=n,a=e.length;a>i;i++)if(e.substring(0,i).replace(o,"**").length>=t)return e.substring(0,i)+"...";
return e;
}
e("biz_common/utils/string/html.js");
var g=e("pages/weapp_tpl.html.js"),h=e("biz_wap/utils/ajax.js"),y=e("biz_common/dom/event.js"),v=e("biz_common/tmpl.js"),b=e("biz_common/dom/class.js"),j=e("biz_wap/utils/device.js"),k=e("appmsg/weapp_common.js"),I=e("common/utils.js"),C=(e("biz_wap/utils/mmversion.js"),
e("biz_common/base64.js"),e("appmsg/popup_report.js")),E=e("biz_wap/utils/jsmonitor_report.js"),R=e("common/tap_highlight.js"),z=null,A=null,B=null,T={},x=[],K=k.appidSnInfo,N=[];
if(a()){
l(),d();
var S=["left","center","right"],q=["top","center","bottom"];
return T;
}
});define("appmsg/weproduct.js",["appmsg/weapp_common.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/jsmonitor_report.js","common/utils.js","common/tap_highlight.js"],function(t){
"use strict";
function e(){
if(console.log("weproduct init"),"function"==typeof document.getElementsByClassName){
var t=document.getElementsByClassName("js_product_container");
t&&t.length>0&&(a(t),d.getAppidInfo({
onSuccess:function(e){
h.data=e.data,o(t);
}
})),r();
}
}
function a(t){
try{
for(var e=0,a=t.length;a>e;e++){
var o=t[e];
if(o.className.indexOf("js_list_container")>=0){
var i=o.querySelector("img.js_cover");
if(i){
var r=i.parentNode.getBoundingClientRect();
i.style.setProperty("width",r.width+"px","important"),i.style.setProperty("height",r.height+"px","important"),
i.style.setProperty("background-size","unset","important"),"0"==i.getAttribute("data-fail")?n.call(i):i.getAttribute("data-fail")||(i.lazyLoadOnload=i.lazyLoadOnload||[],
i.lazyLoadOnload.push(n));
}
}
}
}catch(p){}
}
function n(){
var t=this.parentNode;
if(t){
var e=document.createElement("span");
e.className=this.className,e.style.background='url("'+this.src+'") no-repeat center',
t.insertBefore(e,this),t.removeChild(this);
}
}
function o(t){
for(var e=0,a=t.length;a>e;e++)!function(t,e){
s.on(t,"tap",".js_product_loop_content",function(t){
var a=t.delegatedTarget,n=a.getAttribute("data-wxaappid"),o=a.getAttribute("data-wxapath"),i=a.getAttribute("data-pid"),r=a.getAttribute("data-appid"),s=a.querySelector(".cps_inner_info_title").innerHTML;
return a&&g.highlightEle(a),d.jumpUrl({
privateExtraData:{
cookies:"cps_package=123456; expires=1538286412; busid=mmbiz_ad_cps; domain=*"
},
sourceAppId:r,
appid:n,
path:o,
scene:1091,
sceneNote:[encodeURIComponent(location.href),user_name,msg_title,encodeURIComponent(i),s,o].join(":"),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(t){
if("openWeApp:ok"===t.err_msg&&i){
var o=a.getAttribute("data-pidtype"),r=2;
2==o&&(r=4),p([{
wxa_appid:n,
pid:i,
type:r,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
}]);
}
}
}),!1;
});
}(t[e],e);
var n=document.getElementsByClassName("js_product_loop_content");
if(n&&n.length>0&&m.getInnerHeight()){
for(var e=0;e<n.length;e++)h.pvele.push(n[e]);
i(),s.on(window,"scroll",i);
}
}
function i(){
h.checkInScreenId&&clearTimeout(h.checkInScreenId),h.checkInScreenId=setTimeout(function(){
h.checkInScreenId=null;
for(var t=[],e=0;e<h.pvele.length;e++){
var a=h.pvele[e],n=a.getBoundingClientRect(),o=n.height||n.bottom-n.top;
if(o>0&&n.top<m.getInnerHeight()&&n.bottom>0){
var r=a.getAttribute("data-pid");
if(r){
var d=a.getAttribute("data-pidtype"),c=1;
2==d&&(c=3),t.push({
wxa_appid:a.getAttribute("data-wxaappid"),
pid:r,
type:c,
absolute_order:e+1,
appid:a.getAttribute("data-appid")||"",
templateid:a.getAttribute("data-templateid")||"",
relative_order:1*a.getAttribute("data-order"),
packid:a.getAttribute("data-packid")||""
});
}
h.pvele.splice(e--,1);
}
}
p(t),0==h.pvele.length&&(s.off(window,"scroll",i),i=null);
},100);
}
function r(){
setTimeout(function(){
var t=document.getElementsByClassName("js_product_loop_content").length,e=document.getElementsByClassName("js_product_err_container").length;
u.setSum("64469","15",t+e),u.setSum("64469","16",t),u.setSum("64469","18",e);
},0);
}
function p(t){
if(t&&0!=t.length){
for(var e={
batch_no:l.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:t.length
},a=0;a<t.length;a++){
var n=t[a],o=a+1;
for(var i in n)n.hasOwnProperty(i)&&(e[i+""+o]=n[i]);
}
c({
url:"/mp/productreport?",
type:"POST",
data:e,
dataType:"json",
async:!0
});
}
}
var d=t("appmsg/weapp_common.js"),s=t("biz_common/dom/event.js"),c=t("biz_wap/utils/ajax.js"),l=t("biz_common/utils/url/parse.js"),u=t("biz_wap/utils/jsmonitor_report.js"),m=t("common/utils.js"),g=t("common/tap_highlight.js"),h={
pvele:[],
checkInScreenId:null,
reportRandom:Math.random()
};
e();
});define("appmsg/voicemsg.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js","pages/voice_component.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),t=e("biz_wap/utils/ajax.js"),o=e("pages/voice_component.js"),n=document.getElementById("js_read_container"),a={
player:null,
srcId:"__wxtag__"+window.biz+"-"+window.mid+"-"+window.idx,
mediaId:"",
tag:"===mediaId-sep===",
playDuration:0,
playTime:0,
maxNum:5,
curNum:0,
format:"",
type:6,
speed:100,
voiceInfo:{
title:"",
nickname:"",
appmsgUrl:"",
duration:0
},
voiceOpt:null,
lock:!1,
status:"stop",
currentTime:0,
beginTime:0,
leaveNeedReport:!1,
pause2PlayNeedReport:!1,
isSeek:!1,
loadingTimer:null
},s=function(e){
return e+"&uin="+window.uin+"&key="+window.key+"&pass_ticket="+encodeURIComponent(window.pass_ticket);
},d=function(e){
return e||null===a.loadingTimer?void i.invoke("handleMPPageAction",{
action:"showToast",
status:e?"loading":"dismissloading"
}):(clearTimeout(a.loadingTimer),void(a.loadingTimer=null));
},r=function c(){
if(a.curNum>10)return d(!1),a.lock=!1,void weui.alert("系统繁忙，请稍后再试");
a.curNum++;
var e=a.curNum>a.maxNum?5e3:1e3;
t({
url:"/mp/msgvoice?action=getvoiceinfo&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+a.type+"&speed="+a.speed,
type:"GET",
dataType:"json",
async:!0,
success:function(i){
if(i&&i.base_resp&&0===i.base_resp.ret)if(i.mediaid){
a.mediaId=i.mediaid;
var t=encodeURIComponent("__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx),o=a.voiceInfo;
a.voiceOpt={
protocol:2===i.format?"hls":"",
src:s("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&mediaid="+i.mediaid+"&devicetype="+window.devicetype+"&_type="+a.type+"&speed="+a.speed+"&encodeurl="+t),
lowbandUrl:s("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&mediaid="+i.mediaid+"&devicetype="+window.devicetype+"&_type="+a.type+"&speed="+a.speed+"&encodeurl="+t),
title:o.title,
epname:"来自文章",
singer:o.nickname?"的语音":"公众号语音",
srcId:a.srcId+a.tag+a.mediaId,
coverImgUrl:"",
webUrl:o.appmsgUrl,
musicbar_url:"https://mp.weixin.qq.com/mp/msgvoice?action=ttspage&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+a.type+"#wechat_redirect",
needStartMusicUI:0
},m();
}else setTimeout(c,1e3);else console.log("getvoiceinfo err",i),setTimeout(c,e);
},
error:function(i){
console.log("getvoiceinfo err",i),setTimeout(c,e);
}
});
},m=function(){
a.player=o.init({
protocal:"hls",
wxIndex:a.voiceOpt.srcId,
type:7,
comment_id:"",
src:a.voiceOpt.src,
jsapi2Src:a.voiceOpt.src+"&voice_type=1",
allowPause:!0,
duration:a.voiceInfo.duration,
title:a.voiceOpt.title,
singer:a.voiceOpt.singer,
epname:a.voiceOpt.epname,
coverImgUrl:a.voiceOpt.coverImgUrl,
playingCss:"share_audio_playing",
playCssDom:n.getElementsByClassName("js_read_main")[0],
playArea:n.getElementsByClassName("js_read_play")[0],
progress:n.getElementsByClassName("js_read_progress")[0],
fileSize:0,
playtimeDom:n.getElementsByClassName("js_read_playtime")[0],
bufferDom:n.getElementsByClassName("js_read_buffer")[0],
playdotDom:n.getElementsByClassName("js_read_playdot")[0],
seekRange:n.getElementsByClassName("js_read_seekRange")[0],
seekContainer:n.getElementsByClassName("js_read_main")[0],
loadingDom:n.getElementsByClassName("js_read_loading")[0],
detailArea:"",
detailUrl:a.voiceOpt.musicbar_url,
webUrl:a.voiceOpt.musicbar_url
});
};
t({
url:"/mp/msgvoice?action=ttspage&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&type="+a.type+"&f=json",
type:"GET",
dataType:"json",
async:!0,
success:function(e){
e&&e.base_resp&&0===e.base_resp.ret?(a.voiceInfo={
title:e.title,
nickname:e.nickname,
appmsgUrl:e.appmsg_url,
duration:1*e.voice_info.duration
},r(),n.getElementsByClassName("js_read_duration")[0].innerHTML=function(e){
var i=function(e){
return e>=10?e:"0"+e;
};
return i(Math.floor(e/60))+":"+i(e%60);
}(1*e.voice_info.duration)):weui.alert("系统繁忙，请稍后再试");
},
error:function(e){
console.log("ttspage err: ",e),weui.alert("网络不可用，请检查网络设置");
}
});
});define("appmsg/autoread.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","pages/voice_tpl.html.js","pages/voice_component.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(){
var e=d("autoread");
e&&(e.innerHTML='<p><label>朗读类型：</label>                                <select id="autoreadSelect">                                <option selected="true" value="0">女1</option>                                <option value="1">女2</option>                                <option value="2">男1</option>                                <option value="6">男2</option>                                </select></p><p id="autoread_voice"></p>',
r.on(d("autoreadSelect"),"change",function(){
p.player&&(p.player.destory(),p.player=null),p.checkAudioId&&(clearTimeout(p.checkAudioId),
p.checkAudioId=null);
var e=d("autoreadSelect");
d("autoread_voice").innerHTML="",o(e.value);
}),o(0));
}
function o(e){
var i=d("autoread_voice");
p._oMusic={
voiceid:p.voiceid,
duration_str:"",
posIndex:p.posIndex,
title:"文章朗读体验（"+p.voiceType[e||0]+"）",
nickname:window.nickname||"公众号"
},s.renderPlayer(u,p._oMusic,i,!0),d("voice_author_"+p.key).innerHTML="来自"+p._oMusic.nickname+"（创建音频中）",
c(e);
}
function n(e,i){
var o=p._oMusic;
d("voice_author_"+p.key).innerHTML="来自"+o.nickname,d("voice_duration_"+p.key).innerHTML=s.formatTime(1*i),
p.player=s.init({
protocal:"hls",
wxIndex:o.posIndex,
type:2,
songId:e,
src:a("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&media="+e),
allowPause:!0,
autoPlay:!0,
duration:i,
title:o.title,
singer:o.nickname?o.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:d("voice_main_"+p.key),
playArea:d("voice_play_"+p.key),
progress:d("voice_progress_"+p.key),
fileSize:o.fileSize,
playtimeDom:d("voice_playtime_"+p.key),
bufferDom:d("voice_buffer_"+p.key),
playdotDom:d("voice_playdot_"+p.key),
seekRange:d("voice_seekRange_"+p.key),
seekContainer:d("voice_main_"+p.key),
loadingDom:d("voice_loading_"+p.key)
});
}
function t(e){
p.curNum+=1;
var i=1e3;
p.curNum>p.maxNum&&(i=2e3);
var o=["/mp/msgvoice?action=get_media&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:o,
type:"GET",
dataType:"json",
async:!0,
success:function(o){
o.mediaid&&o.duration?n(o.mediaid,o.duration):p.checkAudioId=setTimeout(function(){
t(e);
},i);
},
error:function(){
p.checkAudioId=setTimeout(function(){
t(e);
},i);
}
});
}
function a(e){
return e+=["&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&uin=",window.uin||"","&key=",window.key||"","&pass_ticket=",window.pass_ticket||"","&clientversion=",window.clientversion||"","&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join("");
}
function c(e){
p.curNum=0;
var i=["/mp/msgvoice?action=tts&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:i,
type:"GET",
dataType:"json",
async:!0,
success:function(i){
i&&i.base_resp&&0==i.base_resp.ret?t(e):d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
},
error:function(){
d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
}
});
}
function d(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/dom/event.js"),u=e("pages/voice_tpl.html.js"),s=e("pages/voice_component.js"),m=e("biz_wap/utils/ajax.js"),p={
checkId:"",
voiceid:"autoread",
posIndex:0,
key:"autoread_0",
voiceType:{
0:"女1",
1:"女2",
2:"男1",
6:"男2"
},
maxNum:5,
curNum:0
};
i();
});var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
};
define("appmsg/poi/poi.js",["biz_common/utils/string/html.js","appmsg/poi/poi_tpl.html.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","common/utils.js","pages/player_tips.js","biz_wap/utils/mmversion.js","common/comm_report.js","biz_wap/utils/jsmonitor_report.js","biz_common/base64.js","common/tap_highlight.js","biz_common/dom/class.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var e=t("appmsg/poi/poi_tpl.html.js"),o=t("biz_common/dom/event.js"),n=t("biz_wap/jsapi/core.js"),i=t("biz_common/tmpl.js"),a=t("common/utils.js"),r=t("pages/player_tips.js"),d=t("biz_wap/utils/mmversion.js"),s=t("common/comm_report.js"),m=t("biz_wap/utils/jsmonitor_report.js"),p=t("biz_common/base64.js"),c=t("common/tap_highlight.js"),u=t("biz_common/dom/class.js"),l={
tagName:"mppoi",
isWechat:(d.isAndroid||d.isIOS)&&d.isWechat&&!d.isWxwork,
screen_height:a.getInnerHeight(),
commonReportData:{
bizuin:1*p.decode(window.biz),
msgid:1*window.mid,
itemidx:1*window.idx,
sessionidnew:window.sessionid,
enterid:1*window.enterid
},
poiDom:[]
},g=function(){
return document.documentElement.scrollTop||document.body.scrollTop;
},h=function(t){
l.isWechat?n.invoke("openLocation",{
latitude:1*t.latitude,
longitude:1*t.longitude,
name:t.name,
address:t.address,
infoUrl:""
},function(t){
-1!==t.err_msg.indexOf("ok")?m.setSum(110809,53,1):m.setSum(110809,54,1);
}):new r({
msg:"请使用移动端微信打开。"
});
},b=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.dom,n=t.poiInfo;
o.on(e,"tap",function(t){
c.highlightEle(e),t.stopPropagation(),t.preventDefault(),s.report(19937,_extends({},l.commonReportData,{
type:2,
actiontype:2
})),m.setSum(110809,55,1),h(n);
},!0),o.on(e,"click",function(t){
t.preventDefault(),t.stopPropagation();
},!0);
},f=function(){
for(var t=0;t<l.poiDom.length;t++){
var e=l.poiDom[t];
if(1*e.getAttribute("data-hasreport")!==1){
e.setAttribute("data-hasreport",1);
var o=g();
e.clientHeight+e.offsetTop>=o+e.clientHeight/2&&e.clientHeight+e.offsetTop<=o+e.clientHeight/2+l.screen_height&&("A"===e.tagName?(s.report(19937,_extends({},l.commonReportData,{
type:1,
actiontype:1
})),m.setSum(110809,58,1)):(s.report(19937,_extends({},l.commonReportData,{
type:2,
actiontype:1
})),m.setSum(110809,56,1)));
}
}
};
o.on(window,"scroll",f);
var _=function(){
var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.node&&t.data&&t.data.img&&!function(){
var o=function(t){
var o=t.node,n=t.data;
return function(){
var t=document.createElement("div");
t.innerHTML=i.tmpl(e,{
data:n
},!0).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,"");
var a=t.firstChild;
o.parentNode.insertBefore(a,o.nextSibling);
var r=o.parentNode.querySelector('[data-preloadingid="'+n.id+'"]');
r&&r.parentNode.removeChild(r),b({
dom:a,
poiInfo:n
}),l.poiDom.push(a),f();
};
}(t),n=function(){
this.onload=null,this.onerror=null,o();
},a=new Image;
a.onload=n,a.onerror=n,a.src=t.data.img;
}();
},j=function(){
for(var t=document.querySelectorAll(l.tagName),e=0,n=t.length;n>e;e++){
var i=t[e],a={
id:decodeURIComponent(i.getAttribute("data-id")||""),
name:decodeURIComponent(i.getAttribute("data-name")||""),
address:decodeURIComponent(i.getAttribute("data-address")||""),
img:decodeURIComponent(i.getAttribute("data-img")||""),
longitude:decodeURIComponent(i.getAttribute("data-longitude")||""),
latitude:decodeURIComponent(i.getAttribute("data-latitude")||""),
type:decodeURIComponent(i.getAttribute("data-type")||"")
};
_({
data:a,
node:i
});
}
for(var r=document.getElementsByClassName("js_poi_entry"),d=0;d<r.length;d++)!function(t){
var e=r[t];
l.poiDom.push(e),o.on(e,"tap",function(t){
t.stopPropagation(),t.preventDefault(),u.addClass(e,"wx_tap_link"),c.highlightEle(e);
var o={
id:decodeURIComponent(e.getAttribute("data-id")||""),
name:decodeURIComponent(e.getAttribute("data-name")||""),
address:decodeURIComponent(e.getAttribute("data-address")||""),
img:decodeURIComponent(e.getAttribute("data-img")||""),
longitude:decodeURIComponent(e.getAttribute("data-longitude")||""),
latitude:decodeURIComponent(e.getAttribute("data-latitude")||""),
type:decodeURIComponent(e.getAttribute("data-type")||"")
};
return o.longitude&&o.latitude&&o.name&&o.address&&(s.report(19937,_extends({},l.commonReportData,{
type:1,
actiontype:2
})),m.setSum(110809,57,1),h(o)),!1;
},!0),o.on(e,"click",function(t){
t.preventDefault(),t.stopPropagation();
},!0);
}(d);
f();
};
j();
});var _extends=Object.assign||function(e){
for(var o=1;o<arguments.length;o++){
var t=arguments[o];
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);
}
return e;
};
define("appmsg/search/search.js",["biz_common/utils/string/html.js","appmsg/search/search_tpl.html.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","common/utils.js","pages/player_tips.js","biz_wap/utils/mmversion.js","common/comm_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
e("biz_common/utils/string/html.js");
var o=e("appmsg/search/search_tpl.html.js"),t=e("biz_common/dom/event.js"),n=e("biz_wap/jsapi/core.js"),r=e("biz_common/tmpl.js"),i=e("common/utils.js"),s=e("pages/player_tips.js"),a=e("biz_wap/utils/mmversion.js"),m=e("common/comm_report.js"),d=e("biz_wap/utils/jsmonitor_report.js"),c={
tagName:"mpsearch",
isWechat:(a.isAndroid||a.isIOS)&&a.isWechat&&!a.isWxwork,
keywords:[],
screen_height:i.getInnerHeight(),
exposeHasReport:0,
commonReportData:{
BizUin:window.biz,
MsgId:1*window.mid,
ItemIdx:1*window.idx,
SearchKeyWord:"",
SessionId:window.sessionid,
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene
}
},p=function(){
return document.documentElement.scrollTop||document.body.scrollTop;
},l=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
t.on(e.dom,"click",function(){
var e=c.keywords.map(function(e){
return e.label;
}).join(";");
if(m.report(19453,_extends({},c.commonReportData,{
SearchKeyWord:e,
EventType:2
})),d.setSum(110809,47,1),c.isWechat){
if(a.isIOS&&a.ltVersion("7.0.12")||a.isAndroid&&a.ltVersion("7.0.12"))return void new s({
msg:"当前微信版本不支持展示该内容，请升级至最新版本。"
});
for(var o=[],t=0;t<c.keywords.length;t++)o.push({
hotword:c.keywords[t].label,
id:t,
optype:1
});
n.invoke("openWXSearchPage",{
query:"",
thirdExtParam:JSON.stringify({
data:[{
items:o,
title:window.nickname+"推荐搜索",
type:4
}],
from:"mpWidget",
bizUserName:window.user_name,
bizNickName:window.nickname,
id:"mpWidget_"+c.commonReportData.BizUin+":"+c.commonReportData.MsgId+":"+c.commonReportData.ItemIdx
})
},function(e){
-1!==e.err_msg.indexOf("ok")?d.setSum(110809,48,1):d.setSum(110809,49,1);
});
}else new s({
msg:"请使用移动端微信打开。"
});
});
var o=function(){
if(!c.exposeHasReport){
c.exposeHasReport=1;
var o=p();
if(e.dom.clientHeight+e.dom.offsetTop>=o+e.dom.clientHeight/2&&e.dom.clientHeight+e.dom.offsetTop<=o+e.dom.clientHeight/2+c.screen_height){
var t=c.keywords.map(function(e){
return e.label;
}).join(";");
m.report(19453,_extends({},c.commonReportData,{
SearchKeyWord:t,
EventType:1
})),d.setSum(110809,46,1);
}
}
};
t.on(window,"scroll",o),o();
},u=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(e.node&&e.data&&e.data.keywords){
var t=function(e){
var t=e.node,n=e.data;
return function(){
var e=document.createElement("div");
e.innerHTML=r.tmpl(o,{
data:n
},!0).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,"");
var i=e.firstChild;
t.parentNode.insertBefore(i,t.nextSibling);
var s=t.parentNode.querySelector('[data-preloadingid="mpsearch"]');
s&&s.parentNode.removeChild(s),l({
dom:i,
keywords:n.keywords
});
};
}(e);
t();
}
},w=function(){
var e=document.querySelectorAll(c.tagName);
if(!(e.length<=0))for(var o=0,t=e.length;t>o;o++){
var n=e[o],r=[];
try{
r=JSON.parse(window.decodeURIComponent(n.getAttribute("data-keywords")));
}catch(i){
d.setSum(110809,50,1);
}
if(r.length){
var s={
nickname:window.nickname,
avatar:window.round_head_img,
keywords:r
};
c.keywords=r,u({
data:s,
node:n
});
}
}
};
w();
});define("redpackage/redpacketcover.js",["biz_common/utils/string/html.js","redpackage/tpl/card_tpl.html.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","common/utils.js","common/comm_report.js","pages/player_tips.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
e("biz_common/utils/string/html.js");
var t=e("redpackage/tpl/card_tpl.html.js"),a=e("biz_common/dom/event.js"),r=e("biz_wap/jsapi/core.js"),i=e("biz_common/tmpl.js"),o=e("common/utils.js"),n=e("common/comm_report.js"),d=e("pages/player_tips.js"),s=e("biz_common/utils/url/parse.js"),c=e("biz_wap/utils/mmversion.js"),u=e("biz_wap/utils/ajax.js"),p={
tagName:"redpacketcover",
isWechat:c.isWechat,
domMap:{},
dataMap:{},
startTime:window.page_begintime||0,
screen_height:o.getInnerHeight(),
screen_num:0,
pvData:[],
request_id:encodeURIComponent(window.biz+";"+window.mid+";"+window.idx+";"+window.page_begintime||0),
hasBindVisibility:!1,
hasBindScroll:!1,
needReportNum:0,
reportedNum:0
},m=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=window.pageYOffset||document.documentElement.scrollTop,a=(window.logs.read_height||t)+p.screen_height,r={
BizUin:window.biz,
MsgId:1*window.mid,
Idx:1*window.idx,
CoverUri:e.coverUri,
Scene:1*window.source,
Subscene:1*window.subscene,
CoverStatus:1*e.coverStatus,
EventType:1*e.eventType,
EventScreenNum:Math.ceil(a/p.screen_height)||1,
ScreenNum:p.screen_num,
StartTimeMs:p.startTime
};
n.report(19119,r);
},l=function(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=e+p.screen_height,r=0;r<p.pvData.length;r++){
var i=p.pvData[r];
t>=i.start&&t<=i.end&&(p.reportedNum++,p.dataMap&&p.dataMap[i.coverUri]&&(p.dataMap[i.coverUri].reported=!0),
m({
eventType:2,
coverUri:i.coverUri,
coverStatus:p.dataMap[i.coverUri].status
}),p.pvData.splice(r,1),r--);
}
p.reportedNum>=p.needReportNum&&(a.off(window,"scroll",l),p.pvData=[],l=null);
},v=function(){
p.pvData.length>0&&(!p.hasBindScroll&&l&&(p.hasBindScroll=!0,a.on(window,"scroll",l)),
l());
},_=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(p.isWechat){
p.scroll_height=document.body.scrollHeight||document.body.offsetHeight,p.screen_num=Math.ceil(p.scroll_height/p.screen_height);
var t=e.node;
if(p.dataMap[e.coveruri]&&1*p.dataMap[e.coveruri].status!==-1&&!p.dataMap[e.coveruri].reported){
var a=t.getBoundingClientRect();
p.pvData.push({
start:a.top+a.height/2,
end:a.top+a.height/2+p.screen_height,
coverUri:e.coveruri
});
}
v();
}
},g=null,h=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
p.dataMap[e.coveruri]&&a.on(e.dom,"click",function(){
window.is_temp_url?new d({
msg:"预览时不支持领取红包封面"
}):p.isWechat?!function(){
var t=e.dom.getAttribute("data-coveruri")||"",a=t&&p.dataMap[t]?p.dataMap[t].redirect_url:"";
a&&(m({
eventType:1,
coverUri:t,
coverStatus:p.dataMap[t].status
}),r.invoke("openUrlWithExtraWebview",{
url:a,
openType:1
},function(e){
-1===e.err_msg.indexOf("ok")&&(location.href=a);
}));
}():new d({
msg:"请在微信客户端打开"
});
}),!p.hasBindVisibility&&p.isWechat&&(p.hasBindVisibility=!0,o.listenStateChange({
cb:function(e){
("onResume"===e.state_change||"onResume"===e.state)&&u({
type:"GET",
dataType:"json",
url:"/mp/wapredpacketcover?action=get_red_packet_cover_data&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&send_time="+window.send_time,
timeout:1e4,
success:function(e){
if(e&&e.base_resp&&1*e.base_resp.ret===0&&e.red_packet_cover_data&&e.red_packet_cover_data.cover_uri_data&&e.red_packet_cover_data.cover_uri_data.length>0)for(var t=e.red_packet_cover_data.cover_uri_data,a=0,r=t.length;r>a;a++){
var i=t[a],o=p.domMap[i.cover_uri],n=p.dataMap[i.cover_uri];
if(n&&o){
var d=1*n.status,s=1*i.status;
-1!==s&&d!==s&&(n.status=s,g({
data:n,
node:o,
isUpdate:!0
}));
}
}
}
});
}
}));
};
g=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
e.node&&e.data&&e.data.cover_uri&&(e.isUpdate?e.node.innerHTML=i.tmpl(t,{
data:e.data,
isUpdate:!0
},!1).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,""):e.data.receive_image&&!function(){
var a=function(e){
var a=e.node,r=e.data;
return function(){
var e=document.createElement("div");
e.innerHTML=i.tmpl(t,{
data:r,
isUpdate:!1
},!1).replace(/>\s*</g,"><").replace(/^\s+/,"").replace(/\s+$/,"");
var o=e.firstChild;
a.parentNode.insertBefore(o,a.nextSibling);
var n=a.parentNode.querySelector('[data-preloadingid="'+r.cover_uri+'"]');
n&&n.parentNode.removeChild(n),p.domMap[r.cover_uri]=o,h({
dom:o,
coveruri:r.cover_uri
}),_({
coveruri:r.cover_uri,
node:o
});
};
}(e),r=function(){
this.onload=null,this.onerror=null,a();
},o=new Image;
o.onload=r,o.onerror=r,o.src=e.data.receive_image;
}());
};
var w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(e.list&&0!==e.list.length){
for(var t=0,a=e.list.length;a>t;t++){
var r=e.list[t];
p.dataMap[r.cover_uri]=r;
}
var i=document.querySelectorAll(p.tagName);
e.list.length!==i.length&&window.__addIdKeyReport&&window.__addIdKeyReport("27613","51",1),
p.needReportNum=i.length;
for(var t=0,a=i.length;a>t;t++){
var r=i[t],o=r.getAttribute("data-coveruri")||"",n=decodeURIComponent(o),d=p.dataMap[n];
if(d&&1*d.status!==-1){
if(d.redirect_url){
var c=d.redirect_url.html(!1);
c=s.addParam(c,"request_id",p.request_id,!0);
var u=s.parseUrl(c);
u.hash?-1===u.hash.indexOf("wechat_redirect")&&(c+="&wechat_redirect"):c+="#wechat_redirect",
d.redirect_url=c;
}
g({
data:d,
node:r,
isUpdate:!1
});
}
}
}
},f=function(){
var e=document.querySelectorAll(p.tagName);
if(!window.__appmsgCgiData||1*window.__appmsgCgiData.has_red_packet_cover!==1)return void(e.length>0&&window.__addIdKeyReport&&window.__addIdKeyReport("27613","51",1));
if(!p.isWechat)for(var t=0,a=e.length;a>t;t++){
var r=e[t],i=r.getAttribute("data-coveruri")||"",o=decodeURIComponent(i),n=decodeURIComponent(r.getAttribute("data-receiveimg")||"");
if(o&&n&&/^http(s)?:\/\/mmcomm\.qpic\.cn([\/?].*)*$/i.test(n)){
var d={
cover_uri:o,
status:0,
name:"",
redirect_url:"",
receive_image:n
};
p.dataMap[o]=d,g({
data:d,
node:r,
isUpdate:!1
});
}
}
};
return f(),{
render:w
};
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","pages/voice_component.js","appmsg/log.js"],function(e){
"use strict";
function i(){
var e=c("js_content");
return e?(m._oElements=e.getElementsByTagName("mpvoice")||[],m._oElements.length<=0?!1:!0):!1;
}
function o(){
m.musicLen=m._oElements.length;
}
function n(e){
for(var i=0,o=0;o<m.musicLen;o++){
var n=m._oElements[o],t={},c=n.getAttribute("voice_encode_fileid")||"";
try{
c=decodeURIComponent(c);
}catch(d){}
t.voiceid=s.encodeStr(c),t.voiceid=t.voiceid.replace(/&#61;/g,"=").replace(/^\s/,"").replace(/\s$/,""),
t.isaac=1*n.getAttribute("isaac2")||0,t.src=m.srcRoot.replace("#meidaid#",t.voiceid),
1===t.isaac&&(t.jsapi2Src=t.src+"&voice_type=1"),t.voiceid&&"undefined"!=t.voiceid&&(t.albumLink="",
e&&e.length>0&&e.forEach(function(e){
return e.voice_id===c?(e.appmsgalbuminfo&&(t.albumTitle=e.appmsgalbuminfo.title,
t.albumLink=e.appmsgalbuminfo.link.replace("#wechat_redirect","")+"#wechat_redirect",
t.albumNum=e.appmsgalbuminfo.tag_content_num||0,t.albumid=e.appmsgalbuminfo.album_id||0),
!1):void 0;
}),a(n,t,i),"undefined"!=typeof voiceid&&c&&voiceid&&c===voiceid&&!function(){
var e=n.offsetTop+122-40;
setTimeout(function(){
window.scrollTo(0,e);
},0);
}(),i++);
}
}
function a(e,i,o){
i.duration=parseInt((1*e.getAttribute("play_length")||0)/1e3,10),i.duration_str=s.formatTime(i.duration),
i.posIndex=o;
var n=e.getAttribute("name")||"";
try{
n=decodeURIComponent(n);
}catch(a){}
if(i.title=s.encodeStr(n).replace(/^\s/,"").replace(/\s$/,""),i.fileSize=1*e.getAttribute("high_size")||0,
i.nickname=window.nickname,i.voiceTag="v",1===window.is_temp_url){
var c=window.voice_in_appmsg[i.voiceid],d=c.transState,l=c.voiceVerifyState;
i.transState=d,i.voiceVerifyState=l;
}
s.renderPlayer(r,i,e,void 0,function(){
var o=i.voiceid+"_"+i.posIndex,n=e.parentNode.querySelector('[data-preloadingid="'+o+'"]');
n&&n.parentNode.removeChild(n),t(i),m.musicList[i.voiceid+"_"+i.posIndex]=i;
});
}
function t(e){
var i=e.voiceid+"_"+e.posIndex,o="";
if(window.voice_in_appmsg&&window.voice_in_appmsg[e.voiceid]){
var n=window.voice_in_appmsg[e.voiceid],a=window.biz||"",t=window.mid||"",d=window.idx||"";
n.bizuin&&n.appmsgid&&n.idx&&(a=n.bizuin,t=n.appmsgid,d=n.idx);
var r=window.location.protocol||"https:";
o=r+"//mp.weixin.qq.com/mp/audio?_wxindex_=#_wxindex_#&scene=104&__biz=#biz#&mid=#mid#&idx=#idx#&voice_id=#voice_id#&sn=#sn##wechat_redirect".replace("#_wxindex_#",e.posIndex).replace("#biz#",a).replace("#mid#",t).replace("#idx#",d).replace("#voice_id#",e.voiceid).replace("#sn#",n.sn||"");
}
l("[Voice] init"+o);
var m=s.decodeStr(e.title);
e.player=s.init({
wxIndex:e.posIndex,
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
jsapi2Src:e.jsapi2Src,
allowPause:!0,
duration:e.duration,
title:m,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:c("voice_main_"+i),
playArea:c("voice_play_"+i),
progress:c("voice_progress_"+i),
fileSize:e.fileSize,
playtimeDom:c("voice_playtime_"+i),
bufferDom:c("voice_buffer_"+i),
playdotDom:c("voice_playdot_"+i),
playpercent:c("voice_percent_"+i),
playpercentDesc:c("voice_percent_desc_"+i),
seekRange:c("voice_seekRange_"+i),
seekContainer:c("voice_main_"+i),
loadingDom:c("voice_loading_"+i),
detailArea:o?c("voice_main_"+i):"",
albumDom:c("voice_album_"+i),
detailUrl:o,
webUrl:o,
speedList:[1,1.25,1.5,2],
audioCardBody:c("audio_card_bd_"+i),
ctrlArea:c("audio_card_control_"+i),
fastBackBtn:c("audio_fast_back_"+i),
fastForwardBtn:c("audio_fast_forward_"+i),
doubleSpeedBtn:c("audio_double_speed_"+i),
isAudio:!0,
userName:window.user_name||"",
articleCoverCdnUrl1_1:window.cdn_url_1_1,
tingExtInfo:{
bizuin:1*window.atob(window.biz)||0,
appmsgid:1*window.mid||0,
idx:1*window.idx||0,
audio_id:e.voiceid||"",
is_album_page:!1
},
albumInfo:{
albumId:e.albumid||"",
albumName:e.albumTitle||"",
albumUrl:e.albumLink||""
}
});
}
function c(e){
return document.getElementById(e);
}
function d(e){
i()&&(o(),n(e));
}
e("biz_common/utils/string/html.js");
var r=e("pages/voice_tpl.html.js"),s=e("pages/voice_component.js"),l=e("appmsg/log.js"),m={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return{
init:d
};
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","appmsg/log.js","pages/qqmusic_tpl.html.js","pages/voice_component.js","pages/qqmusic_ctrl.js","pages/kugoumusic_ctrl.js"],function(e){
"use strict";
function t(){
var e=u("js_content");
return e?(p._oElements=e.getElementsByTagName("qqmusic")||[],p._oElements.length<=0?!1:!0):!1;
}
function i(){
p.musicLen=p._oElements.length;
}
function s(){
for(var e=0,t=0;t<p.musicLen;t++){
var i=p._oElements[t],s={};
s.musicid=l.encodeStr(i.getAttribute("musicid")||"").replace(/^\s/,"").replace(/\s$/,""),
s.musicid&&"undefined"!=s.musicid&&(r(i,s,e),e++);
}
}
function r(e,t,i){
if(t.media_id=l.encodeStr(e.getAttribute("mid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.musictype=parseInt(e.getAttribute("musictype"))||1,t.musictype>2&&(t.musictype=2),
t.albumid=l.encodeStr(e.getAttribute("albumid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.otherid=l.encodeStr(e.getAttribute("otherid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.jumpurlkey=l.encodeStr(e.getAttribute("jumpurlkey")||"").replace(/^\s/,"").replace(/\s$/,""),
t.duration=parseInt(e.getAttribute("play_length")||0,10),t.posIndex=i,t.albumurl=l.encodeStr(e.getAttribute("albumurl")||"").replace(/^\s/,"").replace(/\s$/,""),
t.audiourl=l.encodeStr(e.getAttribute("audiourl")||"").replace(/^\s/,"").replace(/\s$/,""),
t.singer=l.encodeStr(e.getAttribute("singer")||"").replace(/^\s/,"").replace(/\s$/,""),
!t.singer||"undefined"==t.singer){
var s=e.getAttribute("src")||"",r=decodeURIComponent(a.getQuery("singer",s)||"");
t.singer=l.encodeStr(r).replace(/^\s/,"").replace(/\s$/,""),t.singer&&"undefined"!=t.singer||(t.singer="");
}
t.music_name=l.encodeStr(e.getAttribute("music_name")||"").replace(/^\s/,"").replace(/\s$/,""),
p.adapter[t.musictype]&&"function"==typeof p.adapter[t.musictype].initData&&(t=p.adapter[t.musictype].initData(t,{
scene:0
})),l.renderPlayer(m,t,e);
var u=t.musicid+"_"+t.posIndex,c=e.parentNode.querySelector('[data-preloadingid="'+u+'"]');
c&&c.parentNode.removeChild(c),n(t),p.musicList[t.musicid+"_"+t.posIndex]=t;
}
function n(e){
var t=e.musicid+"_"+e.posIndex;
c("[Music] init "+e.detailUrl);
var i=l.decodeStr(e.music_name);
e.player=l.init({
allowPause:e.allowPause===!0?!0:!1,
wxIndex:e.posIndex,
type:e.type||0,
comment_id:"",
mid:e.media_id,
otherid:e.otherid,
albumid:e.albumid,
songId:e.musicid,
jumpurlkey:e.jumpurlkey,
duration:e.duration,
title:i,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"音乐",
coverImgUrl:e.albumurl,
playingCss:"qqmusic_playing",
pauseCss:e.pauseCss||"",
playCssDom:u("qqmusic_main_"+t),
playArea:u("qqmusic_play_"+t),
detailUrl:e.detailUrl||"",
webUrl:e.webUrl||"",
detailArea:u("qqmusic_home_"+t)
});
}
function u(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var a=e("biz_common/utils/url/parse.js"),c=e("appmsg/log.js"),m=e("pages/qqmusic_tpl.html.js"),l=e("pages/voice_component.js"),p={
adapter:{
1:e("pages/qqmusic_ctrl.js"),
2:e("pages/kugoumusic_ctrl.js")
},
musicList:{},
musicLen:0
};
return t()?(i(),s(),p.musicList):void 0;
});define("appmsg/iframe.js",["biz_common/utils/string/html.js","appmsg/without_iframe/video_communicate_adaptor.js","pages/video_communicate_adaptor.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","biz_wap/utils/ajax.js","appmsg/without_iframe/video_appmsg.js","common/utils.js","appmsg/finance_communicate.js","biz_wap/utils/jsmonitor_report.js","biz_common/utils/url/parse.js","new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=0;
return e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight),
t;
}
function i(e){
console.info("iframe_onload");
var i=0;
try{
var o=document.getElementsByTagName("html").item(0).style["-webkit-text-size-adjust"],n=e.contentDocument;
if(n){
var s=n.getElementsByTagName("html").item(0);
s&&(s.style["-webkit-text-size-adjust"]=o);
}
d.on("menu:setfont",function(){
var i=t(e);
!!e.parentElement&&0!==i&&(e.style.height=i+"px");
}),e.contentDocument&&e.contentDocument.body.offsetHeight?i=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?i=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(i=e.document.body.scrollHeight);
var r=e.parentElement;
if(r&&(e.style.height=i+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var c=e.contentWindow.document.getElementsByTagName("html");
c&&c.length&&(c[0].style.overflow="hidden");
}
p&&p.postPageHeightMessage&&p.postPageHeightMessage("updatePageHeight"),console.log("financeUtils done");
}catch(a){}
}
function o(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=w.video_top.length,i=e+m.getInnerHeight(),d=0,s=0;t>s;s++){
var r=w.video_top[s];
r.reported?d++:i>=r.start&&i<=r.end&&(r.reported=!0,setTimeout(function(e,t,i){
return function(){
var o=n.getVideoInfo(),d="",s="",r=3;
o[e]&&(o[e].hit_bizuin&&(d=o[e].hit_bizuin),o[e].hit_vid&&(s=o[e].hit_vid),o[e].ori_status&&(r=o[e].ori_status)),
l.report({
step:1,
hit_vid:s,
hit_bizuin:d,
ori_status:r,
vid:e,
screen_num:Math.ceil(t/i),
screen_height:i
});
};
}(r.vid,i,m.getInnerHeight()),1e4));
}
d==t&&(v.off(window,"scroll",o),w.video_top=w.video_iframe=o=null);
}
e("biz_common/utils/string/html.js");
var n=e(window.withoutIframe?"appmsg/without_iframe/video_communicate_adaptor.js":"pages/video_communicate_adaptor.js"),d=e("biz_wap/jsapi/core.js"),s=e("biz_wap/utils/mmversion.js"),r=e("biz_wap/utils/device.js"),c=e("biz_wap/utils/ajax.js");
if(window.withoutIframe)var a=e("appmsg/without_iframe/video_appmsg.js");
{
var m=e("common/utils.js"),p=e("appmsg/finance_communicate.js"),_=e("biz_wap/utils/jsmonitor_report.js"),u=e("biz_common/utils/url/parse.js"),l=e("new_video/ctl.js"),w={
txVideoReg:/^http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/,
mpVideoReg:/^http(s)*\:\/\/mp\.weixin\.qq\.com\/mp\/readtemplate\?t=pages\/video_player_tmpl/,
video_iframe:[],
video_top:[]
},f=e("pages/version4video.js"),g=e("biz_common/dom/attr.js"),v=(g.setProperty,e("biz_common/dom/event.js")),h=[].slice.call(document.getElementsByTagName("iframe")),b=[];
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var x=Math.ceil(1e4*Math.random()),y=0,j=h.length;j>y;++y)!function(e,t){
var o=e.getAttribute("data-src")||"",n=e.className||"",d=e.getAttribute("src")||o;
if(!o||"#"==o){
var m=e.getAttribute("data-display-src");
if(m&&(0==m.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==m.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
m=m.replace(/&amp;/g,"&");
for(var p=m.split("&"),l=["/mp/newappmsgvote?action=show"],g=0;g<p.length;g++)(0==p[g].indexOf("__biz=")||0==p[g].indexOf("supervoteid="))&&l.push(p[g]);
l.length>1&&(o=l.join("&")+"#wechat_redirect");
}
}
if(d&&(w.txVideoReg.test(d)||w.mpVideoReg.test(d))){
if(f.isShowMpVideo()||w.mpVideoReg.test(d)){
var v=u.getQuery("vid",o);
if(!v)return;
var h=e.getAttribute("data-vw"),y=e.getAttribute("data-vh"),j=document.domain;
if("qq.com"==j&&((new Image).src="https://badjs.weixinbridge.com/badjs?id=139&level=4&from="+window.encodeURIComponent(window.location.host)+"&msg="+window.encodeURIComponent(window.location.href),
_.setLogs({
id:27302,
key:100,
value:1,
lc:1,
log0:"[beforeD]"+window.encodeURIComponent(window.location.href)
})),window.reportVid.push(v),d=["/mp/videoplayer?video_h=",y,"&video_w=",h,"&scene=",window.source,"&random_num=",x,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",v,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||"","&sessionid=",window.sessionid||"","&preview=",window.is_temp_url?1:0,"&is_in_pay_subscribe=",window.isPaySubscribe,"&nickname="+window.nickname,"&roundHeadImg="+window.round_head_img,"&enterid="+window.enterid,"&subscene="+window.subscene].join(""),
window.withoutIframe){
var k=a().createMpVideoDom(e,t,d);
w.video_iframe.push({
dom:k,
vid:v
});
}else w.video_iframe.push({
dom:e,
vid:v
}),uin||window.__addIdKeyReport&&window.__addIdKeyReport("28307",21),window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),
setTimeout(function(e,t){
if(t.setAttribute("marginWidth",0),t.setAttribute("marginHeight",0),t.style.top="0",
window.__second_open__)if(s.isIOS){
var i,o,n;
!function(){
var d=function(e,t,i,o){
i&&o&&(e.contentWindow.__auto_play__=!!e.getAttribute("__sec_open_auto_play__"),
e.contentWindow.is_login=t.is_login,e.contentWindow.user_uin=t.user_uin,e.contentWindow.cgiData.ckey=t.ckey,
e.contentWindow.cgiData.ckey_ad=t.ckey_ad,e.contentWindow.seajs.use("pages/video_appmsg.js"));
},s=function(){
r.os.getNumVersion()<14?t.setAttribute("src",e):t.contentWindow.location.replace(e);
};
window.__videohook__=1,i=!1,o=!1,n={},t.onload=function(){
t.contentWindow&&t.contentWindow.cgiData?i=!0:(i=!1,s()),d(t,n,i,o);
},s(),c({
url:e,
type:"GET",
f:"json",
success:function(s){
o=!0;
try{
n=JSON.parse(s),d(t,n,i,o);
}catch(r){
d(t,n,i,o);
}
window.resp=s,t.setAttribute("data-realsrc",e),t.contentWindow.__iframe_src__=e;
}
});
}();
}else c({
url:e,
type:"GET",
f:"html",
success:function(i){
t.setAttribute("data-realsrc",e),t.contentDocument.open("text/html","replace"),t.contentDocument.write(i),
t.contentDocument.close(),t.contentWindow.__iframe_src__=e,t.contentWindow.history.replaceState(null,null,e);
}
});else t.setAttribute("src",e);
},0,d,e);
}
}else if(o&&(o.indexOf("newappmsgvote")>-1&&(n.indexOf("js_editor_vote_card")>=0||n.indexOf("vote_iframe")>=0)||0==o.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&(n.indexOf("card_iframe")>=0||n.indexOf("js_editor_card")>=0)||o.indexOf("appmsgvote")>-1||o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(window.is_transfer_msg&&!window.reprint_ticket&&o.indexOf(window.biz)<0)return void b.push(e);
if(window.__second_open__||(o=o.replace(/^http:/,location.protocol)),n.indexOf("card_iframe")>=0||n.indexOf("js_editor_card")>=0){
-1===n.indexOf("card_iframe")&&(e.className+=" card_iframe"),-1===n.indexOf("res_iframe")&&(e.className+=" res_iframe");
var O=o.replace("#wechat_redirect",["&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(O+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
window.__second_open__?c({
url:O,
type:"GET",
f:"html",
success:function(t){
e.setAttribute("src",O),e.contentWindow.document.open("text/html","replace"),e.contentWindow.document.write(t),
e.contentWindow.document.close(),e.contentWindow.history.replaceState(null,null,O),
-1==o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
i(e);
});
}
}):(e.setAttribute("src",O),-1==o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
i(e);
}));
}else{
var z=o.indexOf("#wechat_redirect")>-1,W=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?W+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx,"&appmsg_token=",appmsg_token].join(""):(n.indexOf("vote_iframe")>=0||n.indexOf("js_editor_vote_card")>=0)&&(W+=["&mid=",mid,"&idx=",idx,"&appmsg_token=",appmsg_token].join(""),
-1===n.indexOf("vote_iframe")&&(e.className+=" vote_iframe"));
var O=z?o.replace("#wechat_redirect",W):o+W;
window.__second_open__?c({
url:O,
type:"GET",
f:"html",
success:function(t){
e.contentWindow.Ajax=c,e.setAttribute("src",O),e.contentWindow.document.open("text/html","replace"),
e.contentWindow.document.write(t),e.contentWindow.document.close(),e.contentWindow.history.replaceState(null,null,O),
-1==o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
i(e);
});
}
}):(e.setAttribute("src",O),-1==o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
i(e);
}));
}
e.appmsg_idx=g;
}
if(o&&o.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&h>0){
var D=h,q=3*D/4;
e.width=D,e.height=q,e.style.setProperty&&(e.style.setProperty("width",D+"px","important"),
e.style.setProperty("height",q+"px","important"));
}
}(h[y],y);
for(var k=0;k<b.length;k++){
var O=b[k];
O.parentNode.removeChild(O);
}
if(window.iframe_reload=function(){
for(var e=0,t=h.length;t>e;++e){
var o=h[e],n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&i(o);
}
},"getElementsByClassName"in document)for(var z,W=document.getElementsByClassName("video_iframe"),y=0;z=W.item(y++);)z.setAttribute("scrolling","no"),
z.style.overflow="hidden";
w.video_iframe.length>0&&setTimeout(function(){
for(var e=w.video_iframe,t=document.getElementById("js_article"),i=0,n=e.length;n>i;i++){
var d=e[i];
if(!d||!d.dom)return;
for(var s=d.dom,r=parseFloat(getComputedStyle(s).getPropertyValue("height")),c=0;s&&t!==s;)c+=s.offsetTop,
s=s.offsetParent;
w.video_top.push({
start:c+r/2,
end:c+r/2+m.getInnerHeight(),
reported:!1,
vid:d.vid
});
}
o(),v.on(window,"scroll",o);
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/utils/ajax_wx.js","biz_common/utils/cookie.js","biz_common/utils/http.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js","biz_wap/utils/hand_up_state.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","common/utils.js","appmsg/log.js","biz_common/utils/url/parse.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function o(e){
window.logs||(window.logs={}),x.js_content=e.js_content||document.getElementById("js_content");
var o=e.js_toobar3||document.getElementById("js_toobar3");
x.pageEndTop=o?o.offsetTop:0,x.imgs=x.js_content?x.js_content.getElementsByTagName("img")||[]:[],
x.media=e.media||document.getElementById("media"),x.title=e.title||(window.msg_title||"").htmlDecode(),
x.video_cnt=e.video_cnt||window.logs.video_cnt||0,x.js_cmt_area=e.js_cmt_area||document.getElementById("js_cmt_area"),
x.item_show_type=e.item_show_type||window.item_show_type||0,T=document.getElementsByTagName("html"),
T&&1==!!T.length&&c&&(T=T[0].innerHTML,O.content_length=c.htmlSize),window.logs.pageinfo=O,
function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var o=localStorage.key(e);
o.match(/^\d+$/)?localStorage.removeItem(o):o.match(/^adinfo_/)&&localStorage.removeItem(o),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(w.on(window,"load",function(){
H=1*S.get(P);
var o=""!==j.getQuery("imageIndex");
if(!window.__second_open__){
var t=location.href.indexOf("scrolltodown")>-1;
t&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),t||"undefined"!=typeof voiceid&&voiceid||(!e.disableScroll&&!o&&window.scrollTo(0,H),
v.saveSpeeds({
uin:uin,
pid:"https:"==E?462:417,
speeds:{
sid:36,
time:Math.ceil(H/b.getInnerHeight())
}
}),v.send());
}
if(window.__wxjs_is_wkwebview||window.__second_open__){
if(G)return;
var i=A.getData(),n=localStorage.getItem("hand_up_id");
for(var p in i)p!=n&&i[p]&&(s(i[p].val),z.setSum(28307,59,1),A.remove(p));
window.setInterval(function(){
var e=a();
A.set(q,e,+new Date+864e7);
},1e3);
}
var w=I.getData("spad");
w&&w.spad&&_(w.spad.val),e.hasSpAd&&window.setInterval(function(){
r();
var e=d();
I.set("spad",e,+new Date+864e7);
},1e3),window.setTimeout(function(){
m({
url:"/mp/appmsgreport?action=page_time_5s&__biz="+biz,
type:"POST",
mayAbort:!0,
data:a(),
async:!0,
timeout:2e3
});
},5e3);
}),w.on(window,"unload",function(){
if(y("[Appmsg leaveReport in page_pos 3]"),console.log("[Appmsg leaveReport in page_pos 3]"),
!window.__second_open__&&(y("[Appmsg leaveReport in page_pos 4]"),console.log("[Appmsg leaveReport in page_pos 4]"),
!window.__jsapi_report_has_done__)){
y("[Appmsg leaveReport in page_pos 5]"),console.log("[Appmsg leaveReport in page_pos 5]"),
localStorage.setItem("hand_up_id",""),window.__ajaxtest="2";
var e=a();
s(e),window.__unload_has_done__=!0;
}
}),window.logs.read_height=0,w.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(N),N=setTimeout(function(){
H=window.pageYOffset,S.set(P,H,+new Date+864e5);
},500);
}),w.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(N),N=setTimeout(function(){
H=window.pageYOffset,S.set(P,H,+new Date+864e5);
},500);
})),f.addReport(function(){
if(y("[Appmsg leaveReport in page_pos 1]"),console.log("[Appmsg leaveReport in page_pos 1]"),
!window.__unload_has_done__){
y("[Appmsg leaveReport in page_pos 2]"),console.log("[Appmsg leaveReport in page_pos 2]"),
D=!0,A.remove(q);
var e=a(),o=[];
for(var t in e)e.hasOwnProperty(t)&&o.push(t+"="+encodeURIComponent(e[t]));
var i={
reportUrl:"https://mp.weixin.qq.com/mp/appmsgreport?action=page_time&__biz="+biz,
reportData:o.join("&"),
method:"POST"
};
return window.__jsapi_report_has_done__=!0,y("[Appmsg leaveReport length]: "+JSON.stringify(i).length),
console.log("[Appmsg leaveReport length]: "+JSON.stringify(i).length),i;
}
}),w.on(document,"visibilitychange",function(){
u.isHidden()?localStorage.setItem("hand_up_id",q):localStorage.setItem("hand_up_id","");
}),p();
}
function t(e,o){
if(e&&!(e.length<=0))for(var t,i,n,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,s=0,r=e.length;r>s;++s)t=e[s],
t&&(i=t.getAttribute(o),i&&(n=i.match(a),n&&n[2]&&(k[n[2]]=!0)));
}
function i(e){
for(var o=0,t=B.length;t>o;++o)if(B[o]==e)return!0;
return!1;
}
function n(){
k={},t(document.getElementsByTagName("a"),"href"),t(document.getElementsByTagName("link"),"href"),
t(document.getElementsByTagName("iframe"),"src"),t(document.getElementsByTagName("script"),"src"),
t(document.getElementsByTagName("img"),"src");
var e=[];
for(var o in k)k.hasOwnProperty(o)&&(window.networkType&&"wifi"==window.networkType&&!R&&i(o)&&(R=!0),
e.push(o));
return k={},e.join(",");
}
function a(){
{
var e,o=window.pageYOffset||document.documentElement.scrollTop,t=x.js_content,i=b.getInnerHeight(),a=x.screen_width,s=x.scroll_height,r=Math.ceil(s/i),d=Math.ceil((t.scrollHeight||t.offsetHeight)/i),_=(window.logs.read_height||o)+i,p=x.pageEndTop,w=x.imgs,m=Math.ceil(_/i)||1,l=x.media,c=50,g=0,h=0,f=0,v=0,y=_+c>p?1:0;
t.offsetTop+t.scrollHeight;
}
m>r&&(m=r);
var j=function(o){
if(o)for(var t=0,i=o.length;i>t;++t){
var n=o[t];
if(n){
g++;
var a=n.getAttribute("src"),s=n.getAttribute("data-type");
a&&0==a.indexOf("http")&&(h++,a.isCDN()&&(f++,-1!=a.indexOf("tp=webp")&&v++),s&&(e["img_"+s+"_cnt"]=e["img_"+s+"_cnt"]||0,
e["img_"+s+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=v||0,e.download_img_cnt=h||0,e.download_cdn_img_cnt=f||0,
e.img_cnt=g||0,e.report_time=parseInt(Date.now()/1e3,10);
},z=window.appmsgstat||{},S=window.logs.img||{},A=window.logs.pagetime||{},I=S.load||{},k=S.read||{},E=[],B=[],D=0,N=0,H=0;
for(var P in k)P&&0==P.indexOf("http")&&k.hasOwnProperty(P)&&B.push(P);
for(var P in I)P&&0==P.indexOf("http")&&I.hasOwnProperty(P)&&E.push(P);
for(var M=0,q=E.length;q>M;++M){
var G=E[M];
G&&G.isCDN()&&(-1!=G.indexOf("/0")&&D++,-1!=G.indexOf("/640")&&N++,-1!=G.indexOf("/300")&&H++);
}
var e={
report_bizuin:biz,
title:x.title,
mid:mid,
idx:idx,
subscene:window.subscene||1e4,
sessionid:window.sessionid||0,
enterid:window.enterid||0,
read_cnt:z.read_num||0,
old_like_cnt:z.old_like_num||0,
like_cnt:z.like_num||0,
screen_width:a,
screen_height:b.getInnerHeight(),
screen_num:d,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:x.video_cnt,
read_screen_num:m||0,
is_finished_read:y,
scene:source,
content_len:O.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
handup_time:u.getHandUpTime(),
total_height:p,
exit_height:_>p?p:_,
img_640_cnt:N,
img_0_cnt:D,
img_300_cnt:H,
wtime:A.onload_time||0,
ftime:A.ftime||0,
ptime:A.ptime||0,
onload_time:A.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:window.ct,
item_show_type:x.item_show_type,
page_req_info:JSON.stringify({
startGetAppmsgExtTime:window.startGetAppmsgExtTime,
startGetAppmsgAdTime:window.startGetAppmsgAdTime,
receiveGetAppmsgExt:window.receiveGetAppmsgExt,
receiveGetAppmsgAd:window.receiveGetAppmsgAd,
jsapiReadyTime:window.jsapiReadyTime,
domCompleteTime:window.domCompleteTime
}),
is_darkmode:window.matchMedia("(prefers-color-scheme: dark)").matches?1:0
},C=/(?:\?|&)search_click_id=([^&]*)(?:&|$)/.exec(window.location.search);
if(e.search_click_id=C?C[1]:0,window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=E.length,
e.wifi_read_imgs_cnt=B.length),window.logs.webplog&&4==window.logs.webplog.total){
var Y=window.logs.webplog;
e.webp_total=1,e.webp_lossy=Y.lossy,e.webp_lossless=Y.lossless,e.webp_alpha=Y.alpha,
e.webp_animation=Y.animation;
}
if(e.copyright_stat=window.isCartoonCopyright?"3":window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var J=window.logs.idkeys,U=[];
for(var K in J)if(J.hasOwnProperty(K)){
var L=J[K];
L.val>0&&U.push(K+"_"+L.val);
}
e.idkey=U.join(";");
}
j(!!l&&l.getElementsByTagName("img")),j(w);
var V=(new Date).getDay(),W=n();
return(R||0!==user_uin&&Math.floor(user_uin/100)%7==V)&&(e.domain_list=W),R&&(e.html_content=T),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
e.ascene=window.ascene||-1,0==e.scene&&56==e.ascene&&(e.scene=90),e.hotspotjson=JSON.stringify({
hotspotinfolist:window.hotspotInfoList||[]
}),e.is_pay_subscribe=window.isPaySubscribe,e.is_paid=window.isPaid,e.preview_percent=window.previewPercent,
e.is_finished_preview=window.is_finished_preview||0,e.fee=window.can_use_wecoin?window.wecoin_amount?10*window.wecoin_amount:"":window.paySubscribeInfo?window.paySubscribeInfo.fee:"",
e.pay_cnt=window.paySubscribeInfo?window.paySubscribeInfo.pay_cnt:"",e.worthy_cnt=window.paySubscribeInfo?window.paySubscribeInfo.like_cnt:"",
e.exptype=window.exptype||"",e.expsessionid=window.expsessionid||"",e;
}
function s(e){
if(!D){
D=!0,A.remove(q);
var o="/mp/appmsgreport?action=page_time&__biz="+biz;
if(navigator.sendBeacon){
var t="";
for(var i in e)t+=i+"="+e[i]+"&";
navigator.sendBeacon(l.joinUrl(o),t),console.log("sendBeacon send 10945 data");
}else m({
url:o,
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
});
}
}
function r(){
S.set(P,H,+new Date+72e5);
}
function d(){
return window.__video_report_data;
}
function _(e){
e&&e.play_type&&(I.remove("spad"),e.report_type=1,m({
url:"/mp/ad_video_report?action=video_play_report",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function p(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/geticon?__biz="+biz+"&r="+Math.random();
}
e("biz_common/utils/string/html.js");
var w=e("biz_common/dom/event.js"),m=e("biz_wap/utils/ajax.js"),l=e("biz_wap/utils/ajax_wx.js"),c=(e("biz_common/utils/cookie.js"),
e("biz_common/utils/http.js"));
e("appmsg/cdn_img_lib.js");
var g=e("biz_wap/utils/storage.js"),u=e("biz_wap/utils/hand_up_state.js"),h=e("biz_wap/utils/mmversion.js"),f=(e("biz_wap/jsapi/core.js"),
e("biz_wap/jsapi/leaveReport.js")),v=e("biz_wap/utils/wapsdk.js"),b=e("common/utils.js"),y=e("appmsg/log.js"),j=e("biz_common/utils/url/parse.js"),z=(-1!=navigator.userAgent.indexOf("TBS/"),
e("biz_wap/utils/jsmonitor_report.js"));
window.__unload_has_done__=!1;
var T,x={
js_cmt_area:null,
js_content:null,
screen_height:b.getInnerHeight(),
screen_width:document.documentElement.clientWidth||window.innerWidth,
scroll_height:document.body.scrollHeight||document.body.offsetHeight,
pageEndTop:0,
imgs:[],
media:null,
title:"",
video_cnt:0,
item_show_type:0
},S=new g("page_pos","clear-all"),A=new g("time_on_page"),I=new g("spad"),O={},k={},E=window.location.protocol,R=!1,B=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],D=!1,N=null,H=0,P=[biz,sn,mid,idx].join("_"),M=Math.random(),q=[biz,sn,mid,idx,M].join("_"),G=h.isAndroid&&h.gtVersion("7.0.4",!0)||h.isIOS&&h.gtVersion("7.0.4",!0);
return{
init:o
};
});define("appmsg/product.js",["biz_common/dom/event.js","common/utils.js"],function(e){
"use strict";
function t(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=0;t<i.length;++t){
var o=i[t];
if(!o.isReport){
var n=o.offsetTop;
n>=e&&e+r.getInnerHeight()>=n&&(o.isReport=!0,(new Image).src="/mp/appmsgreport?action=appmsg_recom&type=1&__biz="+biz+"&ascene="+(window.ascene||-1)+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&product_id="+o.product_id+"&order="+o.order+"&r="+Math.random());
}
}
}
var o=e("biz_common/dom/event.js"),r=e("common/utils.js");
if(document.getElementsByClassName){
for(var n=document.getElementsByClassName("js_product_section"),d=document.getElementsByClassName("js_product_a"),i=[],s=0;s<n.length;++s){
var a=n[s];
a.dataset&&a.dataset.product_id&&a.dataset.order&&i.push({
dom:a,
offsetTop:a.offsetTop,
product_id:a.dataset.product_id||"",
order:a.dataset.order||"",
isReport:!1
});
}
i.length>0&&(o.on(window,"scroll",t),t());
for(var s=0;s<d.length;++s)!function(e){
o.on(e,"click",function(){
var t=e.dataset||{};
return(new Image).src="/mp/appmsgreport?action=appmsg_recom&type=2&__biz="+biz+"&ascene="+(window.ascene||-1)+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&product_id="+(t.product_id||"")+"&order="+(t.order||"")+"&r="+Math.random(),
t.href?(setTimeout(function(){
location.href="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(t.href)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&scene=0";
},300),!1):!1;
},!0);
}(d[s]);
}
});define("appmsg/outer_link.js",["biz_common/dom/event.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","appmsg/popup_report.js","biz_wap/utils/jsmonitor_report.js","biz_common/dom/class.js","common/tap_highlight.js"],function(e){
"use strict";
function t(e){
e.preventDefault();
}
function i(e){
var t=e.innerHTML,i=/<img.*src=[\'\"]/,n=/background-image:(\s*)url\(/,o=/background:[^;"']+url\(/;
return i.test(t)||n.test(t)||o.test(t)?!0:!1;
}
function n(e){
var t=e.innerHTML,i=e.style.fontSize;
return 0===t.trim().length||0===parseFloat(i)?!0:!1;
}
function o(e,t){
var i=e.getElementsByClassName("weui-dialog__bd")[0],n=e.getElementsByClassName("weui-dialog")[0];
if(e.getElementsByClassName("weui-dialog__hd")&&e.getElementsByClassName("weui-dialog__hd").length>0&&n.removeChild(e.getElementsByClassName("weui-dialog__hd")[0]),
t.title&&t.desc){
var o=document.createElement("div");
o.setAttribute("class","weui-dialog__hd");
var r='<strong class="weui-dialog__title">'+t.title+"</strong>";
o.innerHTML=r,i.innerText=t.desc,n.insertBefore(o,i);
}else i.innerText=t.desc;
}
function r(e){
var r=e.container;
if(!r)return!1;
for(var f=r.getElementsByTagName("a")||[],j=0,b=f.length;b>j;++j)!function(r){
var j=f[r],b=j.getAttribute("href");
if(!b)return!1;
var k=0,E=j.innerHTML;
/^[^<>]+$/.test(E)?k=1:/^<img[^>]*>$/.test(E)&&(k=2);
var I=j.getAttribute("data-linktype"),T=j.getAttribute("href");
s.on(j,"click",function(r){
var s=j.getAttribute("href");
if(!s)return!1;
c.addClass(j,"wx_tap_link"),d.highlightEle(j),!!e.changeHref&&!/^https?:\/\/mp\.weixin\.qq\.com\/cgi-bin\//.test(s)&&(s=e.changeHref(s,k)),
r.preventDefault();
var f="";
_[j.getAttribute("data-itemshowtype")]&&(f=_[j.getAttribute("data-itemshowtype")]);
document.getElementById("js_link_dialog_name");
return y&&(g[T]&&g[T].subject_name&&"0"===g[T].item_show_type&&g[T].title?o(y,{
title:'即将打开公众号 "'+g[T].subject_name+'" 的'+_[g[T].item_show_type],
desc:h.innerText="《"+g[T].title+"》"
}):g[T]&&g[T].subject_name&&g[T].item_show_type>=0?o(y,{
desc:'即将打开公众号 "'+g[T].subject_name+'" 的'+_[g[T].item_show_type]
}):o(y,{
desc:"即将打开新的页面"
})),r.stopPropagation(),"undefined"==typeof w[T]&&(T.indexOf("mp.weixin.qq.com/s/")>-1||T.indexOf("mp.weixin.qq.com/s?")>-1)?p.setSum(110809,6,1):"undefined"==typeof w[T]&&p.setSum(110809,7,1),
w=function(){
return g[T]&&g[T].item_show_type>=0&&s.indexOf("mp.weixin.qq.com")>-1&&(l.isIOS||l.isAndroid)&&!l.isInMiniProgram&&l.isWechat?1==j.getAttribute("clicked")?!1:(u.invoke("openWebViewUseFastLoad",{
url:s,
item_show_type:g[T].item_show_type,
openType:0,
scene:1
},function(e){
console.log("openWebViewUseFastLoad res: ",e),e&&e.err_msg&&-1==e.err_msg.indexOf("ok")?u.invoke("openUrlWithExtraWebview",{
url:s,
openType:1
},function(e){
j.setAttribute("clicked",0),e&&e.err_msg&&-1==e.err_msg.indexOf("ok")&&(window.location.href=url);
}):(j.setAttribute("clicked",0),p.setSum(28839,37,1));
}),!1):void(l.isInMiniProgram?location.href=s:(l.isAndroid||l.isIOS)&&l.isWechat?a(s,{
sample:1,
reject:function(){
location.href=s;
}
}):location.href=s);
},("1"===I||i(j)||n(j))&&m.report([2,m.getRedirectType(T),"",window.img_popup?1:0,window.source,m.getUrlData(T)],!0),
("1"===I||i(j)||n(j))&&window.img_popup?(console.log("tap img link",y),y.style.display="block",
setTimeout(function(){
h&&h.focus();
},100),v&&v.setAttribute("aria-hidden","true"),y._url=T,(i(j)||n(j))&&(p.setSum(110809,8,1),
y._type="OTHER"),document.querySelector("body").addEventListener("touchmove",t,{
passive:!1
})):w(),!1;
},!0),s.on(j,"click",function(e){
("1"===I||"2"===I||i(j)||n(j))&&window.img_popup&&(e.preventDefault(),e.stopPropagation());
},!0);
}(j);
}
var s=e("biz_common/dom/event.js"),a=e("appmsg/open_url_with_webview.js"),u=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/mmversion.js"),m=(e("biz_wap/utils/ajax.js"),
e("appmsg/popup_report.js")),p=e("biz_wap/utils/jsmonitor_report.js"),c=e("biz_common/dom/class.js"),d=e("common/tap_highlight.js"),_={
0:"文章",
11:"文章",
8:"图片",
7:"语音",
5:"视频"
},g={};
if("undefined"!=typeof jumpInfo)for(var f=0;f<jumpInfo.length;f++)g[jumpInfo[f].url]={
title:jumpInfo[f].title,
item_show_type:jumpInfo[f].item_show_type,
subject_name:jumpInfo[f].subject_name,
link_type:jumpInfo[f].link_type
};
var w=function(){},y=document.getElementById("js_link_dialog"),h=(document.getElementById("js_link_dialog_head"),
document.getElementById("js_link_dialog_body")),j=document.getElementById("js_link_dialog_cancel"),b=document.getElementById("js_link_dialog_ok"),v=document.querySelector("#js_article");
return b&&s.on(b,"click",function(e){
e.stopPropagation(),e.preventDefault(),"OTHER"===y._type&&p.setSum(110809,10,1),
document.querySelector("body").removeEventListener("touchmove",t),w&&w(),y.style.display="none",
v&&v.removeAttribute("aria-hidden"),m.report([4,m.getRedirectType(y._url),"",window.img_popup?1:0,window.source,m.getUrlData(y._url)],!0);
}),j&&s.on(j,"click",function(e){
e.stopPropagation(),e.preventDefault(),document.querySelector("body").removeEventListener("touchmove",t),
"OTHER"===y._type&&p.setSum(110809,9,1),y.style.display="none",v&&v.removeAttribute("aria-hidden"),
m.report([3,m.getRedirectType(y._url),"",window.img_popup?1:0,window.source,m.getUrlData(y._url)],!0);
}),r;
});define("appmsg/copyright_report.js",["common/utils.js","biz_common/dom/event.js"],function(o){
"use strict";
function i(o){
var i=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",o.scene,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&mid=",window.mid,"&idx=",window.idx,"&source_biz=",window.source_biz,"&source_mid=",window.source_mid,"&source_idx=",window.source_idx,"&card_version=2","&show_appmsg_scene=",window.source,"&session_id=",window.sessionid,"&has_recommend_msg=",window.hasRecommendMsg,"&t=",Math.random()].join("");
window.isSg&&(i+="&from=sougou");
var e=new Image;
e.src=i.substr(0,1024);
}
function e(){
var o=__appmsgCgiData;
if("2"==o.copyright_stat){
for(var i=r("copyright_info"),e=r("js_article");i&&e!==i;)c.copyright_top+=i.offsetTop,
i=i.offsetParent;
t.on(window,"scroll",n),n();
}
}
function n(){
var o=window.pageYOffset||document.documentElement.scrollTop;
o+s.getInnerHeight()>c.copyright_top&&(i({
scene:"1",
card_pos:"0"
}),t.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(o){
return document.getElementById(o);
}
var s=o("common/utils.js"),t=o("biz_common/dom/event.js"),c={
copyright_top:0
};
return{
card_click_report:i,
card_pv_report:e
};
});var _extends=Object.assign||function(e){
for(var i=1;i<arguments.length;i++){
var t=arguments[i];
for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);
}
return e;
};
define("appmsg/async.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","appmsg/reward_utils.js","appmsg/pay_read/pay_read_utils.js","appmsg/pay_report_utils.js","pages/create_txv.js","pages/video_ctrl.js","biz_common/utils/url/parse.js","appmsg/img_copyright_tpl.html.js","appmsg/appmsgext.js","appmsg/share_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","complain/localstorage.js","appmsg/log.js","rt/appmsg/getappmsgext.rt.js","a/a_utils.js","appmsg/related_article.js","appmsg/like_profile.js","appmsg/set_font_size.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","pages_new/modules/utils/event_bus.js","pages/mod/bottom_modal.js","pages/version4video.js","appmsg/read.js","appmsg/like.js","appmsg/like_and_share.js","appmsg/set_article_read.js","pages_new/appmsg/store.js","appmsg/iframe.js","redpackage/redpacketcover.js","appmsg/more_read.js","appmsg/album_keep_read.js"],function(e){
"use strict";
function i(){
for(var i=document.getElementsByTagName("iframe"),a=[],r=0,s=i.length;s>r;++r)a.push(i[r]);
i=null;
var o=document.getElementById("js_content"),n=o.offsetWidth,_=n/m.getRatio();
window.logs.video_cnt=0;
for(var r=0,s=a.length;s>r;++r){
var d=a[r],p=d.getAttribute("data-src")||"",l=d.getAttribute("src")||p;
if(l){
var c=e("pages/version4video.js");
if(0==l.indexOf("http://z.weishi.com/weixin/player.html"))l=l.replace(/width=\d+/g,"width="+n),
l=l.replace(/height=\d+/g,"height="+_),d.width=n,d.height=_,d.style.setProperty&&(d.style.setProperty("width",n+"px","important"),
d.style.setProperty("height",_+"px","important")),d.setAttribute("src",l),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10),
window.logs.video_cnt++;else{
if(/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(l)){
if(!c.isShowMpVideo()){
var w;
w=t(g?d:d),w&&x.push(w),"function"==typeof window.__addIdKeyReport&&(window.__addIdKeyReport("28307",10),
c.device.inWechat&&c.device.inWindowWechat?window.__addIdKeyReport("110644",0):c.device.inWechat&&c.device.inMacWechat&&window.__addIdKeyReport("110644",1));
}
window.logs.video_cnt++;
continue;
}
/^http(s)*\:\/\/mp\.weixin\.qq\.com\/mp\/readtemplate\?t=pages\/video_player_tmpl/.test(l)&&window.logs.video_cnt++;
}
}
}
x.length>0&&"function"==typeof window.__getVideoWh&&h.on(window,"resize",function(){
try{
for(var e=0,i=x.length;i>e;e++){
var t=x[e],a=t.playerObj;
if(a){
var r=window.__getVideoWh(t);
t.style.width=r.w+"px",t.style.height=r.h+"px",a.resize({
width:r.vw,
height:r.vh
});
}
}
}catch(s){}
},!1);
}
function t(e){
var i=e.getAttribute("data-src")||e.getAttribute("src"),t=l.getQuery("vid",i),r=e.getAttribute("data-vw"),s=e.getAttribute("data-vh"),o=e.getAttribute("data-ratio"),n=document.createElement("span");
n.setAttribute("data-ratio",o),n.id="js_tx_video_container_"+Math.random(),n.className="js_tx_video_container",
n.style.cssText=e.style.cssText,n.style.display="none";
var _=e.parentNode;
return _?(_.lastChild===e?_.appendChild(n):_.insertBefore(n,e.nextSibling),p.createTxVideo({
containerId:n.id,
vid:t,
width:r,
height:s,
autoplay:!1,
allowFullScreen:!0,
onSuccess:function(e){
n.playerObj=e.player,a(n,t),n.style.display="block";
},
onError:function(){}
}),_.removeChild(e),n):void 0;
}
function a(e,i){
if(i&&e){
var t=e.parentNode;
if(t){
for(var a=[],r=0,s=t.children.length;s>r;r++){
var o=t.children[r];
o.className.indexOf("img_loading")>=0&&o.getAttribute("data-vid")==i&&a.push(o);
}
for(var r=0,s=a.length;s>r;r++)t.removeChild(a[r]);
e.style.display="block";
}
}
}
function r(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var i={},t=e.img_copy_info.list,a=window.__appmsgCgiData.copyright_stat,r=window.__appmsgCgiData.source_biz,s=0,o=t.length;o>s;s++){
var n=t[s];
if(2==n.type){
if(2==a&&r==n.source_uin)continue;
i[n.img_url]={
source_nickname:n.source_nickname,
source_uin:n.source_uin,
source_encode_biz:n.source_encode_biz||""
};
}
}
for(var _=document.getElementsByTagName("img"),s=0,o=_.length;o>s;s++){
var n=_[s],d=n.getAttribute("data-src")||n.getAttribute("data-backsrc")||"";
if(i[d]){
var p=document.createElement("div");
p.innerHTML=y.tmpl(c,i[d],!1);
{
var m=p.children[0],l=n.parentNode,w=l.insertBefore(m,n),u=w.children[0];
(function(e,i){
h.on(i,"click",function(){
var i="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
return-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?(location.href=i,
!1):(f.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=i);
}),!1);
});
})(i[d],u);
}
w.insertBefore(n,u);
}
}
}
}
function s(i){
var t=i.appmsgstat||{},a=i.appmsgact||{},r=i.paySubscribeInfo||{};
if(window.paySubscribeInfo=r,window.isFans=i.is_fans,window.appmsgstat||(window.appmsgstat=t),
t.show_read){
var s=document.getElementById("js_read_area3"),o=document.getElementById("readNum3");
if(!s||!o)return;
var d=e("appmsg/read.js");
d.showReadNum({
show:!0,
readAreaDom:s,
readNumDom:o,
readAreaDisplayValue:window.isPaySubscribe?"none":"block",
readNum:window.is_temp_url?window.read_num:t.read_num
});
}
if(f.invoke("handleHaokanAction",{
imgUrl:ori_head_img_url?ori_head_img_url:"",
link:msg_link.html(!1),
desc:msg_desc?msg_desc:"",
title:msg_title?msg_title.htmlDecode():"",
action:"update_recommend_status",
permission:window.is_temp_url||t.show_like_gray||!t.show_like||2!==appmsg_like_type?0:1,
recommend:t.liked?1:0
},function(){}),t.show_like){
var p=e("appmsg/like.js"),m=document.getElementById("like3"),l=document.getElementById("likeNum3");
if(!m||!l)return;
t.liked=window.is_temp_url?window.liked:t.liked;
var c=1===appmsg_like_type?"praised":"like_btn_liked";
p.showLikeNum({
show:!0,
likeAreaDom:m,
likeNumDom:l,
liked:t.liked,
className:c,
likeAreaDisplayValue:"inline",
likeNum:window.is_temp_url?window.like_num:t.like_num,
likeGray:!!t.show_like_gray
}),p.initLikeEvent({
likeAreaDom:m,
likeNumDom:l,
className:c,
prompted:t.prompted,
biz:window.biz,
mid:window.mid,
idx:window.idx,
appmsgid:window.appmsgid,
itemidx:window.itemidx,
is_temp_url:window.is_temp_url,
showType:t.style
});
}
var w=e("appmsg/like_and_share.js");
w.initLikeShareDom({
shareShow:i.share_flag&&!!i.share_flag.show&&!z.isInMiniProgram,
shareGray:i.share_flag&&!!i.share_flag.show_gray,
likeShow:!!t.show_old_like,
likeGray:!!t.show_old_like_gray,
likeNum:t.old_like_num?t.old_like_num:0,
isLike:t.old_liked?1:0,
isZaikan:t.show_like?1:0
});
var u=e("appmsg/set_article_read.js"),g=u.bindArticleReadEvent;
g();
var y=i.share_flag&&i.share_flag.show;
if(t&&!t.show_like&&!t.show_old_like&&!y){
var b=document.getElementById("js_bottom_opr_right");
b&&(b.style.display="none"),document.getElementById("js_bottom_opr_right")&&(document.getElementById("js_bottom_opr_right").style.display="none");
}
v.setBackgroundClass(),n.init(_extends({
isFans:i.is_fans
},i.reward),{
reward_entrance_enable_for_preview:i.reward_entrance_enable_for_preview,
reward_wording:i.reward_wording,
reward_author_head:i.reward_author_head
}),window.isPaySubscribe&&_.init(r,{
rewardTotal:i.reward.reward_total||0,
rewardTotalCut:i.reward.is_reward_total_count_cut
});
var x=document.getElementById("js_cmt_container");
1==i.comment_entrance_enable_for_preview&&window.is_temp_url&&x&&(x.style.display="block"),
i.comment_entrance_enable_for_preview&&(document.getElementById("js_preview_cmt")&&(document.getElementById("js_preview_cmt").style.display="block"),
h.on(document.getElementById("js_preview_cmt_write"),"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
})),i.comment_enabled&&x&&(x.style.display="block");
var I=[],E="",A=a.old_liked_before,S=a.seen_before,B=a.favorite_before,R=a.share_before,W=a.reward_before,N=a.pay_before,P=t.old_liked,T=t.liked;
(P||A)&&(E="praise",I.push("like")),(T||S)&&(E="like",I.push("zaikan")),B&&(E="favorite",
I.push("collect")),R&&(E="share",I.push("share")),W&&I.push("reward"),N&&I.push("pay"),
j&&(I.length>0||k.isFromRecommend)&&j.renderLikeProfile(I),k&&(t.old_liked||a.old_liked_before?k.render("praise",!0):t.liked||a.seen_before?k.render("like",!0):a.favorite_before?k.render("favorite",!0):a.share_before?k.render("share",!0):k.isFromRecommend||!window.is_login?k.render("other",!0):a.reward_before?k.render("reward",!0):a.pay_before&&k.render("pay",!0));
}
function o(){
var i=0,t="27613",a="50";
w.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:msg_title,
ct:ct,
abtest_cookie:abtest_cookie,
devicetype:devicetype,
version:window.clientversion,
is_need_ticket:x&&x.length>0?1:0,
is_need_ad:0,
comment_id:comment_id,
is_need_reward:is_need_reward,
both_ad:0,
reward_uin_count:is_need_reward?3*n.getCountPerLine({
can_reward:!0
})-1:0,
send_time:window.send_time||"",
msg_daily_idx:msg_daily_idx,
item_show_type:window.item_show_type,
is_original:i,
is_only_read:is_only_read,
req_id:window.req_id||"",
pass_ticket:pass_ticket,
is_temp_url:window.is_temp_url||0,
more_read_type:more_read_type||0,
rtId:t,
rtKey:a,
appmsg_like_type:window.appmsg_like_type,
is_pay_subscribe:window.isPaySubscribe,
pay_subscribe_uin_count:window.isPaySubscribe?3*_.getCountPerLine():0,
has_red_packet_cover:window.__appmsgCgiData.has_red_packet_cover,
onSuccess:function(i){
if(i)try{
var o=e("pages_new/appmsg/store.js");
if(o.commit("SET_EXT_RES",i),window.__second_open__&&i.pay_subscribe_info&&1*i.pay_subscribe_info.is_paid!=isPaid)return d.report110809(11),
(new Image).src="https://badjs.weixinbridge.com/badjs?id=244&level=4&from="+window.encodeURIComponent(window.location.host)+"&msg="+window.encodeURIComponent(window.location.href),
void f.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:window.item_show_type
},function(e){
d.report110809(e.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,"1"),
window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect";
});
if(i&&i.base_resp&&i.base_resp.wxtoken&&(window.wxtoken=i.base_resp.wxtoken),window.fromWeixinCached&&e("appmsg/iframe.js"),
r(i),i.ret)return;
if(i.red_packet_cover_data&&i.red_packet_cover_data.cover_uri_data&&i.red_packet_cover_data.cover_uri_data.length>0){
var n=e("redpackage/redpacketcover.js");
n.render({
list:i.red_packet_cover_data.cover_uri_data
});
}
var _=document.getElementById("js_more_read_area");
if(_&&i&&i.more_read_list&&i.more_read_list.length&&e("appmsg/more_read.js")(_,i.more_read_list),
window.isFans=i.is_fans,i.pay_subscribe_info&&(window.payEduTips={
firstWecoinRecharge:1*i.pay_subscribe_info.first_wecoin_recharge,
userImgUrl:i.pay_subscribe_info.user_img_url,
userNickname:i.pay_subscribe_info.user_nick_name
},window.payGlobal={
enable_custom_recharge:i.pay_subscribe_info.enable_custom_recharge,
agreement_url:i.pay_subscribe_info.agreement_url,
agreement_version:i.pay_subscribe_info.agreement_version,
agreement_status:i.pay_subscribe_info.agreement_status,
recharge_product_id:i.pay_subscribe_info.recharge_product_id,
price:i.pay_subscribe_info.price
},i.pay_subscribe_info.wecoin_tips&&(z.isIOS||z.isAndroid)&&!z.is_wxwork&&!function(){
var e=void 0,i=z.isIOS?7:10,t=document.createElement("div");
t.innerHTML='<div class="pay__wecoin-edu"><div class="pay__wecoin-title"><div class="pay__icon-wecoin"></div><div>付费内容需用微信豆支付</div></div><div class="pay__wecoin-edu-desc">微信豆是用于购买微信内虚拟物品和服务的道具。<span>1元 = '+i+"微信豆。</span>微信豆还可用于购买直播间的虚拟礼物等。</div></div>";
var a=document.createElement("a");
a.innerText="常见问题",a.className="pay__wecoin-edu-link",h.on(a,"tap",function(i){
i&&i.preventDefault(),d.reportPayAppmsg(17),f.invoke("openUrlWithExtraWebview",{
url:"https://kf.qq.com/touch/product/WXDB_app.html",
openType:1
}),e.hide();
}),e=new E(t,{
title:"",
extClass:"pay__wecoin-edu-modal",
top:window.innerHeight-375+"px",
footerEl:a
}),e.show();
}()),s({
appmsgstat:i.appmsgstat,
appmsgact:i.appmsgact,
comment_enabled:i.comment_enabled,
comment_count:i.comment_count,
only_fans_can_comment:i.only_fans_can_comment,
only_fans_days_can_comment:i.only_fans_days_can_comment,
is_fans_days:i.is_fans_days,
reward:{
reward_total:i.reward_total_count,
is_reward_total_count_cut:i.is_reward_total_count_cut,
reward_head_imgs:i.reward_head_imgs||[],
can_reward:i.can_reward,
user_can_reward:i.user_can_reward,
reward_qrcode_ticket:i.reward_qrcode_ticket,
timestamp:i.timestamp,
reward_author_head:i.reward_author_head,
rewardsn:i.rewardsn,
scene:source,
is_need_reward:is_need_reward,
title:msg_title,
author_id:author_id,
appmsgextRtId:t,
appmsgextRtKey:a,
can_whisper:i.can_whisper
},
reward_entrance_enable_for_preview:i.reward_entrance_enable_for_preview,
reward_wording:i.reward_wording,
reward_author_head:i.reward_author_head,
comment_entrance_enable_for_preview:i.comment_entrance_enable_for_preview,
share_redirect_url:i.share_redirect_url||"",
logo_url:i.logo_url,
nick_name:i.nick_name,
is_fans:i.is_fans,
paySubscribeInfo:i.pay_subscribe_info,
share_flag:i.share_flag,
test_flag:i.test_flag
}),i.appmsg_album_extinfo){
var p=e("appmsg/album_keep_read.js");
p.init(i.appmsg_album_extinfo);
}
}catch(m){
b("[Appmsg] error parse async data, biz="+biz+", mid="+mid);
var l=new Image;
return l.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(m.toString())+"&r="+Math.random()).substr(0,1024),
console&&console.error(m),void("undefined"!=typeof window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.onError(m));
}
},
onError:function(){
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
},
onComplete:function(){
window.ext_complete=!0,I.emit("ext-complete");
}
});
}
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var n=e("appmsg/reward_utils.js"),_=e("appmsg/pay_read/pay_read_utils.js"),d=e("appmsg/pay_report_utils.js"),p=e("pages/create_txv.js"),m=e("pages/video_ctrl.js"),l=e("biz_common/utils/url/parse.js"),c=e("appmsg/img_copyright_tpl.html.js"),w=e("appmsg/appmsgext.js"),u=(e("appmsg/share_tpl.html.js"),
navigator.userAgent),g=-1!=u.indexOf("MicroMessenger"),h=(-1!=navigator.userAgent.indexOf("WindowsWechat"),
e("biz_common/dom/event.js")),f=(e("biz_wap/utils/ajax.js"),e("biz_wap/jsapi/core.js")),y=e("biz_common/tmpl.js"),b=(e("complain/localstorage.js"),
e("appmsg/log.js")),v=(e("rt/appmsg/getappmsgext.rt.js"),e("a/a_utils.js")),k=e("appmsg/related_article.js"),j=e("appmsg/like_profile.js"),x=[],z=(e("appmsg/set_font_size.js"),
e("biz_wap/utils/device.js"),e("biz_wap/utils/mmversion.js")),I=e("pages_new/modules/utils/event_bus.js"),E=e("pages/mod/bottom_modal.js");
i(),o();
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=this.offset||60,a=0;
if("wifi"==window.networkType){
var s={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(s=this.lazyloadHeightWhenWifi()),o=Math.max(s.bottom*e,o),
a=Math.max(s.top*e,a);
}
for(var r=+new Date,h=[],d=this.sw,f=this,p=-1,g=0,u=t.length;u>g;g++)!function(t,i){
var s=t.placeholder.getBoundingClientRect(),r=t.src;
if(r){
(r.match(/\:\/\/[^\/]+\/mmbiz\//)&&r.indexOf("wx_fmt=gif")>-1||r.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&p++;
var f=a,g=o;
(r.match(/\:\/\/[^\/]+\/mmbiz\//)&&r.indexOf("wx_fmt=gif")>-1||r.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&m&&(f=0,
g=60),(!t.show&&(s.top<=0&&s.top+s.height+f>=0||s.top>0&&s.top<e+g)||i.isAccessibility)&&(i.inImgRead&&(s.top<=0&&s.top+s.height>=0||s.top>0&&s.top<e)&&i.inImgRead(r,networkType),
i.changeSrc&&(r=i.changeSrc(t.loader,r,p,t.placeholder)),t.loader.onerror=function(){
var e=this;
!!i.onerror&&i.onerror(t.loader.src,e,t.placeholder);
},t.loader.onload=function(){
var e=this;
if("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="!=e.src){
e.style.cssText=t.placeholder.style.cssText;
var o=e.getAttribute("data-forceheight");
o?(e.removeAttribute("data-forceheight"),c(e,"height",o,"important")):c(e,"height","auto","important"),
e.getAttribute("_width")?c(e,"width",e.getAttribute("_width"),"important"):c(e,"width","auto","important"),
t.placeholder.parentNode.replaceChild(e,t.placeholder),t.placeholder=e,!!i.onload&&i.onload(e.src,e),
this.onload=null;
}
},l(t.loader,"src",r),h.push(r),t.show=!0,c(t.placeholder,"visibility","visible","important")),
n.isWp&&1*t.placeholder.width>d&&(t.placeholder.width=d);
}
}(t[g],f);
h.length>0&&this.detect&&this.detect({
time:r,
loadList:h,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,a=this.attrKey||"data-src",n=o.offsetWidth,s=0,r=this.imgOccupied||!1,m=this.crossOrigin||!1;
o.currentStyle?s=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(s=getComputedStyle(o).width),
this.sw=1*s.replace("px","");
for(var d=0,f=t.length;f>d;d++){
var p=t.item(d),g=l(p,a),u=l(p,"src");
if(g&&!(u&&u.indexOf("data:image/gif;base64")<0)){
var b=100;
if(p.dataset&&p.dataset.ratio){
var A=1*p.dataset.ratio,w=1*p.dataset.w||n;
"number"==typeof A&&A>0?(w=n>=w?w:n,b=w*A,r||(p.style.width&&p.setAttribute("_width",p.style.width),
c(p,"width",w+"px","important"),c(p,"visibility","visible","important"),p.setAttribute("src",h))):c(p,"visibility","hidden","important");
}else c(p,"visibility","hidden","important");
r||c(p,"height",b+"px","important"),m&&-1==g.indexOf("mmsns.qpic.cn")&&!(g.match(/\:\/\/[^\/]+\/mmbiz\//)&&g.indexOf("wx_fmt=gif")>-1||g.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&(p.crossOrigin="anonymous"),
p.alt="图片",e.push({
placeholder:p,
loader:p.cloneNode(),
src:g,
height:b,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
if(this.__called_first_time)i.call(this,t),this.__called_first_time=!1;else if(!this.debounce){
this.debounce=!0;
var e=this;
setTimeout(function(){
i.call(e,t),e.debounce=!1;
},500);
}
}
function a(t){
s.on(window,"scroll",function(i){
o.call(t,i);
}),setTimeout(function(){
e.call(t,{});
},0),s.on(document,"touchmove",function(i){
o.call(t,i);
}),t.__called_first_time=!0,o.call(t,{}),t.accessibilityCallback&&t.accessibilityCallback(function(){
t.isAccessibility=!0,o.call(t,{});
});
}
var n=t("biz_wap/utils/mmversion.js"),s=t("biz_common/dom/event.js"),r=t("biz_common/dom/attr.js"),l=r.attr,c=r.setProperty,h=t("biz_common/ui/imgonepx.js"),m=!0;
return a;
});define("biz_common/log/jserr.js",[],function(){
function e(e,n){
return e?(r.replaceStr&&(e=e.replace(r.replaceStr,"")),n&&(e=e.substr(0,n)),encodeURIComponent(e.replace("\n",","))):"";
}
var r={};
return window.onerror=function(n,o,t,c,i){
return"Script error."==n||o?"undefined"==typeof r.key||"undefined"==typeof r.reporturl?!0:void setTimeout(function(){
c=c||window.event&&window.event.errorCharacter||0;
var l=[];
if(l.push("msg:"+e(n,100)),o&&(o=o.replace(/[^\,]*\/js\//g,"")),l.push("url:"+e(o,200)),
l.push("line:"+t),l.push("col:"+c),i&&i.stack)l.push("info:"+e(i.stack.toString(),200));else if(arguments.callee){
for(var s=[],u=arguments.callee.caller,a=3;u&&--a>0&&(s.push(u.toString()),u!==u.caller);)u=u.caller;
s=s.join(","),l.push("info:"+e(s,200));
}
var p=new Image;
if(p.src=(r.reporturl+"&key="+r.key+"&content="+l.join("||")).substr(0,1024),window.console&&window.console.log){
var f=l.join("\n");
try{
f=decodeURIComponent(f);
}catch(d){}
console.log(f);
}
},0):!0;
},function(e){
r=e;
};
});