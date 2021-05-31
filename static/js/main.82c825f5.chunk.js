(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[4],{101:function(e,t,n){},12:function(e,t,n){"use strict";t.a={home:"/",accountSettings:"/account/settings",dashboard:"/dashboard",decks:"/decks",deckSearch:"/search",deckAdd:"/add-deck",deckEdit:"/decks/:id/edit",deckView:"/decks/:id",login:"/auth/login",registration:"/auth/register"}},130:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=(n(101),n(25)),s=n(173),i=n(174),u=n(34),l=n(40),h=n(15),d=n(73);function j(){var e=d.a.getCurrentUser(),t=h.a.getItem("accessToken");return e&&t?Object(l.a)(Object(l.a)({},e),{},{accessToken:t}):null}var b=n(141),p=n(133),O=n(164),f=n(177),m=n(165),g=n(166),v=n(134),x=n(178),k=n(167),y=n(170),S=n(171),w=n(168),C=n(169),I=n(4),z=n(9),T=n(26),N=n(41),P=n(82),B=n(12),E=n(30),A=n(161),L=Object(A.a)((function(e){var t;return{button:{whiteSpace:"nowrap"},homeLink:{textTransform:"none"},titleContainer:{flexGrow:1},avatarButton:{padding:e.spacing(.5)},avatarText:{fontSize:e.typography.h5.fontSize,fontWeight:e.typography.fontWeightBold},menuUsername:{textAlign:"center",padding:e.spacing(1),fontWeight:e.typography.fontWeightBold},searchBar:(t={},Object(E.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(E.a)(t,"maxWidth","600px"),Object(E.a)(t,"width","100%"),t),searchBarInput:Object(E.a)({paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),width:"100%"},e.breakpoints.down("xs"),{paddingRight:0}),toolbar:{gap:e.spacing(1)}}})),U=n(84),F=n(2);function W(){var e=L(),t=Object(z.h)(),n=Object(P.a)(),c=Object(a.useState)(null),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useContext)(u.a),h=function(){return i(null)},d=Object(z.g)(),j=Object(a.useState)(!1),E=Object(o.a)(j,2),A=E[0],W=E[1],R=Object(a.useState)(""),J=Object(o.a)(R,2),D=J[0],M=J[1],V=new URLSearchParams(t.search).get("from"),q=null!==V&&void 0!==V?V:B.a.home,G=Object(F.jsxs)(b.a,{open:null!==s,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:void 0,onClose:h,children:[Object(F.jsx)(p.a,{className:e.menuUsername,children:null===l||void 0===l?void 0:l.username.toLocaleUpperCase()}),Object(F.jsx)(O.a,{}),Object(F.jsx)(f.a,{onClick:function(){h(),d.push(B.a.accountSettings)},children:"Manage account"}),Object(F.jsx)(f.a,{onClick:function(){i(null),N.a.logOut().then((function(){return d.push(B.a.home)}))},children:"Sign out"})]}),$=Object(F.jsx)(U.a,{username:null===l||void 0===l?void 0:l.username}),H=N.a.isAuthenticated()?Object(F.jsx)(m.a,{"aria-label":"Account settings",className:e.avatarButton,color:"inherit",onClick:function(e){return i(e.currentTarget)},children:$}):Object(F.jsx)(g.a,{className:e.button,component:T.b,to:B.a.login,color:"inherit",children:"Log in"}),K=Object(F.jsx)(v.a,{className:e.searchBar,children:Object(F.jsx)("form",{onSubmit:function(e){e.preventDefault(),d.push({pathname:B.a.deckSearch,search:"?from=".concat(encodeURIComponent(t.pathname),"&term=").concat(encodeURIComponent(D))})},children:Object(F.jsx)(x.a,{inputProps:{"aria-label":"Search"},value:D,autoFocus:n,fullWidth:n,placeholder:"Search",className:e.searchBarInput,startAdornment:Object(F.jsx)(k.a,{position:"start",children:Object(F.jsx)(w.a,{})}),endAdornment:n?Object(F.jsx)(k.a,{position:"end",children:Object(F.jsx)(m.a,{"aria-label":"close search",onClick:t.pathname===B.a.deckSearch?function(){W(!1),M(""),d.push(q)}:function(){W(!1),M("")},children:Object(F.jsx)(C.a,{})})}):void 0,onChange:function(e){return M(e.target.value)}})})}),Q=Object(F.jsx)(y.a,{className:e.toolbar,children:t.pathname===B.a.deckSearch||A?K:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:e.titleContainer,children:Object(F.jsx)(g.a,{color:"inherit",component:T.b,to:B.a.home,className:Object(I.a)(e.button,e.homeLink),children:Object(F.jsx)(p.a,{variant:"h6",component:"span",children:"Basic Flashcards"})})}),Object(F.jsx)(m.a,{"aria-label":"toggle search",color:"inherit",onClick:function(){return W(!0)},children:Object(F.jsx)(w.a,{})}),H]})}),X=Object(F.jsxs)(y.a,{className:e.toolbar,children:[Object(F.jsx)("div",{className:e.titleContainer,children:Object(F.jsx)(g.a,{color:"inherit",component:T.b,to:B.a.home,className:Object(I.a)(e.button,e.homeLink),children:Object(F.jsx)(p.a,{variant:"h6",component:"span",children:"Basic Flashcards"})})}),K,H]});return Object(F.jsxs)(S.a,{position:"sticky",children:[G,n?Q:X]})}function R(e){var t=Object(z.h)().pathname;return N.a.isAuthenticated()?Object(F.jsx)(z.b,Object(l.a)({},e)):Object(F.jsx)(z.a,{to:{pathname:B.a.login,search:"?continue=".concat(encodeURIComponent(t))}})}var J=n(172);function D(e){var t=e.delay,n=void 0===t?300:t,c=Object(a.useState)(n<=0),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){i(!0)}),n);return function(){clearTimeout(e)}}),[n]),s?Object(F.jsx)(J.a,{color:"secondary"}):Object(F.jsx)(F.Fragment,{})}var M=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,390))})),V=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,367))})),q=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(10),n.e(8)]).then(n.bind(null,389))})),G=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(17)]).then(n.bind(null,388))})),$=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,391))})),H=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,392))})),K=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,394))})),Q=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,385))})),X=Object(a.lazy)((function(){return Promise.all([n.e(18),n.e(16)]).then(n.bind(null,393))}));function Y(){var e=Object(a.useContext)(u.a);return Object(F.jsx)(a.Suspense,{fallback:Object(F.jsx)(D,{}),children:Object(F.jsxs)(z.d,{children:[Object(F.jsx)(z.b,{exact:!0,path:B.a.home,children:e?Object(F.jsx)(z.a,{to:B.a.dashboard}):Object(F.jsx)(K,{})}),Object(F.jsx)(R,{path:B.a.accountSettings,children:Object(F.jsx)(M,{})}),Object(F.jsx)(R,{path:B.a.dashboard,children:Object(F.jsx)(q,{})}),Object(F.jsx)(z.b,{exact:!0,path:B.a.deckView,children:Object(F.jsx)(G,{})}),Object(F.jsx)(R,{path:B.a.deckAdd,children:Object(F.jsx)(V,{})}),Object(F.jsx)(R,{path:B.a.deckEdit,children:Object(F.jsx)(Q,{})}),Object(F.jsx)(z.b,{path:B.a.deckSearch,children:Object(F.jsx)(X,{})}),Object(F.jsx)(z.b,{path:B.a.registration,children:Object(F.jsx)(H,{})}),Object(F.jsx)(z.b,{path:B.a.login,children:Object(F.jsx)($,{})})]})})}var Z=n(90),_=Object(Z.a)({palette:{error:{light:"#E94948",main:"#B00020",dark:"#790000"}},typography:{h1:{fontSize:"3.75rem"},h2:{fontSize:"3rem"},h3:{fontSize:"2.125rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.25rem"},h6:{fontSize:"1.2rem"}}});function ee(){var e=Object(a.useState)(j),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){c(j)};return document.addEventListener("localStorageServiceChange",e),function(){return document.removeEventListener("localStorageServiceChange",e)}}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(u.a.Provider,{value:n,children:Object(F.jsxs)(s.a,{theme:_,children:[Object(F.jsx)(i.a,{}),Object(F.jsxs)("div",{id:"app-content",children:[Object(F.jsx)(W,{}),Object(F.jsx)("div",{id:"page-container",children:Object(F.jsx)(Y,{})})]})]})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=function(e){e&&e instanceof Function&&n.e(19).then(n.bind(null,386)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};n(126),n(127),n(128),n(129);r.a.render(Object(F.jsx)(a.StrictMode,{children:Object(F.jsx)(T.a,{children:Object(F.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()},15:function(e,t,n){"use strict";var a=n(32),c=n(33),r=new(function(){function e(){Object(a.a)(this,e)}return Object(c.a)(e,[{key:"getItem",value:function(e){return localStorage.getItem(e)}},{key:"removeItem",value:function(e){localStorage.removeItem(e),document.dispatchEvent(new Event("localStorageServiceChange"))}},{key:"setItem",value:function(e,t){localStorage.setItem(e,t),document.dispatchEvent(new Event("localStorageServiceChange"))}}]),e}());t.a=r},34:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(null);t.a=c},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(23),c=n.n(a),r=n(42),o=n(32),s=n(33),i=n(47),u=n(15),l=new(function(){function e(t){Object(o.a)(this,e),this.http=t}return Object(s.a)(e,[{key:"logIn",value:function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.post("/auth/access-tokens",{username:t,password:n});case 2:return a=e.sent,r=a.data,o=r.accessToken,s=r.decodedAccessToken,u.a.setItem("accessToken",o),u.a.setItem("accessTokenPayload",JSON.stringify(s)),u.a.setItem("user",JSON.stringify({id:s.sub,username:t})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.removeItem("accessToken"),u.a.removeItem("accessTokenPayload"),u.a.removeItem("user");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyAccessToken",value:function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.http.get("/auth/access-tokens/".concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"isAuthenticated",value:function(){return null!==u.a.getItem("accessToken")}},{key:"getCurrentUser",value:function(){var e=u.a.getItem("accessTokenPayload");return e?JSON.parse(e).sub:null}},{key:"changePassword",value:function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.put("/users/".concat(this.getCurrentUser(),"/password"),{currentPassword:t,newPassword:n});case 2:return e.next=4,this.logOut();case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}())(i.a)},47:function(e,t,n){"use strict";var a=n(85),c=n.n(a),r=n(15),o=c.a.create({baseURL:"https://basic-flashcards.herokuapp.com",withCredentials:!0});o.interceptors.request.use((function(e){var t=r.a.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),o.interceptors.response.use((function(e){return e}),(function(e){var t;throw 401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&r.a.removeItem("accessToken"),e})),t.a=o},73:function(e,t,n){"use strict";var a=n(32),c=n(33),r=n(47),o=n(15),s=new(function(){function e(t){Object(a.a)(this,e),this.http=t}return Object(c.a)(e,[{key:"create",value:function(e){return this.http.post("/users",e)}},{key:"getCurrentUser",value:function(){var e=o.a.getItem("user");return e?JSON.parse(e):null}}]),e}())(r.a);t.a=s},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(31),c=n(131);function r(){var e=Object(a.a)();return Object(c.a)(e.breakpoints.down("xs"),{noSsr:!0})}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(176),c=n(133),r=n(4),o=n(161),s=Object(o.a)((function(e){return{root:{color:e.palette.getContrastText(e.palette.grey[600]),backgroundColor:e.palette.grey[600],display:"flex"},text:{fontSize:e.typography.h4.fontSize,fontWeight:e.typography.fontWeightBold}}})),i=n(2);function u(e){var t=e.username,n=e.className,o=e.typographyClassName,u=s();return Object(i.jsx)(a.a,{className:Object(r.a)(u.root,n),"aria-hidden":!0,children:void 0!==t&&Object(i.jsx)(c.a,{className:Object(r.a)(u.text,o),component:"div",children:t.substring(0,1).toLocaleUpperCase()})})}}},[[130,5,6]]]);
//# sourceMappingURL=main.82c825f5.chunk.js.map