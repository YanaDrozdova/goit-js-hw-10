import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-ceb9b81e.js";const i=document.querySelector(".form");i.addEventListener("submit",u);function u(t){t.preventDefault();const e=t.target.elements.delay.value,r=t.target.elements.state.value;let l=new Promise((o,n)=>{setTimeout(()=>{r==="fulfilled"?o(e):n(e)},e)});const m={color:"#59A10D",messageColor:"#FFFFFF",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:3e3},a={color:"#EF4040",messageColor:"#FFFFFF",message:`❌ Rejected promise in ${e}ms`,position:"topRight",timeout:3e3};l.then(o=>s.show(m)).catch(o=>s.show(a)),i.reset()}
//# sourceMappingURL=commonHelpers2.js.map