(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[14],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=6e3},189:function(e,t,n){"use strict";var r=n(157),a=Object(r.a)((function(e){return{form:{display:"flex",flexDirection:"column",gap:e.spacing(2)},submitOrAltRow:{display:"flex",justifyContent:"space-between",alignItems:"center"}}}));t.a=a},355:function(e,t,n){"use strict";var r=n(3),a=n(22),o=n(1),i=n(0),s=(n(6),n(4)),c=n(5),u=n(66),l=n(8),d=n(17),f=n(10),b=n(21);function p(e){return e.substring(2).toLowerCase()}var m=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,a=e.mouseEvent,o=void 0===a?"onClick":a,s=e.onClickAway,c=e.touchEvent,u=void 0===c?"onTouchEnd":c,m=i.useRef(!1),j=i.useRef(null),v=i.useRef(!1),O=i.useRef(!1);i.useEffect((function(){return setTimeout((function(){v.current=!0}),0),function(){v.current=!1}}),[]);var g=i.useCallback((function(e){j.current=l.findDOMNode(e)}),[]),w=Object(f.a)(t.ref,g),h=Object(b.a)((function(e){var t=O.current;if(O.current=!1,v.current&&j.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(m.current)m.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(j.current)>-1;else n=!Object(d.a)(j.current).documentElement.contains(e.target)||j.current.contains(e.target);n||!r&&t||s(e)}})),x=function(e){return function(n){O.current=!0;var r=t.props[e];r&&r(n)}},E={ref:w};return!1!==u&&(E[u]=x(u)),i.useEffect((function(){if(!1!==u){var e=p(u),t=Object(d.a)(j.current),n=function(){m.current=!0};return t.addEventListener(e,h),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,h),t.removeEventListener("touchmove",n)}}}),[h,u]),!1!==o&&(E[o]=x(o)),i.useEffect((function(){if(!1!==o){var e=p(o),t=Object(d.a)(j.current);return t.addEventListener(e,h),function(){t.removeEventListener(e,h)}}}),[h,o]),i.createElement(i.Fragment,null,i.cloneElement(t,E))},j=n(7),v=n(43),O=n(159),g=n(129),w=n(13),h=i.forwardRef((function(e,t){var n=e.action,a=e.classes,c=e.className,u=e.message,l=e.role,d=void 0===l?"alert":l,f=Object(r.a)(e,["action","classes","className","message","role"]);return i.createElement(g.a,Object(o.a)({role:d,square:!0,elevation:6,className:Object(s.a)(a.root,c),ref:t},f),i.createElement("div",{className:a.message},u),n?i.createElement("div",{className:a.action},n):null)})),x=Object(c.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(w.b)(e.palette.background.default,t);return{root:Object(o.a)({},e.typography.body2,Object(a.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(h),E=i.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,c=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,l=a.horizontal,d=e.autoHideDuration,f=void 0===d?null:d,p=e.children,g=e.classes,w=e.className,h=e.ClickAwayListenerProps,E=e.ContentProps,C=e.disableWindowBlurListener,y=void 0!==C&&C,P=e.message,L=e.onClose,N=e.onEnter,k=e.onEntered,T=e.onEntering,S=e.onExit,R=e.onExited,D=e.onExiting,I=e.onMouseEnter,M=e.onMouseLeave,A=e.open,W=e.resumeHideDuration,B=e.TransitionComponent,H=void 0===B?O.a:B,q=e.transitionDuration,z=void 0===q?{enter:u.b.enteringScreen,exit:u.b.leavingScreen}:q,F=e.TransitionProps,G=Object(r.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=i.useRef(),U=i.useState(!0),X=U[0],V=U[1],Y=Object(b.a)((function(){L&&L.apply(void 0,arguments)})),K=Object(b.a)((function(e){L&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){Y(null,"timeout")}),e))}));i.useEffect((function(){return A&&K(f),function(){clearTimeout(J.current)}}),[A,f,K]);var Q=function(){clearTimeout(J.current)},Z=i.useCallback((function(){null!=f&&K(null!=W?W:.5*f)}),[f,W,K]);return i.useEffect((function(){if(!y&&A)return window.addEventListener("focus",Z),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Q)}}),[y,Z,A]),!A&&X?null:i.createElement(m,Object(o.a)({onClickAway:function(e){L&&L(e,"clickaway")}},h),i.createElement("div",Object(o.a)({className:Object(s.a)(g.root,g["anchorOrigin".concat(Object(j.a)(c)).concat(Object(j.a)(l))],w),onMouseEnter:function(e){I&&I(e),Q()},onMouseLeave:function(e){M&&M(e),Z()},ref:t},G),i.createElement(H,Object(o.a)({appear:!0,in:A,onEnter:Object(v.a)((function(){V(!1)}),N),onEntered:k,onEntering:T,onExit:S,onExited:Object(v.a)((function(){V(!0)}),R),onExiting:D,timeout:z,direction:"top"===c?"down":"up"},F),p||i.createElement(x,Object(o.a)({message:P,action:n},E)))))}));t.a=Object(c.a)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},i={justifyContent:"flex-start"},s={top:24},c={bottom:24},u={right:24},l={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(o.a)({},t,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({},s,d))),anchorOriginBottomCenter:Object(o.a)({},n,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({},c,d))),anchorOriginTopRight:Object(o.a)({},t,r,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},s,u))),anchorOriginBottomRight:Object(o.a)({},n,r,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},c,u))),anchorOriginTopLeft:Object(o.a)({},t,i,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},s,l))),anchorOriginBottomLeft:Object(o.a)({},n,i,Object(a.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},c,l)))}}),{flip:!1,name:"MuiSnackbar"})(E)},388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(25),a=n(130),o=n(129),i=n(172),s=n(355),c=n(4),u=n(0),l=n(179),d=n(39),f=n(194),b=n(392),p=n(162),m=n(180),j=n(192),v=n(189),O=n(2),g=j.b().shape({currentPassword:j.d().label("Current password").required(),newPassword:j.d().label("New password").required().min(8),confirmNewPassword:j.d().label("Confirm password").required().oneOf([j.c("newPassword"),null],"Confirm new password must match new password must match")});function w(e){var t,n,r,a=e.variant,o=e.onSubmit,i=Object(v.a)(),s=Object(m.e)({resolver:Object(f.a)(g)}),c=s.formState.errors,u=s.handleSubmit,l=s.register;return Object(O.jsxs)("form",{className:i.form,noValidate:!0,onSubmit:u(o),children:[Object(O.jsx)(b.a,{label:"Current password",type:"password",variant:a,inputProps:Object(d.a)({"aria-label":"Current password"},l("currentPassword")),error:void 0!==c.currentPassword,helperText:null===(t=c.currentPassword)||void 0===t?void 0:t.message}),Object(O.jsx)(b.a,{label:"New password",type:"password",variant:a,inputProps:Object(d.a)({"aria-label":"New password"},l("newPassword")),error:void 0!==c.newPassword,helperText:null===(n=c.newPassword)||void 0===n?void 0:n.message}),Object(O.jsx)(b.a,{label:"Confirm new password",type:"password",variant:a,inputProps:Object(d.a)({"aria-label":"Confirm new password"},l("confirmNewPassword")),error:void 0!==c.confirmNewPassword,helperText:null===(r=c.confirmNewPassword)||void 0===r?void 0:r.message}),Object(O.jsx)("div",{style:{marginLeft:"auto"},children:Object(O.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}var h=n(33),x=n(40),E=n(157),C=Object(E.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",flexDirection:"column",gap:e.spacing(2)},avatar:{height:e.spacing(16),width:e.spacing(16)},avatarText:{fontWeight:e.typography.fontWeightBold},generalInfo:{display:"flex",flexDirection:"column",alignItems:"center"},section:{padding:e.spacing(2)},subsection:{display:"flex",flexDirection:"column",gap:e.spacing(1)}}}));function y(){var e=C(),t=Object(u.useContext)(h.a),n=Object(u.useState)(!1),d=Object(r.a)(n,2),f=d[0],b=d[1],p=Object(u.useState)(""),m=Object(r.a)(p,2),j=m[0],v=m[1];return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(a.a,{variant:"h1",children:"Account Settings"}),Object(O.jsxs)(o.a,{className:Object(c.a)(e.section,e.generalInfo),children:[Object(O.jsx)(i.a,{className:e.avatar,children:Object(O.jsx)(a.a,{className:e.avatarText,variant:"h1",component:"div",children:null===t||void 0===t?void 0:t.username.substring(0,1).toLocaleUpperCase()})}),Object(O.jsx)(a.a,{variant:"h2",component:"div",children:null===t||void 0===t?void 0:t.username.toLocaleUpperCase()})]}),Object(O.jsxs)(o.a,{component:"section",className:e.section,children:[Object(O.jsx)(a.a,{variant:"h2",children:"Security"}),Object(O.jsxs)("section",{className:e.subsection,children:[Object(O.jsx)(a.a,{variant:"h3",children:"Change password"}),Object(O.jsx)(w,{variant:"outlined",onSubmit:function(e){return x.a.changePassword(e.currentPassword,e.newPassword).catch((function(e){var t;403===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?v("Failed to change password. Incorrect password."):v("An error has occurred. Failed to change password."),b(!0)}))}})]})]}),Object(O.jsx)(s.a,{open:f,message:j,autoHideDuration:l.a,onClose:function(){return b(!1)}})]})}}}]);
//# sourceMappingURL=14.ed1e400f.chunk.js.map