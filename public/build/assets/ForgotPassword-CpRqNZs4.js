import{W as n,j as e,Y as d}from"./app-DOPiEfNn.js";import{I as u}from"./InputError-3VdasNB-.js";import{P as c}from"./PrimaryButton-lpadxvoh.js";import{T as p}from"./TextInput-CDy53QzD.js";import{G as x}from"./GuestLayout-DuOnKfbt.js";import"./ApplicationLogo-DdptpOwo.js";function b({status:t}){const{data:a,setData:o,post:r,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(x,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(p,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(u,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(c,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{b as default};