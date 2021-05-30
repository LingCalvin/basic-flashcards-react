(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[14],{179:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=0;function i(){return Object(n.useRef)("unique-id-".concat(r++)).current}},180:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(40),r=t(387),i=t(179),o=t(2);function c(e){var a=Object(i.a)();return Object(o.jsx)(r.a,Object(n.a)({id:a},e))}},194:function(e,a,t){"use strict";var n=t(160),r=Object(n.a)((function(e){return{form:{display:"flex",flexDirection:"column",gap:e.spacing(2)},submitOrAltRow:{display:"flex",justifyContent:"space-between",alignItems:"center"}}}));a.a=r},247:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(22),o=t(0),c=(t(6),t(4)),s=t(5),l=t(7),d=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"div":s,u=e.disableGutters,p=void 0!==u&&u,m=e.fixed,b=void 0!==m&&m,f=e.maxWidth,g=void 0===f?"lg":f,h=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(c.a)(t.root,i,b&&t.fixed,p&&t.disableGutters,!1!==g&&t["maxWidth".concat(Object(l.a)(String(g)))]),ref:a},h))}));a.a=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},358:function(e,a,t){"use strict";var n=t(3),r=t(1),i=t(0),o=(t(6),t(4)),c=t(13),s=t(5),l=t(132),d=t(52),u=Object(d.a)(i.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),p=Object(d.a)(i.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),m=Object(d.a)(i.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),b=Object(d.a)(i.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),f=Object(d.a)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),g=t(164),h=t(7),v={success:i.createElement(u,{fontSize:"inherit"}),warning:i.createElement(p,{fontSize:"inherit"}),error:i.createElement(m,{fontSize:"inherit"}),info:i.createElement(b,{fontSize:"inherit"})},j=i.createElement(f,{fontSize:"small"}),x=i.forwardRef((function(e,a){var t=e.action,c=e.children,s=e.classes,d=e.className,u=e.closeText,p=void 0===u?"Close":u,m=e.color,b=e.icon,f=e.iconMapping,x=void 0===f?v:f,O=e.onClose,y=e.role,k=void 0===y?"alert":y,C=e.severity,w=void 0===C?"success":C,W=e.variant,L=void 0===W?"standard":W,E=Object(n.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return i.createElement(l.a,Object(r.a)({role:k,square:!0,elevation:0,className:Object(o.a)(s.root,s["".concat(L).concat(Object(h.a)(m||w))],d),ref:a},E),!1!==b?i.createElement("div",{className:s.icon},b||x[w]||v[w]):null,i.createElement("div",{className:s.message},c),null!=t?i.createElement("div",{className:s.action},t):null,null==t&&O?i.createElement("div",{className:s.action},i.createElement(g.a,{size:"small","aria-label":p,title:p,color:"inherit",onClick:O},j)):null)}));a.a=Object(s.a)((function(e){var a="light"===e.palette.type?c.a:c.e,t="light"===e.palette.type?c.e:c.a;return{root:Object(r.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:a(e.palette.success.main,.6),backgroundColor:t(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:a(e.palette.info.main,.6),backgroundColor:t(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:a(e.palette.warning.main,.6),backgroundColor:t(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:a(e.palette.error.main,.6),backgroundColor:t(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:a(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:a(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:a(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:a(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(x)},391:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var n=t(25),r=t(247),i=t(133),o=t(358),c=t(0),s=t(9),l=t(12),d=t(194),u=t(165),p=t(26),m=t(186),b=t(198),f=t(196),g=t(180),h=t(2),v=f.b().shape({username:f.d().label("Username").required(),password:f.d().label("Password").required()});function j(e){var a,t,n=e.variant,r=e.onSubmit,i=Object(d.a)(),o=Object(m.e)({resolver:Object(b.a)(v)}),c=o.formState.errors,s=o.register,f=o.handleSubmit;return Object(h.jsxs)("form",{className:i.form,onSubmit:f(r),children:[Object(h.jsx)(g.a,{label:"Username",variant:n,inputProps:s("username",{required:!0}),error:void 0!==c.username,helperText:null===(a=c.username)||void 0===a?void 0:a.message}),Object(h.jsx)(g.a,{label:"Password",type:"password",variant:n,inputProps:s("password",{required:!0}),error:void 0!==c.password,helperText:null===(t=c.password)||void 0===t?void 0:t.message}),Object(h.jsxs)("div",{className:i.submitOrAltRow,children:[Object(h.jsx)(u.a,{component:p.b,to:l.a.registration,color:"primary",children:"Create account"}),Object(h.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",children:"Log in"})]})]})}var x=t(41),O=t(160),y=Object(O.a)((function(e){return{content:{display:"flex",flexDirection:"column",gap:e.spacing(2),padding:e.spacing(3)}}})),k=t(33);function C(){var e,a=Object(c.useContext)(k.a),t=y(),d=Object(c.useState)(""),u=Object(n.a)(d,2),p=u[0],m=u[1],b=Object(s.h)().search,f=null!==(e=new URLSearchParams(b).get("continue"))&&void 0!==e?e:l.a.dashboard;return a?Object(h.jsx)(s.a,{to:f}):Object(h.jsxs)(r.a,{className:t.content,component:"main",children:[Object(h.jsx)(i.a,{variant:"h1",children:"Log in"}),p&&Object(h.jsx)(o.a,{severity:"error",children:p}),Object(h.jsx)(j,{variant:"outlined",onSubmit:function(e){x.a.logIn(e.username,e.password).catch((function(e){var a,t;e.response?m(null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message):m("An error has occurred.")}))}})]})}}}]);
//# sourceMappingURL=14.ffe03226.chunk.js.map