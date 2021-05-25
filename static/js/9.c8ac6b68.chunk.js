(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[9],{177:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(28),a=n.n(r),i=n(24),c=n(47),o=n(31),s=n(32),u=n(39),l=n(46),d=new(function(){function t(e){Object(o.a)(this,t),this.http=e}return Object(s.a)(t,[{key:"create",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o,s,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.title,r=e.description,c=e.visibility,o=e.cards,t.next=3,this.http.post("/decks",{authorId:u.a.getCurrentUser(),title:n,description:r,visibility:c,cards:o.map((function(t){var e=Object(i.a)(t.sides,2);return{frontText:e[0].text,backText:e[1].text}}))});case 3:return s=t.sent,l=s.data,t.abrupt("return",l);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"findOne",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("/decks/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",p(r));case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"findAll",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("/decks",{params:e});case 2:return n=t.sent,r=n.data,t.abrupt("return",{decks:r.decks.map(p),count:r.count});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o,s,l,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.title,c=e.description,o=e.visibility,s=e.cards,t.next=3,this.http.put("/decks/".concat(n),{authorId:u.a.getCurrentUser(),title:r,description:c,visibility:o,cards:s.map((function(t){var e=t.id,n=Object(i.a)(t.sides,2);return{id:e,frontText:n[0].text,backText:n[1].text}}))});case 3:return l=t.sent,d=l.data,t.abrupt("return",d);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"remove",value:function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.delete("/decks/".concat(e)));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}())(l.a);function p(t){return{id:t.id,authorId:t.authorId,title:t.title,description:t.description,visibility:t.visibility,cards:t.cards.map((function(t){return{id:t.id,sides:[{text:t.frontText},{text:t.backText}]}})),tags:[]}}},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(24),a=n(192),i=n(4),c=n(0),o=n(157),s=Object(o.a)({root:{display:"flex",justifyContent:"center"}}),u=n(2);function l(t){var e=t.loading,n=t.children,o=t.className,l=t.delay,d=void 0===l?300:l,p=s(),f=Object(c.useState)(d<=0),h=Object(r.a)(f,2),b=h[0],m=h[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){m(!0)}),d);return function(){return clearTimeout(t)}}),[d]),e?Object(u.jsx)("div",{className:Object(i.a)(p.root,o),children:b&&Object(u.jsx)(a.a,{})}):Object(u.jsx)(u.Fragment,{children:n})}},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(191),a=n(25),i=n(2);function c(t){var e=t.to,n=t.color,c=t.children;return Object(i.jsx)(r.a,{component:a.b,to:e,color:n,children:c})}},181:function(t,e,n){"use strict";function r(t){return"/decks/".concat(t)}n.d(e,"a",(function(){return r}))},186:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(129),a=n(130),i=n(162),c=n(180),o=n(157),s=Object(o.a)((function(t){return{root:{cursor:"pointer",padding:t.spacing(2),"&:hover":{backgroundColor:t.palette.action.hover}},title:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},buttonBox:{display:"flex",justifyContent:"flex-end"},deleteButton:{color:t.palette.error.dark}}})),u=n(2);function l(t){var e=t.title,n=(t.deckId,t.numberOfCards),o=t.author,l=t.onClick,d=t.onDelete,p=t.onExport,f=t.onEdit,h=s();return Object(u.jsxs)(r.a,{className:h.root,onClick:l,children:[Object(u.jsx)(a.a,{className:h.title,variant:"h5",component:"div",children:e}),Object(u.jsx)(a.a,{children:"".concat(n," cards")}),o&&Object(u.jsxs)(a.a,{onClick:function(t){return t.stopPropagation()},component:"span",children:["By ",Object(u.jsx)(c.a,{to:"/users/".concat(o),children:o})]}),(d||p||f)&&Object(u.jsxs)("div",{className:h.buttonBox,children:[d&&Object(u.jsx)(i.a,{className:h.deleteButton,onClick:function(t){t.stopPropagation(),d()},children:"Delete"}),p&&Object(u.jsx)(i.a,{onClick:function(t){t.stopPropagation(),p()},children:"Export"}),f&&Object(u.jsx)(i.a,{color:"primary",onClick:function(t){t.stopPropagation(),f()},children:"Edit"})]})]})}},191:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(7),s=n(5),u=n(64),l=n(10),d=n(130),p=i.forwardRef((function(t,e){var n=t.classes,s=t.className,p=t.color,f=void 0===p?"primary":p,h=t.component,b=void 0===h?"a":h,m=t.onBlur,v=t.onFocus,x=t.TypographyClasses,j=t.underline,k=void 0===j?"hover":j,O=t.variant,y=void 0===O?"inherit":O,g=Object(a.a)(t,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),D=Object(u.a)(),w=D.isFocusVisible,C=D.onBlurVisible,N=D.ref,S=i.useState(!1),B=S[0],T=S[1],E=Object(l.a)(e,N);return i.createElement(d.a,Object(r.a)({className:Object(c.a)(n.root,n["underline".concat(Object(o.a)(k))],s,B&&n.focusVisible,"button"===b&&n.button),classes:x,color:f,component:b,onBlur:function(t){B&&(C(),T(!1)),m&&m(t)},onFocus:function(t){w(t)&&T(!0),v&&v(t)},ref:E,variant:y},g))}));e.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},192:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(5),s=n(7),u=44,l=i.forwardRef((function(t,e){var n=t.classes,o=t.className,l=t.color,d=void 0===l?"primary":l,p=t.disableShrink,f=void 0!==p&&p,h=t.size,b=void 0===h?40:h,m=t.style,v=t.thickness,x=void 0===v?3.6:v,j=t.value,k=void 0===j?0:j,O=t.variant,y=void 0===O?"indeterminate":O,g=Object(a.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),D={},w={},C={};if("determinate"===y||"static"===y){var N=2*Math.PI*((u-x)/2);D.strokeDasharray=N.toFixed(3),C["aria-valuenow"]=Math.round(k),D.strokeDashoffset="".concat(((100-k)/100*N).toFixed(3),"px"),w.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(c.a)(n.root,o,"inherit"!==d&&n["color".concat(Object(s.a)(d))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[y]),style:Object(r.a)({width:b,height:b},w,m),ref:e,role:"progressbar"},C,g),i.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},i.createElement("circle",{className:Object(c.a)(n.circle,f&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[y]),style:D,cx:u,cy:u,r:(u-x)/2,fill:"none",strokeWidth:x})))}));e.a=Object(o.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},340:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(24),a=n(130),i=n(0),c=n(9),o=n(179),s=n(177),u=n(186),l=n(157),d=Object(l.a)((function(t){return{topSection:{backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText,padding:t.spacing(4),display:"flex",flexDirection:"column",alignItems:"center",gap:t.spacing(2)},buttonBox:{display:"flex",flexDirection:"column",gap:t.spacing(1)},exampleDecksContainer:{display:"flex",flexDirection:"column",gap:t.spacing(1)},exampleDecksSection:{marginLeft:t.spacing(2),marginRight:t.spacing(2),paddingBottom:t.spacing(3)}}})),p=n(181),f=n(2);function h(){var t=d(),e=Object(i.useState)(!0),n=Object(r.a)(e,2),l=n[0],h=n[1],b=Object(i.useState)([]),m=Object(r.a)(b,2),v=m[0],x=m[1],j=Object(c.g)();return Object(i.useEffect)((function(){s.a.findAll({orderTitleBy:"asc",take:3}).then((function(t){var e=t.decks;return x(e)})).finally((function(){return h(!1)}))}),[]),Object(f.jsx)("div",{children:Object(f.jsxs)("main",{children:[Object(f.jsx)("div",{className:t.topSection,children:Object(f.jsx)(a.a,{variant:"h1",component:"p",children:"Create, search for, and review decks."})}),Object(f.jsxs)("div",{className:t.exampleDecksSection,children:[Object(f.jsx)(a.a,{variant:"h2",component:"div",children:"Example decks"}),Object(f.jsx)(o.a,{loading:l,children:Object(f.jsx)("div",{className:t.exampleDecksContainer,children:v.map((function(t){var e,n;return Object(f.jsx)(u.a,{deckId:null!==(e=t.id)&&void 0!==e?e:"",title:t.title,numberOfCards:t.cards.length,author:null!==(n=t.authorId)&&void 0!==n?n:"",onClick:function(){var e;return j.push(Object(p.a)(null!==(e=t.id)&&void 0!==e?e:""))}},t.id)}))})})]})]})})}}}]);
//# sourceMappingURL=9.c8ac6b68.chunk.js.map