!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);window.addEventListener("DOMContentLoaded",(function(){jQuery((function(t){var e=t(window).width();t(window).resize((function(){e==t(window).width()||location.reload()}))}));let t=document.querySelectorAll(".expand_btn"),e=document.querySelectorAll(".expandable_box"),r=document.querySelectorAll(".expandable_title"),s=document.querySelectorAll(".expand_btn_icon");for(let n=0;n<t.length;n++)t[n].addEventListener("click",l=>{if(l.preventDefault(),e[n].style.maxHeight&&r[n].style.maxHeight)e[n].style.maxHeight=null,r[n].style.maxHeight=null,s[n].classList.remove("pinch");else{for(let n=0;n<t.length;n++)e[n].style.maxHeight=null,r[n].style.maxHeight=null,s[n].classList.remove("pinch");e[n].style.maxHeight=e[n].scrollHeight+"px",r[n].style.maxHeight=e[n].scrollHeight+"px",s[n].classList.add("pinch")}});let n=document.querySelector("#burger"),l=document.querySelector("#menu"),a=document.querySelector(".main"),o=document.querySelector(".footer");n.addEventListener("click",t=>{t.preventDefault(),t.target.classList.contains("tap-to-open")?(n.classList.remove("tap-to-open"),n.classList.add("tap-to-close"),n.classList.add("open-menu"),n.classList.remove("close-menu"),l.classList.add("open-menu"),l.classList.remove("close-menu"),document.body.classList.add("overflow-hidden"),a.classList.add("non-visible"),o.classList.add("non-visible")):t.target.classList.contains("tap-to-close")&&(n.classList.remove("tap-to-close"),n.classList.add("tap-to-open"),n.classList.remove("open-menu"),n.classList.add("close-menu"),l.classList.remove("open-menu"),l.classList.add("close-menu"),document.body.classList.remove("overflow-hidden"),a.classList.remove("non-visible"),o.classList.remove("non-visible"))});let m=document.querySelector("#run_team"),c=document.querySelector("#run_creative"),d=document.querySelector("#logo_box"),i=document.querySelector("#logo_img"),y=document.querySelector("#run_asteriks1"),f=document.querySelector("#run_asteriks2"),p=document.querySelector("#run_box1_t"),x=document.querySelector("#run_box1_d"),u=document.querySelector("#run_box2"),X=document.querySelector("#run_box3_item1"),g=document.querySelector("#run_box3_item2"),v=document.querySelector("#run_box3_item3"),h=document.querySelectorAll(".marquee"),L=document.querySelectorAll(".marquee_reverse");const H=document.documentElement,Y=document.body,E="scrollTop",b="scrollHeight";let S=window,_=document,q=_.documentElement,w=_.getElementsByTagName("body")[0],j=S.innerWidth||q.clientWidth||w.clientWidth;S.innerHeight||q.clientHeight||w.clientHeight;if(j>1024){$(document).on("mousemove",(function(t){$("#customCursor").css({left:t.clientX,top:t.clientY})})),$(window).on("scroll",(function(t){$("#customCursor").css({left:t.clientX,top:t.clientY})})),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t,r=1/(1+1.3*t);e<116?(d.style.transform=`translateY(${-e}px)`,i.style.transform=`scale(${r})`):(d.style.transform="translateY(-116px)",i.style.transform="scale(0.1155)")}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;m.style.transform=`translateX(${200*-t+3600}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;y.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;c.style.transform=`translateX(${220*-t+16e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;f.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;h[0].style.transform=`translateX(${80*-t*1+2e3}px)`,h[1].style.transform=`translateX(${80*-t*.8+2e3}px)`,h[2].style.transform=`translateX(${80*-t*.6+1500}px)`,h[3].style.transform=`translateX(${80*-t*1+2400}px)`,h[4].style.transform=`translateX(${80*-t*.8+1600}px)`,h[5].style.transform=`translateX(${80*-t*.6+1200}px)`,h[6].style.transform=`translateX(${80*-t*1+3100}px)`,h[7].style.transform=`translateX(${80*-t*.8+2300}px)`,h[8].style.transform=`translateX(${80*-t*.6+2300}px)`,h[9].style.transform=`translateX(${80*-t*1+2400}px)`,h[10].style.transform=`translateX(${80*-t*.8+1500}px)`,h[11].style.transform=`translateX(${80*-t*.6+1200}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;L[0].style.transform=`translateX(${80*t*.6-1500}px)`,L[1].style.transform=`translateX(${80*t*.8-2e3}px)`,L[2].style.transform=`translateX(${80*t*.6-1800}px)`,L[3].style.transform=`translateX(${80*t*.8-2500}px)`,L[4].style.transform=`translateX(${80*t*.6-1100}px)`,L[5].style.transform=`translateX(${80*t*.8-1500}px)`,L[6].style.transform=`translateX(${80*t*.6-1800}px)`,L[7].style.transform=`translateX(${80*t*.8-2500}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-850,r=18*t-850;20*t-850<0?(p.style.transform=`translateY(${-e}px)`,x.style.transform=`translateY(${-r}px)`):(p.style.transform="translateY(0px)",x.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)-1200;u.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1500<0?(X.style.transform=`translateY(${-e}px)`,g.style.transform=`translateY(${-r}px)`,v.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",g.style.transform="translateY(0px)",v.style.transform="translateY(0px)")});let t=document.querySelector(".calc-round"),e=document.querySelector(".order-round");document.addEventListener("scroll",()=>{let e=100*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100);t.style.transform=e<250?"rotate(0deg)":e<850?`rotate(${e/5}deg)`:"rotate(180deg)"}),document.addEventListener("scroll",()=>{let t=100*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)+600;e.style.transform=t<9e3?"rotate(1800deg)":t<9900?`rotate(${t/5}deg)`:"rotate(1980deg)"})}else if(j<=1024&&j>768){document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;m.style.transform=`translateX(${100*-t+1e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;y.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;c.style.transform=`translateX(${160*-t+11e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;f.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*1+1200}px)`,h[1].style.transform=`translateX(${60*-t*.8+1e3}px)`,h[2].style.transform=`translateX(${60*-t*.6+1e3}px)`,h[3].style.transform=`translateX(${60*-t*1+1600}px)`,h[4].style.transform=`translateX(${60*-t*.8+1400}px)`,h[5].style.transform=`translateX(${60*-t*.6+800}px)`,h[6].style.transform=`translateX(${60*-t*1+2300}px)`,h[7].style.transform=`translateX(${60*-t*.8+2e3}px)`,h[8].style.transform=`translateX(${60*-t*.6+1900}px)`,h[9].style.transform=`translateX(${60*-t*1+1800}px)`,h[10].style.transform=`translateX(${60*-t*.8+1200}px)`,h[11].style.transform=`translateX(${60*-t*.6+1e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;L[0].style.transform=`translateX(${60*t*.6-2e3}px)`,L[1].style.transform=`translateX(${60*t*.8-2400}px)`,L[2].style.transform=`translateX(${60*t*.6-2500}px)`,L[3].style.transform=`translateX(${60*t*.8-3100}px)`,L[4].style.transform=`translateX(${60*t*.6-1700}px)`,L[5].style.transform=`translateX(${60*t*.8-2e3}px)`,L[6].style.transform=`translateX(${60*t*.6-1100}px)`,L[7].style.transform=`translateX(${60*t*.8-1600}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(p.style.transform=`translateY(${-e}px)`,x.style.transform=`translateY(${-r}px)`):(p.style.transform="translateY(0px)",x.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)-1e3;u.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-1300,r=18*t-1200,s=16*t-1100;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,g.style.transform=`translateY(${-r}px)`,v.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",g.style.transform="translateY(0px)",v.style.transform="translateY(0px)")});let t=document.querySelector(".calc-round"),e=document.querySelector(".order-round");document.addEventListener("scroll",()=>{let e=100*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100);t.style.transform=e<200?"rotate(0deg)":e<850?`rotate(${e/5}deg)`:"rotate(180deg)"}),document.addEventListener("scroll",()=>{let t=100*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)+600;e.style.transform=t<9e3?"rotate(1800deg)":t<9900?`rotate(${t/5}deg)`:"rotate(1980deg)"})}else if(j<=768&&j>430){document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;m.style.transform=`translateX(${80*-t+600}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;y.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;c.style.transform=`translateX(${70*-t+5e3}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;f.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*1+1500}px)`,h[1].style.transform=`translateX(${60*-t*.8+1300}px)`,h[2].style.transform=`translateX(${60*-t*.6+1300}px)`,h[3].style.transform=`translateX(${60*-t*1+1600}px)`,h[4].style.transform=`translateX(${60*-t*.8+1400}px)`,h[5].style.transform=`translateX(${60*-t*.6+1e3}px)`,h[6].style.transform=`translateX(${60*-t*1+1600}px)`,h[7].style.transform=`translateX(${60*-t*.6+1700}px)`,h[8].style.transform=`translateX(${60*-t*.8+2200}px)`,h[9].style.transform=`translateX(${60*-t*1+1800}px)`,h[10].style.transform=`translateX(${60*-t*.8+1400}px)`,h[11].style.transform=`translateX(${60*-t*.6+1200}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;L[0].style.transform=`translateX(${60*t*.6-1100}px)`,L[1].style.transform=`translateX(${60*t*.8-1400}px)`,L[2].style.transform=`translateX(${60*t*.6-1500}px)`,L[3].style.transform=`translateX(${60*t*.8-2e3}px)`,L[4].style.transform=`translateX(${60*t*.6+100}px)`,L[5].style.transform=`translateX(${60*t*.8-200}px)`,L[6].style.transform=`translateX(${60*t*.6-1800}px)`,L[7].style.transform=`translateX(${60*t*.8-2400}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(p.style.transform=`translateY(${-e}px)`,x.style.transform=`translateY(${-r}px)`):(p.style.transform="translateY(0px)",x.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)-1e3;u.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-1300,r=18*t-1200,s=16*t-1100;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,g.style.transform=`translateY(${-r}px)`,v.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",g.style.transform="translateY(0px)",v.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=26.5*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}else if(j<=430&&j>375){document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;m.style.transform=`translateX(${40*-t+60}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;y.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;c.style.transform=`translateX(${50*-t+3500}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;f.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*.6+1500}px)`,h[1].style.transform=`translateX(${60*-t*.5+1400}px)`,h[2].style.transform=`translateX(${60*-t*.4+1400}px)`,h[3].style.transform=`translateX(${60*-t*.6+1500}px)`,h[4].style.transform=`translateX(${60*-t*.5+1300}px)`,h[5].style.transform=`translateX(${60*-t*.4+1300}px)`,h[6].style.transform=`translateX(${60*-t*.6+1500}px)`,h[7].style.transform=`translateX(${60*-t*.5+1800}px)`,h[8].style.transform=`translateX(${60*-t*.4+1700}px)`,h[9].style.transform=`translateX(${60*-t*.6+1700}px)`,h[10].style.transform=`translateX(${60*-t*.5+1600}px)`,h[11].style.transform=`translateX(${60*-t*.4+1400}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;L[0].style.transform=`translateX(${60*t*.4+150}px)`,L[1].style.transform=`translateX(${60*t*.5+1}px)`,L[2].style.transform=`translateX(${60*t*.4+1}px)`,L[3].style.transform=`translateX(${60*t*.5-150}px)`,L[4].style.transform=`translateX(${60*t*.4+400}px)`,L[5].style.transform=`translateX(${60*t*.5+700}px)`,L[6].style.transform=`translateX(${60*t*.4-200}px)`,L[7].style.transform=`translateX(${60*t*.5-500}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(p.style.transform=`translateY(${-e}px)`,x.style.transform=`translateY(${-r}px)`):(p.style.transform="translateY(0px)",x.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)-1100;u.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,g.style.transform=`translateY(${-r}px)`,v.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",g.style.transform="translateY(0px)",v.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=29*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}else{document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;m.style.transform=`translateX(${40*-t+40}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;y.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;c.style.transform=`translateX(${50*-t+3500}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;f.style.transform=`rotate(${60*-t}deg)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;h[0].style.transform=`translateX(${60*-t*.6+1500}px)`,h[1].style.transform=`translateX(${60*-t*.5+1400}px)`,h[2].style.transform=`translateX(${60*-t*.4+1400}px)`,h[3].style.transform=`translateX(${60*-t*.6+1500}px)`,h[4].style.transform=`translateX(${60*-t*.5+1300}px)`,h[5].style.transform=`translateX(${60*-t*.4+1300}px)`,h[6].style.transform=`translateX(${60*-t*.6+1500}px)`,h[7].style.transform=`translateX(${60*-t*.5+1800}px)`,h[8].style.transform=`translateX(${60*-t*.4+1700}px)`,h[9].style.transform=`translateX(${60*-t*.6+1700}px)`,h[10].style.transform=`translateX(${60*-t*.5+1600}px)`,h[11].style.transform=`translateX(${60*-t*.4+1400}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100;L[0].style.transform=`translateX(${60*t*.4+150}px)`,L[1].style.transform=`translateX(${60*t*.5+1}px)`,L[2].style.transform=`translateX(${60*t*.4+1}px)`,L[3].style.transform=`translateX(${60*t*.5-150}px)`,L[4].style.transform=`translateX(${60*t*.4+400}px)`,L[5].style.transform=`translateX(${60*t*.5+700}px)`,L[6].style.transform=`translateX(${60*t*.4-200}px)`,L[7].style.transform=`translateX(${60*t*.5-500}px)`}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-650,r=18*t-650;20*t-650<0?(p.style.transform=`translateY(${-e}px)`,x.style.transform=`translateY(${-r}px)`):(p.style.transform="translateY(0px)",x.style.transform="translateY(0px)")}),document.addEventListener("scroll",()=>{let t=20*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100)-1100;u.style.transform=t<0?`translateY(${-t}px)`:"translateY(0px)"}),document.addEventListener("scroll",()=>{let t=(H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100,e=20*t-1500,r=18*t-1400,s=16*t-1300;20*t-1300<0?(X.style.transform=`translateY(${-e}px)`,g.style.transform=`translateY(${-r}px)`,v.style.transform=`translateY(${-s}px)`):(X.style.transform="translateY(0px)",g.style.transform="translateY(0px)",v.style.transform="translateY(0px)")});let t=document.querySelector("#mob-calc_animate");document.addEventListener("scroll",()=>{let e=27*((H[E]||Y[E])/((H[b]||Y[b])-H.clientHeight)*100);t.style.transform=`translateY(${e}px)`})}}))},function(t,e,r){}]);
//# sourceMappingURL=app.c365c758.js.map