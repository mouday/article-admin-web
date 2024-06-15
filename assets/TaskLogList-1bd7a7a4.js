import{r as g,A as F,_ as z,c as E,g as H,m as A,R as b,C as D,O as R,o as B,Q as M,U as W,V as J,j as l,X as I,B as U,Y as X,Z as Q,$ as Y}from"./index-e3aeee9e.js";import{d as k}from"./dayjs.min-a27ee3b3.js";import{R as $,a as Z}from"./iconUtil-f0efbcc9.js";import{T as q}from"./Table-d8a4db81.js";var K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"};const tt=K;var et=function(e,n){return g.createElement(F,z({},e,{ref:n,icon:tt}))};const nt=g.forwardRef(et),L=["wrap","nowrap","wrap-reverse"],N=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],P=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],at=(t,e)=>{const n={};return L.forEach(a=>{n[`${t}-wrap-${a}`]=e.wrap===a}),n},st=(t,e)=>{const n={};return P.forEach(a=>{n[`${t}-align-${a}`]=e.align===a}),n[`${t}-align-stretch`]=!e.align&&!!e.vertical,n},rt=(t,e)=>{const n={};return N.forEach(a=>{n[`${t}-justify-${a}`]=e.justify===a}),n};function lt(t,e){return E(Object.assign(Object.assign(Object.assign({},at(t,e)),st(t,e)),rt(t,e)))}const ot=t=>{const{componentCls:e}=t;return{[e]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},ct=t=>{const{componentCls:e}=t;return{[e]:{"&-gap-small":{gap:t.flexGapSM},"&-gap-middle":{gap:t.flexGap},"&-gap-large":{gap:t.flexGapLG}}}},it=t=>{const{componentCls:e}=t,n={};return L.forEach(a=>{n[`${e}-wrap-${a}`]={flexWrap:a}}),n},ut=t=>{const{componentCls:e}=t,n={};return P.forEach(a=>{n[`${e}-align-${a}`]={alignItems:a}}),n},dt=t=>{const{componentCls:e}=t,n={};return N.forEach(a=>{n[`${e}-justify-${a}`]={justifyContent:a}}),n},gt=()=>({}),ft=H("Flex",t=>{const{paddingXS:e,padding:n,paddingLG:a}=t,o=A(t,{flexGapSM:e,flexGap:n,flexGapLG:a});return[ot(o),ct(o),it(o),ut(o),dt(o)]},gt,{resetStyle:!1});var pt=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]]);return n};const mt=b.forwardRef((t,e)=>{const{prefixCls:n,rootClassName:a,className:o,style:w,flex:m,gap:f,children:y,vertical:p=!1,component:S="div"}=t,C=pt(t,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:c,direction:x,getPrefixCls:h}=b.useContext(D),i=h("flex",n),[v,T,j]=ft(i),s=p??(c==null?void 0:c.vertical),u=E(o,a,c==null?void 0:c.className,i,T,j,lt(i,t),{[`${i}-rtl`]:x==="rtl",[`${i}-gap-${f}`]:R(f),[`${i}-vertical`]:s}),r=Object.assign(Object.assign({},c==null?void 0:c.style),w);return m&&(r.flex=m),f&&!R(f)&&(r.gap=f),v(b.createElement(S,Object.assign({ref:e,className:u,style:r},B(C,["justify","wrap","align"])),y))}),St=mt,d={TaskStatusStartError:1,TaskStatusStartSuccess:2,TaskStatusStartRun:3,TaskStatusRunning:4,TaskStatusRunningSuccess:5,TaskStatusRunningError:6},G=[{label:"启动成功",value:d.TaskStatusStartSuccess,color:M[6]},{label:"运行成功",value:d.TaskStatusRunningSuccess,color:W[6]},{label:"运行失败",value:d.TaskStatusRunningError,color:J[5]}];function xt({record:t}){const e=I({pathname:`/task-log/${t.taskLogId}`}),n=()=>{window.open(e,"_blank")};return l.jsx(U,{type:"link",disabled:!t.hasRunLog,onClick:n,children:l.jsx(nt,{})})}const ht=[{title:"标题",dataIndex:"title",key:"title",align:"center"},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",render:(t,e)=>{const n=G.find(a=>a.value===e.status);return l.jsx("span",{style:{color:n==null?void 0:n.color},children:n==null?void 0:n.label})}},{title:"开始时间",dataIndex:"createTime",key:"createTime",width:200,align:"center"},{title:"结束时间",dataIndex:"endTime",key:"endTime",width:200,align:"center",render:(t,e)=>e.endTime?l.jsx("span",{children:e.endTime}):l.jsx(l.Fragment,{children:"-"})},{title:"耗时（秒）",dataIndex:"diffTime",key:"diffTime",width:120,align:"center",render:(t,e)=>l.jsx("span",{children:e.diffTime})},{title:"日志",key:"action",align:"center",width:80,render:(t,e)=>l.jsx(xt,{record:e})}],jt=()=>{const[t,e]=g.useState([]),[n,a]=g.useState(!0);X();const[o,w]=Q(),m=o.get("taskId"),f=!1;I({pathname:"/task-log"});const[y,p]=g.useState(null),[S,C]=g.useState(0),[c,x]=g.useState({position:["bottomCenter"],total:0,current:1,pageSize:10}),h=async s=>{a(!0);const u=await Y.getTaskLogList({page:s.current,size:s.pageSize,status:s.status,taskId:m});u.ok&&(e(u.data.list.map(r=>{r.isComplete=[d.TaskStatusStartError,d.TaskStatusRunningSuccess,d.TaskStatusRunningError].includes(r.status);const O=k(r.createTime),V=k(r.endTime),_=k();return r.endTime?r.diffTime=V.diff(O,"seconds"):r.diffTime=_.diff(O,"seconds"),r.hasRunLog=[d.TaskStatusStartRun,d.TaskStatusRunning,d.TaskStatusRunningSuccess,d.TaskStatusRunningError].includes(r.status),r})),x(r=>({...r,total:u.data.total}))),a(!1)};g.useEffect(()=>(h(c),()=>{clearInterval(y)}),[]);const i=s=>{console.log(s),x(u=>{let r={status:S,...u,...s};return h(r),r})},v=s=>{console.log(s.target.value),i({status:s.target.value}),C(s.target.value)},T=[{value:0,label:"全部"},...G],j=s=>{console.log(s),p(s?u=>setInterval(()=>{i()},1e3*3):u=>(clearInterval(u),null))};return l.jsxs(l.Fragment,{children:[l.jsxs(St,{justify:"space-between",children:[l.jsx($.Group,{value:S,buttonStyle:"solid",onChange:v,children:T.map(s=>l.jsx($.Button,{value:s.value,children:s.label},s.value))}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2",children:"定时刷新"}),l.jsx(Z,{defaultChecked:f,onChange:j})]})]}),l.jsx(q,{className:"mt-4",bordered:!0,loading:n,columns:ht,rowKey:"taskLogId",dataSource:t,pagination:c,onChange:i})]})};export{jt as default};