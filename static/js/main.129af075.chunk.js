(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(14),a(15),a(3)),o=a(2),s=a(5),u=a(4),d=a(1),m=a(6),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={collapsed:!0},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){if(this.state.collapsed)return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggle},"+"));var e=[];return this.props.data.map((function(t,a,n){e.push(r.a.createElement("div",{key:a},t))})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggle},"-")),e)}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={collapsed:!0},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e;return e=this.state.collapsed?r.a.createElement("div",null,"{",r.a.createElement("button",{onClick:this.toggle},"+"),"}"):r.a.createElement("div",null,r.a.createElement("div",null,"{",r.a.createElement("button",{onClick:this.toggle},"-")),r.a.createElement("div",null,r.a.createElement("div",null,this.props.data.map((function(e,a,n){if("array"===e[2]){for(var l=[],c=0;c<e[1].length;c++)l.push(e[1][c]);return r.a.createElement("div",{key:a},r.a.createElement("div",null,e[0]," : [ ",r.a.createElement(p,{data:l})," ]"))}if("object"===e[2]){var i=[];for(var o in e[1])e[1].hasOwnProperty(o)&&i.push([o,e[1][o],"standard"]);return r.a.createElement("div",{key:a},r.a.createElement("div",null,e[0]," : ",r.a.createElement(t,{key:a,data:i})))}if("standard"===e[2])return n.length-1===a?r.a.createElement("div",{key:a},r.a.createElement("div",null,e[0],' : "',e[1],'"')):r.a.createElement("div",{key:a},e[0],' : "',e[1],'",')}))),r.a.createElement("div",null,"}"))),r.a.createElement("div",null,e)}}]),t}(r.a.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[],text:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"standardPrint",value:function(e,t){return"<div class='newLine'><span class='key'>&quot;"+t+"&quot;: </span>"+e[t]+"</div>"}}]),Object(o.a)(t,[{key:"render",value:function(){var e=[],t={a:"b",c:"d",e:"f",g:"h",d:{r:"l"},y:["a","2"]};for(var a in t)t.hasOwnProperty(a)&&("number"===typeof t[a]||"string"===typeof t[a]||"boolean"===typeof t[a]?e.push([a,t[a],"standard"]):Array.isArray(t[a])?e.push([a,t[a],"array"]):"object"===typeof t[a]&&e.push([a,t[a],"object"]));return r.a.createElement("div",null,r.a.createElement(v,{data:e}))}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h,null)),r.a.createElement("div",null,r.a.createElement("h2",null,"Verified JSON Structures : See source code")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.129af075.chunk.js.map