import"./assets/styles-0d161878.js";import{f as p,i as D}from"./assets/vendor-77e16229.js";const t=document.querySelector("[data-start]"),S={position:"topRight"},C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(D.error({...S,title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}};p("#datetime-picker",C);const l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]"),d=document.querySelector("#datetime-picker");t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!0;const e=new Date(d.value),o=setInterval(()=>{const r=e-new Date;if(r<=0){clearInterval(o),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",t.disabled=!1,d.disabled=!1;return}const{days:u,hours:s,minutes:a,seconds:c}=b(r);l.textContent=n(u),m.textContent=n(s),f.textContent=n(a),h.textContent=n(c)},1e3)});function b(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:c,seconds:y}}function n(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map