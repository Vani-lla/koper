(this.webpackJsonpkoper=this.webpackJsonpkoper||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(28),i=n.n(a),r=(n(37),n(31)),s=n(2),o=(n(38),n.p+"static/media/logo.31d89d6c.png"),j=n(1);function u(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("img",{className:"main-logo",src:o,alt:"logo"}),Object(j.jsx)("h1",{children:"O szkole"}),Object(j.jsx)("h1",{children:"Dokumenty"}),Object(j.jsx)("h1",{children:"\u017bycie szko\u0142y"})]})}n(40),n(41);var d=n(10),l=n(11),p=n(13),b=n(12),O=(n(42),n.p+"static/media/2.82d37fec.jpg"),h=n.p+"static/media/3.5e705214.jpg",m=n.p+"static/media/4.134c813e.jpg",f=n.p+"static/media/5.a8e7d0de.jpg",g=n.p+"static/media/6.4c6f88b6.jpg",x=n.p+"static/media/9.769ae40e.jpg",v=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).images=[O,h,m,f,g,x],c}return Object(l.a)(n,[{key:"imgDiv",value:function(e,t){return Object(j.jsxs)("div",{className:"slide",children:[Object(j.jsx)("img",{src:t,className:"slider-img"}),Object(j.jsx)("div",{className:"slider-text",children:e})]})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"slider",children:this.images.map((function(e){return Object(j.jsx)("img",{src:e})}))})}}]),n}(c.Component),k=n(16),y=n.n(k),w=n(29),D=(n(44),n(30)),N=n.n(D).a.create({baseURL:"http://kopernik.netus.pl/Api/artykul.php"}),z=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={loading:!0,data:null},c.getData(),c}return Object(l.a)(n,[{key:"getData",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("");case 2:t=(t=e.sent.data).filter((function(e){return"sport"===e.kategoria})),this.setState({loading:!1,data:t}),console.log(t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{})}}]),n}(c.Component);function C(){return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(z,{})]})}function F(){return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(r.a,{children:Object(j.jsx)(s.c,{children:Object(j.jsx)(s.a,{exact:!0,path:"/koper/sport",component:C})})})]})}i.a.render(Object(j.jsx)(F,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.259a2d93.chunk.js.map