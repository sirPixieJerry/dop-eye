let e,t,l;const o=()=>{let e=[,,,].fill(0).map(()=>0|Math.floor(255*Math.random()));return`rgb(${e.join(",")})`},n=e=>{let t=document.getElementById("box"),l=document.querySelector("path");null!==t&&null!==l&&(t.style.backgroundColor=e,l.style.fill=e)},r=e=>{let t=document.getElementById("reflex-one"),l=document.getElementById("reflex-two");null!==t&&null!==l&&(t.style.backgroundColor=e,l.style.backgroundColor=e)},a=e=>{b.push(e)},c=e=>{if(e instanceof HTMLElement){let t=window.getComputedStyle(e);a({target:e.id,color:t.backgroundColor})}if(e instanceof SVGElement){let t=window.getComputedStyle(e);a({target:e.id,color:t.fill})}},d=e=>{if(void 0===e)return;let t=document.getElementById(e.target);switch(e.target){case"box":case"path":n(e.color);break;case"reflex-one":case"reflex-two":r(e.color);break;default:if(null===t)return;t.style.backgroundColor=e.color}};let u=!0;const i=()=>{let e=()=>{!u&&b.length>0&&(console.log(b.length),d(b.pop()),t=setTimeout(e,l=Math.max(l-100,100)))};e()},s=e=>{u=e},m=()=>{u||(clearTimeout(e),clearTimeout(t),l=1e3,e=setTimeout(()=>{i()},5e3))};let g=0;const f=e=>{0!==b.length&&(g=Math.floor(e/window.innerWidth*b.length),d(b[g]))};let h=!1;const b=[];document.addEventListener("mousedown",()=>{h=!0,s(!0)}),document.addEventListener("mouseup",()=>{h=!1,s(!1)}),document.addEventListener("mousemove",e=>{h&&f(e.clientX)}),document.addEventListener("click",e=>{if(m(),null===e.target)return;let t=e.target;if(!t.matches(".clickable"))return;let l=o();switch(t.id){case"box":case"path":c(t),n(l);break;case"reflex-one":case"reflex-two":c(t),r(l);break;default:c(t),t.style.backgroundColor=l}});
//# sourceMappingURL=index.e425b0de.js.map
