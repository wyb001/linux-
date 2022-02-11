function _defineProperty(e,n,_){
return n in e?Object.defineProperty(e,n,{
value:_,
enumerable:!0,
configurable:!0,
writable:!0
}):e[n]=_,e;
}
define("pages_new/appmsg/store.js",["pages_new/3rd/vue.js","pages_new/3rd/vuex.js","pages_new/modules/utils/url.js","pages_new/modules/comment/comment_store.js"],function(e){
"use strict";
function n(){
return window;
}
var _,t=e("pages_new/3rd/vue.js"),r=e("pages_new/3rd/vuex.js"),s=e("pages_new/modules/utils/url.js");
t.use(r);
var o={
SET_EXT_RES:"SET_EXT_RES",
SET_AD_RES:"SET_AD_RES",
SET_CGI_DATA:"SET_CGI_DATA",
SET_URL_PARAMS:"SET_URL_PARAMS"
},a=e("pages_new/modules/comment/comment_store.js"),u=new r.Store({
modules:_defineProperty({},a.name,a),
state:{
extRes:{},
adRes:{},
cgiData:{},
urlParams:{}
},
mutations:(_={},_defineProperty(_,o.SET_EXT_RES,function(e,n){
e.extRes=n;
}),_defineProperty(_,o.SET_AD_RES,function(e,n){
e.adRes=n;
}),_defineProperty(_,o.SET_CGI_DATA,function(e,n){
e.cgiData=n;
}),_defineProperty(_,o.SET_URL_PARAMS,function(e,n){
e.urlParams=n;
}),_)
});
return u.commit(o.SET_CGI_DATA,n()),u.commit(o.SET_URL_PARAMS,s.getParams()),u;
});function _defineProperty(t,e,n){
return e in t?Object.defineProperty(t,e,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):t[e]=n,t;
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var n=arguments[e];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);
}
return t;
};
define("pages_new/modules/comment/comment.js",["pages/utils.js","biz_common/tmpl.js","biz_wap/jsapi/log.js","pages/scrollY.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","common/keyboard.js","common/utils.js","biz_wap/utils/device.js","common/comm_report.js","biz_wap/utils/fakehash.js","biz_wap/utils/mmversion.js","biz_common/utils/url/parse.js","pages_new/modules/comment/comment.html.js","biz_common/utils/wxgspeedsdk.js","biz_wap/utils/jsmonitor_report.js","pages_new/modules/comment/write_dialog/write_dialog.js","pages_new/modules/comment/list/list.js","pages_new/modules/comment/dialog/dialog.js","pages_new/modules/comment/dialog/unsupport.js","appmsg/comment_report.js","pages_new/modules/comment/utils.js","appmsg/emotion/emotion_panel.js","appmsg/comment/comment_report.js","pages_new/3rd/vuex.js","appmsg/comment/comment_input/comment_input.js","appmsg/comment/comment_write_old.html.js"],function(t){
"use strict";
var e,n=t("pages/utils.js"),i=t("biz_common/tmpl.js"),o=t("biz_wap/jsapi/log.js"),s=t("pages/scrollY.js"),m=t("biz_wap/utils/ajax.js"),a=t("biz_wap/jsapi/core.js"),r=t("common/keyboard.js"),c=t("common/utils.js"),d=t("biz_wap/utils/device.js"),l=t("common/comm_report.js"),h=t("biz_wap/utils/fakehash.js"),u=t("biz_wap/utils/mmversion.js"),p=t("biz_common/utils/url/parse.js"),f=t("pages_new/modules/comment/comment.html.js"),_=t("biz_common/utils/wxgspeedsdk.js"),g=t("biz_wap/utils/jsmonitor_report.js"),y=t("pages_new/modules/comment/write_dialog/write_dialog.js"),w=t("pages_new/modules/comment/list/list.js"),I=t("pages_new/modules/comment/dialog/dialog.js"),C=t("pages_new/modules/comment/dialog/unsupport.js"),v=t("appmsg/comment_report.js"),L=t("pages_new/modules/comment/utils.js"),b=t("appmsg/emotion/emotion_panel.js"),x=t("appmsg/comment/comment_report.js"),S=x.report22214,T=t("pages_new/3rd/vuex.js"),k=T.mapState,D=T.mapGetters,R=T.mapMutations,$=T.mapActions,j="comment_editing",E="my_comment_empty_data",A="wx_margin_top_tansition",P=n.getId("img-content"),M=u.is_wxwork,B=d.os.pc&&!u.is_wxwork,H=window.location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1,V=void 0,F=function(t,e){
t&&(t.style.display=e||"block");
},O=function(t){
t&&(t.style.display="none");
},z=function(t,e){
Math.random()<.999||(_.saveSpeeds({
uin:window.uin,
pid:"https:"===window.location.protocol?18:9,
speeds:[{
sid:29,
time:t
},{
sid:30,
time:e
}]
}),_.send());
},N=function(t){
var e=L.validContent(t);
return e.valid&&B&&(e.content=V.value),e;
},U=[];
c.bindDebounceScrollEvent(function(){
U.forEach(function(t){
return t();
});
});
var W=[];
return c.listenMpPageAction(function(t){
W.forEach(function(e){
return e(t);
});
}),{
name:"mp-comment",
template:f,
components:(e={},_defineProperty(e,y.name,y),_defineProperty(e,w.name,w),_defineProperty(e,I.name,I),
_defineProperty(e,C.name,C),e),
props:{
fetchBeforeExtResp:{
type:Boolean,
"default":!1
}
},
data:function(){
var t=this.$store.state.cgiData,e=0;
try{
e=1*window.atob(t.biz);
}catch(n){}
return{
commentLimit:L.getLimit("comment"),
urls:[],
scrollCount:0,
lastContent:"",
showMyAll:!1,
pcInputing:!1,
isWxWork:M,
deviceIsPc:B,
clientId:Date.now(),
canUseCancel:r.canUseCancel,
canAddComment:!window.isPaySubscribe||window.isPaySubscribe&&window.isPaid,
commonDataFor19048Report:{
BizUin:e,
BizUinStr:t.biz||"",
AppMsgId:parseInt(t.mid,10)||0,
ItemIdx:parseInt(t.idx,10)||0,
ItemShowType:parseInt(t.item_show_type,10)||0,
SessionIdStr:t.sessionid||"",
EnterId:parseInt(t.enterid,10)||0,
Scene:parseInt(t.source,10)||0,
SubScene:parseInt(t.subscene,10)||0
},
commonDataFor19462Report:{
bizuin:e,
msgid:parseInt(t.mid,10)||0,
itemidx:parseInt(t.idx,10)||0,
scene:parseInt(t.source,10)||0
},
cmtInputValue:"",
cmtInputStyle:{},
cmtTips:"",
ariaHidden:"true",
showCmtInputStatus:!1,
showCmtInputMask:!1,
showFakeCmtInput:!1,
cmtSubmitDisabled:!0,
writeAreaHeight:null,
emotionPanelShowStatus:!1,
preventMove:!1
};
},
computed:_extends({},k("mp-comment",["isVoiceover","writeStatus","commentStatus","commentData","commentVersion","myCommentStatus","myCommentData","offset","reportData","warningToast"]),D("mp-comment",["tempKey","commentId","commentEnabled","commentCount","nickName","headImg","isFans","isFansDays","onlyFansCanComment","onlyFansDaysCanComment","canC2cReply"]),{
loading:function(){
return 100===this.commentStatus;
},
myLoading:function(){
return 100===this.myCommentStatus;
},
hasComment:function(){
return window._has_comment=u.isWechat&&1===this.commentEnabled&&1*this.commentId!==0,
window._has_comment;
},
showStatement:function(){
return this.commentData&&this.commentData.elected_comment_total_cnt?this.offset+L.FETCH_CMT_LEN>=this.commentData.elected_comment_total_cnt:!1;
},
cmtEntryCtrlStatus:function(){
if(this.commentData){
if(this.checkIfFansDaysNotRequired||this.checkIfFansNotRequired)return this.myCommentList.length?1:this.commentData.elected_comment.length?2:3;
if(this.canAddComment)return this.deviceIsPc?4:this.myCommentList.length?5:this.commentData.elected_comment.length?6:7;
}
return 0;
},
fansCmtTips:function(){
return this.checkIfFansDaysNotRequired?"作者已设置关注7天后才可留言":this.checkIfFansNotRequired?"作者已设置关注后才可以留言":"";
},
checkIfFansNotRequired:function(){
return this.onlyFansCanComment&&0===this.isFans;
},
checkIfFansDaysNotRequired:function(){
return this.onlyFansDaysCanComment&&0===this.isFansDays;
},
commentList:function(){
return this.commentData&&this.commentData.elected_comment||[];
},
myCommentList:function(){
return this.myCommentData&&this.myCommentData.my_comment||[];
},
isOversize:function(){
var t=this.myCommentList.length+this.myCommentList.reduce(function(t,e){
return(e.reply_new&&e.reply_new.reply_list.length||0)+t;
},0);
return!this.showMyAll&&t>L.LIST_LIMIT;
},
cmtSubmitTitle:function(){
return this.cmtSubmitDisabled?"不可点击":"";
}
}),
watch:{
hasComment:function(t){
t&&this.initComment();
},
writeStatus:function(t){
!t&&u.isAndroid&&r.canUseCancel&&document.body.style.removeProperty("margin-bottom");
}
},
created:function(){
var t=this;
a.invoke("getUserConfig",{},function(e){
/:ok$/.test(e.err_msg)&&e.isAccessibilityMode&&t.setIsVoiceover({
value:!0
});
}),this.fetchBeforeExtResp&&this.getCommentData(),window.pageCommentReportData&&window.pageCommentReportData.idkey&&(H&&console.log("init reportData"),
this.setReportData({
data:_extends({},this.reportData,window.pageCommentReportData)
})),this.__hasReportExposeExtendList=[],this.__needRun=!0,this.__needShowDialog=!0,
this.__scrollToReplyInElected=!1,this.__isInMyList=null,this.__isInCmtList=null,
this.__inputTouchstart=null,this.__keyboardToolStart=null,this.__cmtInputBlurTimer=null,
this.__checkIsVoiceoverTimer=null,this.__hideCmtWriteMaskTimer=null,this.__curCmtAddBtn=null,
this.__pageHeight={
vertical:0,
horizontal:0
},0===window.orientation||180===window.orientation?(this.__pageHeight.vertical=c.getInnerHeight(),
this.__pageHeight.horizontal=screen.width-(screen.height-this.__pageHeight.vertical)):(this.__pageHeight.horizontal=c.getInnerHeight(),
this.__pageHeight.vertical=screen.width-(screen.height-this.__pageHeight.horizontal+60));
},
mounted:function(){
var t=this;
this.deviceIsPc&&document.body.classList.add("pages_skin_pc"),this.deviceIsPc||(this.cmtEmotionPanel=new b({
input:this.$refs.cmtInput,
vueOpt:{
instance:this,
key:"cmtInputValue"
},
limit:this.commentLimit,
counter:function(t){
return L.getLength(t);
},
onChange:function(e){
var n=e.type,i=e.value;
return"action"===n&&"done"===i?void t.onCmtSubmitBtnTap():(t.onCmtInputInput(),void(t.emotionPanelShowStatus=!0));
},
onShow:function(e){
t.showCmtInputStatus?t.scroll2Comment(e):t.cmtEmotionPanel.hide();
},
onTouchmove:function(t){
t.stopPropagation();
}
}),0===this.commentVersion&&(h.on("comment",function(){
t.commonShowCommentEntry(null,!0);
}),h.on("article",function(){
H&&console.log("FakeHash on article"),t.hideComment();
}),h.on(function(e){
"comment"===e&&t.hideComment();
}))),this.sendCommentLock=!1;
},
beforeDestroy:function(){
U=[],W=[],this.deviceIsPc||(r.offGetKeyboardHeight(this.onGetKeyboardHeight),u.isAndroid&&window.removeEventListener("resize",this.onWindowResize)),
window.removeEventListener("scroll",this.detectAutoNext),window.removeEventListener("scroll",this.detectLoading),
window.removeEventListener("scroll",this.detectExpandAllCmt),document.removeEventListener("visibilitychange",this.detectVisibleChange),
0===this.commentVersion&&(n.getId("js_cmt_goback")&&n.getId("js_cmt_goback").removeEventListener("click",this.hideCmtWhenFakeBarGoBack),
d.os.ios&&window.__second_open__&&window.removeEventListener("orientationchange",this.fixIOS8NoReflowBug));
},
methods:_extends({},R("mp-comment",["setIsVoiceover","setCommentVersion","setWriteStatus","setCommentData","setCommentStatus","setMyCommentData","setMyCommentStatus","setOffset","setReplyFlag","setReportData","setCommentLike","removeComment","addComment","updateCommentReplyInfo"]),$("mp-comment",["myReport"]),{
initComment:function(){
var e=this;
switch(this.getMyCommentData(),this.fetchBeforeExtResp?this.__renderCommentOpts&&this.renderComment(this.__renderCommentOpts):this.getCommentData(!0),
"1"===p.getQuery("js_my_comment")&&(1===this.commentVersion?this.invokeAppComment():0!==this.commentVersion||this.deviceIsPc||this.showComment(!0)),
U.push(this.detectComment),window.addEventListener("scroll",this.detectAutoNext),
window.addEventListener("scroll",this.detectLoading),window.addEventListener("scroll",this.detectExpandAllCmt),
document.addEventListener("visibilitychange",this.detectVisibleChange),this.detectExpandAllCmt(),
this.commentVersion){
case 2:
break;

case 1:
W.push(function(t){
if("deleteComment"===t.action){
var n=e.$refs.cmtList.getData({
myId:t.personal_comment_id
});
if(n){
var i=e.$refs.cmtList.getCommentIdx(n.content_id);
-1!==i&&e.removeComment({
type:"elected",
commentIdx:i
});
}
}
if("deleteCommentReply"===t.action){
var n=e.$refs.cmtList.getData({
myId:t.personal_comment_id
});
if(n){
var i=e.$refs.cmtList.getCommentIdx(n.content_id);
if(-1!==i){
var o=e.$refs.cmtList.getReplyIdx(n.content_id,t.replyId);
-1!==o&&e.removeComment({
type:"elected",
commentIdx:i,
replyIdx:o
});
}
}
}
if("praiseComment"===t.action)if(t.reply_id&&0!==t.reply_id){
var n=e.$refs.cmtList.getData({
myId:t.personal_comment_id
});
if(n){
var i=e.$refs.cmtList.getCommentIdx(n.content_id);
if(-1!==i){
var o=e.$refs.cmtList.getReplyIdx(n.content_id,t.replyId);
-1!==o&&e.setCommentLike({
type:"elected",
likeStatus:t.is_like,
commentIdx:i,
replyIdx:o
});
}
}
e.$refs.commentDialog.setReplyLikeInfo({
myId:t.personal_comment_id,
replyId:t.reply_id,
likeStatus:t.is_like
});
}else{
var n=e.$refs.cmtList.getData({
myId:t.personal_comment_id
});
if(n){
var i=e.$refs.cmtList.getCommentIdx(n.content_id);
-1!==i&&e.setCommentLike({
type:"elected",
likeStatus:t.is_like,
commentIdx:e.itemIdx
});
}
}
});
break;

case 0:
n.getId("js_cmt_goback")&&n.getId("js_cmt_goback").addEventListener("click",this.hideCmtWhenFakeBarGoBack),
d.os.ios&&window.__second_open__&&(this.__fixIOS8NoReflowBugTimer=null,this.__fixIOS8NoReflowBugSubTimer=null,
window.addEventListener("orientationchange",this.fixIOS8NoReflowBug));
}
if(this.deviceIsPc){
if(document.body.classList.add("pages_skin_pc"),!V){
var o=t("appmsg/comment/comment_input/comment_input.js");
V=new o({
placeholder:"留言被公众号精选后，将对所有人可见",
submitText:"留言",
length:this.commentLimit
});
}
V.onSubmit=this.comment,V.onHide=function(){
e.pcInputing=!1;
};
}else if(r.onGetKeyboardHeight(this.onGetKeyboardHeight),u.isAndroid&&window.addEventListener("resize",this.onWindowResize),
0===this.commentVersion){
var s=t("appmsg/comment/comment_write_old.html.js");
if(document.body.insertAdjacentHTML("beforeend",i.tmpl(s,{
textPageTitle:1*window.item_show_type===10?n.getId("js_text_content").innerHTML.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,""):window.msg_title.html(1)
},!1)),window.__second_open__&&d.os.ios&&(n.getId("js_cmt_mine").style.marginBottom=getComputedStyle(n.getId("js_fake_bar")).height),
!V){
var o=t("appmsg/comment/comment_input/comment_input.js");
V=new o({
placeholder:"留言被公众号精选后，将对所有人可见",
submitText:"留言",
length:this.commentLimit
});
}
V.onSubmit=this.comment,V.onClick=function(){
window.__second_open__&&O(n.getId("js_fake_bar"));
},V.onBlur=function(){
"none"!==n.getId("js_cmt_mine").style.display&&F(n.getId("js_fake_bar"));
},V.show(n.getId("js_comment_input_old"),{
renderType:"append"
});
}
},
initCommentReport:function(){
if(!this.__hasInitCommentReport){
this.__hasInitCommentReport=!0;
var t=this.$store.state.cgiData;
new v({
comment_id:this.commentId,
appmsgid:t.appmsgid,
idx:t.idx,
item_show_type:t.item_show_type||0,
biz:t.biz
});
}
},
onGetKeyboardHeight:function(t){
var e=t.keyboard,n=t.input;
r.onlyUseH5Keyboard?(this.__checkIsVoiceoverTimer&&(clearTimeout(this.__checkIsVoiceoverTimer),
this.__checkIsVoiceoverTimer=null),!this.emotionPanelShowStatus&&this.scroll2Comment(e)):this.scroll2Comment(e+n,this.$refs.cmtContainer.getBoundingClientRect().top);
},
getCommentData:function(t,e){
var n=this;
if(1*this.commentId!==0&&(t&&this.setOffset({
value:0
}),!this.loading&&-1!==this.offset)){
var i=c.getScrollTop(),s=document.documentElement.scrollHeight;
if(!(this.offset>0&&s-i-c.getInnerHeight()>500)){
if("number"==typeof this.commentCount&&0===this.commentCount&&!t)return void this.renderComment({
resp:{
enabled:1,
elected_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:this.onlyFansCanComment,
is_fans:this.isFans,
logo_url:this.headImg,
nick_name:this.nickName
}
});
this.setCommentStatus({
status:100
});
var a=this.$store.state.cgiData,r=p.join("/mp/appmsg_comment",{
action:"getcomment",
scene:this.reportData.scene,
appmsgid:a.appmsgid,
idx:a.idx,
comment_id:this.commentId,
offset:this.offset,
limit:L.FETCH_CMT_LEN,
send_time:a.send_time,
sessionid:a.sessionid||"",
enterid:parseInt(a.enterid,10)||0
},!0),d=Date.now();
this.detectLoading();
try{
this.scrollCount++,t&&(this.urls=[]),this.scrollCount>1&&!t&&this.myReport([this.reportData.moreList,encodeURIComponent(r)]),
this.urls.indexOf(r)>-1&&this.myReport([this.reportData.repeatList,encodeURIComponent(r)]),
this.urls.push(r);
}catch(l){
console.error(l);
}
H&&console.info("[图文评论] 开始请求评论数据:",r),o.info("[Appmsg comment] start get comment data, url:"+r),
m({
url:r,
dataType:"json",
success:function(i){
var s=i.base_resp&&i.base_resp.ret;
if(0===s){
i.elected_comment.forEach(function(t){
t.is_elected=1;
});
var m={
resp:i,
forceRefresh:t,
notFirstRender:e,
loadTime:Date.now()-d
};
n.fetchBeforeExtResp&&0===n.offset&&!n.hasComment?n.__renderCommentOpts=m:n.renderComment(m);
}else n.myReport([n.reportData.errList,"type:resperr;url:"+encodeURIComponent(r)+";ret="+s]);
o.info("[Appmsg comment] get comment success");
},
error:function(){
n.myReport([n.reportData.errList,"type:ajaxerr;url:"+encodeURIComponent(r)]),o.info("[Appmsg comment] get comment ajax error");
},
complete:function(){
n.setCommentStatus({
status:1
}),window.removeEventListener("scroll",n.detectLoading);
}
});
}
}
},
getMyCommentData:function(){
var t=this;
if(0===this.myCommentStatus){
var e=this.$store.state.cgiData,i=p.join("/mp/appmsg_comment",{
action:"getmycomment",
scene:this.reportData.scene,
appmsgid:e.appmsgid,
idx:e.idx,
comment_id:this.commentId,
sessionid:e.sessionid||"",
enterid:parseInt(e.enterid,10)||0
},!0);
this.setMyCommentStatus({
status:100
}),0===this.commentVersion&&Array.prototype.forEach.call(n.qsAll(".js_mycmt_loading"),F),
m({
url:i,
dataType:"json",
success:function(e){
var n=e.base_resp&&e.base_resp.ret;
0===n?(t.setMyCommentStatus({
status:1
}),t.setMyCommentData({
data:e
})):(t.setMyCommentStatus({
status:0
}),t.myReport([t.reportData.errComment,"type:resperr;url:"+encodeURIComponent(i)+";ret="+n])),
t.__hasRenderMyList=!0,t.afterRender(!0,!1);
},
error:function(){
t.setMyCommentStatus({
status:0
}),t.myReport([t.reportData.errComment,"type:ajaxerr;url:"+encodeURIComponent(i)]);
},
complete:function(){
0===t.commentVersion&&Array.prototype.forEach.call(n.qsAll(".js_mycmt_loading"),O);
}
});
}
},
renderComment:function(t){
var e=t.resp,n=t.forceRefresh,i=t.notFirstRender,o=t.loadTime,s=Date.now();
if(this.setReplyFlag({
flag:this.canC2cReply?e.reply_flag:0
}),this.myReport([this.reportData.handleList,encodeURIComponent(JSON.stringify({
comment_id:this.commentId,
offset:this.offset,
url:window.location.href
}))]),1!==e.enabled&&(e.elected_comment=[],e.elected_comment_total_cnt=0),0===this.offset){
this.setCommentData({
data:e
});
var m=e.elected_comment;
m&&m.length&&(this.__hasReportCommentShowTime||"5"!==window.item_show_type||(this.__hasReportCommentShowTime=!0,
Math.random()<.1&&(_.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:27,
time:Date.now()-window.logs.pagetime.page_begin
}]
}),_.send()))),this.__hasRenderCmtList=!0,this.afterRender(n,i),this.scrollToDown();
}else{
var m=e.elected_comment;
m&&m.length&&this.setCommentData({
data:_extends({},this.commentData,{
elected_comment:this.commentData.elected_comment.concat(m)
})
});
}
this.setOffset(0===e.elected_comment_total_cnt?{
value:-1
}:this.offset+L.FETCH_CMT_LEN>=e.elected_comment_total_cnt?{
value:-1
}:{
value:this.offset+e.elected_comment.length
}),this.initCommentReport(),o&&this.$nextTick(function(){
z(o,Date.now()-s);
});
},
afterRender:function(t,e){
var i=this;
this.$nextTick(function(){
var o=function(t){
t&&window.scrollTo(0,t.getBoundingClientRect().top+n.getScrollTop()-6);
};
if(i.__needRun&&window.goContentId&&!e&&t)if(!window.onload_endtime||Date.now()-window.onload_endtime<1e3){
if(i.__hasRenderMyList&&(null===i.__isInMyList&&(i.__isInMyList=null!==i.$refs.myList.getData({
contentId:window.goContentId
})),i.__isInMyList))return void(i.commentData&&i.commentData.enabled&&(i.showAllMyList(),
o(""!==window.goReplyId?i.$refs.myList.getReply(window.goContentId,1*window.goReplyId).$el:i.$refs.myList.getComment(window.goContentId).$el),
i.__needRun=!1));
i.__hasRenderCmtList&&(null===i.__isInCmtList&&(i.__goCommentData=i.$refs.cmtList.getData({
contentId:window.goContentId
}),i.__isInCmtList=null!==i.__goCommentData),i.__isInCmtList&&(i.__needShowDialog&&""!==window.goReplyId&&(i.__goCommentData.reply_new.reply_total_cnt&&i.__goCommentData.reply_new.reply_total_cnt!==i.__goCommentData.reply_new.reply_list.length?i.$refs.commentDialog.show(i.$refs.cmtList.getData({
contentId:window.goContentId
}),1*window.goReplyId):i.__scrollToReplyInElected=!0,i.__needShowDialog=!1),i.__hasRenderMyList&&(o(i.__scrollToReplyInElected?i.$refs.cmtList.getReply(window.goContentId,1*window.goReplyId).$el:i.$refs.cmtList.getComment(window.goContentId).$el),
i.__needRun=!1)));
}else i.__needRun=!1;
});
},
isInsideView:function(t){
if(!t)return!1;
var e=c.getScrollTop(),n=t.offsetTop;
return t!==this.$el&&(n+=this.$el.offsetTop),e+c.getInnerHeight()>n&&n>=e;
},
scrollToDown:function(){
var t=this;
this.$nextTick(function(){
var e=t.$refs.cmtArea.getBoundingClientRect().y;
location.href.indexOf("scrolltodown")>-1&&e&&window.scrollTo(0,e-25);
});
},
showAllMyList:function(){
this.showMyAll=!0,this.detectComment();
},
detectExtendCmt:function(t){
var e=t.dataset.myId;
-1===this.__hasReportExposeExtendList.indexOf(e)&&this.isInsideView(t)&&(l.report(19462,_extends({
PersonalCommentId:parseInt(e,10)||0,
CommentId:parseInt(this.commentId,10)||0,
actiontype:1,
wording:"余下N条",
number:parseInt(t.dataset.num,10)||0,
devicetype:this.deviceIsPc?1:2
},this.commonDataFor19462Report)),this.__hasReportExposeExtendList.push(e));
},
detectAutoNext:function(){
var t=this;
1*window.item_show_type===5&&!this.__detectCmtViewTimeout&&this.$refs.cmtHeader&&!function(){
var e=c.getScrollTop(),n=t.$refs.cmtHeader.offsetTop+t.$el.offsetTop;
e+c.getInnerHeight()>n&&(t.__detectCmtViewTimeout=setTimeout(function(){
t.__detectCmtViewTimeout=null,Math.abs(c.getScrollTop()-e)>50&&t.cancelAutoNext(9);
},200));
}();
},
detectLoading:function(){
try{
this.isInsideView(this.$refs.loading)&&this.loading&&(g.setLogs({
id:28307,
key:45,
value:1,
lc:1,
log0:""
}),window.removeEventListener("scroll",this.detectLoading));
}catch(t){
console.error(t);
}
},
detectExpandAllCmt:function(){
this.hasComment?this.isInsideView(this.$refs.mylistFolder)&&(l.report(19462,_extends({
CommentId:parseInt(this.commentId,10)||0,
actiontype:1,
wording:"展开全部留言",
number:this.$refs.myList.count,
devicetype:1
},this.commonDataFor19462Report)),window.removeEventListener("scroll",this.detectExpandAllCmt)):window.removeEventListener("scroll",this.detectExpandAllCmt);
},
detectComment:function(){
var t=this;
if(1===this.myCommentStatus&&this.$refs.myList&&this.$refs.cmtList){
var e=c.getInnerHeight();
[this.$refs.myList.getItemList(),this.$refs.cmtList.getItemList()].forEach(function(n,i){
var o=t.$refs[i?"cmtList":"myList"];
n.some(function(t){
var n=t.$el;
if(!n.isExposed){
var s=n.getBoundingClientRect(),m=.5*s.height;
if(s.bottom>m&&s.top<e-m){
n.isExposed=!0;
var a=n.dataset,r={
PersonalCommentId:1*a.myId,
ReplyId:0,
IsPopup:0,
IsReplyOther:0,
CommentReplyType:i?1:2
};
if(a.replyId){
var c=o.getData({
type:"reply",
contentId:a.contentId,
replyId:1*a.replyId
});
r.ReplyId=c.reply_id,r.IsReplyOther=c.to_nick_name&&c.to_content?1:0;
}
S(r);
}else if(s.top>=e-m)return!0;
}
return!1;
});
});
}
},
detectVisibleChange:function(){
document.hidden||this.isInsideView(this.$el)||this.getCommentData(!0,!0),u.isIOS&&"hidden"===document.visibilityState&&this.hideCmtInput(!0);
},
invokeAppComment:function(){
switch(this.commentVersion){
case 2:
break;

case 1:
a.invoke("handleMPPageAction",{
action:"writeComment",
title:this.$store.state.cgiData.title,
comment_id:this.commentId,
style:"white"
});
}
1*window.item_show_type===5&&this.cancelAutoNext(6);
},
showPcInputPanel:function(){
this.pcInputing=!0,V.show(this.$refs.inputPC);
},
hideCmtWhenFakeBarGoBack:function(t){
t.preventDefault(),this.hideComment(),O(n.getId("js_fake_bar"));
},
fixIOS8NoReflowBug:function(){
var t=this;
"none"!==n.getId("js_fake_bar").style.display&&(clearTimeout(this.__fixIOS8NoReflowBugTimer),
this.__fixIOS8NoReflowBugTimer=setTimeout(function(){
window.innerWidth!==parseFloat(getComputedStyle(n.getId("js_fake_bar")).width)&&(clearTimeout(t.__fixIOS8NoReflowBugSubTimer),
n.getId("js_cmt_mine").style.height=c.getInnerHeight()+"px",window.scrollBy&&window.scrollBy(0,1),
t.__fixIOS8NoReflowBugSubTimer=setTimeout(function(){
window.scrollBy&&window.scrollBy(0,-1),n.getId("js_cmt_mine").style.height="";
},100));
},50));
},
showComment:function(t){
this.__isShowOldCommentWrite=!0,this.__showCommentScrollTop=c.getScrollTop(),!this.deviceIsPc&&O(n.getId("js_article")),
n.getId("js_my_list_old").appendChild(this.$refs.myList.$el),this.showAllMyList(),
F(n.getId("js_cmt_mine")),document.body.classList[this.$refs.myList.count?"remove":"add"](E),
window.__second_open__&&d.os.ios&&F(n.getId("js_fake_bar")),window.scrollTo(0,0),
this.getMyCommentData(),!t&&setTimeout(function(){
return V.focus();
},3);
},
hideComment:function(){
this.__isShowOldCommentWrite=!1,this.$refs.myListContainer.appendChild(this.$refs.myList.$el),
O(n.getId("js_cmt_mine")),F(n.getId("js_article")),window.scrollTo(0,this.__showCommentScrollTop),
document.body.classList.remove(j),document.body.classList.remove(E);
},
sendComment:function(t){
var e=this,n=t.content,i=t.successBegin,o=t.successEnd,s=t.fail,a=t.complete;
this.sendCommentLock||!function(){
e.lastContent!==n&&(e.clientId=Date.now());
var t=e.$store.state.cgiData,r=p.join("/mp/appmsg_comment",{
action:"addcomment",
scene:e.reportData.scene,
appmsgid:t.appmsgid,
idx:t.idx,
comment_id:e.commentId,
sn:t.sn,
sessionid:t.sessionid||"",
enterid:parseInt(t.enterid,10)||0
},!0);
m({
url:r,
data:{
content:n,
title:t.title,
head_img:e.headImg,
nickname:e.nickName,
client_id:e.clientId
},
type:"POST",
dataType:"json",
success:function(t){
switch("function"==typeof i&&i(),+t.ret){
case 0:
var m={
content:n,
nick_name:e.nickName,
create_time:Date.now()/1e3|0,
is_elected:0,
logo_url:e.headImg,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:t.my_id,
content_id:t.content_id,
reply_new:{
reply_list:[]
},
needAnimation:!0
};
return e.addComment({
commentItem:m
}),e.showAllMyList(),void("function"==typeof o&&o());

case-6:
window.weui.alert("你留言的太频繁了，休息一下吧");
break;

case-7:
window.weui.alert("你还未关注该公众号，不能参与留言");
break;

case-10:
window.weui.alert("字数不能多于"+e.commentLimit+"个");
break;

case-15:
window.weui.alert("留言已关闭");
break;

case-18:
window.weui.alert("你在此文章的留言次数已达上限");
break;

default:
e.lastContent=n,window.weui.alert("系统错误，请重试");
}
e.myReport([e.reportData.addCommentErr,"type:resperr;url:"+encodeURIComponent(r)+";ret="+t.ret]),
"function"==typeof s&&s();
},
error:function(t){
console.log(t),e.myReport([e.reportData.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(r)]),
"function"==typeof s&&s();
},
complete:function(){
e.sendCommentLock=!1,"function"==typeof a&&a();
}
});
}();
},
comment:function(){
var t=this,e=V.getSubmit(),n=V.getInput();
if(e.disabled!==!0){
var i=N(this.deviceIsPc?V.value:n.value),o=i.valid,s=i.content;
o&&(e.disabled=!0,this.sendComment({
content:s,
successBegin:function(){
!t.deviceIsPc&&V.hideEmotionPannel();
},
successEnd:function(){
t.deviceIsPc?(V.hide(),t.pcInputing=!1):n.value="";
},
complete:function(){
""!==n.value&&(e.disabled=!1);
}
}));
}
},
cancelAutoNext:function(t){
this.$store.dispatch("mp-video-player/auto-next-plugin/cancelAutoNextWhenTipsShowed",t);
},
commonShowCommentEntry:function(t,e){
switch(t&&t.preventDefault(),this.invokeAppComment(),this.commentVersion){
case 2:
l.report(19048,_extends({
EventType:1,
IsFans:this.isFans,
CommentPageType:3
},this.commonDataFor19048Report));
break;

case 1:
l.report(19048,_extends({
EventType:1,
IsFans:this.isFans,
CommentPageType:2
},this.commonDataFor19048Report));
break;

case 0:
default:
if(document.body.classList.add(j),e)return H&&console.log("FakeHash on comment"),
void this.showComment();
window.__second_open__&&d.os.ios?this.showComment():(H&&console.log("push comment"),
h.push("comment")),l.report(19048,_extends({
EventType:1,
IsFans:this.isFans,
CommentPageType:1
},this.commonDataFor19048Report));
}
},
showNativeKeyboard:function(){
var t=this;
r.show({
type:"comment",
mask:!0,
disableScroll:!0,
text:this.cmtInputValue,
placeholder:"留言精选后，将对所有人可见，轻触可换行",
maxLength:this.commentLimit,
showRemindWordCount:L.REMIND_WORD_COUNT,
disableScrollAdjustment:!1,
scrollContentY:n.getScrollTop()+this.$refs.writeArea.getBoundingClientRect().top+90,
success:function(e){
var n=N(e),i=n.valid,o=n.content;
i&&t.sendComment({
content:o,
successEnd:function(){
this.cmtInputValue="";
},
fail:function(){
this.cmtInputValue=e;
}
});
},
cancel:function(e){
t.cmtInputValue=e;
},
hide:function(){
t.showCmtInputStatus=!1,document.body.style.removeProperty("margin-bottom"),P&&(P.classList.remove(A),
P.style.removeProperty("margin-top")),L.unlockOrientation();
}
});
},
showCmtInput:function(t){
var e=this,n=L.lockOrientation();
if(this.showCmtInputStatus=!0,r.onlyUseH5Keyboard){
this.__curCmtAddBtn=t.target;
var i=window.getComputedStyle(this.$refs.writeAreaInner),o=i.marginTop,s=i.marginBottom;
this.showCmtInputMask=!0,this.emotionPanelShowStatus=!1,this.writeAreaHeight=this.$refs.writeAreaInner.offsetHeight+parseInt(o,10)+parseInt(s,10)+"px",
this.ariaHidden="false",this.$forceUpdate(),this.isVoiceover||(this.__checkIsVoiceoverTimer=setTimeout(function(){
e.setIsVoiceover({
value:!0
});
},1e3)),u.isIOS?(a.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!1
}),this.$refs.cmtInput.focus()):setTimeout(function(){
return e.$refs.cmtInput.focus();
});
}else r.lastData.keyboard&&r.lastData.cmtInput&&this.scroll2Comment(r.lastData.keyboard+r.lastData.cmtInput,this.$refs.cmtContainer.getBoundingClientRect().top),
n?setTimeout(function(){
return e.showNativeKeyboard();
},300):this.showNativeKeyboard();
},
onCmtInputTouchstart:function(t){
this.emotionPanelShowStatus&&(this.preventMove=!0,this.emotionPanelShowStatus=!1),
this.__inputTouchstart=1===t.touches.length?t.touches[0]:null;
},
onCmtInputTouchmove:function(t){
var e=this;
this.preventMove&&t.preventDefault(),u.isAndroid?setTimeout(function(){
return e.$refs.cmtInput.focus();
}):this.$refs.cmtInput.focus();
},
onCmtInputTouchend:function(){
this.preventMove=!1;
},
onCmtInputPaste:function(t){
var e=t.clipboardData.getData("text"),n=L.getLength(e),i=L.getLength(this.cmtInputValue);
if(i+n>this.commentLimit){
t.preventDefault();
for(var o=this.commentLimit-i,s="",m=0,a=e.length;a>m&&o>0&&(o-=/[^\x00-\xff]/.test(e[m])?1:.5,
!(0>o));m++)s+=e[m];
var r=this.$refs.cmtInput,c=this.cmtInputValue.substring(0,r.selectionStart),d=this.cmtInputValue.substring(r.selectionEnd),l=r.selectionStart+s.length;
this.cmtInputValue=c+s+d,this.onCmtInputInput(),r.scrollTop=r.scrollHeight,r.setSelectionRange(l,l);
}
},
onCmtInputInput:function(){
var t=L.getLength(this.cmtInputValue);
this.cmtSubmitDisabled=0>=t||t>this.commentLimit,this.setCmtTips();
},
onCmtInputKeydown:function(t){
if(!t.altKey&&!t.ctrlKey)switch(t.keyCode){
case 8:
case 9:
case 12:
case 16:
case 17:
case 18:
case 20:
case 27:
case 33:
case 34:
case 35:
case 36:
case 37:
case 38:
case 39:
case 40:
case 45:
case 46:
case 144:
case 175:
case 174:
case 179:
case 173:
case 172:
case 180:
case 170:
break;

default:
L.getLength(this.cmtInputValue)>=this.commentLimit&&t.preventDefault();
}
},
onCmtInputFocus:function(){
u.isIOS&&this.doCmtInputFocus();
},
doCmtInputFocus:function(){
var t=this;
if(!this.isVoiceover){
var e=this.$refs.cmtInput.scrollTop;
this.cmtInputStyle.padding=0,this.cmtInputStyle.height=0,this.showFakeCmtInput=!0,
this.$refs.fakeCmtInput.scrollTop=e,setTimeout(function(){
t.cmtInputStyle={},t.showFakeCmtInput=!1;
},300);
}
r.lastData.keyboard&&!this.emotionPanelShowStatus&&this.scroll2Comment(r.lastData.keyboard);
},
onCmtInputBlur:function(){
var t=this;
u.isIOS&&(this.__cmtInputBlurTimer=setTimeout(function(){
!t.isVoiceover&&t.hideCmtInput(),t.__cmtInputBlurTimer=null;
}));
},
hideCmtInput:function(t){
var e=this;
L.unlockOrientation(),this.$refs.cmtInput.blur(),this.showCmtInputStatus=!1,document.body.style.removeProperty("margin-bottom"),
P&&(P.classList.remove(A),P.style.removeProperty("margin-top")),this.cmtEmotionPanel.hide(),
this.writeAreaHeight=null,this.ariaHidden="true",this.$forceUpdate(),this.__hideCmtWriteMaskTimer&&(clearTimeout(this.__hideCmtWriteMaskTimer),
this.__hideCmtWriteMaskTimer=null),t===!0?this.showCmtInputMask=!1:this.__hideCmtWriteMaskTimer=setTimeout(function(){
e.showCmtInputMask=!1,e.__hideCmtWriteMaskTimer=null;
},500),u.isIOS&&a.invoke("handleMPPageAction",{
action:"opInputAccessoryView",
show:!0
}),this.isVoiceover&&this.__curCmtAddBtn&&(this.__curCmtAddBtn.setAttribute("tabindex","-1"),
this.__curCmtAddBtn.focus(),this.__curCmtAddBtn=null);
},
onKeyboardToolTouchstart:function(t){
var e=t.target;
e===this.$refs.cmtWriteEmotion||e===this.$refs.cmtSubmit&&!this.cmtSubmitDisabled||t.preventDefault();
},
toggleEmotion:function(){
var t=this;
this.__cmtInputBlurTimer&&(clearTimeout(this.__cmtInputBlurTimer),this.__cmtInputBlurTimer=null),
this.cmtEmotionPanel.isShow?(this.emotionPanelShowStatus=!1,u.isAndroid?setTimeout(function(){
return t.$refs.cmtInput.focus();
}):this.$refs.cmtInput.focus()):(this.emotionPanelShowStatus=!0,this.$refs.cmtInput.blur()),
this.cmtEmotionPanel.toggle();
},
onCmtSubmitClick:function(){
var t=this;
if(this.__cmtInputBlurTimer&&(clearTimeout(this.__cmtInputBlurTimer),this.__cmtInputBlurTimer=null),
!this.cmtSubmitDisabled){
var e=N(this.cmtInputValue),n=e.valid,i=e.content;
n&&(this.cmtSubmitDisabled=!0,this.sendComment({
content:i,
successEnd:function(){
t.cmtInputValue="",setTimeout(function(){
t.emotionPanelShowStatus=!1,t.hideCmtInput();
},10);
},
fail:function(){
t.cmtSubmitDisabled=!1;
}
}));
}
},
onCmtAreaTouchmove:function(t){
if(t.target===this.$refs.cmtInput){
var e=t.target;
if(null===this.__inputTouchstart)t.preventDefault();else{
var n=t.changedTouches[0].clientY-this.__inputTouchstart.clientY;
(e.scrollTop<=0&&n>0||e.scrollTop>=e.scrollHeight-e.offsetHeight&&0>n)&&t.preventDefault();
}
}else t.preventDefault();
},
onWindowResize:function(){
if(this.showCmtInputStatus){
var t=0===window.orientation||180===window.orientation?"vertical":"horizontal",e=this.__pageHeight[t],n=c.getInnerHeight();
e>n?r.onlyUseH5Keyboard&&this.doCmtInputFocus():(r.onlyUseH5Keyboard&&!this.emotionPanelShowStatus&&this.hideCmtInput(),
n>e&&(this.__pageHeight[t]=n));
}
},
scroll2Comment:function(t,e){
var n=this;
this.showCmtInputStatus&&this.$nextTick(function(){
void 0===e&&(e=n.$refs.writeArea.getBoundingClientRect().bottom);
var i=n.__pageHeight[0===window.orientation||180===window.orientation?"vertical":"horizontal"],o=e-(i-t),m=Math.abs(o),a=c.getScrollTop(),d=document.body.scrollHeight-a-i;
if(o>d&&(r.onlyUseH5Keyboard||u.isAndroid))document.body.style.marginBottom=(document.body.style.marginBottom?parseInt(document.body.style.marginBottom,10):0)+o-d+"px";else if(0>o&&m>a&&P&&(P.classList.add(A),
P.style.marginTop=(P.style.marginTop?parseInt(P.style.marginTop,10):0)+m-a+"px",
!r.onlyUseH5Keyboard&&u.isIOS))return;
var l={
distance:o,
end:r.onlyUseH5Keyboard&&u.isAndroid?function(){
var e=n.$refs.writeArea.getBoundingClientRect().bottom,i=c.getInnerHeight()-(n.emotionPanelShowStatus?t:0);
Math.abs(e-i)>=3&&s.start({
distance:e-i,
duration:.1
});
}:null
};
150>m?l.speed=300:l.duration=.3,s.start(l);
});
},
setCmtTips:function(t){
t=t||L.getLength(this.cmtInputValue),this.cmtTips=t>=this.commentLimit-L.REMIND_WORD_COUNT&&t<this.commentLimit?"还可以输入"+(this.commentLimit-t)+"个字":t===this.commentLimit?"达到"+this.commentLimit+"字输入上限":t>this.commentLimit?"已超出"+(t-this.commentLimit)+"字":"";
},
addCmtListComment:function(t,e,n){
if(this.canC2cReply){
if(this.$refs.commentDialog.replyData[t]=void 0,"undefined"!=typeof t){
var i=this.$refs.cmtList.getCommentIdx(t);
-1!==i&&this.updateCommentReplyInfo({
commentIdx:i,
key:"max_reply_id",
value:n.reply_id+1
});
}
}else if("undefined"!=typeof t&&"undefined"==typeof e){
var i=this.$refs.myList.getCommentIdx(t);
-1!==i&&this.addComment({
type:"mine",
commentIdx:i,
replyItem:n
});
}else if("undefined"!=typeof t&&"undefined"!=typeof e){
var i=this.$refs.myList.getCommentIdx(t);
if(-1!==i){
var o=this.$refs.myList.getReplyIdx(t,e);
-1!==o&&this.addComment({
type:"mine",
commentIdx:i,
replyIdx:o,
replyItem:n
});
}
}
this.detectComment();
},
praiseCmtListComment:function(t,e,n){
if(this.canC2cReply)this.$refs.commentDialog.setReplyLikeInfo({
contentId:t,
replyId:e,
likeStatus:n
});else if("undefined"!=typeof t&&"undefined"==typeof e){
var i=this.$refs.myList.getCommentIdx(t);
-1!==i&&this.setCommentLike({
type:"mine",
likeStatus:n,
commentIdx:i
});
}else if("undefined"!=typeof t&&"undefined"!=typeof e){
var i=this.$refs.myList.getCommentIdx(t);
if(-1!==i){
var o=this.$refs.myList.getReplyIdx(t,e);
-1!==o&&this.setCommentLike({
type:"mine",
likeStatus:n,
commentIdx:i,
replyIdx:o
});
}
}
},
removeCmtListComment:function(t,e){
if(this.canC2cReply)this.$refs.commentDialog.replyData[t]=void 0;else if("undefined"!=typeof t&&"undefined"==typeof e){
var n=this.$refs.myList.getCommentIdx(t);
-1!==n&&this.removeComment({
type:"mine",
commentIdx:n
});
}else if("undefined"!=typeof t&&"undefined"!=typeof e){
var n=this.$refs.myList.getCommentIdx(t);
if(-1!==n){
var i=this.$refs.myList.getReplyIdx(t,e);
-1!==i&&this.removeComment({
type:"mine",
commentIdx:n,
replyIdx:i
});
}
}
this.detectComment();
},
addMyListComment:function(t,e,n){
!this.canC2cReply&&this.syncCmtListAdd(t,e,n),this.showAllMyList();
},
praiseMyListComment:function(t,e,n){
!this.canC2cReply&&this.syncCmtListPraise(t,e,n);
},
removeMyListComment:function(t,e){
!this.canC2cReply&&this.syncCmtListRemove(t,e),this.detectComment();
},
showCommentDialog:function(t,e){
this.$refs.commentDialog.show(t,e);
},
navShadowClick:function(){
this.$refs.commentDialog.hide();
},
syncCmtListAdd:function(t,e,n){
if("undefined"!=typeof t&&"undefined"==typeof e){
var i=this.$refs.cmtList.getCommentIdx(t);
-1!==i&&this.addComment({
type:"elected",
commentIdx:i,
replyItem:n
});
}else{
var i=this.$refs.cmtList.getCommentIdx(t);
if(-1!==i){
var o=this.$refs.cmtList.getReplyIdx(t,e);
-1!==o&&this.addComment({
type:"elected",
commentIdx:i,
replyIdx:o,
replyItem:n
});
}
}
},
syncCmtListPraise:function(t,e,n){
if("undefined"!=typeof t&&"undefined"==typeof e){
var i=this.$refs.cmtList.getCommentIdx(t);
-1!==i&&this.setCommentLike({
type:"elected",
likeStatus:n,
commentIdx:i
});
}else if("undefined"!=typeof t&&"undefined"!=typeof e){
var i=this.$refs.cmtList.getCommentIdx(t);
if(-1!==i){
var o=this.$refs.cmtList.getReplyIdx(t,e);
-1!==o&&this.setCommentLike({
type:"elected",
likeStatus:n,
commentIdx:i,
replyIdx:o
});
}
}
},
syncCmtListRemove:function(t,e){
if("undefined"!=typeof t&&"undefined"==typeof e){
var n=this.$refs.cmtList.getCommentIdx(t);
-1!==n&&this.removeComment({
type:"elected",
commentIdx:n
});
}else if("undefined"!=typeof t&&"undefined"!=typeof e){
var n=this.$refs.cmtList.getCommentIdx(t);
if(-1!==n){
var i=this.$refs.cmtList.getReplyIdx(t,e);
-1!==i&&this.removeComment({
type:"elected",
commentIdx:n,
replyIdx:i
});
}
}
},
tempBtnClick:function(){
a.invoke("confirmDialog",{
title:"预览状态下无法操作",
contentDesc:"",
confirmText:"确定"
},function(t){
console.log(t);
});
}
})
};
});define("pages_new/appmsg/page_bottom.html.js",[],function(){
return'<div id="page_bottom_area">\n  <!-- 底部广告 -->\n  <!-- <mp-bottom-ad></mp-bottom-ad> -->\n  <!-- 留言模块 -->\n  <mp-comment fetch-before-ext-resp></mp-comment>\n</div>';
});define("common/userGoBack.js",["biz_wap/jsapi/core.js"],function(n){
"use strict";
var e=n("biz_wap/jsapi/core.js"),o=function(){
return e.invoke("closeWindow");
},i=function(){},c=o,a=i,t=i,f=function(n){
e.invoke("handleMPPageAction",{
action:"holdGoBackAction"
}),!n&&e.invoke("handleDeviceInfo",{
action:"enableSwipeBackGesture",
enable:!1
},function(n){
/:ok$/.test(n.err_msg)&&(a(),a=i);
});
},s=function(){
c=o,e.invoke("handleDeviceInfo",{
action:"enableSwipeBackGesture",
enable:!0
},function(n){
/:ok$/.test(n.err_msg)&&(t(),t=i);
});
};
return e.on("onUserGoBack",function(n){
n.userHasGoBack&&(c()===!1?f(!0):s());
}),{
disable:function(n){
c="function"==typeof n.onGoBack?n.onGoBack:o,a="function"==typeof n.onDisable?n.onDisable:i,
t="function"==typeof n.onEnable?n.onEnable:i,f();
},
enable:function(n){
t="function"==typeof n.onEnable?n.onEnable:i,s();
}
};
});define("common/navShadow.js",["biz_wap/jsapi/core.js","common/keyboard.js"],function(a){
"use strict";
var n=a("biz_wap/jsapi/core.js"),o=a("common/keyboard.js"),c="navShadowKey_",e="",t=null;
return n.on("onNavShadowClick",function(a){
o.hide(),e&&a.traceId===e&&"function"==typeof t&&t();
}),{
show:function(){
var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o={
action:"showNavShadow",
color:a.color||"#000000",
alpha:a.alpha||.6
};
a.onClick&&(t=a.onClick,e||(e=c+1*new Date,o.traceId=e)),n.invoke("handleMPPageAction",o,function(n){
/:ok$/.test(n.err_msg)?"function"==typeof a.callback&&a.callback(!0):"function"==typeof a.callback&&a.callback(!1);
});
},
hide:function(){
var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
e="",t=null,n.invoke("handleMPPageAction",{
action:"hideNavShadow"
},function(n){
/:ok$/.test(n.err_msg)?"function"==typeof a.callback&&a.callback(!0):"function"==typeof a.callback&&a.callback(!1);
});
}
};
});define("pages/mod/bottom_modal.html.js",[],function(){
return'<div class="wx_bottom_modal_wrp <#=extClass#>">\n  <div\n    class="weui-half-screen-dialog wx_bottom_modal js_bottom_modal_content"\n    role="dialog"\n    aria-modal="true"\n    aria-hidden="true"\n    tabindex="0"\n    <# if (!autoHeight) { #>\n      style="max-height: none;"\n    <# } else { #>\n      style="max-height: <#=maxHeight#>;"\n    <# } #>\n  >\n    <# if (hasHeader) { #>\n      <div class="weui-half-screen-dialog__hd__wrp">\n        <div class="weui-half-screen-dialog__hd js_bottom_modal_hd">\n          <div class="weui-half-screen-dialog__hd__side">\n            <button class="weui-btn_icon js_close_bottom_modal weui-wa-hotarea">关闭<i class="weui-icon-half-screen-close"></i></button>\n          </div>\n\n          <div class="weui-half-screen-dialog__hd__main">\n            <strong class="weui-half-screen-dialog__title js_bottom_modal_title">标题</strong>\n          </div>\n\n          <div class="weui-half-screen-dialog__hd__side">\n            <# if (hasBtn) { #>\n              <# if (btnSlot) { #>\n                <div role="button" class="js_submit_bottom_modal weui-wa-hotarea">\n                  <#==btnSlot#>\n                </div>\n              <# } else { #>\n                <button class="weui-btn weui-btn_primary weui-btn_xmini js_submit_bottom_modal weui-wa-hotarea"><#=btnText#></button>\n              <# } #>\n            <# } #>\n            <button class="weui-btn_icon" style="display:none;">更多<i class="weui-icon-more"></i></button>\n          </div>\n        </div>\n      </div>\n    <# } #>\n    <div class="weui-half-screen-dialog__bd js_bottom_modal_bd">\n      <div role="alert" class="wx_bottom_modal_msg_wrp js_modal_loading" style="display: none;">\n        <div class="wx_bottom_modal_msg">\n          <i class="weui-loading" role="img" aria-label="加载中"></i>\n        </div>\n      </div>\n      <!-- 上下拉加载loading -->\n      <div role="alert" class="weui-loadmore js_pull_loading" style="display: none;">\n        <i class="weui-loading"></i>\n        <span class="weui-loadmore__tips">正在加载</span>\n      </div>\n\n      <!-- 加载完成的dom，插到js_bottom_modal_bd下 -->\n      <div role="option" class="weui-loadmore weui-loadmore_line weui-loadmore_dot js_modal_end_line" style="display: none;">\n        <div class="weui-hidden_abs">已无更多数据</div>\n        <span class="weui-loadmore__tips"></span>\n      </div>\n    </div>\n    <# if (hasFooter) { #>\n      <div class="weui-half-screen-dialog__ft js_bottom_modal_ft"></div>\n    <# } #>\n  </div>\n  <# if (hasMask) { #>\n    <!-- 透明mask，用于防止点透 -->\n    <div class="wx_bottom_modal_mask_fixed js_bottom_modal_mask_not_click"></div>\n\n    <!-- 有底色的mask -->\n    <div class="weui-mask wx_bottom_modal_mask js_bottom_modal_mask"></div>\n  <# } #>\n</div>\n';
});;define('widget/wx-widget/wx_bottom_modal.css', [], function(require, exports, module) {
	return ".weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-half-screen-dialog{position:fixed;left:0;right:0;bottom:0;min-height:255px;max-height:75%;z-index:5000;line-height:1.4;background-color:#fff;background-color:var(--weui-BG-2);border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden;padding:0 24px;padding:0 calc(24px + constant(safe-area-inset-right)) constant(safe-area-inset-bottom) calc(24px + constant(safe-area-inset-left));padding:0 calc(24px + env(safe-area-inset-right)) env(safe-area-inset-bottom) calc(24px + env(safe-area-inset-left));box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}@media only screen and (max-height:558px){.weui-half-screen-dialog{max-height:none}}.weui-half-screen-dialog__hd{min-height:64px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0}.weui-half-screen-dialog__hd .weui-icon-btn,.weui-half-screen-dialog__hd .weui-btn_icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:inherit}.weui-half-screen-dialog__hd .weui-icon-btn:active,.weui-half-screen-dialog__hd .weui-btn_icon:active{opacity:.5}.weui-half-screen-dialog__hd__side{position:relative;left:-8px}.weui-half-screen-dialog__hd__main{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{text-align:center;padding:0 40px}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{right:-8px;left:auto}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side .weui-icon-btn,.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side .weui-btn_icon{right:0}.weui-half-screen-dialog__title{display:block;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);font-weight:700;font-size:15px}.weui-half-screen-dialog__subtitle{display:block;color:rgba(0,0,0,0.5);color:var(--weui-FG-1);font-size:10px}.weui-half-screen-dialog__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-height:0;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding-bottom:56px;font-size:14px;color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-half-screen-dialog__desc{font-size:17px;font-weight:700;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);line-height:1.4}.weui-half-screen-dialog__tips{padding-top:16px;font-size:14px;color:rgba(0,0,0,0.3);color:var(--weui-FG-2);line-height:1.4}.weui-half-screen-dialog__ft{padding:0 0 64px;text-align:center}.weui-half-screen-dialog__btn-area{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-half-screen-dialog__btn-area .weui-btn{width:184px;padding-left:16px;padding-right:16px}.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2),.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2)+.weui-btn{margin:0 8px;width:136px}.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2):first-child,.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2)+.weui-btn:first-child{margin-left:0}.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2):last-child,.weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2)+.weui-btn:last-child{margin-right:0}.weui-half-screen-dialog__btn-area+.weui-half-screen-dialog__attachment-area{margin-top:24px;margin-bottom:-34px}.weui-half-screen-dialog_btn-wrap .weui-half-screen-dialog__btn-area{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.weui-half-screen-dialog_btn-wrap .weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2),.weui-half-screen-dialog_btn-wrap .weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2)+.weui-btn{width:184px;margin:16px 0 0}.weui-half-screen-dialog_btn-wrap .weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2):first-child,.weui-half-screen-dialog_btn-wrap .weui-half-screen-dialog__btn-area .weui-btn:nth-last-child(n+2)+.weui-btn:first-child{margin-top:0}.weui-half-screen-dialog_large{max-height:none;top:16px}.weui-icon-more{-webkit-mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M5 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm7 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm7 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z'\/%3E%3C\/svg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M5 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm7 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm7 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z'\/%3E%3C\/svg%3E\") no-repeat 50% 50%}.weui-icon-slide-down{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Crect id='dda90263-a290-4594-926f-6aba8cb4779f-a' width='24' height='24' x='0' y='0' rx='12'\/%3E  %3C\/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cmask id='dda90263-a290-4594-926f-6aba8cb4779f-b' fill='%23fff'%3E      %3Cuse xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3C\/mask%3E    %3Cuse fill='%23000' fill-opacity='.05' xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3Cg fill-opacity='.9' mask='url(%23dda90263-a290-4594-926f-6aba8cb4779f-b)'%3E      %3Cpath fill='%23000' d='M11.407 15.464L6.693 10.75l1.179-1.179 4.125 4.125 4.124-4.125L17.3 10.75l-4.714 4.714a.833.833 0 0 1-1.179 0z'\/%3E    %3C\/g%3E  %3C\/g%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Crect id='dda90263-a290-4594-926f-6aba8cb4779f-a' width='24' height='24' x='0' y='0' rx='12'\/%3E  %3C\/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cmask id='dda90263-a290-4594-926f-6aba8cb4779f-b' fill='%23fff'%3E      %3Cuse xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3C\/mask%3E    %3Cuse fill='%23000' fill-opacity='.05' xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3Cg fill-opacity='.9' mask='url(%23dda90263-a290-4594-926f-6aba8cb4779f-b)'%3E      %3Cpath fill='%23000' d='M11.407 15.464L6.693 10.75l1.179-1.179 4.125 4.125 4.124-4.125L17.3 10.75l-4.714 4.714a.833.833 0 0 1-1.179 0z'\/%3E    %3C\/g%3E  %3C\/g%3E%3C\/svg%3E\")}.weui-icon-btn.weui-icon-btn{outline:0;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);border-width:0;background-color:transparent;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);font-size:0;width:auto;height:auto}.weui-icon-btn_goback.weui-icon-btn_goback{color:rgba(0,0,0,0.9);color:var(--weui-FG-0);width:1.2em;height:2.4em;-webkit-mask:url(\"data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat 50% 50%}.weui-icon-btn_close.weui-icon-btn_close{color:rgba(0,0,0,0.9);color:var(--weui-FG-0);width:1.4em;height:2.4em;-webkit-mask:url(\"data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.25%2010.693L6.057%204.5%205%205.557l6.193%206.193L5%2017.943%206.057%2019l6.193-6.193L18.443%2019l1.057-1.057-6.193-6.193L19.5%205.557%2018.443%204.5z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.25%2010.693L6.057%204.5%205%205.557l6.193%206.193L5%2017.943%206.057%2019l6.193-6.193L18.443%2019l1.057-1.057-6.193-6.193L19.5%205.557%2018.443%204.5z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat 50% 50%}body .weui-icon-half-screen-close{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M8 6.943L1.807.75.75 1.807 6.943 8 .75 14.193l1.057 1.057L8 9.057l6.193 6.193 1.057-1.057L9.057 8l6.193-6.193L14.193.75z'\/%3E%3C\/defs%3E%3Cuse fill-opacity='.9' xlink:href='%23a' transform='translate(4 4)' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}body .weui-half-screen-dialog_fold .weui-icon-half-screen-close{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Crect id='dda90263-a290-4594-926f-6aba8cb4779f-a' width='24' height='24' x='0' y='0' rx='12'\/%3E  %3C\/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cmask id='dda90263-a290-4594-926f-6aba8cb4779f-b' fill='%23fff'%3E      %3Cuse xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3C\/mask%3E    %3Cuse fill='%23000' fill-opacity='.05' xlink:href='%23dda90263-a290-4594-926f-6aba8cb4779f-a'\/%3E    %3Cg fill-opacity='.9' mask='url(%23dda90263-a290-4594-926f-6aba8cb4779f-b)'%3E      %3Cpath fill='%23000' d='M11.407 15.464L6.693 10.75l1.179-1.179 4.125 4.125 4.124-4.125L17.3 10.75l-4.714 4.714a.833.833 0 0 1-1.179 0z'\/%3E    %3C\/g%3E  %3C\/g%3E%3C\/svg%3E\")}.weui-loadmore{width:65%;margin:20px auto;text-align:center;font-size:0}.weui-loadmore .weui-loading,.weui-loadmore .weui-primary-loading{margin-right:8px}.weui-loadmore__tips{display:inline-block;vertical-align:middle;font-size:14px;line-height:1.6;color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-loadmore_line{border-top:1px solid rgba(0,0,0,0.1);border-top:1px solid var(--weui-FG-3);margin-top:32px}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-0.9em;padding:0 .55em;background-color:#fff;background-color:var(--weui-BG-2);color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:rgba(0,0,0,0.1);background-color:var(--weui-FG-3);display:inline-block;position:relative;vertical-align:0;top:-0.16em}.weui-loadmore.weui-loadmore_line .weui-loadmore__tips{padding:0 8px}.weui-loadmore.weui-loadmore_dot{width:68px}.weui-loadmore.weui-loadmore_dot .weui-loadmore__tips{padding:0 8px}.weui-loadmore_default.weui-loadmore{width:auto;line-height:1.4;margin:0 56px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-loadmore_default.weui-loadmore_line{margin-top:0;margin-bottom:0;border:0}.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{content:\"\";width:24px;height:1px;background:rgba(0,0,0,0.1)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{top:auto;padding:0 8px;background:transparent;color:rgba(0,0,0,0.3);line-height:inherit}.weui-loadmore_default.weui-loadmore_dot{margin-top:0;margin-bottom:0}.weui-loadmore_default.weui-loadmore_dot .weui-loadmore__tips{line-height:.5}@media(prefers-color-scheme:dark){.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{background:rgba(255,255,255,0.1)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{color:rgba(255,255,255,0.3)}}.wx_bottom_modal{-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;visibility:hidden}.wx_bottom_modal.weui-half-screen-dialog{overflow:initial}.wx_bottom_modal .weui-half-screen-dialog__hd__side{min-width:64px}.wx_bottom_modal .weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{padding:0}.wx_bottom_modal .weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{text-align:right}.wx_bottom_modal .weui-half-screen-dialog__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;position:relative;-ms-scroll-chaining:none;overscroll-behavior:contain}.wx_bottom_modal .weui-btn__word-wrp{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-tap-highlight-color:rgba(0,0,0,0)}.wx_bottom_modal .album_keep_read_item{pointer-events:auto!important}.wx_bottom_modal_wrp>.wx_bottom_modal_mask_fixed,.wx_bottom_modal_wrp>.weui-mask{visibility:hidden}.wx_bottom_modal_show>.wx_bottom_modal_mask_fixed,.wx_bottom_modal_show>.weui-mask{visibility:visible}.wx_bottom_modal_show .weui-half-screen-dialog{-webkit-transform:translateY(0);transform:translateY(0)}.wx_bottom_modal_show.wx_bottom_modal_right .weui-half-screen-dialog{-webkit-transform:translateX(0);transform:translateX(0)}.wx_bottom_modal_right .weui-half-screen-dialog{-webkit-transform:translateX(100%);transform:translateX(100%)}.wx_bottom_modal_form .wx_bottom_modal{-webkit-transition:none;transition:none;opacity:0}.wx_bottom_modal_msg_wrp{height:100%}.wx_bottom_modal_msg{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:20px;box-sizing:border-box;color:rgba(0,0,0,0.9);font-size:14px}.wx_bottom_modal_msg .weui-loading{width:20px;height:20px}.weui-mask.wx_bottom_modal_mask{top:-100px}.wx_bottom_modal_mask_fixed{width:100%;height:100%;position:fixed;top:0;background-color:transparent}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp .weui-half-screen-dialog__hd{margin-bottom:-1px}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp:after{content:\"\";display:block;height:1px;background:rgba(0,0,0,0.1);-webkit-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;position:relative;bottom:0;z-index:1}.weui-btn__word-wrp{font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;right:2px}.weui-btn__word{color:rgba(0,0,0,0.5)}.weui_right_arrow{display:inline-block;vertical-align:middle;font-size:10px;width:1em;height:2em;margin-left:4px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}.wx_page_no_scroll{height:100%;overflow:hidden}@media(prefers-color-scheme:dark){.weui-btn__word{color:rgba(255,255,255,0.5)}.weui_right_arrow{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cpath fill='%23FFFFFF' fill-opacity='.5' fill-rule='evenodd' d='M2.045 5.484l.884-.884 4.816 4.816a.83.83 0 0 1 0 1.177l-4.816 4.816-.884-.884 4.52-4.52-4.52-4.521z'\/%3E%3C\/svg%3E\")}.wx_bottom_modal .weui-loadmore__tips{color:rgba(255,255,255,0.5)}.wx_bottom_modal_msg{color:rgba(255,255,255,0.8)}.weui-half-screen-dialog_headline .weui-half-screen-dialog__hd__wrp:after{background:rgba(255,255,255,0.05)}}";
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
function t(t,r){
if(null===t)return{};
for(var o={},e=Object.keys(t),n=0;n<e.length;n++){
var i=e[n];
r.indexOf(i)>=0||(o[i]=t[i]);
}
return o;
}
function r(t){
var r=[],o=null;
for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.push(o+"="+encodeURIComponent(t[o]));
return r.join("&");
}
var o=[],e="/mp/jsmonitor?#wechat_redirect",n={};
return window.__monitor?window.__monitor:(n._reportOptions={
idkey:{}
},n.getReportData=function(t){
t=t||{};
var r,e,i=n._reportOptions.idkey||{},p=null;
try{
for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]&&o.push(p+"_"+i[p]);
}catch(a){
return!1;
}
if(0===o.length)return!1;
try{
var c=n._reportOptions;
if(null!==c&&void 0!==c)for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);
}catch(a){
r={};
}
return r.idkey=o.join(";"),r.t=Math.random(),t.remove!==!1&&(o=[],n._reportOptions={
idkey:{}
}),r;
},n.setLogs=function(r){
var o=r.id,e=r.key,i=r.value,p=t(r,["id","key","value"]),a=n._reportOptions.idkey||{},c=o+"_"+e;
a[c]?a[c]+=i:a[c]=i,n._reportOptions.idkey=a;
try{
if(null!==p&&void 0!==p)for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n._reportOptions[s]=p[s]);
}catch(u){
console.log(u);
}
return n;
},n.setAvg=function(t,r,o){
var e=n._reportOptions.idkey||{},i=t+"_"+r,p=t+"_"+(r-1);
return e[i]?e[i]+=o:e[i]=o,e[p]?e[p]+=1:e[p]=1,n._reportOptions.idkey=e,n;
},n.setSum=function(t,r,o){
var e=n._reportOptions.idkey,i=t+"_"+r;
return e[i]?e[i]+=o:e[i]=o,n._reportOptions.idkey=e,n;
},n.send=function(t,o,i){
t!==!1&&(t=!0);
var p=n.getReportData();
i=i||"",p&&(o&&o instanceof Function?o({
url:i+e,
type:"POST",
mayAbort:!0,
data:p,
async:t,
timeout:2e3
}):(new Image).src=i+"/mp/jsmonitor?"+r(p)+"#wechat_redirect");
},window.__monitor=n,n);
});define("biz_wap/utils/setMpInfo.js",["biz_wap/jsapi/core.js"],function(n,r,t){
"use strict";
function e(n,r){
a(i,n),o.invoke("currentMpInfo",i,r);
}
var o=n("biz_wap/jsapi/core.js"),i={},a=null;
a="function"==typeof Object.assign?Object.assign:function(){
var n=Array.prototype.slice.call(arguments);
if(null==n[0])throw new TypeError("Cannot convert undefined or null to object");
for(var r=Object(n[0]),t=1;t<n.length;t++){
var e=n[t];
if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);
}
return r;
},t.exports={
currentMpInfo:e
};
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);
}
return e;
};
define("pages/utils.js",["appmsg/appmsg_report.js","appmsg/emotion/weemoji.js","pages/version4video.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","album/utils/report.js","common/utils.js","biz_common/utils/url/parse.js","appmsg/i18n.js"],function(e){
"use strict";
function n(e){
if(!e)return null;
var n=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return n?n[2].split("#")[0]:null;
}
function t(e){
if(window.hasChannelTwoTab&&A.isNewNativePage()){
var n=void 0;
n=document.getElementById("tab").offsetTop-window.minHeight;
var t=document.body.offsetHeight,i=F+n;
if(i>t){
var o=n+F-document.body.offsetHeight,r=document.createElement("div");
r.setAttribute("class","empty_comment_element"),r.style.cssText="height: "+o+"px;",
document.getElementById(e).appendChild(r);
}
window.minMountHeight=i;
}
}
function i(){
E.on(window,"load",function(){
!window.__networkType&&z.inWechat&&!function(){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
I.invoke("getNetworkType",{},function(n){
window.__networkType=e[n.err_msg];
});
}();
},!1);
}
function o(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
appId:e.appId,
img_url:e.img_url,
img_width:e.img_width,
img_height:e.img_height,
link:e.link.replace(/<br\/>/g,"\n"),
desc:e.desc.replace(/<br\/>/g,"\n"),
title:e.title
};
i(),/#wechat_redirect/.test(n.link)||(n.link+="#wechat_redirect");
var t="",o={
url:n.link,
actionType:0
},r=B;
e.isAlbum?(t="album",n=_extends({
album_id:e.album_id,
album_type:e.album_type
},n),o=_extends({
albumId:e.album_id,
albumType:e.album_type
},o)):"function"==typeof e.shareReport&&(r=function(n,t){
return e.shareReport(t.actionType);
}),I.on("menu:share:appmessage",function(i){
var a=void 0;
if(i&&"favorite"===i.scene?(a=24,n.link=Q(n.link,"scene",G[1])):(a=1,n.link=Q(n.link,"scene",G[0])),
"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:appmessage",n)||n;
}catch(s){}
o.url=n.link,o.actionType=a,r(t,o),I.invoke("sendAppMessage",n);
}),I.on("menu:share:timeline",function(){
if(n.link=Q(n.link,"scene",G[2]),o.url=n.link,o.actionType=2,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:timeline",n)||n;
}catch(i){}
r(t,o),I.invoke("shareTimeline",n);
}),I.on("menu:share:weiboApp",function(){
if(n.link=Q(n.link,"scene",G[3]),o.url=n.link,o.actionType=3,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:weiboApp",n)||n;
}catch(i){}
r(t,o),I.invoke("shareWeiboApp",{
img_url:n.img_url,
link:n.link,
title:n.title
});
}),I.on("menu:share:facebook",function(){
if(n.link=Q(n.link,"scene",G[4]),o.url=n.link,o.actionType=7,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:facebook",n)||n;
}catch(i){}
r(t,o),I.invoke("shareFB",n);
}),I.on("menu:share:QZone",function(){
if(n.link=Q(n.link,"scene",G[5]),o.url=n.link,o.actionType=5,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:QZone",n)||n;
}catch(i){}
r(t,o),I.invoke("shareQZone",n);
}),I.on("menu:share:qq",function(){
if(n.link=Q(n.link,"scene",G[6]),o.url=n.link,o.actionType=5,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:qq",n)||n;
}catch(i){}
r(t,o),I.invoke("shareQQ",n);
}),I.on("menu:share:email",function(){
if(n.link=Q(n.link,"scene",G[7]),o.url=n.link,o.actionType=5,"function"==typeof e.beforeShare)try{
n=e.beforeShare("menu:share:email",n)||n;
}catch(i){}
r(t,o),I.invoke("sendEmail",{
content:n.link,
title:n.title
});
});
}
function r(e){
for(var n=window.location.href,t=n.indexOf("?"),i=n.substr(t+1),o=i.split("&"),r=0;r<o.length;r++){
var a=o[r].split("=");
if(a[0].toUpperCase()==e.toUpperCase())return a[1];
}
return"";
}
function a(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2];
T.isWechat&&(T.isIOS||T.isAndroid)?I.invoke("profile",n,t):location.href="/mp/profile_ext?action=home&__biz="+e.biz+"&scene="+e.scene+"#wechat_redirect";
}
function s(e,n){
I.invoke("createWebViewForFastLoad",{
scene:1
},function(){
e.forEach(function(e){
I.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:5,
url:e[n]
}]
},function(e){
console.log(e);
});
});
});
}
function c(e,n,t){
var i=void 0;
return function(){
var o=this,r=arguments,a=function(){
i=null,t||e.apply(o,r);
},s=t&&!i;
clearTimeout(i),i=setTimeout(a,n),s&&e.apply(o,r);
};
}
function l(e){
var n=parseInt(e,10),t=0,i=0;
n>60&&(t=parseInt(n/60,10),n=parseInt(n%60,10),t>60&&(i=parseInt(t/60,10),t=parseInt(t%60,10))),
10>n&&(n="0"+n);
var o=":"+n;
return t>0?(10>t&&(t="0"+t),o=t+o):o="00"+o,i>0&&(0===parseInt(i,10)?i="":10>i&&(i="0"+i),
o=""+i+":"+o),o;
}
function u(e){
if("en"===window.LANG)return O.dealLikeReadShow_en(e);
var n="";
if(parseInt(e,10)>1e5)n="10万+";else if(parseInt(e,10)>1e4&&parseInt(e,10)<=1e5){
var t=""+parseInt(e,10)/1e4,i=t.indexOf(".");
n=-1===i?t+"万":t.substr(0,i)+"."+t.charAt(i+1)+"万";
}else n=0===parseInt(e,10)?"":e||"";
return n;
}
function m(e,n){
var t=void 0,i=void 0;
return function(){
var o=this,r=arguments,a=+new Date;
t&&t+n>a?(clearTimeout(i),i=setTimeout(function(){
t=a,e.apply(o,r);
},n)):(t=a,e.apply(o,r));
};
}
function d(){
var e=0,n=0,t=0;
return document.body&&(n=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),
e=n-t>0?n:t;
}
function p(){
var e=0,n=void 0,t=void 0;
return document.body&&(n=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),
e=n-t>0?n:t;
}
function f(){
var e=0;
return e="CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function g(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=location.origin+"/mp/profile_ext?action=home&real_type=43&__biz="+e.biz+"&scene="+e.scene+"#wechat_redirect";
L(n,!0);
}
function h(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.albumLink.replace("#wechat_redirect","")+("&scene="+e.scene+"&is_first_screen=1&subscene="+e.subscene+"&vid="+e.vid+"&count="+(e.pageCount?e.pageCount:3)+"&from_msgid="+(e.curMsgid?e.curMsgid:"")+"&from_itemidx="+(e.curItemidx?e.curItemidx:"")+"&scenenote="+e.scenenote+"#wechat_redirect");
L(n,!0);
}
function w(e){
return e.getBoundingClientRect().top;
}
function v(e){
return e.getBoundingClientRect().height;
}
function b(){
return d()+f()+30>=p();
}
function _(e,n){
return C.getQuery("__biz",e)+"_"+C.getQuery("mid",e)+"_"+C.getQuery("idx",e)+"_"+n;
}
function y(e,n){
var t="en"===window.LANG,i=t?"k":"万",o="",r=1e4*n,a=t?10*n:n;
if(e=parseInt(e,10),e>r)o=a+i+"+";else if(e>=1e4&&r>=e){
var s=""+(t?e/1e3:e/1e4),c=s.indexOf(".");
o=-1===c?s+i:s.substr(0,c)+"."+s.charAt(c+1)+i;
}else o=e;
return o||0;
}
function k(e,n){
if(n.useSwitchVideo||A.isNativePage())I.invoke("handleMPPageAction",_extends({
action:"switchVideo",
scene:n.clickScene,
channelSessionId:window.channel_session_id,
landingType:window.isFromVideoChannel?1:2,
subscene:n.clickSubScene
},e),function(e){
console.log(JSON.stringify(e));
});else if(n.isWcSlPlayerTailIframe&&window.top!==window)window.parent.postMessage({
__wcSlPlayerLoadTailRelateVideo__:e.url
},document.location.protocol+"//mp.weixin.qq.com");else if(!window.__failConfigWxOpen&&A.isWcSlPage())n.leaveReport(),
A.loadNewPageKeepingHistoryStackIfSecOpen(e.url);else{
console.log("==================JSAPI.invoke openWebViewUseFastLoad",window.__failConfigWxOpen,A.isWcSlPage());
var t=n.target.getElementsByClassName("js_relate_cover_img")[0],i=window.getComputedStyle(t),o=t.getBoundingClientRect(),r=document.createElement("canvas");
r.style.width=i.width,r.style.height=i.height,r.width=parseFloat(i.width),r.height=parseFloat(i.height);
var a=r.getContext("2d"),s="";
try{
a.drawImage(t,0,0,o.width,o.height),s=r.toDataURL();
}catch(c){
console.error(c);
}
T.isAndroid&&(s=""),I.invoke("openWebViewUseFastLoad",_extends({
scene:n.clickScene,
item_show_type:5,
openType:0,
subscene:n.clickSubScene,
channelSessionId:window.channel_session_id,
currentInfo:{
url:e.cover,
data:s,
pos:{
x:o.left-parseFloat(i.paddingLeft)-parseFloat(i.borderLeftWidth),
y:o.top-parseFloat(i.paddingTop)-parseFloat(i.borderTopWidth),
width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth),
height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)
}
}
},e),function(t){
console.log(t),t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&I.invoke("openUrlWithExtraWebview",{
url:e.url,
openType:1
},function(t){
t&&t.err_msg&&-1===t.err_msg.indexOf("ok")&&(n.leaveReport(),window.location.href=e.url);
});
});
}
}
var S=e("appmsg/appmsg_report.js"),x=e("appmsg/emotion/weemoji.js"),W=x.EmojiData||[],j=e("pages/version4video.js"),T=e("biz_wap/utils/mmversion.js"),I=e("biz_wap/jsapi/core.js"),E=e("biz_common/dom/event.js"),M=e("album/utils/report.js"),A=e("common/utils.js"),C=e("biz_common/utils/url/parse.js"),O=e("appmsg/i18n.js"),F=A.getInnerHeight(),P=A.getInnerWidth(),z={
inWechat:j.device.inWechat,
windowWechat:/WindowsWechat/i.test(navigator.userAgent),
macWechat:/wechat.*mac os/i.test(navigator.userAgent),
emojiImg:'<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #style#" alt="#name#">',
emojiDataMap:{}
};
!function(){
for(var e=0,n=W.length;n>e;e++){
var t=W[e];
t.cn&&!z.emojiDataMap[t.cn]&&(z.emojiDataMap[t.cn]={
index:e
}),t.hk&&!z.emojiDataMap[t.hk]&&(z.emojiDataMap[t.hk]={
index:e
}),t.us&&!z.emojiDataMap[t.us]&&(z.emojiDataMap[t.us]={
index:e
});
}
}();
var R=function(e){
return/\[[^\[\]]+\]/.test(e)?e.replace(/\[[^\[\]]+\]/g,function(e){
if(z.emojiDataMap[e]&&W[z.emojiDataMap[e].index]){
var n=W[z.emojiDataMap[e].index];
return z.emojiImg.replace("#name#",e).replace("#style#",n.style);
}
return e;
}):e;
},L=function(e,n){
z.inWechat?z.windowWechat||z.macWechat?window.parent.location.href=e:I.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(n===!0?window.parent.open(e):window.parent.location.href=e);
}):n===!0?window.open(e):location.href=e;
},N=function(){
!z.inWechat||z.windowWechat||z.macWechat?window.close():I.invoke("closeWindow",function(e){
-1==e.err_msg.indexOf("ok")&&window.close();
});
},q=function(e){
return document.getElementById(e);
},B=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
"album"===e&&M.shareReport(n);
},D=function(e,n){
return(n||document).getElementsByClassName(e);
},H=function(e){
return(""+(e||"")).replace(/^\s+|\s+$/g,"");
},U=function(e,n){
return(n||document).querySelector(e);
},V=function(e,n){
return(n||document).querySelectorAll(e);
},Q=function(e,n,t){
var i=new RegExp(n+"=[^&]*","gi"),o=n+"="+t;
return i.test(e)?e.replace(i,o):e.replace(/(#.*)?$/,""+(e.indexOf("?")>-1?"&":"?")+o+"$1");
},G=[1,24,2,3,43,22,23,5],$=null,Z=function(e){
var t=e.$container;
t&&!T.isInMiniProgram&&($&&E.off(t,"tap",$),E.on(t,"tap",".js_go_profile",$=function(t){
var i=t.delegatedTarget;
i&&!function(){
var t=i.getAttribute("data-biz")||e.biz||window.biz||"";
if("function"==typeof e.beforeGo2Profile&&e.beforeGo2Profile(i),1==window.isprofileblock)I.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+t+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+t+"#wechat_redirect");
});else{
var o=i.getAttribute("data-scene")||e.profile_scene||"";
S.profileReport({
isnew:0,
title:e.title||"",
item_show_type:e.item_show_type||""
}),console.log("channelSessionId"+n("channel_session_id")),I.invoke("profile",{
username:e.user_name,
profileReportInfo:"",
scene:o+"",
channelSessionId:n("channel_session_id"),
subscene:e.subscene,
tabType:e.tabType||1
},function(){});
}
}();
}));
},J=function(e){
var n=arguments.length<=1||void 0===arguments[1]?.5:arguments[1],t=arguments.length<=2||void 0===arguments[2]?"vertical":arguments[2],i=arguments.length<=3||void 0===arguments[3]?window:arguments[3];
if(!e)return!1;
var o=!1,r=0,a=0,s=!1,c=!1,l=i===i.window?P:i.getBoundingClientRect().width,u=i===i.window?F:i.getBoundingClientRect().height;
switch("number"==typeof n?(r=n,a=n):(r=n.vertical,a=n.horizontal),t){
case"vertical":
s=!0;
break;

case"horizontal":
c=!0;
break;

case"all":
s=!0,c=!0;
}
var m=e.getBoundingClientRect();
if(s){
var d=m.height*r;
m.bottom>d&&m.top<u-d&&(o=!0);
}
if(!c)return o;
if(s&&!o)return o;
var p=m.width*a;
return o=m.right>p&&m.left<l-p?!0:!1;
},K=function(e,n){
for(;e;){
if(e===n)return!0;
e=e.parentNode;
}
return!1;
},X=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?"webview":arguments[2];
if(e){
/^http/.test(e)||(e=location.protocol+"//"+location.host+e);
var i=(-1===e.indexOf("?")?"?":"&")+Object.keys(n).map(function(e){
return e+"="+n[e];
}).join("&"),o=e.indexOf("#");
switch(-1===o?e+=i+"#wechat_redirect":e=e.slice(0,o)+i+e.slice(o),t){
case"webview":
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(T.isIOS||T.isAndroid||T.isWp)?I.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(n){
-1===n.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
break;

case"href":
default:
location.href=e;
}
}
},Y=function(e){
if(!e.length)return{};
var n=e.indexOf("?"),t={};
return n>-1&&e.slice(n+1,e.indexOf("#")>-1?e.indexOf("#"):void 0).split("&").forEach(function(e){
if(e){
var n=e.indexOf("=");
n>-1?t[e.slice(0,n)]=e.slice(n+1):t[e]="";
}
}),t;
},en=function(){
var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?1:arguments[1];
if("number"!=typeof e||"number"!=typeof n)throw new Error(e+" and "+n+" should be a number.");
var t={
value:0,
unit:""
},i=1e4,o=["","万","亿","万亿"],r=0;
return"en"===window.LANG&&(i=1e3,o=["","k","m","b"]),i>e?(t.value=e,t.unit=""):(r=Math.floor(Math.log(e)/Math.log(i)),
t.value=(e/Math.pow(i,r)).toFixed(n),t.unit=o[r]),t.value+t.unit;
},nn=function(e){
e=e||document.body;
var n=document.createElement("div");
n.style.width="1000em",e.appendChild(n);
var t=n.offsetWidth/1e3;
return e.removeChild(n),t;
},tn=function(){
var e=document.createElement("style");
return e.innerHTML="* { -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }",
{
enableSelect:function(){
document.head.contains(e)&&document.head.removeChild(e);
},
disableSelect:function(){
document.head.appendChild(e);
}
};
}(),on=tn.enableSelect,rn=tn.disableSelect;
return{
jumpUrl:L,
closeWin:N,
trim:H,
getId:q,
qs:U,
qsAll:V,
inWechat:z.inWechat,
windowWechat:z.windowWechat,
macWechat:z.macWechat,
emojiFormat:R,
getParam:n,
go2ProfileEvent:Z,
prepareNativePage:s,
debounce:c,
throttle:m,
formatReadNum:u,
formatSeconds:l,
setTwoTabHeight:t,
getByClass:D,
getScrollTop:d,
getScrollHeight:p,
getWindowHeight:f,
shareMessage:o,
getElementTop:w,
formatAlbumnReadNum:y,
getElementHeight:v,
getQuery:r,
openAllVideoPage:g,
getNetWorkType:i,
getMoreVideoInfo:_,
isPageEnd:b,
openAlbumPage:h,
switchVideo:k,
checkExposedStatus:J,
isParent:K,
goUrl:X,
changeURLArg:Q,
getUrlParamsMap:Y,
numFormat2Unit:en,
goProfile:a,
getDefaultFontSize:nn,
enableSelect:on,
disableSelect:rn
};
});define("appmsg/like_profile_tpl.html.js",[],function(){
return'<!-- 关注 -->\n<!-- 显示：去掉wx_follow_hide，并获取function_mod_inner的高度，赋值给function_mod即可-->\n<div class="wx_follow_context wx_follow_hide" id="js_like_profile_bar">\n    <div class="function_mod js_function_mod js_wx_tap_highlight wx_tap_cell">\n        <div class="function_mod_inner js_function_mod_inner">\n          <div class="function_hd">关注以获取最新消息</div>\n          <div class="function_bd">\n            <div class="wx_follow_media weui-flex {if !orignalNum && !friendSubscribeCount}weui-flex_align-center{/if}">\n              <div class="wx_follow_hd">\n                <img class="wx_follow_avatar" src="{roundHeadImg}" alt="">\n              </div>\n              <div class="wx_follow_bd weui-flex__item">\n                <div class="wx_follow_info">\n                  <div class="wx_follow_nickname" role="link"\n                    id="js_wx_follow_nickname"\n                    aria-labelledby="js_wx_follow_nickname"\n                    aria-describedby="js_wx_follow_tips"\n                    >{nickname}</div>\n                  <div class="wx_follow_tips" id="js_wx_follow_tips" aria-hidden="true">\n                    {if orignalNum}\n                    <span class="wx_follow_tips_meta">{orignalNum}篇原创内容</span>\n                    {/if}\n                    {if friendSubscribeCount}\n                    <span class="wx_follow_tips_meta">{friendSubscribeCount}位朋友关注</span>\n                    {/if}\n                  </div>\n                </div>\n              </div>\n              <div class="wx_follow_ft">\n                <div class="wx_follow_opr">\n                  <button class="weui-btn weui-btn_primary weui-btn_xmini weui-wa-hotarea" type="button" id="js_focus"><i class="weui-icon-filled-add"></i>关注</button>\n                  <button class="weui-btn weui-btn_primary weui-btn_xmini weui-btn_disabled" type="button" id="js_already_focus" style="display: none;">已关注</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>\n';
});define("biz_common/template-2.0.1-cmd.js",[],function(){
"use strict";
var e=function(n,t){
return e["object"==typeof t?"render":"compile"].apply(e,arguments);
};
return window.template=e,function(e,n){
e.version="2.0.1",e.openTag="<#",e.closeTag="#>",e.isEscape=!0,e.isCompress=!1,e.parser=null,
e.render=function(e,n){
var t=r(e);
return void 0===t?o({
id:e,
name:"Render Error",
message:"No Template"
}):t(n);
},e.compile=function(n,r){
function a(t){
try{
return new l(t)+"";
}catch(i){
return u?(i.id=n||r,i.name="Render Error",i.source=r,o(i)):e.compile(n,r,!0)(t);
}
}
var c=arguments,u=c[2],s="anonymous";
"string"!=typeof r&&(u=c[1],r=c[0],n=s);
try{
var l=i(r,u);
}catch(p){
return p.id=n||r,p.name="Syntax Error",o(p);
}
return a.prototype=l.prototype,a.toString=function(){
return l.toString();
},n!==s&&(t[n]=a),a;
},e.helper=function(n,t){
e.prototype[n]=t;
},e.onerror=function(e){
var t="[template]:\n"+e.id+"\n\n[name]:\n"+e.name;
e.message&&(t+="\n\n[message]:\n"+e.message),e.line&&(t+="\n\n[line]:\n"+e.line,
t+="\n\n[source]:\n"+e.source.split(/\n/)[e.line-1].replace(/^[\s\t]+/,"")),e.temp&&(t+="\n\n[temp]:\n"+e.temp),
n.console&&console.error(t);
};
var t={},r=function(r){
var o=t[r];
if(void 0===o&&"document"in n){
var i=document.getElementById(r);
if(i){
var a=i.value||i.innerHTML;
return e.compile(r,a.replace(/^\s*|\s*$/g,""));
}
}else if(t.hasOwnProperty(r))return o;
},o=function(n){
function t(){
return t+"";
}
return e.onerror(n),t.toString=function(){
return"{Template Error}";
},t;
},i=function(){
e.prototype={
$render:e.render,
$escape:function(e){
return"string"==typeof e?e.replace(/&(?![\w#]+;)|[<>"']/g,function(e){
return{
"<":"&#60;",
">":"&#62;",
'"':"&#34;",
"'":"&#39;",
"&":"&#38;"
}[e];
}):e;
},
$string:function(e){
return"string"==typeof e||"number"==typeof e?e:"function"==typeof e?e():"";
}
};
var n=Array.prototype.forEach||function(e,n){
for(var t=this.length>>>0,r=0;t>r;r++)r in this&&e.call(n,this[r],r,this);
},t=function(e,t){
n.call(e,t);
},r="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",o=/\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,i=/[^\w$]+/g,a=new RegExp(["\\b"+r.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),c=/\b\d[^,]*/g,u=/^,+|,+$/g,s=function(e){
return e=e.replace(o,"").replace(i,",").replace(a,"").replace(c,"").replace(u,""),
e=e?e.split(/,+/):[];
};
return function(n,r){
function o(n){
return g+=n.split(/\n/).length-1,e.isCompress&&(n=n.replace(/[\n\r\t\s]+/g," ")),
n=n.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n"),n=w[1]+"'"+n+"'"+w[2],
n+"\n";
}
function i(n){
var t=g;
if(p?n=p(n):r&&(n=n.replace(/\n/g,function(){
return g++,"$line="+g+";";
})),0===n.indexOf("=")){
var o=0!==n.indexOf("==");
if(n=n.replace(/^=*|[\s;]*$/g,""),o&&e.isEscape){
var i=n.replace(/\s*\([^\)]+\)/,"");
$.hasOwnProperty(i)||/^(include|print)$/.test(i)||(n="$escape($string("+n+"))");
}else n="$string("+n+")";
n=w[1]+n+w[2];
}
return r&&(n="$line="+t+";"+n),a(n),n+"\n";
}
function a(e){
e=s(e),t(e,function(e){
h.hasOwnProperty(e)||(c(e),h[e]=!0);
});
}
function c(e){
var n;
"print"===e?n=O:"include"===e?(y.$render=$.$render,n=j):(n="$data."+e,$.hasOwnProperty(e)&&(y[e]=$[e],
n=0===e.indexOf("$")?"$helpers."+e:n+"===undefined?$helpers."+e+":"+n)),m+=e+"="+n+",";
}
var u=e.openTag,l=e.closeTag,p=e.parser,f=n,d="",g=1,h={
$data:!0,
$helpers:!0,
$out:!0,
$line:!0
},$=e.prototype,y={},m="var $helpers=this,"+(r?"$line=0,":""),v="".trim,w=v?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],b=v?"if(content!==undefined){$out+=content;return content}":"$out.push(content);",O="function(content){"+b+"}",j="function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);"+b+"}";
t(f.split(u),function(e){
e=e.split(l);
var n=e[0],t=e[1];
1===e.length?d+=o(n):(d+=i(n),t&&(d+=o(t)));
}),f=d,r&&(f="try{"+f+"}catch(e){e.line=$line;throw e}"),f="'use strict';"+m+w[0]+f+"return new String("+w[3]+")";
try{
var E=new Function("$data",f);
return E.prototype=y,E;
}catch(T){
throw T.temp="function anonymous($data) {"+f+"}",T;
}
};
}();
e.openTag="{",e.closeTag="}",e.parser=function(n){
n=n.replace(/^\s/,"");
var t=n.split(" "),r=t.shift(),o=e.keywords,i=o[r];
return i&&o.hasOwnProperty(r)?(t=t.join(" "),n=i.call(n,t)):e.prototype.hasOwnProperty(r)?(t=t.join(","),
n="=="+r+"("+t+");"):(n=n.replace(/[\s;]*$/,""),n="="+n),n;
},e.keywords={
"if":function(e){
return"if("+e+"){";
},
"else":function(e){
return e=e.split(" "),e="if"===e.shift()?" if("+e.join(" ")+")":"","}else"+e+"{";
},
"/if":function(){
return"}";
},
each:function(e){
e=e.split(" ");
var n=e[0]||"$data",t=e[1]||"as",r=e[2]||"$value",o=e[3]||"$index",i=r+","+o;
return"as"!==t&&(n="[]"),"$each("+n+",function("+i+"){";
},
"/each":function(){
return"});";
},
echo:function(e){
return"print("+e+");";
},
include:function(e){
e=e.split(" ");
var n=e[0],t=e[1],r=n+(t?","+t:"");
return"include("+r+");";
}
},e.helper("$each",function(e,n){
var t=Array.isArray||function(e){
return"[object Array]"===Object.prototype.toString.call(e);
};
if(t(e))for(var r=0,o=e.length;o>r;r++)n.call(e,e[r],r,e);else for(r in e)n.call(e,e[r],r);
});
}(e,window),e;
});define("tpl/appmsg/loading.html.js",[],function(){
return'<div style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content"></p>\n  </div>\n</div>';
});define("biz_common/base64.js",[],function(r,t,n){
"use strict";
var e,c="2.1.9";
if("undefined"!=typeof n&&n.exports)try{}catch(o){}
var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(r){
for(var t={},n=0,e=r.length;e>n;n++)t[r.charAt(n)]=n;
return t;
}(u),h=String.fromCharCode,i=function(r){
if(r.length<2){
var t=r.charCodeAt(0);
return 128>t?r:2048>t?h(192|t>>>6)+h(128|63&t):h(224|t>>>12&15)+h(128|t>>>6&63)+h(128|63&t);
}
var t=65536+1024*(r.charCodeAt(0)-55296)+(r.charCodeAt(1)-56320);
return h(240|t>>>18&7)+h(128|t>>>12&63)+h(128|t>>>6&63)+h(128|63&t);
},f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,A=function(r){
return r.replace(f,i);
},d=function(r){
var t=[0,2,1][r.length%3],n=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),e=[u.charAt(n>>>18),u.charAt(n>>>12&63),t>=2?"=":u.charAt(n>>>6&63),t>=1?"=":u.charAt(63&n)];
return e.join("");
},g=function(r){
return r.replace(/[\s\S]{1,3}/g,d);
},s=e?function(r){
return(r.constructor===e.constructor?r:new e(r)).toString("base64");
}:function(r){
return g(A(r));
},C=function(r,t){
return t?s(String(r)).replace(/[+\/]/g,function(r){
return"+"==r?"-":"_";
}).replace(/=/g,""):s(String(r));
},l=function(r){
return C(r,!0);
},p=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),S=function(r){
switch(r.length){
case 4:
var t=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),n=t-65536;
return h((n>>>10)+55296)+h((1023&n)+56320);

case 3:
return h((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));

default:
return h((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1));
}
},b=function(r){
return r.replace(p,S);
},v=function(r){
var t=r.length,n=t%4,e=(t>0?a[r.charAt(0)]<<18:0)|(t>1?a[r.charAt(1)]<<12:0)|(t>2?a[r.charAt(2)]<<6:0)|(t>3?a[r.charAt(3)]:0),c=[h(e>>>16),h(e>>>8&255),h(255&e)];
return c.length-=[0,0,2,1][n],c.join("");
},F=function(r){
return r.replace(/[\s\S]{1,4}/g,v);
},j=e?function(r){
return(r.constructor===e.constructor?r:new e(r,"base64")).toString();
}:function(r){
return b(F(r));
},m=function(r){
return j(String(r).replace(/[-_]/g,function(r){
return"-"==r?"+":"/";
}).replace(/[^A-Za-z0-9\+\/]/g,""));
};
return{
VERSION:c,
atob:F,
btoa:g,
fromBase64:m,
toBase64:C,
utob:A,
encode:C,
encodeURI:l,
btou:b,
decode:m
};
});define("biz_wap/jsapi/log.js",["biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function o(i,o){
o=e+" "+o+" location:["+location.href+"]",n.isWechat&&n.isAndroid?r.invoke("log",{
level:i,
msg:o
}):n.isWechat&&(n.isIOS||n.isMac)&&r.invoke("writeLog",{
level:i,
msg:o
});
}
var r=i("biz_wap/jsapi/core.js"),n=i("biz_wap/utils/mmversion.js"),e="__wap__",a={
info:function(){
o("info",Array.prototype.join.apply(arguments));
},
warn:function(){
o("warn",Array.prototype.join.apply(arguments));
},
error:function(){
o("error",Array.prototype.join.apply(arguments));
},
debug:function(){
o("debug",Array.prototype.join.apply(arguments));
}
};
return a.log=a.info,a;
});