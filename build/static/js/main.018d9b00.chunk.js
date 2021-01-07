(this["webpackJsonpastro-wx"]=this["webpackJsonpastro-wx"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(5),r=c.n(i),o=(c(12),c(13),function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Astro Wx"}),Object(s.jsx)("div",{className:"annotation",children:"Local and Space Weather in one place"})]})}),l=c(2),j=(c(14),c(4)),h=c.n(j),d=c(6),p=(c(16),function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useRef)(null),r=function(){var e=Object(d.a)(h.a.mark((function e(t){var c,s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=JSON.stringify({zipCode:i.current.value}),e.prev=2,e.next=5,fetch("".concat("http://","/api/wxmongo"),{method:"POST",headers:{"Content-type":"application/json"},body:c});case 5:return s=e.sent,e.next=8,s.json();case 8:n=e.sent,a(n),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(400).json(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"wx-form",children:[Object(s.jsx)("div",{className:"zipCode",children:Object(s.jsxs)("form",{onSubmit:r,children:[Object(s.jsxs)("label",{children:["Zipcode:",Object(s.jsx)("input",{type:"text",placeholder:"Enter zip code",ref:i})]}),Object(s.jsx)("input",{type:"submit",value:"Get Weather"})]})}),Object(s.jsxs)("div",{className:"local-wx",children:[Object(s.jsx)("h1",{className:"local-wx-title",children:"Current Local Weather"}),Object(s.jsxs)("h2",{className:"city-name",children:["City: ",c.name]}),Object(s.jsxs)("div",{className:"local-wx-container",children:[Object(s.jsx)("div",{className:"wx-icon",children:Object(s.jsx)("img",{src:c.weather&&"http://openweathermap.org/img/wn/".concat(c.weather[0].icon,"@2x.png"),alt:"weather-icon"})}),Object(s.jsxs)("div",{className:"current-wx",children:[Object(s.jsxs)("span",{className:"current-description",children:["Current Conditions: ",c.weather&&c.weather[0].main,", ",c.weather&&c.weather[0].description]}),Object(s.jsx)("p",{children:Object(s.jsxs)("span",{className:"curr-temp",children:["Current Temp: ",c.main&&c.main.temp," \xb0F"]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("span",{className:"humidity",children:["Humidity: ",c.main&&c.main.humidity,"%"]})}),Object(s.jsxs)("span",{className:"feels-like",children:["Feels like: ",c.main&&c.main.feels_like,"\xb0F"]})]}),Object(s.jsxs)("div",{className:"temps",children:[Object(s.jsxs)("span",{className:"min-temp",children:["Today's Low: ",c.main&&c.main.temp_min,"\xb0F"]}),Object(s.jsx)("p",{children:Object(s.jsxs)("span",{className:"max-temp",children:["Today's High: ",c.main&&c.main.temp_max,"\xb0F"]})})]})]})]})]})}),m=(c(17),function(){return Object(s.jsxs)("div",{className:"space-container",children:[Object(s.jsx)("h1",{children:"Space Weather"}),Object(s.jsxs)("div",{className:"swx-overview",children:[Object(s.jsx)("img",{src:"https://services.swpc.noaa.gov/images/swx-overview-small.gif",alt:"Space Weather Overview"}),Object(s.jsx)("div",{className:"space-forecast",children:Object(s.jsx)("iframe",{src:"https://services.swpc.noaa.gov/text/3-day-forecast.txt",frameBorder:"10",title:"3 Day Space Weather Forecast",width:"400px","max-width":"500px",height:"450px","max-height":"500px"})})]}),Object(s.jsxs)("p",{children:["Space Weather data and images sourced from ",Object(s.jsx)("a",{href:"https://www.swpc.noaa.gov/content/data-access",children:"NOAA Space Weather Prediction Center"})]})]})}),x=function(e){var t=Object(n.useState)({}),c=Object(l.a)(t,2);c[0],c[1];return Object(s.jsxs)("div",{className:"wx-container",children:[Object(s.jsx)(p,{}),Object(s.jsx)(m,{})]})};c(18);var u=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),b()}],[[19,1,2]]]);
//# sourceMappingURL=main.018d9b00.chunk.js.map