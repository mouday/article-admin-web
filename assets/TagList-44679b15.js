import{r as o,R as O,F as g,j as e,I as R,S as F,B as h,h as N,k as u,l as m}from"./index-d7c02497.js";import{D as M}from"./parser-d2c93ba3.js";import{a as D}from"./iconUtil-478a6a52.js";import{F as L,P as V,D as _}from"./index-fe951c07.js";import{T as z}from"./Table-a683a19e.js";import{P as B}from"./PlusOutlined-20c25086.js";const q={title:[{required:!0,message:"请输入分类标题"}]};function v({currentRow:a,onSuccess:t,onCancel:p,rootClassName:r}){o.useState([]),o.useState([]),o.useState([]);const[f,i]=O.useState(!1),I={status:!0},[c]=g.useForm(),x=async()=>{const s=await u.post("/getTag",{tagId:a.tagId});s.ok&&c.setFieldsValue(s.data),i(!1)};o.useEffect(()=>{a&&a.tagId&&x()},[]);const S=async s=>{(await u.post("/addTag",s)).ok&&(m.success({content:"添加成功"}),t())},y=async s=>{(await u.post("/updateTag",s)).ok&&(m.success({content:"更新成功"}),t())},C=async s=>{console.log("Success:",s),i(!0),a&&a.tagId?await y({...s,tagId:a.tagId}):await S({...s}),i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{form:c,rootClassName:r,name:"basic",labelCol:{span:6},initialValues:I,onFinish:C,autoComplete:"off",children:[e.jsx(g.Item,{label:"标签名称",name:"title",rules:q.title,children:e.jsx(R,{placeholder:"标签名称"})}),e.jsx(g.Item,{label:"状态",name:"status",valuePropName:"checked",children:e.jsx(D,{})}),e.jsx(g.Item,{wrapperCol:{offset:8,span:16},children:e.jsxs(F,{children:[e.jsx(h,{onClick:p,children:"取消"}),e.jsx(h,{type:"primary",htmlType:"submit",children:"保存"})]})})]}),e.jsx(N,{spinning:f,fullscreen:!0})]})}const A=[{title:"标签名称",dataIndex:"title",key:"title",align:"center",render:(a,t)=>e.jsx("div",{className:"text-left",children:t.title})},{title:"状态",align:"center",dataIndex:"status",key:"status",width:100,render:(a,t)=>e.jsx(D,{defaultChecked:t.status,onChange:p=>{t.handleStatusChange(t,p)}})},{title:"操作",align:"center",dataIndex:"taskId",key:"taskId",width:120,render:(a,t)=>e.jsxs(F,{size:"middle",children:[e.jsx(h,{type:"link",onClick:()=>{t.handleEditRow(t)},children:e.jsx(L,{className:"cursor-pointer"})}),e.jsx(V,{title:"确认删除",description:"",onConfirm:()=>{t.handleDeleteRow(t)},children:e.jsx(h,{danger:!0,type:"link",children:e.jsx(_,{className:"cursor-pointer"})})})]})}],W=()=>{const[a,t]=o.useState([]),[p,r]=o.useState(!0),[f,i]=o.useState(null);m.useMessage();const[I,c]=o.useState({position:["bottomCenter"],total:0,current:1,pageSize:10}),x=async()=>{c(n=>{let l={...n,current:1};return s(),l})},S=async(n,l)=>{r(!0),(await u.post("/updateTagStatus",{tagId:n.tagId,status:l})).ok&&m.success({content:"操作成功"}),r(!1)},y=async n=>{i(n),j(!0)},C=async n=>{(await u.post("/deleteTag",{tagId:n.tagId})).ok&&(m.success({content:"操作成功"}),x())},s=async n=>{r(!0);const l=await u.post("/getTagPage",{});if(l.ok){const k=l.data.list.map(d=>(d.handleStatusChange=S,d.handleEditRow=y,d.handleDeleteRow=C,d));t(k),c(d=>({...d,total:l.data.total}))}r(!1)},[w,j]=o.useState(!1),E=()=>{i(null),j(!0)},b=()=>{j(!1),x()},T=()=>{j(!1)},P=n=>{console.log(n),c(l=>{let k={...l,...n};return s(),k})};return o.useEffect(()=>{s()},[]),e.jsxs(e.Fragment,{children:[e.jsx(h,{type:"primary",onClick:E,icon:e.jsx(B,{}),children:"添加标签"}),e.jsx(z,{className:"mt-4",bordered:!0,rowKey:"tagId",loading:p,columns:A,dataSource:a,pagination:I,onChange:P}),e.jsx(M,{title:f?"编辑标签":"添加标签",open:w,destroyOnClose:!0,onClose:T,children:e.jsx(v,{currentRow:f,onCancel:T,onSuccess:b})})]})};export{W as default};
