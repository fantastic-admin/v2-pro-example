import{_ as D}from"./index-6aa92ec0.js";import{d as G,r as I,G as L,e as n,o as i,f as c,g as e,w as l,i as t,l as _,L as y,t as V,Q,S as R,R as T,_ as j,q as H,x as g}from"./index-17000ae8.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_name_PcasCascader_lang-bb8b02e4.js";const K={key:1},O={key:1},P={key:1},v=G({__name:"advanced",setup(W){const o=I({name:"",sex:1,birthday:"",idcard:"",area:[],address:"",familyMember:[{isEdit:!1,name:"张三",mobile:"13111111111",relationship:"父亲"},{isEdit:!1,name:"李四",mobile:"13122222222",relationship:"母亲"}]}),x=L(()=>o.value.familyMember.every(f=>!f.isEdit));function h(){o.value.familyMember.push({isEdit:!0,name:"",mobile:"",relationship:""})}function U(f){o.value.familyMember.splice(f,1)}return(f,d)=>{const E=R,r=n("el-input"),u=n("el-form-item"),s=n("el-col"),C=n("el-date-picker"),w=n("el-radio-button"),M=n("el-radio-group"),z=J,$=n("el-row"),k=T,b=n("el-table-column"),p=n("el-button"),F=n("el-popconfirm"),B=n("el-table"),N=j,S=n("el-icon"),q=n("el-form"),A=D;return i(),c("div",null,[e(E,{title:"高级表单",content:"当一次性提交大量数据时，可使用高级表单。"}),e(q,{"label-position":"top","label-width":"80px"},{default:l(()=>[e(k,{title:"员工信息"},{default:l(()=>[e($,{gutter:20},{default:l(()=>[e(s,{md:8},{default:l(()=>[e(u,{label:"姓名"},{default:l(()=>[e(r,{modelValue:t(o).name,"onUpdate:modelValue":d[0]||(d[0]=a=>t(o).name=a),placeholder:"请输入真实姓名"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(u,{label:"生日"},{default:l(()=>[e(C,{modelValue:t(o).birthday,"onUpdate:modelValue":d[1]||(d[1]=a=>t(o).birthday=a),type:"date",placeholder:"请选择你的出生日期"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(u,{label:"性别"},{default:l(()=>[e(M,{modelValue:t(o).sex,"onUpdate:modelValue":d[2]||(d[2]=a=>t(o).sex=a)},{default:l(()=>[e(w,{label:"1"},{default:l(()=>[_(" 男 ")]),_:1}),e(w,{label:"0"},{default:l(()=>[_(" 女 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(u,{label:"身份证号"},{default:l(()=>[e(r,{modelValue:t(o).idcard,"onUpdate:modelValue":d[3]||(d[3]=a=>t(o).idcard=a),placeholder:"请输入18位身份证号"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(u,{label:"籍贯"},{default:l(()=>[e(z,{modelValue:t(o).area,"onUpdate:modelValue":d[4]||(d[4]=a=>t(o).area=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:8},{default:l(()=>[e(u,{label:"家庭住址"},{default:l(()=>[e(r,{modelValue:t(o).address,"onUpdate:modelValue":d[5]||(d[5]=a=>t(o).address=a),placeholder:"请输入家庭住址"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{title:"家庭成员"},{default:l(()=>[e(B,{data:t(o).familyMember,style:{width:"100%"}},{default:l(()=>[e(b,{label:"姓名"},{default:l(a=>[a.row.isEdit?(i(),y(r,{key:0,modelValue:a.row.name,"onUpdate:modelValue":m=>a.row.name=m,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(i(),c("span",K,V(a.row.name),1))]),_:1}),e(b,{label:"手机号"},{default:l(a=>[a.row.isEdit?(i(),y(r,{key:0,modelValue:a.row.mobile,"onUpdate:modelValue":m=>a.row.mobile=m,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(i(),c("span",O,V(a.row.mobile),1))]),_:1}),e(b,{label:"关系"},{default:l(a=>[a.row.isEdit?(i(),y(r,{key:0,modelValue:a.row.relationship,"onUpdate:modelValue":m=>a.row.relationship=m,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(i(),c("span",P,V(a.row.relationship),1))]),_:1}),e(b,{label:"操作",width:"200",align:"center"},{default:l(a=>[a.row.isEdit?(i(),y(p,{key:0,type:"primary",plain:"",size:"small",onClick:m=>a.row.isEdit=!1},{default:l(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):(i(),c(Q,{key:1},[e(p,{type:"primary",plain:"",size:"small",onClick:m=>a.row.isEdit=!0},{default:l(()=>[_(" 编辑 ")]),_:2},1032,["onClick"]),e(F,{title:"是否要删除此行？",style:{"margin-left":"10px"},onConfirm:m=>U(a.$index)},{reference:l(()=>[e(p,{type:"danger",plain:"",size:"small"},{default:l(()=>[_(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])],64))]),_:1})]),_:1},8,["data"]),e(p,{disabled:!t(x),style:{"margin-top":"20px",width:"100%"},onClick:h},{icon:l(()=>[e(S,null,{default:l(()=>[e(N,{name:"i-ep:plus"})]),_:1})]),default:l(()=>[_(" 新增成员 ")]),_:1},8,["disabled"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(p,{type:"primary",size:"large"},{default:l(()=>[_(" 提交 ")]),_:1})]),_:1})])}}});typeof g=="function"&&g(v);const ee=H(v,[["__scopeId","data-v-81baa813"]]);export{ee as default};
