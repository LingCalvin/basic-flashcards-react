(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[3],{177:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(28),n=a.n(r),i=a(24),c=a(48),s=a(31),o=a(32),l=a(39),u=a(46),d=new(function(){function e(t){Object(s.a)(this,e),this.http=t}return Object(o.a)(e,[{key:"create",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s,o,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,r=t.description,c=t.visibility,s=t.cards,e.next=3,this.http.post("/decks",{authorId:l.a.getCurrentUser(),title:a,description:r,visibility:c,cards:s.map((function(e){var t=Object(i.a)(e.sides,2);return{frontText:t[0].text,backText:t[1].text}}))});case 3:return o=e.sent,u=o.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findOne",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks/".concat(t));case 2:return a=e.sent,r=a.data,e.abrupt("return",p(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findAll",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks",{params:t});case 2:return a=e.sent,r=a.data,e.abrupt("return",{decks:r.decks.map(p),count:r.count});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s,o,u,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,r=t.title,c=t.description,s=t.visibility,o=t.cards,e.next=3,this.http.put("/decks/".concat(a),{authorId:l.a.getCurrentUser(),title:r,description:c,visibility:s,cards:o.map((function(e){var t=e.id,a=Object(i.a)(e.sides,2);return{id:t,frontText:a[0].text,backText:a[1].text}}))});case 3:return u=e.sent,d=u.data,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.delete("/decks/".concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(u.a);function p(e){return{id:e.id,authorId:e.authorId,title:e.title,description:e.description,visibility:e.visibility,cards:e.cards.map((function(e){return{id:e.id,sides:[{text:e.frontText},{text:e.backText}]}})),tags:[]}}},180:function(e,t,a){"use strict";t.a="This field is required."},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=6e3},191:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(0),c=(a(6),a(4)),s=a(5),o=a(7),l=44,u=i.forwardRef((function(e,t){var a=e.classes,s=e.className,u=e.color,d=void 0===u?"primary":u,p=e.disableShrink,b=void 0!==p&&p,f=e.size,h=void 0===f?40:f,v=e.style,m=e.thickness,x=void 0===m?3.6:m,j=e.value,O=void 0===j?0:j,g=e.variant,k=void 0===g?"indeterminate":g,y=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),C={},w={},D={};if("determinate"===k||"static"===k){var T=2*Math.PI*((l-x)/2);C.strokeDasharray=T.toFixed(3),D["aria-valuenow"]=Math.round(O),C.strokeDashoffset="".concat(((100-O)/100*T).toFixed(3),"px"),w.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(c.a)(a.root,s,"inherit"!==d&&a["color".concat(Object(o.a)(d))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[k]),style:Object(r.a)({width:h,height:h},w,v),ref:t,role:"progressbar"},D,y),i.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:Object(c.a)(a.circle,b&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[k]),style:C,cx:l,cy:l,r:(l-x)/2,fill:"none",strokeWidth:x})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(60);var n=a(67);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},200:function(e,t,a){"use strict";var r=a(157),n=Object(r.a)((function(e){return{backdrop:{zIndex:e.zIndex.appBar+1}}}));t.a=n},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var r=a(40),n=a(197),i=a(24),c=a(338),s=a(171),o=a(162),l=a(324),u=a(0),d=a(180),p=a(223),b=a(130),f=a(161),h=a(51),v=Object(h.a)(u.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),m=Object(h.a)(u.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward"),x=Object(h.a)(u.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),j=a(157),O=Object(j.a)((function(e){return{textFieldContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:e.spacing(2)},cardContent:{display:"flex",flexDirection:"column",gap:e.spacing(1),margin:e.spacing(2)},actionArea:{display:"flex",justifyContent:"flex-end"}}})),g=a(2);function k(e){var t=e.cardNumber,a=e.frontText,r=e.backText,n=e.forceValidate,s=e.onFrontTextChange,o=e.onBackTextChange,l=e.onDelete,h=e.onMoveUp,j=e.onMoveDown,k=O(),y=Object(u.useState)(!1),C=Object(i.a)(y,2),w=C[0],D=C[1],T=a.length>0,N=(n||w)&&!T,S=Object(u.useState)(!1),W=Object(i.a)(S,2),I=W[0],M=W[1],L=r.length>0,P=(n||I)&&!L;return Object(g.jsx)(p.a,{children:Object(g.jsxs)("div",{className:k.cardContent,children:[Object(g.jsx)(b.a,{variant:"h5",children:"Card ".concat(t)}),Object(g.jsxs)("div",{className:k.textFieldContainer,children:[Object(g.jsx)(c.a,{label:"Term",required:!0,variant:"outlined",multiline:!0,value:a,error:N,helperText:N?d.a:void 0,onChange:function(e){D(!0),s(e.target.value)},inputProps:{"aria-label":"term"}}),Object(g.jsx)(c.a,{label:"Definition",required:!0,variant:"outlined",multiline:!0,value:r,error:P,helperText:P?d.a:void 0,onChange:function(e){M(!0),o(e.target.value)},inputProps:{"aria-label":"definition"}})]}),Object(g.jsxs)("div",{className:k.actionArea,children:[Object(g.jsx)(f.a,{"aria-label":"delete",onClick:l,disabled:!l,children:Object(g.jsx)(v,{})}),Object(g.jsx)(f.a,{"aria-label":"move up",onClick:h,disabled:!h,children:Object(g.jsx)(m,{})}),Object(g.jsx)(f.a,{"aria-label":"move down",onClick:j,disabled:!j,children:Object(g.jsx)(x,{})})]})]})})}var y=Object(j.a)((function(e){return{form:{display:"flex",flexDirection:"column",gap:e.spacing(3),marginTop:e.spacing(3),marginBottom:e.spacing(3)},generalInfoContainer:{display:"flex",flexDirection:"column",gap:e.spacing(2)},cardList:{display:"flex",flexDirection:"column",gap:e.spacing(2)},saveButtonContainer:{display:"flex",justifyContent:"flex-end"}}}));function C(e){var t=e.title,a=e.description,p=e.visibility,b=e.cards,f=e.onTitleChange,h=e.onDescriptionChange,v=e.onChangeVisibility,m=e.onCardsChange,x=e.onSubmit,j=y(),O=Object(u.useState)(!1),C=Object(i.a)(O,2),w=C[0],D=C[1],T=Object(u.useState)(!1),N=Object(i.a)(T,2),S=N[0],W=N[1],I=(S||w)&&0===t.length,M=function(e,t,a){var i=Object(n.a)(b),c=Object(r.a)({},b[e]);c.sides[t].text=a,i[e]=c,m(i)},L=function(e,t){var a=Object(n.a)(b);a.splice(t,0,a.splice(e,1)[0]),m(a)};return Object(g.jsxs)("form",{noValidate:!0,className:j.form,onSubmit:function(e){e.preventDefault(),0===t.length||b.some((function(e){return e.sides.some((function(e){return 0===e.text.length}))}))?W(!0):x()},children:[Object(g.jsxs)("div",{className:j.generalInfoContainer,children:[Object(g.jsx)(c.a,{required:!0,variant:"outlined",label:"Title",fullWidth:!0,error:I,helperText:I?d.a:void 0,value:t,onChange:function(e){D(!0),f(e.target.value)},inputProps:{"aria-label":"title"}}),Object(g.jsx)(c.a,{variant:"outlined",label:"Description",fullWidth:!0,value:a,onChange:function(e){return h(e.target.value)},inputProps:{"aria-label":"description"}}),Object(g.jsxs)(c.a,{variant:"outlined",value:p,onChange:function(e){return v(e.target.value)},select:!0,label:"Visibility",inputProps:{"aria-label":"visibility"},children:[Object(g.jsx)(s.a,{value:"PRIVATE",children:"Private"}),Object(g.jsx)(s.a,{value:"PUBLIC",children:"Public"})]})]}),Object(g.jsx)("div",{className:j.cardList,children:b.map((function(e,t){var a=Object(i.a)(e.sides,2),r=a[0].text,c=a[1].text;return Object(g.jsx)(k,{forceValidate:S,cardNumber:t+1,frontText:r,backText:c,onFrontTextChange:function(e){return M(t,0,e)},onBackTextChange:function(e){return M(t,1,e)},onDelete:b.length>1?function(){return e=t,void m([].concat(Object(n.a)(b.slice(0,e)),Object(n.a)(b.slice(e+1))));var e}:void 0,onMoveUp:0!==t?function(){return L(t,t-1)}:void 0,onMoveDown:t!==b.length-1?function(){return L(t,t+1)}:void 0},t)}))}),Object(g.jsx)(o.a,{variant:"outlined",fullWidth:!0,startIcon:Object(g.jsx)(l.a,{}),onClick:function(){m([].concat(Object(n.a)(b),[{sides:[{text:""},{text:""}]}]))},children:"Add card"}),Object(g.jsx)("div",{className:j.saveButtonContainer,children:Object(g.jsx)(o.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}},223:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(0),c=(a(6),a(4)),s=a(129),o=a(5),l=i.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.raised,u=void 0!==l&&l,d=Object(n.a)(e,["classes","className","raised"]);return i.createElement(s.a,Object(r.a)({className:Object(c.a)(a.root,o),elevation:u?8:1,ref:t},d))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},224:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(22),c=a(0),s=(a(6),a(4)),o=a(5),l=a(7),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,u=void 0===o?"div":o,d=e.disableGutters,p=void 0!==d&&d,b=e.fixed,f=void 0!==b&&b,h=e.maxWidth,v=void 0===h?"lg":h,m=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(r.a)({className:Object(s.a)(a.root,i,f&&a.fixed,p&&a.disableGutters,!1!==v&&a["maxWidth".concat(Object(l.a)(String(v)))]),ref:t},m))}));t.a=Object(o.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:r}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)}}]);
//# sourceMappingURL=3.1b694e43.chunk.js.map