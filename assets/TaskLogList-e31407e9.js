import{r as g,A as F,_ as z,c as E,g as H,m as A,R as b,C as D,U as R,o as B,V as M,X as W,Y as J,j as l,Z as I,B as U,$ as X,a0 as q,a1 as Y,q as k}from"./index-7b16c4e6.js";import{R as $,a as Z}from"./iconUtil-1a066111.js";import{T as Q}from"./Table-b5c43bf6.js";var K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"};const ee=K;var te=function(t,a){return g.createElement(F,z({},t,{ref:a,icon:ee}))};const ae=g.forwardRef(te),L=["wrap","nowrap","wrap-reverse"],N=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],P=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],ne=(e,t)=>{const a={};return L.forEach(n=>{a[`${e}-wrap-${n}`]=t.wrap===n}),a},se=(e,t)=>{const a={};return P.forEach(n=>{a[`${e}-align-${n}`]=t.align===n}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},re=(e,t)=>{const a={};return N.forEach(n=>{a[`${e}-justify-${n}`]=t.justify===n}),a};function le(e,t){return E(Object.assign(Object.assign(Object.assign({},ne(e,t)),se(e,t)),re(e,t)))}const oe=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},ce=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},ie=e=>{const{componentCls:t}=e,a={};return L.forEach(n=>{a[`${t}-wrap-${n}`]={flexWrap:n}}),a},ue=e=>{const{componentCls:t}=e,a={};return P.forEach(n=>{a[`${t}-align-${n}`]={alignItems:n}}),a},de=e=>{const{componentCls:t}=e,a={};return N.forEach(n=>{a[`${t}-justify-${n}`]={justifyContent:n}}),a},ge=()=>({}),fe=H("Flex",e=>{const{paddingXS:t,padding:a,paddingLG:n}=e,o=A(e,{flexGapSM:t,flexGap:a,flexGapLG:n});return[oe(o),ce(o),ie(o),ue(o),de(o)]},ge,{resetStyle:!1});var pe=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const me=b.forwardRef((e,t)=>{const{prefixCls:a,rootClassName:n,className:o,style:w,flex:m,gap:f,children:y,vertical:p=!1,component:S="div"}=e,C=pe(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:c,direction:x,getPrefixCls:h}=b.useContext(D),i=h("flex",a),[v,T,j]=fe(i),s=p??(c==null?void 0:c.vertical),u=E(o,n,c==null?void 0:c.className,i,T,j,le(i,e),{[`${i}-rtl`]:x==="rtl",[`${i}-gap-${f}`]:R(f),[`${i}-vertical`]:s}),r=Object.assign(Object.assign({},c==null?void 0:c.style),w);return m&&(r.flex=m),f&&!R(f)&&(r.gap=f),v(b.createElement(S,Object.assign({ref:t,className:u,style:r},B(C,["justify","wrap","align"])),y))}),Se=me,d={TaskStatusStartError:1,TaskStatusStartSuccess:2,TaskStatusStartRun:3,TaskStatusRunning:4,TaskStatusRunningSuccess:5,TaskStatusRunningError:6},G=[{label:"启动成功",value:d.TaskStatusStartSuccess,color:M[6]},{label:"运行成功",value:d.TaskStatusRunningSuccess,color:W[6]},{label:"运行失败",value:d.TaskStatusRunningError,color:J[5]}];function xe({record:e}){const t=I({pathname:`/task-log/${e.taskLogId}`}),a=()=>{window.open(t,"_blank")};return l.jsx(U,{type:"link",disabled:!e.hasRunLog,onClick:a,children:l.jsx(ae,{})})}const he=[{title:"标题",dataIndex:"title",key:"title",align:"center"},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",render:(e,t)=>{const a=G.find(n=>n.value===t.status);return l.jsx("span",{style:{color:a==null?void 0:a.color},children:a==null?void 0:a.label})}},{title:"开始时间",dataIndex:"createTime",key:"createTime",width:200,align:"center"},{title:"结束时间",dataIndex:"endTime",key:"endTime",width:200,align:"center",render:(e,t)=>t.endTime?l.jsx("span",{children:t.endTime}):l.jsx(l.Fragment,{children:"-"})},{title:"耗时（秒）",dataIndex:"diffTime",key:"diffTime",width:120,align:"center",render:(e,t)=>l.jsx("span",{children:t.diffTime})},{title:"日志",key:"action",align:"center",width:80,render:(e,t)=>l.jsx(xe,{record:t})}],Te=()=>{const[e,t]=g.useState([]),[a,n]=g.useState(!0);X();const[o,w]=q(),m=o.get("taskId"),f=!1;I({pathname:"/task-log"});const[y,p]=g.useState(null),[S,C]=g.useState(0),[c,x]=g.useState({position:["bottomCenter"],total:0,current:1,pageSize:10}),h=async s=>{n(!0);const u=await Y.getTaskLogList({page:s.current,size:s.pageSize,status:s.status,taskId:m});u.ok&&(t(u.data.list.map(r=>{r.isComplete=[d.TaskStatusStartError,d.TaskStatusRunningSuccess,d.TaskStatusRunningError].includes(r.status);const O=k(r.createTime),V=k(r.endTime),_=k();return r.endTime?r.diffTime=V.diff(O,"seconds"):r.diffTime=_.diff(O,"seconds"),r.hasRunLog=[d.TaskStatusStartRun,d.TaskStatusRunning,d.TaskStatusRunningSuccess,d.TaskStatusRunningError].includes(r.status),r})),x(r=>({...r,total:u.data.total}))),n(!1)};g.useEffect(()=>(h(c),()=>{clearInterval(y)}),[]);const i=s=>{console.log(s),x(u=>{let r={status:S,...u,...s};return h(r),r})},v=s=>{console.log(s.target.value),i({status:s.target.value}),C(s.target.value)},T=[{value:0,label:"全部"},...G],j=s=>{console.log(s),p(s?u=>setInterval(()=>{i()},1e3*3):u=>(clearInterval(u),null))};return l.jsxs(l.Fragment,{children:[l.jsxs(Se,{justify:"space-between",children:[l.jsx($.Group,{value:S,buttonStyle:"solid",onChange:v,children:T.map(s=>l.jsx($.Button,{value:s.value,children:s.label},s.value))}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2",children:"定时刷新"}),l.jsx(Z,{defaultChecked:f,onChange:j})]})]}),l.jsx(Q,{className:"mt-4",bordered:!0,loading:a,columns:he,rowKey:"taskLogId",dataSource:e,pagination:c,onChange:i})]})};export{Te as default};
