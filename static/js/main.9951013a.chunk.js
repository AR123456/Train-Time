(this["webpackJsonpd3-react"]=this["webpackJsonpd3-react"]||[]).push([[0],{28:function(t,e,n){t.exports=n(36)},33:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),u=(n(33),n(18)),i=n(2),l=n(4),f=n(17),s=function(t){var e=Object(a.useState)(null),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var e=t.current,n=new f.a((function(t){t.forEach((function(t){c(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),r};var v=function(t){var e=t.data,n=Object(a.useRef)(),c=Object(a.useRef)(),o=s(c);return Object(a.useEffect)((function(){var t=Object(l.d)(n.current);if(o){e.sort((function(t,e){return e.value-t.value}));var a=Object(l.b)().paddingInner(.1).domain(e.map((function(t,e){return e}))).range([0,o.height]),r=Object(l.c)().domain([0,Object(l.a)(e,(function(t){return t.value}))]).range([0,o.width]);t.selectAll(".bar").data(e,(function(t,e){return t.name})).join((function(t){return t.append("rect").attr("y",(function(t,e){return a(e)}))})).attr("fill",(function(t){return t.color})).attr("class","bar").attr("x",0).attr("height",a.bandwidth()).transition().attr("width",(function(t){return r(t.value)})).attr("y",(function(t,e){return a(e)})),t.selectAll(".label").data(e,(function(t,e){return t.name})).join((function(t){return t.append("text").attr("y",(function(t,e){return a(e)+a.bandwidth()/2+5}))})).text((function(t){return"\ud83d\udc0e ... ".concat(t.name," (").concat(t.value," meters)")})).attr("class","label").attr("x",10).transition().attr("y",(function(t,e){return a(e)+a.bandwidth()/2+5}))}}),[e,o]),r.a.createElement("div",{ref:c,style:{marginBottom:"2rem"}},r.a.createElement("svg",{ref:n}))};var b=function(t,e){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=t}),[t]),Object(a.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])},m=(n(35),function(t){return Math.floor(t.length*Math.random())});var d=function(){var t=Object(a.useState)(0),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),f=l[0],s=l[1],d=Object(a.useState)([{name:"alpha",value:10,color:"#f4efd3"},{name:"beta",value:15,color:"#cccccc"},{name:"charlie",value:20,color:"#c2b0c9"},{name:"delta",value:25,color:"#9656a1"},{name:"echo",value:30,color:"#fa697c"},{name:"foxtrot",value:35,color:"#fcc169"}]),h=Object(i.a)(d,2),j=h[0],O=h[1];return b((function(){if(f){var t=m(j);O(j.map((function(e,n){return n===t?Object(u.a)({},e,{value:e.value+10}):e}))),c(n+1)}}),500),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Racing Bar Chart"),r.a.createElement(v,{data:j}),r.a.createElement("button",{onClick:function(){return s(!f)}},f?"Stop the race":"Start the race!"),r.a.createElement("p",null,"Iteration: ",n))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9951013a.chunk.js.map