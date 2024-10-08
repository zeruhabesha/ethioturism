"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6],{4006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(5043),s=a(6213),n=a(1460),o=a(449),l=a(1273),i=a(4282),c=a(5284),d=a(2462),h=(a(8421),a(579));const x=()=>{const[e,t]=(0,r.useState)([]),[a,x]=(0,r.useState)({name:"",description:"",subcategories:[]}),[p,u]=(0,r.useState)(null),[m,g]=(0,r.useState)(!1),[b,j]=(0,r.useState)(!1),[y,N]=(0,r.useState)(null),A=localStorage.getItem("token");(0,r.useEffect)((()=>{v()}),[]);const v=async()=>{try{const e=await s.A.get("https://zgroupfrontend.vercel.app/api/categories",{headers:{Authorization:`Bearer ${A}`}});t(e.data)}catch(e){console.error("Error fetching categories",e)}},f=e=>{const{name:t,value:r}=e.target;"subcategories"!==t&&x({...a,[t]:r})};return(0,h.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,h.jsx)(n.A,{}),(0,h.jsxs)("div",{className:"flex flex-grow",children:[(0,h.jsx)(l.A,{}),(0,h.jsxs)("div",{className:"container mx-auto p-4",children:[(0,h.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Category Management"}),(0,h.jsx)(i.A,{onClick:()=>g(!0),className:"mb-4",children:"Create New Category"}),(0,h.jsxs)("table",{className:"min-w-full bg-white border border-gray-300",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,h.jsx)("th",{className:"py-2 px-4 text-left",children:"Name"}),(0,h.jsx)("th",{className:"py-2 px-4 text-left",children:"Description"}),(0,h.jsx)("th",{className:"py-2 px-4 text-left",children:"Subcategories"}),(0,h.jsx)("th",{className:"py-2 px-4 text-left",children:"Actions"})]})}),(0,h.jsx)("tbody",{children:e&&e.length>0?e.map((e=>(0,h.jsxs)("tr",{className:"border-b",children:[(0,h.jsx)("td",{className:"py-2 px-4",children:e.name||"N/A"}),(0,h.jsx)("td",{className:"py-2 px-4",children:e.description||"N/A"}),(0,h.jsx)("td",{className:"py-2 px-4",children:e.subcategories&&e.subcategories.length>0?e.subcategories.join(", "):"N/A"}),(0,h.jsxs)("td",{className:"py-2 px-4 flex space-x-2",children:[(0,h.jsx)(i.A,{variant:"",className:"btn btn-primary no-underline",onClick:()=>(e=>{u(e),x(e),g(!0)})(e),children:"Edit"}),(0,h.jsx)(i.A,{variant:"",className:"btn btn-danger no-underline",onClick:()=>(e=>{N(e),j(!0)})(e),children:"Delete"})]})]},e._id))):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:"4",className:"py-2 px-4 text-center",children:"No categories available"})})})]})]})]}),(0,h.jsx)(o.A,{}),(0,h.jsxs)(c.A,{show:m,onHide:()=>g(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:p?"Edit Category":"Create Category"})}),(0,h.jsx)(c.A.Body,{children:(0,h.jsxs)(d.A,{onSubmit:p?async r=>{r.preventDefault();try{const r=await s.A.put(`https://zgroupfrontend.vercel.app/api/categories/${p._id}`,a,{headers:{Authorization:`Bearer ${A}`}}),n=e.map((e=>e._id===p._id?r.data.updatedCategory:e));t(n),g(!1),u(null),x({name:"",description:"",subcategories:[]})}catch(n){console.error("Error updating category",n)}}:async r=>{r.preventDefault();try{const r=await s.A.post("https://zgroupfrontend.vercel.app/api/categories",a,{headers:{Authorization:`Bearer ${A}`}});t([...e,r.data.newCategory]),g(!1),x({name:"",description:"",subcategories:[]})}catch(n){console.error("Error creating category",n)}},children:[(0,h.jsxs)(d.A.Group,{controlId:"formName",children:[(0,h.jsx)(d.A.Label,{children:"Name"}),(0,h.jsx)(d.A.Control,{type:"text",name:"name",value:a.name||"",onChange:f,placeholder:"Enter category name",required:!0})]}),(0,h.jsxs)(d.A.Group,{controlId:"formDescription",className:"mt-3",children:[(0,h.jsx)(d.A.Label,{children:"Description"}),(0,h.jsx)(d.A.Control,{type:"text",name:"description",value:a.description||"",onChange:f,placeholder:"Enter category description"})]}),(0,h.jsxs)(d.A.Group,{controlId:"formSubcategories",className:"mt-3",children:[(0,h.jsx)(d.A.Label,{children:"Subcategories"}),a.subcategories.map(((e,t)=>(0,h.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,h.jsx)(d.A.Control,{type:"text",value:e,onChange:e=>((e,t)=>{const r=a.subcategories.map(((a,r)=>r===e?t:a));x({...a,subcategories:r})})(t,e.target.value),placeholder:`Subcategory ${t+1}`}),(0,h.jsx)(i.A,{variant:"danger",onClick:()=>(e=>{const t=a.subcategories.filter(((t,a)=>a!==e));x({...a,subcategories:t})})(t),className:"ml-2",children:"Remove"})]},t))),(0,h.jsx)(i.A,{variant:"secondary",onClick:()=>{x({...a,subcategories:[...a.subcategories,""]})},className:"mt-2",children:"Add Subcategory"})]}),(0,h.jsx)(i.A,{variant:"primary",type:"submit",className:"mt-4",children:p?"Update Category":"Create Category"})]})})]}),(0,h.jsxs)(c.A,{show:b,onHide:()=>j(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:"Confirm Delete"})}),(0,h.jsx)(c.A.Body,{children:"Are you sure you want to delete this category?"}),(0,h.jsxs)(c.A.Footer,{children:[(0,h.jsx)(i.A,{variant:"secondary",onClick:()=>j(!1),children:"Cancel"}),(0,h.jsx)(i.A,{variant:"danger",onClick:async()=>{try{await s.A.delete(`https://zgroupfrontend.vercel.app/api/categories/${y._id}`,{headers:{Authorization:`Bearer ${A}`}}),t(e.filter((e=>e._id!==y._id))),j(!1),N(null)}catch(a){console.error("Error deleting category",a)}},children:"Delete"})]})]})]})}},449:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var r=a(579);const s=()=>(0,r.jsx)("footer",{className:"bg-blue-600 p-4 text-white text-center",children:(0,r.jsx)("p",{children:"\xa9 2024 Your Company. All rights reserved."})})},1460:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var r=a(579);const s=()=>(0,r.jsx)("nav",{className:"bg-blue-600 p-4 text-white",children:(0,r.jsx)("h1",{className:"text-lg font-bold",children:"Admin Dashboard"})})},1273:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(5043),s=a(5475),n=a(3825),o=a(579);const l=()=>{const[e,t]=(0,r.useState)(!1),a=()=>{t(!e)};return(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("button",{className:"lg:hidden text-black p-4 focus:outline-none",onClick:a,children:e?(0,o.jsx)(n.zhF,{size:24}):(0,o.jsx)(n.mu4,{size:24})}),(0,o.jsx)("div",{className:`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${e?"translate-x-0":"-translate-x-full"} lg:translate-x-0 lg:relative lg:w-64 lg:transform-none`,children:(0,o.jsxs)("ul",{className:"space-y-6 p-4",children:[" ",(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"/dashboard",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Dashboard"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"/dashboard/admin",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Admin"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"/dashboard/category",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Categories"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"/dashboard/company",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Companies"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"/dashboard/promotion",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Promotion"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"#",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Payment"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.N_,{to:"#",className:"block px-4 py-2 no-underline text-white hover:bg-black transition-colors duration-300",onClick:a,children:"Report"})})]})}),e&&(0,o.jsx)("div",{className:"fixed inset-0 bg-black opacity-50 z-30 lg:hidden",onClick:a})]})}}}]);
//# sourceMappingURL=6.2e521968.chunk.js.map