import{r as o,F as i,j as e,I as S,S as w,B as p,b as u,m as c}from"./index-5ef596df.js";import{S as C}from"./iconUtil-2f327d62.js";import{F as N,P as L,D as O,M as P}from"./index-6dcb6873.js";import{T as z}from"./Table-acd71fb6.js";import"./fade-20ac3a79.js";function A({currentRow:r,onSuccess:n,onCancel:h}){o.useState([]);const g={status:!0},[x]=i.useForm(),f=async()=>{const l=await u.getRunner({runnerId:r.runnerId});l.ok&&x.setFieldsValue(l.data)};o.useEffect(()=>{r&&r.runnerId&&f()},[]);const j=async l=>{console.log("Success:",l);let d=null;r&&r.runnerId?d=await u.updateRunner({...l,runnerId:r.runnerId}):d=await u.addRunner(l),d.ok?(c.success({content:"操作成功"}),n()):c.error({content:d.msg})},m=l=>{console.log("Failed:",l)};return e.jsxs(i,{form:x,name:"basic",labelCol:{span:6},initialValues:g,onFinish:j,onFinishFailed:m,autoComplete:"off",children:[e.jsx(i.Item,{label:"执行器名称",name:"title",rules:[{required:!0,message:"请输入执行器名称"}],children:e.jsx(S,{placeholder:"执行器名称"})}),e.jsx(i.Item,{label:"Url",name:"url",rules:[{required:!0,message:"请输入Url"}],children:e.jsx(S,{placeholder:"Url"})}),e.jsx(i.Item,{label:"AccessToken",name:"accessToken",rules:[{required:!0,message:"输入AccessToken"}],children:e.jsx(S,{placeholder:"AccessToken"})}),e.jsx(i.Item,{label:"启用",name:"status",valuePropName:"checked",children:e.jsx(C,{})}),e.jsx(i.Item,{wrapperCol:{offset:8,span:16},children:e.jsxs(w,{children:[e.jsx(p,{onClick:h,children:"取消"}),e.jsx(p,{type:"primary",htmlType:"submit",children:"保存"})]})})]})}const _=[{title:"执行器名称",dataIndex:"title",key:"title",align:"center",render:(r,n)=>e.jsx("div",{className:"text-left",children:n.title})},{title:"状态",align:"center",dataIndex:"status",key:"status",width:100,render:(r,n)=>e.jsx(C,{defaultChecked:n.status,onChange:h=>{n.handleStatusChange(n,h)}})},{title:"操作",align:"center",dataIndex:"runnerId",key:"runnerId",width:160,render:(r,n)=>e.jsxs(w,{size:"middle",children:[e.jsx(p,{type:"link",onClick:()=>{n.handleEditRow(n)},children:e.jsx(N,{className:"cursor-pointer"})}),e.jsx(L,{title:"确认删除",description:"",onConfirm:()=>{n.handleDeleteRow(n)},children:e.jsx(p,{danger:!0,type:"link",children:e.jsx(O,{className:"cursor-pointer"})})})]})}],K=()=>{const[r,n]=o.useState([]),[h,g]=o.useState(!0),[x,f]=o.useState(null);c.useMessage();const[j,m]=o.useState({position:["bottomCenter"],total:0,current:1,pageSize:10}),l=async()=>{m(t=>{let s={...t,current:1};return k(s),s})},d=async(t,s)=>{const a=await u.updateRunnerStatus({runnerId:t.runnerId,status:s});a.ok?c.success({content:"操作成功"}):c.error({content:a.msg})},y=async t=>{f(t),I(!0)},F=async t=>{const s=await u.removeRunner({runnerId:t.runnerId});s.ok?(c.success({content:"操作成功"}),l()):c.error({content:s.msg})},b=t=>{window.open(`/#/task-log-list?runnerId=${t.runnerId}`,"_blank")},k=async t=>{g(!0);const s=await u.getRunnerList({page:t.current,size:t.pageSize});s.ok&&(n(s.data.list.map(a=>(a.handleStatusChange=d,a.handleEditRow=y,a.handleDeleteRow=F,a.handleShowLog=b,a))),m(a=>({...a,total:s.data.total}))),g(!1)};o.useEffect(()=>{k(j)},[]);const[T,I]=o.useState(!1),E=()=>{f(null),I(!0)},R=()=>{I(!1),l()},D=()=>{I(!1)},M=t=>{console.log(t),m(s=>{let a={...s,...t};return k(a),a})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"primary",onClick:E,children:"添加执行器"}),e.jsx(z,{className:"mt-4",bordered:!0,rowKey:"runnerId",loading:h,columns:_,dataSource:r,pagination:j,onChange:M}),e.jsx(P,{title:e.jsx("div",{className:"text-center",children:"编辑任务"}),footer:null,open:T,destroyOnClose:!0,children:e.jsx(A,{currentRow:x,onCancel:D,onSuccess:R})})]})};export{K as default};
