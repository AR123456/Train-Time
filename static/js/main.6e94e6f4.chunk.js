(this.webpackJsonpCircles=this.webpackJsonpCircles||[]).push([[0],{26:function(t,e,n){t.exports=n(33)},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=(n(31),n(16)),u=(n(32),n(15));var l=function(){var t=Object(r.useState)([25,30,45,60,20]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(r.useRef)();return Object(r.useEffect)((function(){Object(u.a)(o.current).selectAll("circle").data(n).join("circle").attr("r",(function(t){return t})).attr("cx",(function(t){return 2*t})).attr("cy",(function(t){return 2*t})).attr("stroke","red")}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{ref:o}),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return c(n.map((function(t){return t+5})))}},"Update data"),a.a.createElement("button",{onClick:function(){return c(n.filter((function(t){return t<35})))}},"Filter data"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6e94e6f4.chunk.js.map