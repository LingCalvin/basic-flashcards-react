(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[11],{175:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i(28),n=i.n(a),r=i(24),c=i(47),s=i(31),l=i(32),o=i(39),d=i(46),u=new(function(){function e(t){Object(s.a)(this,e),this.http=t}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var i,a,c,s,l,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.title,a=t.description,c=t.visibility,s=t.cards,e.next=3,this.http.post("/decks",{authorId:o.a.getCurrentUser(),title:i,description:a,visibility:c,cards:s.map((function(e){var t=Object(r.a)(e.sides,2);return{frontText:t[0].text,backText:t[1].text}}))});case 3:return l=e.sent,d=l.data,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findOne",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var i,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks/".concat(t));case 2:return i=e.sent,a=i.data,e.abrupt("return",b(a));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findAll",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var i,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks",{params:t});case 2:return i=e.sent,a=i.data,e.abrupt("return",{decks:a.decks.map(b),count:a.count});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(c.a)(n.a.mark((function e(t){var i,a,c,s,l,d,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.id,a=t.title,c=t.description,s=t.visibility,l=t.cards,e.next=3,this.http.put("/decks/".concat(i),{authorId:o.a.getCurrentUser(),title:a,description:c,visibility:s,cards:l.map((function(e){var t=e.id,i=Object(r.a)(e.sides,2);return{id:t,frontText:i[0].text,backText:i[1].text}}))});case 3:return d=e.sent,u=d.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.delete("/decks/".concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(d.a);function b(e){return{id:e.id,authorId:e.authorId,title:e.title,description:e.description,visibility:e.visibility,cards:e.cards.map((function(e){return{id:e.id,sides:[{text:e.frontText},{text:e.backText}]}})),tags:[]}}},177:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var a=i(24),n=i(203),r=i(4),c=i(0),s=i(157),l=Object(s.a)({root:{display:"flex",justifyContent:"center"}}),o=i(2);function d(e){var t=e.loading,i=e.children,s=e.className,d=e.delay,u=void 0===d?300:d,b=l(),p=Object(c.useState)(u<=0),f=Object(a.a)(p,2),j=f[0],v=f[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){v(!0)}),u);return function(){return clearTimeout(e)}}),[u]),t?Object(o.jsx)("div",{className:Object(r.a)(b.root,s),children:j&&Object(o.jsx)(n.a,{})}):Object(o.jsx)(o.Fragment,{children:i})}},185:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a=6e3},213:function(e,t,i){"use strict";var a=i(157),n=Object(a.a)((function(e){return{backdrop:{zIndex:e.zIndex.appBar+1}}}));t.a=n},215:function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var a=i(40),n=i(384),r=i(171),c=i(129),s=i(130),l=i(161),o=i(162),d=i(0),u=i(51),b=Object(u.a)(d.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),p=Object(u.a)(d.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward"),f=Object(u.a)(d.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),j=i(369),v=i(182),x=i(157),h=Object(x.a)((function(e){return{form:{display:"flex",flexDirection:"column",gap:e.spacing(3),marginTop:e.spacing(3),marginBottom:e.spacing(3)},generalInfoContainer:{display:"flex",flexDirection:"column",gap:e.spacing(2)},cardList:{display:"flex",flexDirection:"column",gap:e.spacing(2)},saveButtonContainer:{display:"flex",justifyContent:"flex-end"},editCardTile:{display:"flex",flexDirection:"column",gap:e.spacing(1),padding:e.spacing(2)},editCardTileFieldContainer:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:e.spacing(2)},editCardTileActionArea:{display:"flex",justifyContent:"flex-end"}}})),O=i(199),m=i(200),y=i(2),g=O.b().shape({title:O.d().label("Title").required().max(255),description:O.d().label("Description").max(4096),visibility:O.d().label("Visibility").oneOf(["PRIVATE","PUBLIC"]),cards:O.a().of(O.b().shape({sides:O.a().of(O.b().shape({text:O.d().label("This").required().max(4096)}))}))});function k(e){var t,i,d,u,x=e.defaultValues,O=e.variant,k=e.onSubmit,T=h(),C=Object(v.e)({defaultValues:x,reValidateMode:"onBlur",resolver:Object(m.a)(g)}),V=C.control,w=C.formState.errors,I=C.handleSubmit,P=C.register,S=Object(v.d)({control:V,name:"cards",keyName:"key"}),A=S.append,N=S.fields,D=S.move,B=S.remove;return Object(y.jsxs)("form",{className:T.form,noValidate:!0,onSubmit:I(k),children:[Object(y.jsxs)("div",{className:T.generalInfoContainer,children:[Object(y.jsx)(n.a,{label:"Title",required:!0,variant:O,defaultValue:"",inputProps:Object(a.a)({"aria-label":"title"},P("title")),error:void 0!==w.title,helperText:null===(t=w.title)||void 0===t?void 0:t.message}),Object(y.jsx)(n.a,{label:"Description",variant:O,defaultValue:"",inputProps:Object(a.a)({"aria-label":"description"},P("description")),error:void 0!==w.description,helperText:null===(i=w.description)||void 0===i?void 0:i.message}),Object(y.jsxs)(n.a,{label:"Visibility",select:!0,variant:O,defaultValue:null!==(d=null===x||void 0===x?void 0:x.visibility)&&void 0!==d?d:"PRIVATE",inputProps:Object(a.a)({"aria-label":"visibility"},P("visibility")),error:void 0!==w.visibility,helperText:null===(u=w.visibility)||void 0===u?void 0:u.message,children:[Object(y.jsx)(r.a,{value:"PRIVATE",children:"Private"}),Object(y.jsx)(r.a,{value:"PUBLIC",children:"Public"})]})]}),Object(y.jsx)("div",{className:T.cardList,children:N.map((function(e,t){var i,r,o,d,u,j,v,x,h,m,g,k,C,V,I,S,A,E,L=e.key,z=e.sides;return Object(y.jsxs)(c.a,{className:T.editCardTile,children:[Object(y.jsx)(s.a,{variant:"h6",component:"div",children:"Card ".concat(t+1)}),Object(y.jsxs)("div",{className:T.editCardTileFieldContainer,children:[Object(y.jsx)(n.a,{label:"Term",required:!0,variant:O,defaultValue:z[0].text,inputProps:Object(a.a)({"aria-label":"term"},P("cards.".concat(t,".sides.0.text"))),error:void 0!==(null===(i=w.cards)||void 0===i||null===(r=i[t])||void 0===r||null===(o=r.sides)||void 0===o||null===(d=o[0])||void 0===d?void 0:d.text),helperText:null===(u=w.cards)||void 0===u||null===(j=u[t])||void 0===j||null===(v=j.sides)||void 0===v||null===(x=v[0])||void 0===x||null===(h=x.text)||void 0===h?void 0:h.message}),Object(y.jsx)(n.a,{label:"Definition",required:!0,variant:O,defaultValue:z[1].text,inputProps:Object(a.a)({"aria-label":"definition"},P("cards.".concat(t,".sides.1.text"))),error:void 0!==(null===(m=w.cards)||void 0===m||null===(g=m[t])||void 0===g||null===(k=g.sides)||void 0===k||null===(C=k[1])||void 0===C?void 0:C.text),helperText:null===(V=w.cards)||void 0===V||null===(I=V[t])||void 0===I||null===(S=I.sides)||void 0===S||null===(A=S[1])||void 0===A||null===(E=A.text)||void 0===E?void 0:E.message})]}),Object(y.jsxs)("div",{className:T.editCardTileActionArea,children:[Object(y.jsx)(l.a,{"aria-label":"delete",onClick:function(){return B(t)},disabled:N.length<=1,children:Object(y.jsx)(b,{})}),Object(y.jsx)(l.a,{"aria-label":"move up",onClick:function(){return D(t,t-1)},disabled:t<=0,children:Object(y.jsx)(p,{})}),Object(y.jsx)(l.a,{"aria-label":"move down",onClick:function(){return D(t,t+1)},disabled:t>=N.length-1,children:Object(y.jsx)(f,{})})]})]},L)}))}),Object(y.jsx)(o.a,{variant:"outlined",fullWidth:!0,startIcon:Object(y.jsx)(j.a,{}),onClick:function(){return A({sides:[{text:""},{text:""}]})},children:"Add card"}),Object(y.jsx)("div",{className:T.saveButtonContainer,children:Object(y.jsx)(o.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}},376:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return x}));var a=i(40),n=i(24),r=i(361),c=i(203),s=i(371),l=i(385),o=i(0),d=i(9),u=i(177),b=i(185),p=i(215),f=i(175),j=i(213),v=i(2);function x(){var e=Object(j.a)(),t=Object(d.i)().id,i=Object(o.useState)(!1),x=Object(n.a)(i,2),h=x[0],O=x[1],m=Object(d.g)(),y=Object(o.useState)(null),g=Object(n.a)(y,2),k=g[0],T=g[1],C=Object(o.useState)(!0),V=Object(n.a)(C,2),w=V[0],I=V[1],P=Object(o.useState)(!1),S=Object(n.a)(P,2),A=S[0],N=S[1],D=Object(o.useState)(""),B=Object(n.a)(D,2),E=B[0],L=B[1];return Object(o.useEffect)((function(){I(!0),f.a.findOne(t).then((function(e){return T(e)})).finally((function(){return I(!1)}))}),[t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(r.a,{open:h,className:e.backdrop,children:Object(v.jsx)(c.a,{color:"inherit"})}),Object(v.jsx)(u.a,{loading:w,children:k&&Object(v.jsx)(s.a,{children:Object(v.jsx)(p.a,{variant:"outlined",defaultValues:k,onSubmit:function(e){O(!0),f.a.update(Object(a.a)({tags:[]},e)).then((function(){return m.goBack()})).catch((function(){L("Failed to update deck."),N(!0),O(!1)}))}})})}),Object(v.jsx)(l.a,{open:A,message:E,autoHideDuration:b.a,onClose:function(){return N(!1)}})]})}}}]);
//# sourceMappingURL=11.ea96809b.chunk.js.map