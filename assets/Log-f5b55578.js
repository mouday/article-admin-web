import{bj as i,a0 as l,bk as u,r as s,j as t,a1 as g}from"./index-7b16c4e6.js";function p(){i();const[e,m]=l();console.log(e);const{taskLogId:o}=u(),[r,c]=s.useState(""),n=async()=>{const a=await g.getTaskLogDetail({taskLogId:o});a.ok&&c(a.data)};return s.useEffect(()=>{n()},[]),t.jsx("div",{className:"log-wrap",children:t.jsx("pre",{children:r})})}export{p as default};
