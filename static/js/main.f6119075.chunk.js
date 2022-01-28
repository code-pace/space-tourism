(this["webpackJsonpspace-tourism-website"]=this["webpackJsonpspace-tourism-website"]||[]).push([[0],{13:function(e,t,a){},15:function(e){e.exports=JSON.parse('{"destinations":[{"name":"Moon","images":{"png":"./assets/destination/image-moon.png","webp":"./assets/destination/image-moon.webp"},"description":"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/destination/image-mars.png","webp":"./assets/destination/image-mars.webp"},"description":"Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/destination/image-europa.png","webp":"./assets/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/destination/image-titan.png","webp":"./assets/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/crew/image-douglas-hurley.png","webp":"./assets/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/crew/image-mark-shuttleworth.png","webp":"./assets/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/crew/image-victor-glover.png","webp":"./assets/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/crew/image-anousheh-ansari.png","webp":"./assets/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/technology/image-spaceport-portrait.jpg","landscape":"./assets/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/technology/image-space-capsule-portrait.jpg","landscape":"./assets/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}')},16:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(8),c=a.n(i),r=(a(13),a(3)),o=a(0),l=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(o.jsx)("div",{className:"space home",children:Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("div",{className:"hero-text",children:[Object(o.jsx)("h5",{children:"SO, YOU WANT TO TRAVEL TO SPACE"}),Object(o.jsx)("h1",{children:"SPACE"}),Object(o.jsx)("p",{children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),Object(o.jsx)("div",{className:"explore",children:Object(o.jsx)("div",{className:"explore-btn ".concat(a?"hovered":""),children:Object(o.jsx)("div",{className:"inner-explore-btn",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:"EXPLORE"})})})]})})},d=a.p+"static/media/image-europa.3e95f7d0.png",h=a.p+"static/media/image-mars.1b224c86.png",p=a.p+"static/media/image-titan.d4b078f9.png",m=a.p+"static/media/image-moon.d287d071.png",j=function(e){var t=e.data,a=Object(s.useState)(p),n=Object(r.a)(a,2),i=n[0],c=n[1],l=Object(s.useState)(t[0]),j=Object(r.a)(l,2),u=j[0],b=j[1];Object(s.useEffect)((function(){switch(u.name){case"Mars":c(h);break;case"Europa":c(d);break;case"Titan":c(p);break;case"Moon":default:c(m)}}),[u]);var g=function(e){var a=t.filter((function(t){return t.name===e})).pop();b(a)};return Object(o.jsxs)("div",{className:"space destination",children:[Object(o.jsxs)("div",{className:"dest-page",children:[Object(o.jsxs)("div",{className:"label",children:[Object(o.jsx)("h5",{children:"01"}),Object(o.jsx)("h5",{children:"PICK YOUR DESTINATION"})]}),Object(o.jsx)("img",{src:i,alt:"destination",className:"dest-image"})]}),Object(o.jsxs)("div",{className:"dest-text",children:[Object(o.jsx)("div",{className:"terrestial-body",children:t.map((function(e,t){var a=e.name;return Object(o.jsxs)("div",{className:"terrestial-list",onClick:function(){return g(a)},children:[a.toUpperCase(),Object(o.jsx)("span",{className:"".concat(a===u.name?"select":"")})]},t)}))}),Object(o.jsxs)("div",{className:"hero-text text-v",children:[Object(o.jsx)("h1",{children:u.name.toUpperCase()}),Object(o.jsx)("p",{className:"dest-desc",children:u.description}),Object(o.jsxs)("div",{className:"property",children:[Object(o.jsxs)("div",{className:"distance",children:[Object(o.jsx)("p",{children:"AVG. DISTANCE"}),Object(o.jsx)("p",{children:u.distance.toUpperCase()})]}),Object(o.jsxs)("div",{className:"distance",children:[Object(o.jsx)("p",{children:"EST. TRAVEL TIME"}),Object(o.jsx)("p",{children:u.travel.toUpperCase()})]})]})]})]})]})},u=a.p+"static/media/image-anousheh-ansari.2d647128.png",b=a.p+"static/media/image-douglas-hurley.7540fbb6.png",g=a.p+"static/media/image-mark-shuttleworth.fc30f35b.png",O=a.p+"static/media/image-victor-glover.8a9a5424.png",f=function(e){var t=e.setTiming,a=e.id,s=e.name,n=e.value;return Object(o.jsx)("button",{className:"page-btn ".concat(s===n.name?"page-highlight":""),onClick:function(){t(a)}},a)},v=function(e){var t=e.data,a=[b,g,O,u];t.forEach((function(e,t){e.images=a[t]}));var n=Object(s.useState)(t),i=Object(r.a)(n,2),c=i[0],l=(i[1],Object(s.useState)(0)),d=Object(r.a)(l,2),h=d[0],p=d[1],m=Object(s.useState)(c[h]),j=Object(r.a)(m,2),v=j[0],x=j[1];Object(s.useEffect)((function(){var e=setInterval((function(){h<c.length-1?p(h+1):p(0)}),8e3);return function(){return clearInterval(e)}})),Object(s.useEffect)((function(){x(c[h])}),[h]);var w=v.name,y=v.bio,N=v.role,E=v.images;return Object(o.jsxs)("div",{className:"space crew",children:[Object(o.jsxs)("div",{className:"label",children:[Object(o.jsx)("h5",{children:"02"}),Object(o.jsx)("h5",{children:"MEET YOUR CREW"})]}),Object(o.jsx)("div",{className:"crew-slide",children:Object(o.jsx)("img",{className:"crew-image",src:E,alt:w})}),Object(o.jsxs)("div",{className:"crew-info",children:[Object(o.jsx)("div",{className:"btn-col",children:c.map((function(e,t){return Object(o.jsx)(f,{setTiming:p,id:t,name:w,value:e},t)}))}),Object(o.jsxs)("div",{className:"crew-property",children:[Object(o.jsx)("h5",{children:N.toUpperCase()}),Object(o.jsx)("h1",{children:w.toUpperCase()}),Object(o.jsx)("p",{children:y})]})]})]})},x=a.p+"static/media/image-launch-vehicle-landscape.4281a59f.jpg",w=a.p+"static/media/image-space-capsule-landscape.d672da81.jpg",y=a.p+"static/media/image-spaceport-landscape.0f3ca5c0.jpg",N=a.p+"static/media/image-launch-vehicle-portrait.0c758955.jpg",E=a.p+"static/media/image-space-capsule-portrait.dd0ac138.jpg",k=a.p+"static/media/image-spaceport-portrait.85523db5.jpg",S=function(e){var t=e.data,a=[x,y,w],n=[N,k,E],i=Object(s.useState)(window.innerWidth),c=Object(r.a)(i,2),l=c[0],d=c[1];l>=1e3?t.forEach((function(e,t){e.images=n[t]})):t.forEach((function(e,t){e.images=a[t]})),console.log(l);var h=function(){d(window.innerWidth)};Object(s.useEffect)((function(){return window.addEventListener("resize",h),l>=1e3?t.forEach((function(e,t){e.images=n[t]})):t.forEach((function(e,t){e.images=a[t]})),function(){return window.removeEventListener("resize",h)}}));var p=Object(s.useState)(t[0]),m=Object(r.a)(p,2),j=m[0],u=m[1];return console.log(j),Object(o.jsxs)("div",{className:"space technology",children:[Object(o.jsxs)("div",{className:"label",children:[Object(o.jsx)("h5",{children:"03"}),Object(o.jsx)("h5",{children:"SPACE LAUNCH 101"})]}),Object(o.jsxs)("div",{className:"main-tech",children:[Object(o.jsx)("div",{className:"tech-text",children:Object(o.jsxs)("div",{className:"txt-container",children:[Object(o.jsx)("div",{className:"tech-btn",children:t.map((function(e,a){return Object(o.jsx)("button",{onClick:function(){return u(t[a])},className:"".concat(j.name===e.name?"select":""),children:"".concat(a+1)},a)}))}),Object(o.jsxs)("div",{className:"txt",children:[Object(o.jsx)("h5",{children:"THE TERMINOLOGY..."}),Object(o.jsx)("h1",{children:j.name}),Object(o.jsx)("p",{children:j.description})]})]})}),Object(o.jsx)("div",{className:"tech-img",children:Object(o.jsx)("img",{src:j.images,alt:j.name})})]})]})},M=a(5),C=a.p+"static/media/logo.565f7f2c.svg",A=function(e){var t=e.items,a=e.id,i=e.Link,c=e.isMenuOpen,l=e.setIsMenuOpen,d=Object(s.useState)(!1),h=Object(r.a)(d,2),p=h[0],m=h[1];return console.log(t),Object(o.jsx)(n.a.Fragment,{children:Object(o.jsxs)(i,{onClick:function(){return l(!c)},to:"/".concat(t),className:"nav-list ".concat(p?"nav-hover":""),onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:[Object(o.jsx)("span",{className:"bold",children:"0".concat(a+1)})," ",t.toUpperCase()]},a)})},L=function(e){var t=e.data,a=Object(s.useState)(!1),n=Object(r.a)(a,2),i=n[0],c=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),h=d[0],p=d[1];return console.log(t),Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("img",{src:C,alt:"space-tourism",className:"logo"}),Object(o.jsx)("span",{className:"nav-line"}),Object(o.jsxs)("div",{className:"holdLink ".concat(h?"holdLinks":""),children:[Object(o.jsx)("button",{className:"hamburger-btn",onClick:function(){return p(!h)},children:h?Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",children:Object(o.jsxs)("g",{fill:"#D0D6F9",fillRule:"evenodd",children:[Object(o.jsx)("path",{d:"M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"}),Object(o.jsx)("path",{d:"M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"})]})}):Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"21",children:Object(o.jsx)("g",{fill:"#D0D6F9",fillRule:"evenodd",children:Object(o.jsx)("path",{d:"M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"})})})}),Object(o.jsxs)("div",{className:"link ".concat(h?"links":""),children:[Object(o.jsxs)(M.b,{onClick:function(){return p(!h)},to:"/",className:"nav-list ".concat(i?"nav-hover":""),onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[Object(o.jsx)("span",{className:"bold",children:"00"})," HOME"]}),Object.keys(t).map((function(e,t){return Object(o.jsx)(A,{isMenuOpen:h,setIsMenuOpen:p,items:e,id:t,Link:M.b},t)}))]})]})]})};var T=function(e){var t=e.Routes,s=e.Route,i=a(15),c=i.destinations,r=i.crew,d=i.technology;return Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsx)(L,{data:i}),Object(o.jsxs)(t,{children:[Object(o.jsx)(s,{path:"/",element:Object(o.jsx)(l,{data:i})}),Object(o.jsx)(s,{path:"/destinations",element:Object(o.jsx)(j,{data:c})}),Object(o.jsx)(s,{path:"/crew",element:Object(o.jsx)(v,{data:r})}),Object(o.jsx)(s,{path:"/technology",element:Object(o.jsx)(S,{data:d})})]})]})},I=a(2);c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(M.a,{children:Object(o.jsx)(T,{Routes:I.c,Route:I.a,Link:M.b})})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f6119075.chunk.js.map