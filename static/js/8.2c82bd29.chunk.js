(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[8],{177:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(28),i=a.n(n),r=a(24),c=a(47),s=a(31),o=a(32),u=a(39),l=a(46),d=new(function(){function t(e){Object(s.a)(this,t),this.http=e}return Object(o.a)(t,[{key:"create",value:function(){var t=Object(c.a)(i.a.mark((function t(e){var a,n,c,s,o,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.title,n=e.description,c=e.visibility,s=e.cards,t.next=3,this.http.post("/decks",{authorId:u.a.getCurrentUser(),title:a,description:n,visibility:c,cards:s.map((function(t){var e=Object(r.a)(t.sides,2);return{frontText:e[0].text,backText:e[1].text}}))});case 3:return o=t.sent,l=o.data,t.abrupt("return",l);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"findOne",value:function(){var t=Object(c.a)(i.a.mark((function t(e){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("/decks/".concat(e));case 2:return a=t.sent,n=a.data,t.abrupt("return",b(n));case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"findAll",value:function(){var t=Object(c.a)(i.a.mark((function t(e){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get("/decks",{params:e});case 2:return a=t.sent,n=a.data,t.abrupt("return",{decks:n.decks.map(b),count:n.count});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(c.a)(i.a.mark((function t(e){var a,n,c,s,o,l,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.id,n=e.title,c=e.description,s=e.visibility,o=e.cards,t.next=3,this.http.put("/decks/".concat(a),{authorId:u.a.getCurrentUser(),title:n,description:c,visibility:s,cards:o.map((function(t){var e=t.id,a=Object(r.a)(t.sides,2);return{id:e,frontText:a[0].text,backText:a[1].text}}))});case 3:return l=t.sent,d=l.data,t.abrupt("return",d);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"remove",value:function(){var t=Object(c.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.delete("/decks/".concat(e)));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}())(l.a);function b(t){return{id:t.id,authorId:t.authorId,title:t.title,description:t.description,visibility:t.visibility,cards:t.cards.map((function(t){return{id:t.id,sides:[{text:t.frontText},{text:t.backText}]}})),tags:[]}}},178:function(t,e,a){"use strict";e.a="This field is required."},182:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=6e3},185:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(59);var i=a(66);function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},193:function(t,e,a){"use strict";var n=a(157),i=Object(n.a)((function(t){return{backdrop:{zIndex:t.zIndex.appBar+1}}}));e.a=i},199:function(t,e,a){"use strict";a.d(e,"a",(function(){return C}));var n=a(40),i=a(185),r=a(24),c=a(338),s=a(171),o=a(162),u=a(324),l=a(0),d=a(178),b=a(202),p=a(130),f=a(161),j=a(51),h=Object(j.a)(l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),v=Object(j.a)(l.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward"),x=Object(j.a)(l.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),O=a(157),m=Object(O.a)((function(t){return{textFieldContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:t.spacing(2)},cardContent:{display:"flex",flexDirection:"column",gap:t.spacing(1),margin:t.spacing(2)},actionArea:{display:"flex",justifyContent:"flex-end"}}})),g=a(2);function k(t){var e=t.cardNumber,a=t.frontText,n=t.backText,i=t.forceValidate,s=t.onFrontTextChange,o=t.onBackTextChange,u=t.onDelete,j=t.onMoveUp,O=t.onMoveDown,k=m(),y=Object(l.useState)(!1),C=Object(r.a)(y,2),w=C[0],T=C[1],S=a.length>0,W=(i||w)&&!S,D=Object(l.useState)(!1),N=Object(r.a)(D,2),I=N[0],V=N[1],L=n.length>0,M=(i||I)&&!L;return Object(g.jsx)(b.a,{children:Object(g.jsxs)("div",{className:k.cardContent,children:[Object(g.jsx)(p.a,{variant:"h5",children:"Card ".concat(e)}),Object(g.jsxs)("div",{className:k.textFieldContainer,children:[Object(g.jsx)(c.a,{label:"Term",required:!0,variant:"outlined",multiline:!0,value:a,error:W,helperText:W?d.a:void 0,onChange:function(t){T(!0),s(t.target.value)},inputProps:{"aria-label":"term"}}),Object(g.jsx)(c.a,{label:"Definition",required:!0,variant:"outlined",multiline:!0,value:n,error:M,helperText:M?d.a:void 0,onChange:function(t){V(!0),o(t.target.value)},inputProps:{"aria-label":"definition"}})]}),Object(g.jsxs)("div",{className:k.actionArea,children:[Object(g.jsx)(f.a,{"aria-label":"delete",onClick:u,disabled:!u,children:Object(g.jsx)(h,{})}),Object(g.jsx)(f.a,{"aria-label":"move up",onClick:j,disabled:!j,children:Object(g.jsx)(v,{})}),Object(g.jsx)(f.a,{"aria-label":"move down",onClick:O,disabled:!O,children:Object(g.jsx)(x,{})})]})]})})}var y=Object(O.a)((function(t){return{form:{display:"flex",flexDirection:"column",gap:t.spacing(3),marginTop:t.spacing(3),marginBottom:t.spacing(3)},generalInfoContainer:{display:"flex",flexDirection:"column",gap:t.spacing(2)},cardList:{display:"flex",flexDirection:"column",gap:t.spacing(2)},saveButtonContainer:{display:"flex",justifyContent:"flex-end"}}}));function C(t){var e=t.title,a=t.description,b=t.visibility,p=t.cards,f=t.onTitleChange,j=t.onDescriptionChange,h=t.onChangeVisibility,v=t.onCardsChange,x=t.onSubmit,O=y(),m=Object(l.useState)(!1),C=Object(r.a)(m,2),w=C[0],T=C[1],S=Object(l.useState)(!1),W=Object(r.a)(S,2),D=W[0],N=W[1],I=(D||w)&&0===e.length,V=function(t,e,a){var r=Object(i.a)(p),c=Object(n.a)({},p[t]);c.sides[e].text=a,r[t]=c,v(r)},L=function(t,e){var a=Object(i.a)(p);a.splice(e,0,a.splice(t,1)[0]),v(a)};return Object(g.jsxs)("form",{noValidate:!0,className:O.form,onSubmit:function(t){t.preventDefault(),0===e.length||p.some((function(t){return t.sides.some((function(t){return 0===t.text.length}))}))?N(!0):x()},children:[Object(g.jsxs)("div",{className:O.generalInfoContainer,children:[Object(g.jsx)(c.a,{required:!0,variant:"outlined",label:"Title",fullWidth:!0,error:I,helperText:I?d.a:void 0,value:e,onChange:function(t){T(!0),f(t.target.value)},inputProps:{"aria-label":"title"}}),Object(g.jsx)(c.a,{variant:"outlined",label:"Description",fullWidth:!0,value:a,onChange:function(t){return j(t.target.value)},inputProps:{"aria-label":"description"}}),Object(g.jsxs)(c.a,{variant:"outlined",value:b,onChange:function(t){return h(t.target.value)},select:!0,label:"Visibility",inputProps:{"aria-label":"visibility"},children:[Object(g.jsx)(s.a,{value:"PRIVATE",children:"Private"}),Object(g.jsx)(s.a,{value:"PUBLIC",children:"Public"})]})]}),Object(g.jsx)("div",{className:O.cardList,children:p.map((function(t,e){var a=Object(r.a)(t.sides,2),n=a[0].text,c=a[1].text;return Object(g.jsx)(k,{forceValidate:D,cardNumber:e+1,frontText:n,backText:c,onFrontTextChange:function(t){return V(e,0,t)},onBackTextChange:function(t){return V(e,1,t)},onDelete:p.length>1?function(){return t=e,void v([].concat(Object(i.a)(p.slice(0,t)),Object(i.a)(p.slice(t+1))));var t}:void 0,onMoveUp:0!==e?function(){return L(e,e-1)}:void 0,onMoveDown:e!==p.length-1?function(){return L(e,e+1)}:void 0},e)}))}),Object(g.jsx)(o.a,{variant:"outlined",fullWidth:!0,startIcon:Object(g.jsx)(u.a,{}),onClick:function(){v([].concat(Object(i.a)(p),[{sides:[{text:""},{text:""}]}]))},children:"Add card"}),Object(g.jsx)("div",{className:O.saveButtonContainer,children:Object(g.jsx)(o.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}},202:function(t,e,a){"use strict";var n=a(1),i=a(3),r=a(0),c=(a(6),a(4)),s=a(129),o=a(5),u=r.forwardRef((function(t,e){var a=t.classes,o=t.className,u=t.raised,l=void 0!==u&&u,d=Object(i.a)(t,["classes","className","raised"]);return r.createElement(s.a,Object(n.a)({className:Object(c.a)(a.root,o),elevation:l?8:1,ref:e},d))}));e.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},203:function(t,e,a){"use strict";var n=a(1),i=a(3),r=a(22),c=a(0),s=(a(6),a(4)),o=a(5),u=a(7),l=c.forwardRef((function(t,e){var a=t.classes,r=t.className,o=t.component,l=void 0===o?"div":o,d=t.disableGutters,b=void 0!==d&&d,p=t.fixed,f=void 0!==p&&p,j=t.maxWidth,h=void 0===j?"lg":j,v=Object(i.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(l,Object(n.a)({className:Object(s.a)(a.root,r,f&&a.fixed,b&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(u.a)(String(h)))]),ref:e},v))}));e.a=Object(o.a)((function(t){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:n}),e}),{}),maxWidthXs:Object(r.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(r.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},325:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return j}));var n=a(24),i=a(316),r=a(192),c=a(203),s=a(339),o=a(0),u=a(9),l=a(182),d=a(199),b=a(177),p=a(193),f=a(2);function j(){var t=Object(p.a)(),e=Object(o.useState)(""),a=Object(n.a)(e,2),j=a[0],h=a[1],v=Object(o.useState)(""),x=Object(n.a)(v,2),O=x[0],m=x[1],g=Object(o.useState)("PRIVATE"),k=Object(n.a)(g,2),y=k[0],C=k[1],w=Object(o.useState)([{sides:[{text:""},{text:""}]}]),T=Object(n.a)(w,2),S=T[0],W=T[1],D=Object(o.useState)(!1),N=Object(n.a)(D,2),I=N[0],V=N[1],L=Object(u.g)(),M=Object(o.useState)(!1),A=Object(n.a)(M,2),P=A[0],B=A[1],E=Object(o.useState)(""),R=Object(n.a)(E,2),z=R[0],F=R[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{open:I,className:t.backdrop,children:Object(f.jsx)(r.a,{color:"inherit"})}),Object(f.jsx)(c.a,{children:Object(f.jsx)(d.a,{title:j,description:O,visibility:y,cards:S,onTitleChange:h,onDescriptionChange:m,onChangeVisibility:C,onCardsChange:W,onSubmit:function(){V(!0),b.a.create({title:j,description:O,visibility:y,cards:S,tags:[]}).then((function(){return L.goBack()})).catch((function(){F("Failed to save deck."),B(!0),V(!1)}))}})}),Object(f.jsx)(s.a,{open:P,message:z,autoHideDuration:l.a,onClose:function(){return B(!1)}})]})}}}]);
//# sourceMappingURL=8.2c82bd29.chunk.js.map