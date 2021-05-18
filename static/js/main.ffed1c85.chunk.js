(this["webpackJsonpflashcards-react"]=this["webpackJsonpflashcards-react"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=(n(75),n(46)),o=n(18),l=n(133),d=Object(c.createContext)((function(){})),u=Object(c.createContext)({loggedIn:!1}),j=n(40),b=n(9),h={home:"/",dashboard:"/dashboard",decks:"/decks"},f=n(121),p=n(123),x=n(102),O=n(2);function g(){return Object(O.jsx)(f.a,{position:"sticky",children:Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{variant:"h6",children:"Basic Flashcards"})})})}function m(){return Object(O.jsx)(g,{})}var v,k=n(134),y=n(126),w=n(61),S=null!==(v="792394819697-o8bra7r13g841c7f41goqu0uj2t3pqpm.apps.googleusercontent.com")?v:"",C=n(19),I=n.n(C),N=n(25),T=n(38),B=n(39),F=n(62),D=n.n(F).a.create({baseURL:"https://basic-flashcards.herokuapp.com",withCredentials:!0});D.interceptors.request.use((function(e){var t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var L=D,A=new(function(){function e(t){Object(T.a)(this,e),this.http=t}return Object(B.a)(e,[{key:"logIn",value:function(){var e=Object(N.a)(I.a.mark((function e(t){var n,c,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.post("/auth/access-tokens",{idToken:t});case 2:return n=e.sent,c=n.data,a=c.accessToken,r=c.decodedAccessToken,localStorage.setItem("accessToken",a),localStorage.setItem("accessTokenPayload",JSON.stringify(r)),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(N.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("accessToken"),localStorage.removeItem("accessTokenPayload");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyAccessToken",value:function(){var e=Object(N.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.http.get("/auth/access-tokens/".concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())(L),P=new(function(){function e(t){Object(T.a)(this,e),this.http=t}return Object(B.a)(e,[{key:"findOne",value:function(){var e=Object(N.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks/".concat(t));case 2:return n=e.sent,c=n.data,e.abrupt("return",E(c));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findAll",value:function(){var e=Object(N.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("/decks",{params:t});case 2:return n=e.sent,c=n.data,e.abrupt("return",{decks:c.decks.map(E),count:c.count});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(L);function E(e){return{id:e.id,authorId:e.authorId,title:e.title,description:e.description,cards:e.cards.map((function(e){return{sides:[{text:e.frontText},{text:e.backText}]}})),tags:[]}}var z=n(64),J=n(124);function W(e){var t=e.to,n=e.color,c=e.children;return Object(O.jsx)(J.a,{component:j.b,to:t,color:n,children:c})}var q=n(125),R=Object(q.a)((function(e){return{root:{cursor:"pointer",padding:e.spacing(2),"&:hover":{backgroundColor:e.palette.grey[50]}}}}));function G(e){var t=e.title,n=e.numberOfCards,c=e.author,a=e.onClick,r=R();return Object(O.jsxs)(z.a,{className:r.root,onClick:a,children:[Object(O.jsx)(x.a,{variant:"h5",children:t}),Object(O.jsx)(x.a,{children:"".concat(n," cards")}),Object(O.jsxs)(x.a,{children:["By ",Object(O.jsx)(W,{to:"/users/".concat(c),children:c})]})]})}var M=Object(q.a)((function(e){return{backDrop:{zIndex:e.zIndex.appBar+1},loginSection:{backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText,padding:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center",gap:e.spacing(2)},exampleDecksContainer:{display:"flex",flexDirection:"column",gap:e.spacing(1)},exampleDecksSection:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}));function X(){var e=M(),t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useContext)(d),i=Object(b.g)(),l=Object(c.useState)([]),u=Object(o.a)(l,2),j=u[0],f=u[1];return Object(c.useEffect)((function(){P.findAll({orderTitleBy:"asc",take:3}).then((function(e){var t=e.decks;return f(t)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(k.a,{className:e.backDrop,open:a,children:Object(O.jsx)(y.a,{color:"inherit"})}),Object(O.jsx)(g,{}),Object(O.jsxs)("main",{children:[Object(O.jsxs)("div",{className:e.loginSection,children:[Object(O.jsx)(x.a,{variant:"h1",children:"Log in to create decks."}),Object(O.jsx)(w.GoogleLogin,{clientId:S,responseType:"id_token",onRequest:function(){return r(!0)},onSuccess:function(e){A.logIn(e.tokenId).then((function(){return s({loggedIn:!0})})).finally((function(){return r(!1)}))},onFailure:function(){return r(!1)}})]}),Object(O.jsxs)("div",{className:e.exampleDecksSection,children:[Object(O.jsx)(x.a,{variant:"h2",children:"Decks"}),Object(O.jsx)("div",{className:e.exampleDecksContainer,children:j.map((function(e){var t;return Object(O.jsx)(G,{title:e.title,numberOfCards:e.cards.length,author:null!==(t=e.authorId)&&void 0!==t?t:"",onClick:function(){return i.push("".concat(h.decks,"/").concat(e.id))}},e.id)}))})]})]})]})}var U=n(63),V=n(135),$=n(136),_=n(127),H=Object(q.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"2fr auto 3fr",columnGap:e.spacing(2),gap:e.spacing(3)}}}));function K(e){var t=e.cards,n=H();return Object(O.jsx)("div",{className:n.root,children:t.map((function(e){var t;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(x.a,{children:e.sides[0].text}),Object(O.jsx)(_.a,{orientation:"vertical"}),Object(O.jsx)(x.a,{children:e.sides[1].text})]},null!==(t=e.id)&&void 0!==t?t:JSON.stringify(e))}))})}var Q=n(3),Y=n(128),Z=n(129),ee=Object(q.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",padding:e.spacing(3)},typography:{fontSize:e.typography.h5.fontSize}}}));function te(e){var t=e.text,n=e.className,c=ee();return Object(O.jsx)(Y.a,{className:Object(Q.a)(c.root,n),children:Object(O.jsx)(Z.a,{className:c.content,children:Object(O.jsx)(x.a,{className:c.typography,children:t})})})}var ne=Object(q.a)({root:{display:"grid",gridTemplateAreas:'"main"',transformStyle:"preserve-3d"},cardFlipTransition:{transition:"transform 0.3s"},flip:{transform:"rotateX(180deg)"},cardSide:{gridArea:"main",backfaceVisibility:"hidden"},cardBack:{transform:"rotateX(180deg)"}});function ce(e){var t=e.frontText,n=e.backText,c=e.showBack,a=e.className,r=e.onFlip,s=ne();return Object(O.jsxs)("div",{className:Object(Q.a)(s.root,s.cardFlipTransition,c&&s.flip,a),onClick:r,children:[Object(O.jsx)(te,{className:s.cardSide,text:t}),Object(O.jsx)(te,{className:Object(Q.a)(s.cardSide,s.cardBack),text:n})]})}var ae=Object(q.a)({card:{height:"100%",width:"100%"},hiddenCard:{display:"none"}});function re(e){var t=e.cards,n=e.activeIndex,a=e.showCardBack,r=e.className,s=e.onFlipCard,i=t[n],l=ae(),d=Object(c.useState)(!1),u=Object(o.a)(d,2),j=u[0],b=u[1];return Object(c.useLayoutEffect)((function(){b(!0)}),[n]),Object(c.useLayoutEffect)((function(){j&&b(!1)}),[j]),i?Object(O.jsx)("div",{className:r,children:!j&&Object(O.jsx)(ce,{className:l.card,frontText:i.sides[0].text,backText:i.sides[1].text,showBack:a,onFlip:s})}):Object(O.jsx)("div",{className:r,children:!j&&Object(O.jsx)(ce,{className:l.card,frontText:"",backText:"",showBack:!1,onFlip:function(){}})})}var se=n(130),ie=n(131),oe=n(132),le=Object(q.a)({root:{display:"flex",alignItems:"center"},positionIndicator:{width:"10ch"}});function de(e){var t=e.currentIndex,n=e.numberOfCards,c=e.onBack,a=e.onForward,r=le();return Object(O.jsxs)("div",{className:r.root,children:[Object(O.jsx)(se.a,{onClick:c,disabled:0===t||0===n,children:Object(O.jsx)(ie.a,{})}),Object(O.jsx)("div",{children:Object(O.jsx)(x.a,{variant:"subtitle2",align:"center",className:r.positionIndicator,children:"".concat(n>0?t+1:0,"/").concat(n)})}),Object(O.jsx)(se.a,{onClick:a,disabled:t===n-1||0===n,children:Object(O.jsx)(oe.a,{})})]})}var ue=Object(q.a)((function(e){return{root:{display:"flex",flexDirection:"column",gap:e.spacing(2),margin:e.spacing(3)},deckStack:{height:280,width:"100%",maxWidth:397},deckStackContainer:{display:"flex",flexDirection:"column",alignItems:"center"},section:{display:"flex",flexDirection:"column",gap:e.spacing(1)},progressBar:{width:"100%",maxWidth:400},tagList:{display:"flex",flexWrap:"wrap",gap:e.spacing(.5)}}}));function je(){var e=ue(),t=Object(c.useState)(0),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),l=i[0],d=i[1],u=Object(b.h)().id,j=Object(c.useState)(!0),h=Object(o.a)(j,2),f=h[0],p=h[1],m=Object(c.useState)(null),v=Object(o.a)(m,2),k=v[0],y=v[1];Object(c.useEffect)((function(){p(!0),P.findOne(u).then((function(e){return y(e)})).finally((function(){return p(!1)}))}),[u]),Object(c.useLayoutEffect)((function(){d(!1)}),[a]);var w=Object(c.useMemo)((function(){return(null===k||void 0===k?void 0:k.tags)?Object(U.a)(k.tags).sort():[]}),[null===k||void 0===k?void 0:k.tags]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),!f&&k&&Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsxs)("section",{className:e.section,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a,{variant:"h4",children:k.title}),Object(O.jsxs)(x.a,{variant:"subtitle1",children:["by"," ",Object(O.jsx)(W,{to:"/users/".concat(k.authorId),color:"inherit",children:k.authorId})]})]}),Object(O.jsxs)("div",{className:e.deckStackContainer,children:[Object(O.jsx)(re,{className:e.deckStack,cards:k.cards,activeIndex:a,showCardBack:l,onFlipCard:function(){return d((function(e){return!e}))}}),Object(O.jsx)(de,{currentIndex:a,numberOfCards:k.cards.length,onBack:function(){r((function(e){return e-1}))},onForward:function(){r((function(e){return e+1}))}}),Object(O.jsx)(V.a,{className:e.progressBar,value:a,max:k.cards.length-1,valueLabelFormat:function(e){return e+1},onChange:function(e,t){return r(t)}})]})]}),Object(O.jsxs)("section",{className:e.section,children:[Object(O.jsx)(x.a,{variant:"h5",children:"Tags"}),Object(O.jsx)("div",{className:e.tagList,children:w.map((function(e){return Object(O.jsx)($.a,{label:e,variant:"outlined"},e)}))})]}),Object(O.jsxs)("section",{className:e.section,children:[Object(O.jsx)(x.a,{variant:"h5",children:"Terms"}),Object(O.jsx)(K,{cards:k.cards})]})]})]})}function be(e){var t=e.isAuthenticated;return Object(O.jsx)(j.a,{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:h.home,children:t?Object(O.jsx)(b.a,{to:h.dashboard}):Object(O.jsx)(X,{})}),Object(O.jsx)(b.b,{path:h.dashboard,children:Object(O.jsx)(m,{})}),Object(O.jsx)(b.b,{path:"".concat(h.decks,"/:id"),children:Object(O.jsx)(je,{})})]})})}function he(){var e,t=Object(c.useState)({loggedIn:new Date(1e3*JSON.parse(null!==(e=localStorage.getItem("accessTokenPayload"))&&void 0!==e?e:'{"exp": 0}').exp)>new Date}),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{}),Object(O.jsx)(u.Provider,{value:a,children:Object(O.jsx)(d.Provider,{value:function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),e)}))},children:Object(O.jsx)(be,{isAuthenticated:a.loggedIn})})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.StrictMode,{children:Object(O.jsx)(he,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),fe()},75:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.ffed1c85.chunk.js.map