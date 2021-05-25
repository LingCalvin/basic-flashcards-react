(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[10],{191:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(0),r=(t(6),t(4)),c=t(7),l=t(5),s=t(64),d=t(10),p=t(130),u=n.forwardRef((function(e,a){var t=e.classes,l=e.className,u=e.color,b=void 0===u?"primary":u,m=e.component,h=void 0===m?"a":m,g=e.onBlur,v=e.onFocus,f=e.TypographyClasses,x=e.underline,y=void 0===x?"hover":x,O=e.variant,j=void 0===O?"inherit":O,k=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(s.a)(),w=C.isFocusVisible,E=C.onBlurVisible,N=C.ref,B=n.useState(!1),S=B[0],W=B[1],$=Object(d.a)(a,N);return n.createElement(p.a,Object(o.a)({className:Object(r.a)(t.root,t["underline".concat(Object(c.a)(y))],l,S&&t.focusVisible,"button"===h&&t.button),classes:f,color:b,component:h,onBlur:function(e){S&&(E(),W(!1)),g&&g(e)},onFocus:function(e){w(e)&&W(!0),v&&v(e)},ref:$,variant:j},k))}));a.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(u)},303:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(0),r=(t(6),t(4)),c=t(5),l=t(26),s=t(48),d=t(188);var p=t(13),u=t(29),b=t(86),m=t(51),h=Object(m.a)(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),g=Object(m.a)(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),v=Object(m.a)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),f=Object(m.a)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),x=t(7),y=n.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.color,s=void 0===l?"standard":l,d=e.component,p=e.disabled,m=void 0!==p&&p,y=e.page,O=e.selected,j=void 0!==O&&O,k=e.shape,C=void 0===k?"round":k,w=e.size,E=void 0===w?"medium":w,N=e.type,B=void 0===N?"page":N,S=e.variant,W=void 0===S?"text":S,$=Object(i.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),z=("rtl"===Object(u.a)().direction?{previous:f,next:v,last:h,first:g}:{previous:v,next:f,first:h,last:g})[B];return"start-ellipsis"===B||"end-ellipsis"===B?n.createElement("div",{ref:a,className:Object(r.a)(t.root,t.ellipsis,m&&t.disabled,"medium"!==E&&t["size".concat(Object(x.a)(E))])},"\u2026"):n.createElement(b.a,Object(o.a)({ref:a,component:d,disabled:m,focusVisibleClassName:t.focusVisible,className:Object(r.a)(t.root,t.page,t[W],t[C],c,"standard"!==s&&t["".concat(W).concat(Object(x.a)(s))],m&&t.disabled,j&&t.selected,"medium"!==E&&t["size".concat(Object(x.a)(E))])},$),"page"===B&&y,z?n.createElement(z,{className:t.icon}):null)})),O=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.c)(e.palette.primary.main,.5)),backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.c)(e.palette.secondary.main,.5)),backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(y);function j(e,a,t){return"page"===e?"".concat(t?"":"Go to ","page ").concat(a):"Go to ".concat(e," page")}var k=n.forwardRef((function(e,a){e.boundaryCount;var t=e.classes,c=e.className,p=e.color,u=void 0===p?"standard":p,b=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===b?j:b,h=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),g=void 0===h?function(e){return n.createElement(O,e)}:h,v=e.shape,f=void 0===v?"round":v,x=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),y=void 0===x?"medium":x,k=e.variant,C=void 0===k?"text":k,w=Object(i.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.boundaryCount,t=void 0===a?1:a,n=e.componentName,r=void 0===n?"usePagination":n,c=e.count,p=void 0===c?1:c,u=e.defaultPage,b=void 0===u?1:u,m=e.disabled,h=void 0!==m&&m,g=e.hideNextButton,v=void 0!==g&&g,f=e.hidePrevButton,x=void 0!==f&&f,y=e.onChange,O=e.page,j=e.showFirstButton,k=void 0!==j&&j,C=e.showLastButton,w=void 0!==C&&C,E=e.siblingCount,N=void 0===E?1:E,B=Object(i.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),S=Object(d.a)({controlled:O,default:b,name:r,state:"page"}),W=Object(s.a)(S,2),$=W[0],z=W[1],P=function(e,a){O||z(a),y&&y(e,a)},M=function(e,a){var t=a-e+1;return Array.from({length:t},(function(a,t){return e+t}))},R=M(1,Math.min(t,p)),T=M(Math.max(p-t+1,t+1),p),D=Math.max(Math.min($-N,p-t-2*N-1),t+2),V=Math.min(Math.max($+N,t+2*N+2),T[0]-2),L=[].concat(Object(l.a)(k?["first"]:[]),Object(l.a)(x?[]:["previous"]),Object(l.a)(R),Object(l.a)(D>t+2?["start-ellipsis"]:t+1<p-t?[t+1]:[]),Object(l.a)(M(D,V)),Object(l.a)(V<p-t-1?["end-ellipsis"]:p-t>t?[p-t]:[]),Object(l.a)(T),Object(l.a)(v?[]:["next"]),Object(l.a)(w?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return p;default:return null}},A=L.map((function(e){return"number"===typeof e?{onClick:function(a){P(a,e)},type:"page",page:e,selected:e===$,disabled:h,"aria-current":e===$?"true":void 0}:{onClick:function(a){P(a,F(e))},type:e,page:F(e),selected:!1,disabled:h||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?$>=p:$<=1)}}));return Object(o.a)({items:A},B)}(Object(o.a)({},e,{componentName:"Pagination"})).items;return n.createElement("nav",Object(o.a)({"aria-label":"pagination navigation",className:Object(r.a)(t.root,c),ref:a},w),n.createElement("ul",{className:t.ul},E.map((function(e,a){return n.createElement("li",{key:a},g(Object(o.a)({},e,{color:u,"aria-label":m(e.type,e.page,e.selected),shape:f,size:y,variant:C})))}))))}));a.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(k)},314:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(22),r=t(0),c=(t(6),t(4)),l=t(5),s=t(7),d=t(170),p=t(316),u=t(315),b=t(67),m=t(129),h={enter:b.b.enteringScreen,exit:b.b.leavingScreen},g=r.forwardRef((function(e,a){var t=e.BackdropProps,n=e.children,l=e.classes,b=e.className,g=e.disableBackdropClick,v=void 0!==g&&g,f=e.disableEscapeKeyDown,x=void 0!==f&&f,y=e.fullScreen,O=void 0!==y&&y,j=e.fullWidth,k=void 0!==j&&j,C=e.maxWidth,w=void 0===C?"sm":C,E=e.onBackdropClick,N=e.onClose,B=e.onEnter,S=e.onEntered,W=e.onEntering,$=e.onEscapeKeyDown,z=e.onExit,P=e.onExited,M=e.onExiting,R=e.open,T=e.PaperComponent,D=void 0===T?m.a:T,V=e.PaperProps,L=void 0===V?{}:V,F=e.scroll,A=void 0===F?"paper":F,I=e.TransitionComponent,H=void 0===I?u.a:I,K=e.transitionDuration,Y=void 0===K?h:K,X=e.TransitionProps,G=e["aria-describedby"],J=e["aria-labelledby"],U=Object(i.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),q=r.useRef();return r.createElement(d.a,Object(o.a)({className:Object(c.a)(l.root,b),BackdropComponent:p.a,BackdropProps:Object(o.a)({transitionDuration:Y},t),closeAfterTransition:!0,disableBackdropClick:v,disableEscapeKeyDown:x,onEscapeKeyDown:$,onClose:N,open:R,ref:a},U),r.createElement(H,Object(o.a)({appear:!0,in:R,timeout:Y,onEnter:B,onEntering:W,onEntered:S,onExit:z,onExiting:M,onExited:P,role:"none presentation"},X),r.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(s.a)(A))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===q.current&&(q.current=null,E&&E(e),!v&&N&&N(e,"backdropClick"))},onMouseDown:function(e){q.current=e.target}},r.createElement(D,Object(o.a)({elevation:24,role:"dialog","aria-describedby":G,"aria-labelledby":J},L,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(s.a)(A))],l["paperWidth".concat(Object(s.a)(String(w)))],L.className,O&&l.paperFullScreen,k&&l.paperFullWidth)}),n))))}));a.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(n.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(g)},317:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(0),r=(t(6),t(4)),c=t(5),l=t(130),s=n.forwardRef((function(e,a){var t=e.children,c=e.classes,s=e.className,d=e.disableTypography,p=void 0!==d&&d,u=Object(i.a)(e,["children","classes","className","disableTypography"]);return n.createElement("div",Object(o.a)({className:Object(r.a)(c.root,s),ref:a},u),p?t:n.createElement(l.a,{component:"h2",variant:"h6"},t))}));a.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},318:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(0),r=(t(6),t(4)),c=t(5),l=n.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,d=Object(i.a)(e,["classes","className","dividers"]);return n.createElement("div",Object(o.a)({className:Object(r.a)(t.root,c,s&&t.dividers),ref:a},d))}));a.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},319:function(e,a,t){"use strict";var o=t(1),i=t(0),n=(t(6),t(5)),r=t(130),c=i.forwardRef((function(e,a){return i.createElement(r.a,Object(o.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(n.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},320:function(e,a,t){"use strict";var o=t(1),i=t(3),n=t(0),r=(t(6),t(4)),c=t(5),l=n.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,l=e.classes,s=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(o.a)({className:Object(r.a)(l.root,s,!c&&l.spacing),ref:a},d))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},323:function(e,a,t){"use strict";var o=t(3),i=t(1),n=t(0),r=(t(6),t(4)),c=t(5),l=t(86),s=t(7),d=n.forwardRef((function(e,a){var t=e.children,c=e.classes,d=e.className,p=e.color,u=void 0===p?"default":p,b=e.component,m=void 0===b?"button":b,h=e.disabled,g=void 0!==h&&h,v=e.disableFocusRipple,f=void 0!==v&&v,x=e.focusVisibleClassName,y=e.size,O=void 0===y?"large":y,j=e.variant,k=void 0===j?"round":j,C=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.createElement(l.a,Object(i.a)({className:Object(r.a)(c.root,d,"round"!==k&&c.extended,"large"!==O&&c["size".concat(Object(s.a)(O))],g&&c.disabled,{primary:c.primary,secondary:c.secondary,inherit:c.colorInherit}[u]),component:m,disabled:g,focusRipple:!f,focusVisibleClassName:Object(r.a)(c.focusVisible,x),ref:a},C),n.createElement("span",{className:c.label},t))}));a.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)}}]);
//# sourceMappingURL=10.f472c009.chunk.js.map