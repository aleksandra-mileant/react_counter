(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n.n(c),a=n(4),i=n(5),r=n(7),o=n(6),u=n(1),d=n.n(u),l=(n(12),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={counter:0},t.addOne=function(){t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){t.state.counter%5===0&&t.add100(),t.addOne()},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"card has-background-info-light",children:[Object(l.jsxs)("h1",{className:"title is-3 tag is-warning is-light",children:["Count:"," ",this.state.counter]}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"button is-primary is-focused",onClick:this.addOne,children:"Add 1"}),Object(l.jsx)("button",{type:"button",className:"button is-success is-focused",onClick:this.increase,children:"Add 100"}),Object(l.jsx)("button",{type:"button",className:"button is-info is-focused",onClick:this.add100,children:"Increase"})]}),Object(l.jsx)("span",{className:"icon has-text-success",children:Object(l.jsx)("i",{className:"fas fa-check-square"})})]})}}]),n}(d.a.Component),h=b;s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f6c2d222.chunk.js.map