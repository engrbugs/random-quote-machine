(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/wheel.e353a5d1.svg"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),s=(a(14),a(4)),l=a(5),i=a(8),d=a(7),m=a(1),u=a.n(m),f=a(6),h=a.n(f),p=(a(15),["#ee5253","#ff9f43","#c8d6e5","#576574","#ff6b6b","#8395a7","#feca57","#48dbfb","#10ac84","#01a3a4","#2e86de","#54a0ff","#7f8c8d","#e67e22","#2ecc71","#16a085","#2c3e50","#f1c40f","#8e44ad","#6c5ce7","#2d3436","#0984e3","#fab1a0","#ffeaa7","#00b894","#e84393","#40739e","#c23616"]),g=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={quotes:[],index:0,color:"#282c34"},e.RandomizeIndex=function(){var t=e.state.quotes;if(t.length>0){var a=Math.floor(Math.random()*p.length),n=Math.floor(Math.random()*t.length);e.setState({index:n,color:p[a]}),console.log("index:",n),console.log("color index:",a),console.log("Added class")}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({quotes:t.quotes},e.RandomizeIndex)}))}},{key:"render",value:function(){var e=this.state,t=e.quotes,a=e.index,n=e.color,c=t[a];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),"FCC: Random Quote Machine")),o.a.createElement("div",{id:"quote-box",className:"wrapper",style:{background:n}},o.a.createElement("div",{className:"col-6 box p-5 rounded"},c&&o.a.createElement("div",{id:"text",className:"mb-4"},o.a.createElement("cite",null,o.a.createElement("p",null,c.quote)),o.a.createElement("p",{id:"author",className:"d-block text-right"},"\u2014",c.author)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("a",{id:"tweet-quote",className:"btn btn-primary",href:c&&"".concat("https://twitter.com/intent/tweet?hashtags=quotes&hashtags=freecodecamp&text=",'"').concat(c.quote,'"\u2014').concat(c.author," "),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter"})," Tweet"),o.a.createElement("button",{id:"new-quote",className:"btn btn-primary",onClick:this.RandomizeIndex},"New Quote")))))}}]),a}(n.Component);u()(document).ready((function(){console.log("Im ready"),u()(".App-logo").css({transform:"rotate(9373deg)"}),console.log("Done?"),setTimeout((function(){console.log("World!"),u()(".App-logo").css({animation:"App-logo-spin infinite 10s linear"})}),5500),u()("#text").addClass("animate__animated animate__zoomIn")}));var b=g;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b9e6b988.chunk.js.map