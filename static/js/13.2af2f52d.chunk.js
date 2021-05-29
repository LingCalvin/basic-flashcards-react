(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[13],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(28),r=a.n(i),n=a(24),c=a(47),s=a(31),l=a(32),o=a(40),d=a(46),u=new(function(){function e(t){Object(s.a)(this,e),this.http=t}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,i,c,s,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,i=t.description,c=t.visibility,s=t.cards,e.next=3,this.http.post("/decks",{authorId:o.a.getCurrentUser(),title:a,description:i,visibility:c,cards:s.map((function(e){var t=Object(n.a)(e.sides,2);return{frontText:t[0].text,backText:t[1].text}}))});case 3:return l=e.sent,d=l.data,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findOne",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks/".concat(t));case 2:return a=e.sent,i=a.data,e.abrupt("return",b(i));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findAll",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks",{params:t});case 2:return a=e.sent,i=a.data,e.abrupt("return",{decks:i.decks.map(b),count:i.count});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,i,c,s,l,d,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,i=t.title,c=t.description,s=t.visibility,l=t.cards,e.next=3,this.http.put("/decks/".concat(a),{authorId:o.a.getCurrentUser(),title:i,description:c,visibility:s,cards:l.map((function(e){var t=e.id,a=Object(n.a)(e.sides,2);return{id:t,frontText:a[0].text,backText:a[1].text}}))});case 3:return d=e.sent,u=d.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.delete("/decks/".concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(d.a);function b(e){return{id:e.id,authorId:e.authorId,title:e.title,description:e.description,visibility:e.visibility,cards:e.cards.map((function(e){return{id:e.id,sides:[{text:e.frontText},{text:e.backText}]}})),tags:[]}}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(0),r=0;function n(){return Object(i.useRef)("unique-id-".concat(r++)).current}},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=6e3},215:function(e,t,a){"use strict";var i=a(157),r=Object(i.a)((function(e){return{backdrop:{zIndex:e.zIndex.appBar+1}}}));t.a=r},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var i=a(24),r=a(39),n=a(202),c=a(390),s=a(171),l=a(162),o=a(371),d=a(0),u=a(201),b=a(183),p=a(200),f=a(179),j=a(129),v=a(130),x=a(161),h=a(373),O=a(374),m=a(375),g=a(376),y=a(29),k=a(157),C=Object(k.a)((function(e){return{root:{display:"flex",flexDirection:"column",gap:e.spacing(1),padding:e.spacing(2)},header:{display:"flex",justifyContent:"space-between"},textFieldContainer:Object(y.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gap:e.spacing(2)},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr"}),actionArea:{display:"flex",justifyContent:"flex-end"}}})),T=a(2);function w(e){var t=e.index,a=e.variant,i=e.defaultTerm,n=e.defaultDefinition,s=e.termError,l=e.definitionError,o=e.removeDisabled,b=e.moveUpDisabled,p=e.moveDownDisabled,y=e.onRemove,k=e.onMove,w=e.register,D=C(),I=Object(f.a)(),P=Object(d.useCallback)((function(){return y(t)}),[t,y]),V=Object(d.useCallback)((function(){return k(t,t-1)}),[t,k]),R=Object(d.useCallback)((function(){return k(t,t+1)}),[t,k]);return Object(T.jsx)(u.b,{draggableId:I,index:t,children:function(e){return Object(T.jsxs)(j.a,Object(r.a)(Object(r.a)({className:D.root},e.draggableProps),{},{innerRef:e.innerRef,children:[Object(T.jsxs)("div",{className:D.header,children:[Object(T.jsx)(v.a,{variant:"h5",component:"div",children:"Card ".concat(t+1)}),Object(T.jsx)("div",Object(r.a)(Object(r.a)({"aria-label":"card reorder drag handle"},e.dragHandleProps),{},{style:{height:"24px"},children:Object(T.jsx)(h.a,{})}))]}),Object(T.jsxs)("div",{className:D.textFieldContainer,children:[Object(T.jsx)(c.a,{label:"Term",required:!0,multiline:!0,variant:a,defaultValue:i,inputProps:Object(r.a)({"aria-label":"term"},w("cards.".concat(t,".sides.0.text"))),error:void 0!==s,helperText:s}),Object(T.jsx)(c.a,{label:"Definition",required:!0,multiline:!0,variant:a,defaultValue:n,inputProps:Object(r.a)({"aria-label":"definition"},w("cards.".concat(t,".sides.1.text"))),error:void 0!==l,helperText:l})]}),Object(T.jsxs)("div",{className:D.actionArea,children:[Object(T.jsx)(x.a,{"aria-label":"delete",onClick:P,disabled:o,children:Object(T.jsx)(O.a,{})}),Object(T.jsx)(x.a,{"aria-label":"move up",onClick:V,disabled:b,children:Object(T.jsx)(m.a,{})}),Object(T.jsx)(x.a,{"aria-label":"move down",onClick:R,disabled:p,children:Object(T.jsx)(g.a,{})})]})]}))}})}var D=Object(d.memo)(w),I=Object(k.a)((function(e){return{form:{display:"flex",flexDirection:"column",gap:e.spacing(3),marginTop:e.spacing(3),marginBottom:e.spacing(3)},generalInfoContainer:{display:"flex",flexDirection:"column",gap:e.spacing(2)},cardList:{display:"flex",flexDirection:"column",gap:e.spacing(2)},saveButtonContainer:{display:"flex",justifyContent:"flex-end"},editCardTileContainer:{paddingTop:e.spacing(2)}}})),P=p.b().shape({title:p.d().label("Title").required().max(255),description:p.d().label("Description").max(4096),visibility:p.d().label("Visibility").oneOf(["PRIVATE","PUBLIC"]),cards:p.a().of(p.b().shape({sides:p.a().of(p.b().shape({text:p.d().label("This").required().max(4096)}))}))});function V(e){var t,a,p,j,v=e.defaultValues,x=e.variant,h=e.onSubmit,O=I(),m=Object(b.e)({defaultValues:v,resolver:Object(n.a)(P)}),g=m.control,y=m.formState.errors,k=m.handleSubmit,C=m.register,w=Object(b.d)({control:g,name:"cards",keyName:"key"}),V=w.append,R=w.fields,N=w.move,E=w.remove,S=Object(d.useCallback)((function(e){var t=e.source,a=e.destination;!a||a.droppableId===t.droppableId&&a.index===t.index||N(t.index,a.index)}),[N]),A=Object(f.a)();return Object(T.jsxs)("form",{className:O.form,noValidate:!0,onSubmit:k(h),children:[Object(T.jsxs)("div",{className:O.generalInfoContainer,children:[Object(T.jsx)(c.a,{label:"Title",required:!0,variant:x,defaultValue:"",inputProps:Object(r.a)({"aria-label":"title"},C("title")),error:void 0!==y.title,helperText:null===(t=y.title)||void 0===t?void 0:t.message}),Object(T.jsx)(c.a,{label:"Description",variant:x,defaultValue:"",inputProps:Object(r.a)({"aria-label":"description"},C("description")),error:void 0!==y.description,helperText:null===(a=y.description)||void 0===a?void 0:a.message}),Object(T.jsxs)(c.a,{label:"Visibility",select:!0,variant:x,defaultValue:null!==(p=null===v||void 0===v?void 0:v.visibility)&&void 0!==p?p:"PRIVATE",inputProps:Object(r.a)({"aria-label":"visibility"},C("visibility")),error:void 0!==y.visibility,helperText:null===(j=y.visibility)||void 0===j?void 0:j.message,children:[Object(T.jsx)(s.a,{value:"PRIVATE",children:"Private"}),Object(T.jsx)(s.a,{value:"PUBLIC",children:"Public"})]})]}),Object(T.jsx)(u.a,{onDragEnd:S,children:Object(T.jsx)(u.c,{droppableId:A,children:function(e){return Object(T.jsxs)("div",Object(r.a)(Object(r.a)({className:O.cardList,ref:e.innerRef},e.droppableProps),{},{children:[R.map((function(e,t){var a,r,n,c,s,l,o,d,u,b,p=e.key,f=Object(i.a)(e.sides,2),j=f[0].text,v=f[1].text;return Object(T.jsx)(D,{index:t,variant:x,defaultTerm:j,defaultDefinition:v,termError:null===(a=y.cards)||void 0===a||null===(r=a[t])||void 0===r||null===(n=r.sides)||void 0===n||null===(c=n[0])||void 0===c||null===(s=c.text)||void 0===s?void 0:s.message,definitionError:null===(l=y.cards)||void 0===l||null===(o=l[t])||void 0===o||null===(d=o.sides)||void 0===d||null===(u=d[1])||void 0===u||null===(b=u.text)||void 0===b?void 0:b.message,onRemove:E,onMove:N,removeDisabled:R.length<=1,moveUpDisabled:0===t,moveDownDisabled:t>=R.length-1,register:C},p)})),e.placeholder]}))}})}),Object(T.jsx)(l.a,{variant:"outlined",fullWidth:!0,startIcon:Object(T.jsx)(o.a,{}),onClick:function(){return V({sides:[{text:""},{text:""}]})},children:"Add card"}),Object(T.jsx)("div",{className:O.saveButtonContainer,children:Object(T.jsx)(l.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}},372:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var i=a(39),r=a(24),n=a(363),c=a(205),s=a(377),l=a(391),o=a(0),d=a(9),u=a(186),b=a(217),p=a(175),f=a(215),j=a(2);function v(){var e=Object(f.a)(),t=Object(o.useState)(!1),a=Object(r.a)(t,2),v=a[0],x=a[1],h=Object(d.g)(),O=Object(o.useState)(!1),m=Object(r.a)(O,2),g=m[0],y=m[1],k=Object(o.useState)(""),C=Object(r.a)(k,2),T=C[0],w=C[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.a,{open:v,className:e.backdrop,children:Object(j.jsx)(c.a,{color:"inherit"})}),Object(j.jsx)(s.a,{children:Object(j.jsx)(b.a,{variant:"outlined",defaultValues:{title:"",description:"",visibility:"PRIVATE",cards:[{sides:[{text:""},{text:""}]}]},onSubmit:function(e){x(!0),p.a.create(Object(i.a)({tags:[]},e)).then((function(){return h.goBack()})).catch((function(){w("Failed to save deck."),y(!0),x(!1)}))}})}),Object(j.jsx)(l.a,{open:g,message:T,autoHideDuration:u.a,onClose:function(){return y(!1)}})]})}}}]);
//# sourceMappingURL=13.2af2f52d.chunk.js.map