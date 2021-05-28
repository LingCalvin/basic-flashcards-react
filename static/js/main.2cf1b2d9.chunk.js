(this["webpackJsonpbasic-flashcards-react"]=this["webpackJsonpbasic-flashcards-react"]||[]).push([[3],{12:function(e,t,n){"use strict";t.a={home:"/",dashboard:"/dashboard",decks:"/decks",deckSearch:"/search",deckAdd:"/add-deck",deckEdit:"/decks/:id/edit",deckView:"/decks/:id",login:"/auth/login",registration:"/auth/register"}},126:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=(n(97),n(24)),s=n(169),i=n(33),u=n(40),l=n(15),h=n(69);function d(){var e=h.a.getCurrentUser(),t=l.a.getItem("accessToken");return e&&t?Object(u.a)(Object(u.a)({},e),{},{accessToken:t}):null}var j=n(137),b=n(130),O=n(160),p=n(171),m=n(172),f=n(161),v=n(162),g=n(129),x=n(173),k=n(163),y=n(166),S=n(167),w=n(164),C=n(165),I=n(4),T=n(9),N=n(25),B=n(39),P=n(78),E=n(12),L=n(30),A=n(157),U=Object(A.a)((function(e){var t;return{button:{whiteSpace:"nowrap"},homeLink:{textTransform:"none"},titleContainer:{flexGrow:1},avatarButton:{padding:e.spacing(.5)},menuUsername:{textAlign:"center",padding:e.spacing(1),fontWeight:e.typography.fontWeightBold},searchBar:(t={},Object(L.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(L.a)(t,"maxWidth","600px"),Object(L.a)(t,"width","100%"),t),searchBarInput:Object(L.a)({paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),width:"100%"},e.breakpoints.down("xs"),{paddingRight:0}),toolbar:{gap:e.spacing(1)}}})),z=n(2);function F(){var e=U(),t=Object(T.h)(),n=Object(P.a)(),c=Object(a.useState)(null),r=Object(o.a)(c,2),s=r[0],u=r[1],l=Object(a.useContext)(i.a),h=function(){return u(null)},d=Object(T.g)(),L=Object(a.useState)(!1),A=Object(o.a)(L,2),F=A[0],R=A[1],J=Object(a.useState)(""),W=Object(o.a)(J,2),D=W[0],M=W[1],V=new URLSearchParams(t.search).get("from"),q=null!==V&&void 0!==V?V:E.a.home,G=Object(z.jsxs)(j.a,{open:null!==s,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:void 0,onClose:h,children:[Object(z.jsx)(b.a,{className:e.menuUsername,children:null===l||void 0===l?void 0:l.username.toLocaleUpperCase()}),Object(z.jsx)(O.a,{}),Object(z.jsx)(p.a,{onClick:h,children:"Manage account"}),Object(z.jsx)(p.a,{onClick:function(){u(null),B.a.logOut().then((function(){return d.push(E.a.home)}))},children:"Sign out"})]}),$=Object(z.jsx)(m.a,{children:null===l||void 0===l?void 0:l.username.substring(0,1).toLocaleUpperCase()}),H=B.a.isAuthenticated()?Object(z.jsx)(f.a,{className:e.avatarButton,color:"inherit",onClick:function(e){return u(e.currentTarget)},children:$}):Object(z.jsx)(v.a,{className:e.button,component:N.b,to:E.a.login,color:"inherit",children:"Log in"}),K=Object(z.jsx)(g.a,{className:e.searchBar,children:Object(z.jsx)("form",{onSubmit:function(e){e.preventDefault(),d.push({pathname:E.a.deckSearch,search:"?from=".concat(encodeURIComponent(t.pathname),"&term=").concat(encodeURIComponent(D))})},children:Object(z.jsx)(x.a,{value:D,autoFocus:n,fullWidth:n,placeholder:"Search",className:e.searchBarInput,startAdornment:Object(z.jsx)(k.a,{position:"start",children:Object(z.jsx)(w.a,{})}),endAdornment:n?Object(z.jsx)(k.a,{position:"end",children:Object(z.jsx)(f.a,{"aria-label":"close search",onClick:t.pathname===E.a.deckSearch?function(){R(!1),M(""),d.push(q)}:function(){R(!1),M("")},children:Object(z.jsx)(C.a,{})})}):void 0,onChange:function(e){return M(e.target.value)}})})}),Q=Object(z.jsx)(y.a,{className:e.toolbar,children:t.pathname===E.a.deckSearch||F?K:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:e.titleContainer,children:Object(z.jsx)(v.a,{color:"inherit",component:N.b,to:E.a.home,className:Object(I.a)(e.button,e.homeLink),children:Object(z.jsx)(b.a,{variant:"h6",component:"span",children:"Basic Flashcards"})})}),Object(z.jsx)(f.a,{"aria-label":"toggle search",color:"inherit",onClick:function(){return R(!0)},children:Object(z.jsx)(w.a,{})}),H]})}),X=Object(z.jsxs)(y.a,{className:e.toolbar,children:[Object(z.jsx)("div",{className:e.titleContainer,children:Object(z.jsx)(v.a,{color:"inherit",component:N.b,to:E.a.home,className:Object(I.a)(e.button,e.homeLink),children:Object(z.jsx)(b.a,{variant:"h6",children:"Basic Flashcards"})})}),K,H]});return Object(z.jsxs)(S.a,{position:"sticky",children:[G,n?Q:X]})}function R(e){var t=Object(T.h)().pathname;return B.a.isAuthenticated()?Object(z.jsx)(T.b,Object(u.a)({},e)):Object(z.jsx)(T.a,{to:{pathname:E.a.login,search:"?continue=".concat(encodeURIComponent(t))}})}var J=n(168);function W(e){var t=e.delay,n=void 0===t?300:t,c=Object(a.useState)(n<=0),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){i(!0)}),n);return function(){clearTimeout(e)}}),[n]),s?Object(z.jsx)(J.a,{color:"secondary"}):Object(z.jsx)(z.Fragment,{})}var D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8),n.e(9)]).then(n.bind(null,379))})),M=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,370))})),V=Object(a.lazy)((function(){return Promise.all([n.e(6),n.e(13)]).then(n.bind(null,378))})),q=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,381))})),G=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,382))})),$=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,386))})),H=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,376))})),K=Object(a.lazy)((function(){return Promise.all([n.e(14),n.e(10)]).then(n.bind(null,383))}));function Q(){var e=Object(a.useContext)(i.a);return Object(z.jsx)(a.Suspense,{fallback:Object(z.jsx)(W,{}),children:Object(z.jsxs)(T.d,{children:[Object(z.jsx)(T.b,{exact:!0,path:E.a.home,children:e?Object(z.jsx)(T.a,{to:E.a.dashboard}):Object(z.jsx)($,{})}),Object(z.jsx)(R,{path:E.a.dashboard,children:Object(z.jsx)(D,{})}),Object(z.jsx)(T.b,{exact:!0,path:E.a.deckView,children:Object(z.jsx)(V,{})}),Object(z.jsx)(R,{path:E.a.deckAdd,children:Object(z.jsx)(M,{})}),Object(z.jsx)(R,{path:E.a.deckEdit,children:Object(z.jsx)(H,{})}),Object(z.jsx)(T.b,{path:E.a.deckSearch,children:Object(z.jsx)(K,{})}),Object(z.jsx)(T.b,{path:E.a.registration,children:Object(z.jsx)(G,{})}),Object(z.jsx)(T.b,{path:E.a.login,children:Object(z.jsx)(q,{})})]})})}function X(){var e=Object(a.useState)(d),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){c(d)};return document.addEventListener("localStorageServiceChange",e),function(){return document.removeEventListener("localStorageServiceChange",e)}}),[]),Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(i.a.Provider,{value:n,children:[Object(z.jsx)(s.a,{}),Object(z.jsxs)("div",{id:"app-content",children:[Object(z.jsx)(F,{}),Object(z.jsx)("div",{id:"page-container",children:Object(z.jsx)(Q,{})})]})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,377)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};n(122),n(123),n(124),n(125);r.a.render(Object(z.jsx)(a.StrictMode,{children:Object(z.jsx)(N.a,{children:Object(z.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Y()},15:function(e,t,n){"use strict";var a=n(31),c=n(32),r=new(function(){function e(){Object(a.a)(this,e)}return Object(c.a)(e,[{key:"getItem",value:function(e){return localStorage.getItem(e)}},{key:"removeItem",value:function(e){localStorage.removeItem(e),document.dispatchEvent(new Event("localStorageServiceChange"))}},{key:"setItem",value:function(e,t){localStorage.setItem(e,t),document.dispatchEvent(new Event("localStorageServiceChange"))}}]),e}());t.a=r},33:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(null);t.a=c},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(28),c=n.n(a),r=n(47),o=n(31),s=n(32),i=n(46),u=n(15),l=new(function(){function e(t){Object(o.a)(this,e),this.http=t}return Object(s.a)(e,[{key:"logIn",value:function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.post("/auth/access-tokens",{username:t,password:n});case 2:return a=e.sent,r=a.data,o=r.accessToken,s=r.decodedAccessToken,u.a.setItem("accessToken",o),u.a.setItem("accessTokenPayload",JSON.stringify(s)),u.a.setItem("user",JSON.stringify({id:s.sub,username:t})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.removeItem("accessToken"),u.a.removeItem("accessTokenPayload"),u.a.removeItem("user");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyAccessToken",value:function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.http.get("/auth/access-tokens/".concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"isAuthenticated",value:function(){return null!==u.a.getItem("accessToken")}},{key:"getCurrentUser",value:function(){var e=u.a.getItem("accessTokenPayload");return e?JSON.parse(e).sub:null}}]),e}())(i.a)},46:function(e,t,n){"use strict";var a=n(80),c=n.n(a),r=n(15),o=c.a.create({baseURL:"https://basic-flashcards.herokuapp.com",withCredentials:!0});o.interceptors.request.use((function(e){var t=r.a.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),o.interceptors.response.use((function(e){return e}),(function(e){var t;console.log(e),401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&r.a.removeItem("accessToken")})),t.a=o},69:function(e,t,n){"use strict";var a=n(31),c=n(32),r=n(46),o=n(15),s=new(function(){function e(t){Object(a.a)(this,e),this.http=t}return Object(c.a)(e,[{key:"create",value:function(e){return this.http.post("/users",e)}},{key:"getCurrentUser",value:function(){var e=o.a.getItem("user");return e?JSON.parse(e):null}}]),e}())(r.a);t.a=s},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(29),c=n(127);function r(){var e=Object(a.a)();return Object(c.a)(e.breakpoints.down("xs"),{noSsr:!0})}},97:function(e,t,n){}},[[126,4,5]]]);
//# sourceMappingURL=main.2cf1b2d9.chunk.js.map