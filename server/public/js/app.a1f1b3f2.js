(function(){"use strict";var t={555:function(t,n,a){var e=a(963),o=a(252);function r(t,n){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var i=a(744);const l={},u=(0,i.Z)(l,[["render",r]]);var s=u,c=(a(877),a(300),a(201));const d={class:"wrapper"},p={class:"footer"};function m(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("QubitChart"),s=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("header",null,[(0,o.Wm)(l)]),(0,o._)("div",d,[(0,o.Wm)(u)]),(0,o._)("footer",p,[(0,o.Wm)(s)])])}const v=(0,o._)("canvas",{id:"qubit-chart"},null,-1),b=[v];function f(t,n,a,e,r,i){return(0,o.wg)(),(0,o.iD)("div",null,b)}var g=a(217),h=a(196),_={name:"QubitChart",data(){return{x:[],y:[]}},mounted(){let t=async()=>{let t=await this.getData();console.log(t);const n=document.getElementById("qubit-chart");new g.Z(n,{type:"line",data:{labels:t["x"],datasets:[{label:"qubit",data:t.y}]},options:{responsive:!0,padding:100,plugins:{legend:{display:!1,position:"top"},title:{display:!1,text:"Chart.js Line Chart"}}}})};t()},methods:{async getData(){try{let t=await h.ZP.get("http://localhost:3000/graph"),n=t.data;return{x:n.x,y:n.y}}catch(t){console.log(t)}}}};const y=(0,i.Z)(_,[["render",f]]);var w=y,W=a.p+"img/QubeatLogo.94e3cadd.svg";const F=t=>((0,o.dD)("data-v-58a959f3"),t=t(),(0,o.Cn)(),t),N={class:"navbar navbar-expand-lg navbar-light bg-light"},D={class:"container-fluid"},x=F((()=>(0,o._)("img",{src:W,height:"40",alt:"Qubeat logo",loading:"lazy",style:{"margin-top":"-5px"}},null,-1))),O=F((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),k={class:"collapse navbar-collapse",id:"navbarSupportedContent"},Z={class:"navbar-nav me-auto mb-2 mb-lg-0"},C={class:"nav-item"},j={class:"nav-item"},q={class:"nav-item"},S=F((()=>(0,o._)("button",{type:"button",class:"btn btn-primary me-3"}," Play the game! ",-1)));function P(t,n,a,e,r,i){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",N,[(0,o._)("div",D,[(0,o.Wm)(l,{to:"/",class:"navbar-brand"},{default:(0,o.w5)((()=>[x])),_:1}),O,(0,o._)("div",k,[(0,o._)("ul",Z,[(0,o._)("li",C,[(0,o.Wm)(l,{to:"/about",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("li",j,[(0,o.Wm)(l,{to:"/leaderBoard",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Leaderboard")])),_:1})]),(0,o._)("li",q,[(0,o.Wm)(l,{to:"/info",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Information")])),_:1})])]),(0,o.Wm)(l,{to:"/game",class:"nav-link"},{default:(0,o.w5)((()=>[S])),_:1})])])])}var A={name:"Navbar"};const Q=(0,i.Z)(A,[["render",P],["__scopeId","data-v-58a959f3"]]);var T=Q;function L(t,n){return(0,o.wg)(),(0,o.iD)("footer",null,"©2022 Qubeat. All rights reserved")}const I={},U=(0,i.Z)(I,[["render",L],["__scopeId","data-v-004da269"]]);var E=U,H={name:"App",components:{QubitChart:w,Navbar:T,Footer:E}};const M=(0,i.Z)(H,[["render",m]]);var B=M;const Y=(0,o._)("div",{class:"wrapper"},[(0,o._)("div",{class:"about"},[(0,o._)("h1",null,"This is an about page")])],-1),z={class:"footer"};function G(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("header",null,[(0,o.Wm)(l)]),Y,(0,o._)("footer",z,[(0,o.Wm)(u)])])}var J={name:"App",components:{Navbar:T,Footer:E}};const K=(0,i.Z)(J,[["render",G]]);var R=K;const V=(0,o._)("h2",null,"Not Found 404",-1);function X(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(l)]),V,(0,o.Wm)(u)],64)}var $={name:"NotFound",components:{Navbar:T,Footer:E}};const tt=(0,i.Z)($,[["render",X]]);var nt=tt;const at=(0,o._)("div",{class:"wrapper"},[(0,o._)("div",{class:"about"},[(0,o._)("h1",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],-1),et={class:"footer"};function ot(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("header",null,[(0,o.Wm)(l)]),at,(0,o._)("footer",et,[(0,o.Wm)(u)])])}var rt={name:"App",components:{Navbar:T,Footer:E}};const it=(0,i.Z)(rt,[["render",ot]]);var lt=it;const ut=(0,o._)("div",{class:"wrapper"},[(0,o._)("div",{class:"Leader"},[(0,o._)("h3",null,"Dit is nummer 1"),(0,o._)("h2",null,"Dit is nummer 2"),(0,o._)("h1",null,"Dit is nummer 3!")])],-1),st={class:"footer"};function ct(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("header",null,[(0,o.Wm)(l)]),ut,(0,o._)("footer",st,[(0,o.Wm)(u)])])}var dt={name:"App",components:{Navbar:T,Footer:E}};const pt=(0,i.Z)(dt,[["render",ct]]);var mt=pt;const vt=(0,o._)("h2",null,"Hallo gamer",-1);function bt(t,n,a,e,r,i){const l=(0,o.up)("Navbar"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(l)]),vt,(0,o.Wm)(u)],64)}var ft={name:"NotFound",components:{Navbar:T,Footer:E}};const gt=(0,i.Z)(ft,[["render",bt]]);var ht=gt;const _t=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:R},{path:"/:pathMatch(.*)*",name:"NotFound",component:nt},{path:"/leaderboard",name:"leaderboard",component:mt},{path:"/info",name:"information",component:lt},{path:"/game",name:"game",component:ht}],yt=(0,c.p7)({history:(0,c.PO)("/"),routes:_t});var wt=yt;(0,e.ri)(s).use(wt).mount("#app")}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(n,e,o,r){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],r=t[c][2];for(var l=!0,u=0;u<e.length;u++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[u])}))?e.splice(u--,1):(l=!1,r<i&&(i=r));if(l){t.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,o,r]}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,r,i=e[0],l=e[1],u=e[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(u)var c=u(a)}for(n&&n(e);s<i.length;s++)r=i[s],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},e=self["webpackChunkclient"]=self["webpackChunkclient"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(555)}));e=a.O(e)})();
//# sourceMappingURL=app.a1f1b3f2.js.map