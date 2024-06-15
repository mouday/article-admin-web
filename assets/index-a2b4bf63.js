import{r,A as N,_ as R,bD as q,B as z,br as F,R as x,a_ as X,s as U,a5 as G,g as Y,C as S,aT as J,bg as K,bE as I,c as T,bF as Q,bv as _,a6 as Z,bG as ee,o as ne}from"./index-e3aeee9e.js";var te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const oe=te;var le=function(n,o){return r.createElement(N,R({},n,{ref:o,icon:oe}))};const he=r.forwardRef(le);var re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"};const se=re;var ae=function(n,o){return r.createElement(N,R({},n,{ref:o,icon:se}))};const Oe=r.forwardRef(ae);function $(e){return!!(e&&e.then)}const ce=e=>{const{type:n,children:o,prefixCls:t,buttonProps:l,close:s,autoFocus:u,emitEvent:f,isSilent:c,quitOnNullishReturnValue:a,actionFn:i}=e,m=r.useRef(!1),b=r.useRef(null),[P,y]=q(!1),h=function(){s==null||s.apply(void 0,arguments)};r.useEffect(()=>{let d=null;return u&&(d=setTimeout(()=>{var p;(p=b.current)===null||p===void 0||p.focus()})),()=>{d&&clearTimeout(d)}},[]);const C=d=>{$(d)&&(y(!0),d.then(function(){y(!1,!0),h.apply(void 0,arguments),m.current=!1},p=>{if(y(!1,!0),m.current=!1,!(c!=null&&c()))return Promise.reject(p)}))},O=d=>{if(m.current)return;if(m.current=!0,!i){h();return}let p;if(f){if(p=i(d),a&&!$(p)){m.current=!1,h(d);return}}else if(i.length)p=i(s),m.current=!1;else if(p=i(),!p){h();return}C(p)};return r.createElement(z,Object.assign({},F(n),{onClick:O,loading:P,prefixCls:t},l,{ref:b}),o)},ie=ce;function xe(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function k(e){const{closable:n,closeIcon:o}=e||{};return x.useMemo(()=>{if(!n&&(n===!1||o===!1||o===null))return!1;if(n===void 0&&o===void 0)return null;let t={closeIcon:typeof o!="boolean"&&o!==null?o:void 0};return n&&typeof n=="object"&&(t=Object.assign(Object.assign({},t),n)),t},[n,o])}function j(){const e={};for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return o.forEach(l=>{l&&Object.keys(l).forEach(s=>{l[s]!==void 0&&(e[s]=l[s])})}),e}const ue={};function ye(e,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ue;const t=k(e),l=k(n),s=x.useMemo(()=>Object.assign({closeIcon:x.createElement(X,null)},o),[o]),u=x.useMemo(()=>t===!1?!1:t?j(s,l,t):l===!1?!1:l?j(s,l):s.closable?s:!1,[t,l,s]);return x.useMemo(()=>{if(u===!1)return[!1,null];const{closeIconRender:f}=s,{closeIcon:c}=u;let a=c;if(a!=null){f&&(a=f(c));const i=U(u,!0);Object.keys(i).length&&(a=x.isValidElement(a)?x.cloneElement(a,i):x.createElement("span",Object.assign({},i),a))}return[!0,a]},[u,s])}function w(){}const fe=r.createContext({add:w,remove:w});function Pe(e){const n=r.useContext(fe),o=r.useRef();return G(l=>{if(l){const s=e?l.querySelector(e):l;n.add(s),o.current=s}else n.remove(o.current)})}const me=e=>{const{componentCls:n,iconCls:o,antCls:t,zIndexPopup:l,colorText:s,colorWarning:u,marginXXS:f,marginXS:c,fontSize:a,fontWeightStrong:i,colorTextHeading:m}=e;return{[n]:{zIndex:l,[`&${t}-popover`]:{fontSize:a},[`${n}-message`]:{marginBottom:c,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${o}`]:{color:u,fontSize:a,lineHeight:1,marginInlineEnd:c},[`${n}-title`]:{fontWeight:i,color:m,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:f,color:s}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:c}}}}},de=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},B=Y("Popconfirm",e=>me(e),de,{resetStyle:!1});var pe=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(o[t[l]]=e[t[l]]);return o};const V=e=>{const{prefixCls:n,okButtonProps:o,cancelButtonProps:t,title:l,description:s,cancelText:u,okText:f,okType:c="primary",icon:a=r.createElement(_,null),showCancel:i=!0,close:m,onConfirm:b,onCancel:P,onPopupClick:y}=e,{getPrefixCls:h}=r.useContext(S),[C]=J("Popconfirm",K.Popconfirm),O=I(l),d=I(s);return r.createElement("div",{className:`${n}-inner-content`,onClick:y},r.createElement("div",{className:`${n}-message`},a&&r.createElement("span",{className:`${n}-message-icon`},a),r.createElement("div",{className:`${n}-message-text`},O&&r.createElement("div",{className:T(`${n}-title`)},O),d&&r.createElement("div",{className:`${n}-description`},d))),r.createElement("div",{className:`${n}-buttons`},i&&r.createElement(z,Object.assign({onClick:P,size:"small"},t),u||(C==null?void 0:C.cancelText)),r.createElement(ie,{buttonProps:Object.assign(Object.assign({size:"small"},F(c)),o),actionFn:b,close:m,prefixCls:h("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},f||(C==null?void 0:C.okText))))},ge=e=>{const{prefixCls:n,placement:o,className:t,style:l}=e,s=pe(e,["prefixCls","placement","className","style"]),{getPrefixCls:u}=r.useContext(S),f=u("popconfirm",n),[c]=B(f);return c(r.createElement(Q,{placement:o,className:T(f,t),style:l,content:r.createElement(V,Object.assign({prefixCls:f},s))}))},ve=ge;var Ce=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(o[t[l]]=e[t[l]]);return o};const D=r.forwardRef((e,n)=>{var o,t;const{prefixCls:l,placement:s="top",trigger:u="click",okType:f="primary",icon:c=r.createElement(_,null),children:a,overlayClassName:i,onOpenChange:m,onVisibleChange:b}=e,P=Ce(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:y}=r.useContext(S),[h,C]=Z(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),O=(g,v)=>{C(g,!0),b==null||b(g),m==null||m(g,v)},d=g=>{O(!1,g)},p=g=>{var v;return(v=e.onConfirm)===null||v===void 0?void 0:v.call(globalThis,g)},H=g=>{var v;O(!1,g),(v=e.onCancel)===null||v===void 0||v.call(globalThis,g)},M=(g,v)=>{const{disabled:L=!1}=e;L||O(g,v)},E=y("popconfirm",l),A=T(E,i),[W]=B(E);return W(r.createElement(ee,Object.assign({},ne(P,["title"]),{trigger:u,placement:s,onOpenChange:M,open:h,ref:n,overlayClassName:A,content:r.createElement(V,Object.assign({okType:f,icon:c},e,{prefixCls:E,close:d,onConfirm:p,onCancel:H})),"data-popover-inject":!0}),a))});D._InternalPanelDoNotUseOrYouWillBeFired=ve;const Ee=D;export{ie as A,he as D,Oe as F,Ee as P,Pe as a,xe as p,ye as u};
