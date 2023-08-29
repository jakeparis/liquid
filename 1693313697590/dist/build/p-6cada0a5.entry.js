import{r as t,h as i,H as o}from"./p-b16379ff.js";import{s as n}from"./p-d594224c.js";import"./p-112455b1.js";const a=":host{--ld-notification-min-height:var(--ld-sp-40);--ld-notification-border-radius:var(--ld-br-m);--ld-notification-inset-y:var(--ld-sp-32);--ld-notification-col:var(--ld-col-wht);--ld-notification-warn-col:var(--ld-col-neutral-900);--ld-notification-alert-col:var(--ld-col-wht);--ld-notification-bg-col:var(--ld-thm-primary);--ld-notification-warn-bg-col:var(--ld-thm-warning);--ld-notification-alert-bg-col:var(--ld-thm-error);display:flex;font:var(--ld-typo-body-m);inset:0;justify-content:center;min-width:20rem;pointer-events:none;position:fixed;z-index:2147483647}@keyframes ld-notification-fade-in{0%{opacity:0}to{opacity:1}}@keyframes ld-notification-fade-out{0%{opacity:1;transform:none}to{opacity:0;transform:none}}.ld-notification__item{border-radius:var(--ld-notification-border-radius);box-shadow:var(--ld-shadow-sticky);display:flex;justify-content:space-between;max-height:80vh;max-width:calc(90% - 1rem);min-height:var(--ld-notification-min-height);min-width:19rem;overflow-y:auto;pointer-events:auto;position:absolute;transform-origin:center;transition:transform var(--ld-transition-duration-normal) ease,opacity var(--ld-transition-duration-normal) linear;width:-moz-fit-content;width:fit-content}.ld-notification__item:where(:not(.ld-notification__item--dismissed)){animation:ld-notification-fade-in var(--ld-transition-duration-normal) linear}.ld-notification__item:nth-last-of-type(n+2) .ld-notification__btn-dismiss,.ld-notification__item:nth-last-of-type(n+2) .ld-notification__item-content,.ld-notification__item:nth-last-of-type(n+5){opacity:0}.ld-notification__item:nth-last-of-type(2){opacity:.75}.ld-notification__item:nth-last-of-type(3){opacity:.5}.ld-notification__item:nth-last-of-type(4){opacity:.25}.ld-notification__item.ld-notification__item--dismissed{animation:ld-notification-fade-out var(--ld-transition-duration-normal) linear forwards;opacity:0}:host(.ld-notification--bottom) .ld-notification__item{bottom:var(--ld-notification-inset-y)}:host(.ld-notification--bottom) .ld-notification__item:nth-last-of-type(2){transform:scale(.975) translateY(25%)}:host(.ld-notification--bottom) .ld-notification__item:nth-last-of-type(3){transform:scale(.95) translateY(50%)}:host(.ld-notification--bottom) .ld-notification__item:nth-last-of-type(4){transform:scale(.925) translateY(75%)}:host(.ld-notification--top) .ld-notification__item{top:var(--ld-notification-inset-y)}:host(.ld-notification--top) .ld-notification__item:nth-last-of-type(2){transform:scale(.975) translateY(-25%)}:host(.ld-notification--top) .ld-notification__item:nth-last-of-type(3){transform:scale(.95) translateY(-50%)}:host(.ld-notification--top) .ld-notification__item:nth-last-of-type(4){transform:scale(.925) translateY(-75%)}.ld-notification__item--info{background-color:var(--ld-notification-bg-col);color:var(--ld-notification-col)}.ld-notification__item--warn{background-color:var(--ld-notification-warn-bg-col);color:var(--ld-notification-warn-col)}.ld-notification__item--alert{background-color:var(--ld-notification-alert-bg-col);color:var(--ld-notification-alert-col)}.ld-notification__btn-dismiss,.ld-notification__item-content{transition:opacity var(--ld-transition-duration-normal) linear}.ld-notification__item-content{align-items:baseline;display:grid;gap:var(--ld-sp-12);grid-auto-flow:column;padding:var(--ld-sp-6) var(--ld-sp-12)}.ld-notification__item-content>*{align-self:center}.ld-notification__btn-dismiss{-webkit-touch-callout:none;align-self:center;background-color:initial;border:0;border-radius:var(--ld-br-full);color:inherit;cursor:pointer;display:inline-grid;flex-shrink:0;height:var(--ld-sp-40);margin-left:var(--ld-sp-16);padding:0;place-items:center;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:var(--ld-sp-40)}";const e=6e3;const s=200;const r=class{constructor(i){t(this,i);this.placement="top";this.sanitizeConfig=undefined;this.queue=[];this.queueDismissed=[];this.dismissTimeout=undefined;this.fadeoutTimeouts=[];this.currentNotification=undefined}updateDismissTimeout(){clearTimeout(this.dismissTimeout);if(!this.currentNotification)return;if(this.currentNotification.type==="alert"&&!this.currentNotification.timeout){return}if(this.currentNotification.timeout===0)return;this.dismissTimeout=setTimeout((()=>{this.handleNotificationDismiss()}),this.currentNotification.timeout||e)}handleNotification(t){t.stopImmediatePropagation();const i=t.detail;const o=this.queue.some((t=>t.content===i.content&&t.type===i.type));if(o)return;if(i.type==="alert"){this.queue=[...this.queue,i];this.currentNotification=i;return}const n=this.queue.findIndex((t=>t.type==="alert"));if(n===-1){this.queue=[...this.queue,i];this.currentNotification=i;return}this.queue.splice(n,0,i);this.queue=[...this.queue]}handleNotificationDismiss(){if(!this.currentNotification)return;this.queueDismissed.unshift(this.queue.pop());this.queueDismissed=[...this.queueDismissed];this.queue=[...this.queue];this.currentNotification=this.queue[this.queue.length-1];this.fadeoutTimeouts.push(setTimeout((()=>{this.queueDismissed=this.queueDismissed.slice(0,-1)}),s))}handleNotificationClear(){this.queueDismissed=[...this.queue];this.queue=[];this.currentNotification=undefined;this.fadeoutTimeouts.forEach(clearTimeout);this.fadeoutTimeouts.push(setTimeout((()=>{this.queueDismissed=[]}),s))}renderNotification(t,o=false){let a=`ld-notification__item ld-notification__item--${t.type||"info"}`;if(o)a+=" ld-notification__item--dismissed";return i("div",{class:a,key:t.type+t.content,part:"item"},i("div",{class:"ld-notification__item-content",innerHTML:n(t.content,this.sanitizeConfig),role:t.type==="alert"?"alert":"status",part:"content"}),i("button",{class:"ld-notification__btn-dismiss",onClick:o?undefined:this.handleNotificationDismiss.bind(this),part:"btn-dismiss focusable"},i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",part:"btn-dismiss-icon"},i("title",null,"Dismiss"),i("path",{d:"M6 6L18 18",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),i("path",{d:"M6 18L18 6",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}))))}disconnectedCallback(){clearTimeout(this.dismissTimeout);this.fadeoutTimeouts.forEach(clearTimeout)}render(){const t=`ld-notification ld-notification--${this.placement}`;return i(o,{class:t,role:"region","aria-label":"Notifications"},this.queue.map((t=>this.renderNotification.call(this,t))),this.queueDismissed.map((t=>this.renderNotification.call(this,t,true))))}static get watchers(){return{currentNotification:["updateDismissTimeout"]}}};r.style=a;export{r as ld_notification};
//# sourceMappingURL=p-6cada0a5.entry.js.map