/*! For license information please see main.ccd8371e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-perspective-cropper-example"]=this["webpackJsonpreact-perspective-cropper-example"]||[]).push([[0],{142:function(e,t,r){e.exports=r(275)},143:function(e,t,r){},155:function(e,t,r){},275:function(e,t,r){"use strict";r.r(t);r(143);var n=r(0),o=r.n(n),a=r(19),i=r.n(a),c=r(37),u=r.n(c),s=r(46),l=r(42),p=r(281),f=r(53),m=r(280),b=r(284),h=r(285),d=r(90),y=r(140),g=r(38),v=r(86),O=r(118),w=r.n(O);function j(e,t){return e(t={exports:{}},t.exports),t.exports}var E="function"===typeof Symbol&&Symbol.for,x=E?Symbol.for("react.element"):60103,C=E?Symbol.for("react.portal"):60106,S=E?Symbol.for("react.fragment"):60107,R=E?Symbol.for("react.strict_mode"):60108,P=E?Symbol.for("react.profiler"):60114,k=E?Symbol.for("react.provider"):60109,T=E?Symbol.for("react.context"):60110,_=E?Symbol.for("react.async_mode"):60111,A=E?Symbol.for("react.concurrent_mode"):60111,D=E?Symbol.for("react.forward_ref"):60112,$=E?Symbol.for("react.suspense"):60113,M=E?Symbol.for("react.suspense_list"):60120,I=E?Symbol.for("react.memo"):60115,z=E?Symbol.for("react.lazy"):60116,N=E?Symbol.for("react.block"):60121,q=E?Symbol.for("react.fundamental"):60117,F=E?Symbol.for("react.responder"):60118,L=E?Symbol.for("react.scope"):60119;function B(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case x:switch(e=e.type){case _:case A:case S:case P:case R:case $:return e;default:switch(e=e&&e.$$typeof){case T:case D:case z:case I:case k:return e;default:return t}}case C:return t}}}function W(e){return B(e)===A}var H={AsyncMode:_,ConcurrentMode:A,ContextConsumer:T,ContextProvider:k,Element:x,ForwardRef:D,Fragment:S,Lazy:z,Memo:I,Portal:C,Profiler:P,StrictMode:R,Suspense:$,isAsyncMode:function(e){return W(e)||B(e)===_},isConcurrentMode:W,isContextConsumer:function(e){return B(e)===T},isContextProvider:function(e){return B(e)===k},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===x},isForwardRef:function(e){return B(e)===D},isFragment:function(e){return B(e)===S},isLazy:function(e){return B(e)===z},isMemo:function(e){return B(e)===I},isPortal:function(e){return B(e)===C},isProfiler:function(e){return B(e)===P},isStrictMode:function(e){return B(e)===R},isSuspense:function(e){return B(e)===$},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===S||e===A||e===P||e===R||e===$||e===M||"object"===typeof e&&null!==e&&(e.$$typeof===z||e.$$typeof===I||e.$$typeof===k||e.$$typeof===T||e.$$typeof===D||e.$$typeof===q||e.$$typeof===F||e.$$typeof===L||e.$$typeof===N)},typeOf:B},G=(j((function(e,t){0})),j((function(e){e.exports=H})),Object.getOwnPropertySymbols),V=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;function Y(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var J="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function X(e,t,r,n,o){}X.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function K(){}function Q(){}Q.resetWarningCache=K;var Z=j((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==J){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Q,resetWarningCache:K};return r.PropTypes=r,r}()})),ee=function(e){return e instanceof File?new Promise((function(t,r){var n=new FileReader;n.onload=function(e){t(n.result)},n.onerror=function(e){r(e)},n.readAsDataURL(e)})):"string"===typeof e?Promise.resolve(e):void 0};function te(){var e=Object(n.useState)(),t=Object(l.a)(e,2),r=t[0],o=t[1];return[r,Object(n.useCallback)((function(e){o(e)}),[])]}var re=function(e){var t,r,a=e.cropPoints,i=e.pointArea,c=e.defaultPosition,u=e.pointSize,s=void 0===u?20:u,l=e.pointColor,p=void 0===l?"#3cabe2":l,f=e.onStop,m=e.onDrag,b=Object(n.useCallback)((function(e,t){m(Object(g.a)(Object(g.a)({},t),{},{x:t.x+s/2,y:t.y+s/2}),i)}),[m]),h=Object(n.useCallback)((function(e,t){f(Object(g.a)(Object(g.a)({},t),{},{x:t.x+s/2,y:t.y+s/2}),i,a)}),[m,a]);return o.a.createElement(w.a,{bounds:"parent",defaultPosition:c,position:{x:a[i].x-s/2,y:a[i].y-s/2},onDrag:b,onStop:h},o.a.createElement("div",{style:(t=s,r=p,{width:t,height:t,backgroundColor:r,borderRadius:"100%",position:"absolute",zIndex:1001})}))};re.propTypes={cropPoints:Z.shape({"left-top":Z.shape({x:Z.number,y:Z.number}).isRequired,"right-top":Z.shape({x:Z.number,y:Z.number}).isRequired,"right-bottom":Z.shape({x:Z.number,y:Z.number}).isRequired,"left-bottom":Z.shape({x:Z.number,y:Z.number}).isRequired}),pointArea:Z.oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:Z.shape({x:Z.number,y:Z.number}),pointSize:Z.number,pointColor:Z.string,onStop:Z.func,onDrag:Z.func};var ne=function(e){var t=e.previewDims,r=Object(y.a)(e,["previewDims"]);return o.a.createElement(n.Fragment,null,o.a.createElement(re,Object.assign({pointArea:"left-top",defaultPosition:{x:0,y:0}},r)),o.a.createElement(re,Object.assign({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},r)),o.a.createElement(re,Object.assign({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},r)),o.a.createElement(re,Object.assign({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},r)))};ne.propTypes={previewDims:Z.shape({ratio:Z.number,width:Z.number,height:Z.number})};var oe=function(e,t,r,n,o){var a,i,c=e.imread(t),u=r["right-bottom"],s=r["left-bottom"],l=r["right-top"],p=r["left-top"],f=[p,l,u,s].map((function(e){return[e.x/n,e.y/n]})),m=Math.max(u.x-s.x,l.x-p.x)/n,b=Math.max(s.y-p.y,u.y-l.y)/n,h=[[0,0],[m-1,0],[m-1,b-1],[0,b-1]],y=e.matFromArray(4,1,e.CV_32FC2,(a=[]).concat.apply(a,Object(d.a)(f))),g=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,h)),v=e.getPerspectiveTransform(y,g),O=new e.Size(m,b);e.warpPerspective(c,c,v,O,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,c),c.delete(),y.delete(),g.delete(),v.delete(),o()},ae=function(){var e=Object(s.a)(u.a.mark((function e(t,r){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={blur:!1,th:!0,thMode:t.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},o=t.imread(r),t.cvtColor(o,o,t.COLOR_RGBA2GRAY,0),t.adaptiveThreshold(o,o,n.thMax,n.thMode,t.THRESH_BINARY,5,8),t.imshow(r,o);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ie=function(e){var t=e.cropPoints,r=e.previewDims,a=e.lineWidth,i=void 0===a?3:a,c=e.lineColor,u=void 0===c?"#3cabe2":c,s=te(),p=Object(l.a)(s,2),f=p[0],m=p[1],b=Object(n.useCallback)((function(){f.getContext("2d").clearRect(0,0,r.width,r.height)}),[f,r]),h=Object(n.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,r){return[].concat(Object(d.a)(e),[t[r]])}),[])}),[t]),y=Object(n.useCallback)((function(e){var t=f.getContext("2d");t.lineWidth=i,t.strokeStyle=u,t.beginPath(),e.forEach((function(r,n){if(0===n&&t.moveTo(r.x,r.y),n!==e.length-1){var o=e[n+1];t.lineTo(o.x,o.y)}else t.closePath()})),t.stroke()}),[f]);return Object(n.useEffect)((function(){if(t&&f){b();var e=h();y(e)}}),[t,f]),o.a.createElement("canvas",{ref:m,style:{position:"absolute",zIndex:5,width:r.width,height:r.height},width:r.width,height:r.height})};ie.propTypes={previewDims:Z.shape({ratio:Z.number,width:Z.number,height:Z.number}),cropPoints:Z.shape({"left-top":Z.shape({x:Z.number,y:Z.number}).isRequired,"right-top":Z.shape({x:Z.number,y:Z.number}).isRequired,"right-bottom":Z.shape({x:Z.number,y:Z.number}).isRequired,"left-bottom":Z.shape({x:Z.number,y:Z.number}).isRequired}),lineColor:Z.string,lineWidth:Z.number};var ce,ue=function(e){return{width:e.width,height:e.height}},se=function(e){var t=e.image,r=e.onDragStop,a=e.onChange,i=e.cropperRef,c=e.pointSize,p=e.lineWidth,f=e.pointColor,m=e.lineColor,b=Object(v.b)(),h=b.loaded,d=b.cv,y=Object(n.useRef)(),O=te(),w=Object(l.a)(O,2),j=w[0],E=w[1],x=Object(n.useState)(),C=Object(l.a)(x,2),S=C[0],R=C[1],P=Object(n.useState)(),k=Object(l.a)(P,2),T=k[0],_=k[1],A=Object(n.useState)(!1),D=Object(l.a)(A,2),$=D[0],M=D[1],I=Object(n.useState)("crop"),z=Object(l.a)(I,2),N=z[0],q=z[1];Object(n.useImperativeHandle)(i,(function(){return{backToCrop:function(){q("crop")},done:function(){var e=Object(s.a)(u.a.mark((function e(){var r,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:{},e.abrupt("return",new Promise((function(e){M(!0),oe(d,y.current,T,ce,F),ae(d,y.current),r.preview&&q("preview"),y.current.toBlob((function(t){e(t),M(!1)}),t.type)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}})),Object(n.useEffect)((function(){"preview"===N&&B()}),[N]);var F=function(){var e=function(e,t){var r=e/t,n=window.innerWidth-40,o=window.innerHeight-240,a={width:n,height:Math.round(n/r),ratio:r};return a.height>o&&(a.height=o,a.width=Math.round(o*r)),a}(y.current.width,y.current.height);R(e),j.width=e.width,j.height=e.height,ce=e.width/y.current.width},L=function(e){return new Promise((function(t,r){var n=document.createElement("img");n.onload=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.current=document.createElement("canvas"),y.current.width=n.width,y.current.height=n.height,y.current.getContext("2d").drawImage(n,0,0),F(),t();case 7:case"end":return e.stop()}}),e)}))),n.src=e}))},B=function(e){var t=e||d.imread(y.current),r=new d.Mat,n=new d.Size(0,0);d.resize(t,r,n,ce,ce,d.INTER_AREA),d.imshow(j,r),t.delete(),r.delete()},W=function(){var e=d.imread(y.current),t=new d.Size(5,5);d.cvtColor(e,e,d.COLOR_RGBA2GRAY,0),d.GaussianBlur(e,e,t,0,0,d.BORDER_DEFAULT),d.Canny(e,e,75,200),d.threshold(e,e,120,200,d.THRESH_BINARY);var r=new d.MatVector,n=new d.Mat;d.findContours(e,r,n,d.RETR_CCOMP,d.CHAIN_APPROX_SIMPLE);var o=d.boundingRect(e);e.delete(),n.delete(),r.delete(),Object.keys(o).forEach((function(e){o[e]=o[e]*ce}));var a={"left-top":{x:o.x,y:o.y},"right-top":{x:o.x+o.width,y:o.y},"right-bottom":{x:o.x+o.width,y:o.y+o.height},"left-bottom":{x:o.x,y:o.y+o.height}};_(a)};Object(n.useEffect)((function(){a&&a(Object(g.a)(Object(g.a)({},T),{},{loading:$}))}),[T,$]),Object(n.useEffect)((function(){t&&j&&h&&"crop"===N?function(){var e=Object(s.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t);case 2:return r=e.sent,e.next=5,L(r);case 5:B(),W(),M(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():M(!0)}),[t,j,h,N]);var H=Object(n.useCallback)((function(e,t){var r=e.x,n=e.y;_((function(e){return Object(g.a)(Object(g.a)({},e),{},{[t]:{x:r,y:n}})}))}),[]),G=Object(n.useCallback)((function(e,t,n){var o=e.x,a=e.y;_((function(e){return Object(g.a)(Object(g.a)({},e),{},{[t]:{x:o,y:a}})})),r&&r(Object(g.a)(Object(g.a)({},n),{},{[t]:{x:o,y:a}}))}),[]);return o.a.createElement("div",{style:Object(g.a)({position:"relative"},S&&ue(S))},S&&"crop"===N&&T&&o.a.createElement(ne,{pointSize:c,pointColor:f,cropPoints:T,previewDims:S,onDrag:H,onStop:G}),S&&"crop"===N&&T&&o.a.createElement(ie,{previewDims:S,cropPoints:T,lineWidth:p,lineColor:m}),o.a.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:E}))};se.propTypes={image:Z.object.isRequired,onDragStop:Z.func,onChange:Z.func,cropperRef:Z.shape({current:Z.shape({done:Z.func.isRequired,backToCrop:Z.func.isRequired})}),pointSize:Z.number,lineWidth:Z.number,pointColor:Z.string,lineColor:Z.string};var le=o.a.forwardRef((function(e,t){return e.image?o.a.createElement(v.a,{openCvPath:"/opencv/opencv.js"},o.a.createElement(se,Object.assign({},e,{cropperRef:t}))):null})),pe=(r(155),r(282)),fe=r(283),me=r(128),be=r.n(me),he=function(){return o.a.createElement("div",{className:"site-page-header"},o.a.createElement(pe.a,{ghost:!1,title:"react-perspective-cropper"},o.a.createElement(fe.b,{size:"small",column:2},o.a.createElement(fe.b.Item,{label:"Package"},o.a.createElement("a",{href:"https://www.npmjs.com/package/react-perspective-cropper"},o.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/react-perspective-cropper.svg"})),o.a.createElement("a",{href:"https://standardjs.com"},o.a.createElement("img",{alt:"standardjs",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}))),o.a.createElement(fe.b.Item,{label:"Description"},o.a.createElement(be.a,null,"React component performing border detection, perspective correction and simple image filters over a provided image \ud83d\udcf2 \ud83d\udcf8")),o.a.createElement(fe.b.Item,{label:"Created by"},"Giacomo Cerquone from",o.a.createElement("span",{"aria-label":"italy flag",role:"img",style:{margin:"0 10px"}},"\ud83c\uddee\ud83c\uddf9"),"with"," ",o.a.createElement("span",{"aria-label":"heart",role:"img",style:{margin:"0 10px"}},"\u2764\ufe0f")))))},de=p.a.Dragger,ye=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(),c=Object(l.a)(i,2),p=c[0],d=c[1],y=Object(n.useRef)(),g=Object(n.useCallback)((function(e){return a(e)}),[]),v=Object(n.useCallback)((function(e){return a(e)}),[]),O=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CropState",r),e.prev=1,e.next=4,y.current.done({preview:!0});case 4:t=e.sent,console.log("Cropped and filtered image",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),w={name:"file",multiple:!1,onChange:function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fileList&&t.fileList.length>0&&d(t.fileList[0].originFileObj);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return o.a.createElement("div",{className:"root-container"},o.a.createElement(he,null),o.a.createElement("div",{className:"content-container"},r&&o.a.createElement("div",{className:"buttons-container"},o.a.createElement(f.a,{onClick:O,icon:o.a.createElement(b.a,null)},"Done"),o.a.createElement(f.a,{onClick:function(){y.current.backToCrop()}},"Back"),o.a.createElement(f.a,{onClick:function(){d(void 0),a()}},"Reset")),o.a.createElement(le,{ref:y,image:p,onChange:v,onDragStop:g}),(null===r||void 0===r?void 0:r.loading)&&o.a.createElement(m.a,null),!p&&o.a.createElement(de,w,o.a.createElement("p",null,o.a.createElement(h.a,null)),o.a.createElement("p",null,"Upload"))))};i.a.render(o.a.createElement(ye,null),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.ccd8371e.chunk.js.map