(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[1],{192:function(e,t,n){"use strict";var r=n(1),i=n(3),a=n(0),o=(n(6),n(4)),c=n(5),s=n(7),l=44,u=a.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.color,d=void 0===u?"primary":u,f=e.disableShrink,m=void 0!==f&&f,b=e.size,p=void 0===b?40:b,v=e.style,h=e.thickness,O=void 0===h?3.6:h,E=e.value,g=void 0===E?0:E,j=e.variant,x=void 0===j?"indeterminate":j,y=Object(i.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},C={},w={};if("determinate"===x||"static"===x){var D=2*Math.PI*((l-O)/2);k.strokeDasharray=D.toFixed(3),w["aria-valuenow"]=Math.round(g),k.strokeDashoffset="".concat(((100-g)/100*D).toFixed(3),"px"),C.transform="rotate(-90deg)"}return a.createElement("div",Object(r.a)({className:Object(o.a)(n.root,c,"inherit"!==d&&n["color".concat(Object(s.a)(d))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[x]),style:Object(r.a)({width:p,height:p},C,v),ref:t,role:"progressbar"},w,y),a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},a.createElement("circle",{className:Object(o.a)(n.circle,m&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[x]),style:k,cx:l,cy:l,r:(l-O)/2,fill:"none",strokeWidth:O})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},315:function(e,t,n){"use strict";var r=n(1),i=n(48),a=n(3),o=n(0),c=(n(6),n(132)),s=n(67),l=n(29),u=n(55),d=n(10),f={entering:{opacity:1},entered:{opacity:1}},m={enter:s.b.enteringScreen,exit:s.b.leavingScreen},b=o.forwardRef((function(e,t){var n=e.children,s=e.disableStrictModeCompat,b=void 0!==s&&s,p=e.in,v=e.onEnter,h=e.onEntered,O=e.onEntering,E=e.onExit,g=e.onExited,j=e.onExiting,x=e.style,y=e.TransitionComponent,k=void 0===y?c.a:y,C=e.timeout,w=void 0===C?m:C,D=Object(a.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),L=Object(l.a)(),T=L.unstable_strictMode&&!b,R=o.useRef(null),M=Object(d.a)(n.ref,t),N=Object(d.a)(T?R:void 0,M),S=function(e){return function(t,n){if(e){var r=T?[R.current,t]:[t,n],a=Object(i.a)(r,2),o=a[0],c=a[1];void 0===c?e(o):e(o,c)}}},P=S(O),I=S((function(e,t){Object(u.b)(e);var n=Object(u.a)({style:x,timeout:w},{mode:"enter"});e.style.webkitTransition=L.transitions.create("opacity",n),e.style.transition=L.transitions.create("opacity",n),v&&v(e,t)})),z=S(h),B=S(j),H=S((function(e){var t=Object(u.a)({style:x,timeout:w},{mode:"exit"});e.style.webkitTransition=L.transitions.create("opacity",t),e.style.transition=L.transitions.create("opacity",t),E&&E(e)})),W=S(g);return o.createElement(k,Object(r.a)({appear:!0,in:p,nodeRef:T?R:void 0,onEnter:I,onEntered:z,onEntering:P,onExit:H,onExited:W,onExiting:B,timeout:w},D),(function(e,t){return o.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==e||p?void 0:"hidden"},f[e],x,n.props.style),ref:N},t))}))}));t.a=b},316:function(e,t,n){"use strict";var r=n(1),i=n(3),a=n(0),o=(n(6),n(4)),c=n(5),s=n(315),l=a.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,u=e.invisible,d=void 0!==u&&u,f=e.open,m=e.transitionDuration,b=e.TransitionComponent,p=void 0===b?s.a:b,v=Object(i.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return a.createElement(p,Object(r.a)({in:f,timeout:m},v),a.createElement("div",{className:Object(o.a)(c.root,l,d&&c.invisible),"aria-hidden":!0,ref:t},n))}));t.a=Object(c.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(l)},324:function(e,t,n){"use strict";var r=n(0),i=n(51);t.a=Object(i.a)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},339:function(e,t,n){"use strict";var r=n(3),i=n(22),a=n(1),o=n(0),c=(n(6),n(4)),s=n(5),l=n(67),u=n(8),d=n(17),f=n(10),m=n(21);function b(e){return e.substring(2).toLowerCase()}var p=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,i=e.mouseEvent,a=void 0===i?"onClick":i,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,p=o.useRef(!1),v=o.useRef(null),h=o.useRef(!1),O=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){h.current=!0}),0),function(){h.current=!1}}),[]);var E=o.useCallback((function(e){v.current=u.findDOMNode(e)}),[]),g=Object(f.a)(t.ref,E),j=Object(m.a)((function(e){var t=O.current;if(O.current=!1,h.current&&v.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(p.current)p.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(v.current)>-1;else n=!Object(d.a)(v.current).documentElement.contains(e.target)||v.current.contains(e.target);n||!r&&t||c(e)}})),x=function(e){return function(n){O.current=!0;var r=t.props[e];r&&r(n)}},y={ref:g};return!1!==l&&(y[l]=x(l)),o.useEffect((function(){if(!1!==l){var e=b(l),t=Object(d.a)(v.current),n=function(){p.current=!0};return t.addEventListener(e,j),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,j),t.removeEventListener("touchmove",n)}}}),[j,l]),!1!==a&&(y[a]=x(a)),o.useEffect((function(){if(!1!==a){var e=b(a),t=Object(d.a)(v.current);return t.addEventListener(e,j),function(){t.removeEventListener(e,j)}}}),[j,a]),o.createElement(o.Fragment,null,o.cloneElement(t,y))},v=n(7),h=n(42),O=n(159),E=n(129),g=n(13),j=o.forwardRef((function(e,t){var n=e.action,i=e.classes,s=e.className,l=e.message,u=e.role,d=void 0===u?"alert":u,f=Object(r.a)(e,["action","classes","className","message","role"]);return o.createElement(E.a,Object(a.a)({role:d,square:!0,elevation:6,className:Object(c.a)(i.root,s),ref:t},f),o.createElement("div",{className:i.message},l),n?o.createElement("div",{className:i.action},n):null)})),x=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(g.b)(e.palette.background.default,t);return{root:Object(a.a)({},e.typography.body2,Object(i.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(j),y=o.forwardRef((function(e,t){var n=e.action,i=e.anchorOrigin,s=(i=void 0===i?{vertical:"bottom",horizontal:"center"}:i).vertical,u=i.horizontal,d=e.autoHideDuration,f=void 0===d?null:d,b=e.children,E=e.classes,g=e.className,j=e.ClickAwayListenerProps,y=e.ContentProps,k=e.disableWindowBlurListener,C=void 0!==k&&k,w=e.message,D=e.onClose,L=e.onEnter,T=e.onEntered,R=e.onEntering,M=e.onExit,N=e.onExited,S=e.onExiting,P=e.onMouseEnter,I=e.onMouseLeave,z=e.open,B=e.resumeHideDuration,H=e.TransitionComponent,W=void 0===H?O.a:H,A=e.transitionDuration,F=void 0===A?{enter:l.b.enteringScreen,exit:l.b.leavingScreen}:A,G=e.TransitionProps,J=Object(r.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),X=o.useRef(),$=o.useState(!0),q=$[0],V=$[1],Y=Object(m.a)((function(){D&&D.apply(void 0,arguments)})),_=Object(m.a)((function(e){D&&null!=e&&(clearTimeout(X.current),X.current=setTimeout((function(){Y(null,"timeout")}),e))}));o.useEffect((function(){return z&&_(f),function(){clearTimeout(X.current)}}),[z,f,_]);var K=function(){clearTimeout(X.current)},Q=o.useCallback((function(){null!=f&&_(null!=B?B:.5*f)}),[f,B,_]);return o.useEffect((function(){if(!C&&z)return window.addEventListener("focus",Q),window.addEventListener("blur",K),function(){window.removeEventListener("focus",Q),window.removeEventListener("blur",K)}}),[C,Q,z]),!z&&q?null:o.createElement(p,Object(a.a)({onClickAway:function(e){D&&D(e,"clickaway")}},j),o.createElement("div",Object(a.a)({className:Object(c.a)(E.root,E["anchorOrigin".concat(Object(v.a)(s)).concat(Object(v.a)(u))],g),onMouseEnter:function(e){P&&P(e),K()},onMouseLeave:function(e){I&&I(e),Q()},ref:t},J),o.createElement(W,Object(a.a)({appear:!0,in:z,onEnter:Object(h.a)((function(){V(!1)}),L),onEntered:T,onEntering:R,onExit:M,onExited:Object(h.a)((function(){V(!0)}),N),onExiting:S,timeout:F,direction:"top"===s?"down":"up"},G),b||o.createElement(x,Object(a.a)({message:w,action:n},y)))))}));t.a=Object(s.a)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},o={justifyContent:"flex-start"},c={top:24},s={bottom:24},l={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(a.a)({},t,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({},c,d))),anchorOriginBottomCenter:Object(a.a)({},n,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({},s,d))),anchorOriginTopRight:Object(a.a)({},t,r,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({left:"auto"},c,l))),anchorOriginBottomRight:Object(a.a)({},n,r,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({left:"auto"},s,l))),anchorOriginTopLeft:Object(a.a)({},t,o,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({right:"auto"},c,u))),anchorOriginBottomLeft:Object(a.a)({},n,o,Object(i.a)({},e.breakpoints.up("sm"),Object(a.a)({right:"auto"},s,u)))}}),{flip:!1,name:"MuiSnackbar"})(y)}}]);
//# sourceMappingURL=1.effbd32c.chunk.js.map