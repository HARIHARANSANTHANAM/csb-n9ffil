(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{19:function(t,e,c){},21:function(t,e,c){"use strict";c.r(e);var n=c(2),i=c(8),r=c(6),a=c(9),s=c(10),l=(c(19),c(1)),o=c(0),d=function(t){var e=Object(n.useContext)(O),c=e.store,i=e.dispatch,r=c.cart,a=t.item,s=a.thumbnail,d=a.title,j=a.price;return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",border:"2px solid black",margin:"5px 0px",padding:"5px"},children:[Object(o.jsx)("img",{src:s,alt:d,width:"250",height:"250"}),Object(o.jsx)("div",{style:{padding:"5px",fontSize:"18px",textAlign:"initial",display:"block"},children:d}),Object(o.jsxs)("span",{style:{fontSize:"16px",color:"gray",textAlign:"initial"},children:["$",j]}),r.find((function(e){return e.id===t.item.id}))?Object(o.jsx)("button",{onClick:function(){return e=t.item.id,void i({type:"REMOVE_CART",payload:{id:e}});var e},children:"Remove from Cart"}):Object(o.jsx)("button",{onClick:function(e){return function(t){var e=Object(l.a)(Object(l.a)({},t),{},{count:1});i({type:"ADD_CART",payload:Object(l.a)({},e)})}(t.item)},children:"Add to Cart"})]})},j=function(t){var e=Object(n.useContext)(O).store,c=t.style;return Object(o.jsx)("div",{style:c,children:Object(o.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},children:e.products.map((function(t){return Object(o.jsx)("div",{children:Object(o.jsx)(d,{item:t})})}))})})},u=function(t){var e=t.style,c=Object(n.useContext)(O),i=c.store,r=c.dispatch,a=i.cart,s={padding:"5px",fontSize:"18px",textAlign:"initial",display:"block"};return Object(o.jsxs)("div",{style:e,children:["Cart","(".concat(a.length?a.length:"",")"),a.length?Object(o.jsxs)("h4",{style:{textAlign:"end"},children:["Total $",a.reduce((function(t,e){return t+e.count*e.price}),0)]}):Object(o.jsx)(o.Fragment,{}),a.map((function(t,e){return Object(o.jsxs)("div",{title:t.title,style:{border:"2px solid black",padding:"10px"},children:[Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(o.jsx)("img",{src:t.thumbnail,width:"50",height:"50",alt:t.title}),Object(o.jsx)("div",{style:s,children:t.title}),Object(o.jsxs)("span",{style:{fontSize:"16px",color:"gray",textAlign:"initial"},children:["$",t.price*t.count]})]}),Object(o.jsx)("button",{onClick:function(){var e;e=t.id,r({type:"INCREASE_COUNT",payload:{id:e}})},style:{marginRight:"5px"},children:"+"}),t.count,Object(o.jsx)("button",{onClick:function(e){!function(t){console.log("hello"),1===t.count&&r({type:"REMOVE_CART",payload:{id:t.id}}),r({type:"REDUCE_COUNT",payload:{id:t.id}})}(t)},style:{marginLeft:"5px"},children:"-"})]},e)}))]})},p=c(4),b=function(t,e){switch(e.type){case"ADD_PRODUCTS":return Object(l.a)(Object(l.a)({},t),{},{products:e.payload});case"ADD_CART":return Object(l.a)(Object(l.a)({},t),{},{cart:[].concat(Object(p.a)(t.cart),[e.payload])});case"REMOVE_CART":return Object(l.a)(Object(l.a)({},t),{},{cart:Object(p.a)(t.cart.filter((function(t){return t.id!==e.payload.id})))});case"INCREASE_COUNT":return Object(l.a)(Object(l.a)({},t),{},{cart:Object(p.a)(t.cart.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{count:t.count+1}):t})))});case"REDUCE_COUNT":return Object(l.a)(Object(l.a)({},t),{},{cart:Object(p.a)(t.cart.map((function(t){return t.id===e.payload.id?Object(l.a)(Object(l.a)({},t),{},{count:t.count-1}):t})))});default:return t}},O=Object(n.createContext)();function x(){var t=Object(n.useReducer)(b,{products:[],cart:[]}),e=Object(s.a)(t,2),c=e[0],i=e[1],l=function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dummyjson.com/products");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,i({type:"ADD_PRODUCTS",payload:c.products}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){l(),console.count("called")}),[]),Object(o.jsx)(O.Provider,{value:{dispatch:i,store:c},children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-around"},children:[Object(o.jsx)(j,{style:{flex:".8"}}),Object(o.jsx)("div",{style:{flex:.2,position:"relative"},children:Object(o.jsx)(u,{style:{flex:".2",position:"fixed"}})})]})})})}var f=document.getElementById("root");Object(i.createRoot)(f).render(Object(o.jsx)(x,{}))}},[[21,1,2]]]);
//# sourceMappingURL=main.192175aa.chunk.js.map