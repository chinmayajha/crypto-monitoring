(this["webpackJsonpcrypto-monitoring"]=this["webpackJsonpcrypto-monitoring"]||[]).push([[0],{21:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),r=t(15),s=t.n(r),i=t(6),o=(t(21),t(16)),l=t.n(o),j=(t(40),t(0)),m=function(e){var c=e.name,t=e.image,n=e.symbol,a=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsx)("p",{className:"coin-price",children:a}),Object(j.jsx)("p",{className:"coin-volume",children:r.toLocaleString()}),s<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap : $",i.toLocaleString()]})]})]})})};var p=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],p=s[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var b=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-test",children:"Search a Currency"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"refresh",onClick:function(){window.location.reload()},children:"Refresh"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){p(e.target.value)}})})]}),b.map((function(e){return Object(j.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e18fc7d8.chunk.js.map