import{r as d,j as e,b as D}from"./app-DuuXg8YI.js";import{l as R,D as S,S as T}from"./index.es-CWgqkL_3.js";import{P as k}from"./PrimaryButton-Cj4USaoF.js";import{T as A}from"./TextInput-XY1msuXz.js";function M(n){const[t,l]=d.useState({message:"",response:"",src:null,processing:!1,data:{title:"",category:"",content:"",file:""}}),[p,h]=d.useState(""),[m,x]=d.useState(""),c=d.useRef(null),j=a=>{a.preventDefault();let s;a.dataTransfer?s=a.dataTransfer.files:a.target&&(s=a.target.files);const r=new FileReader;r.onload=()=>{h(r.result)},r.readAsDataURL(s[0])};function w(a,s){const r=a.split(","),u=r[0].match(/:(.*?);/)[1],o=atob(r[1]);let i=o.length;const f=new Uint8Array(i);for(;i--;)f[i]=o.charCodeAt(i);return new File([f],s,{type:u})}const v=()=>{var a,s,r;typeof((a=c.current)==null?void 0:a.cropper)<"u"&&(x((s=c.current)==null?void 0:s.cropper.getCroppedCanvas().toDataURL()),l({...t,data:{...t.data,file:w((r=c.current)==null?void 0:r.cropper.getCroppedCanvas().toDataURL(),"cropped.png")}}))},g=a=>{l({...t,data:{...t.data,[a.target.name]:a.target.value}})},b=async a=>{a.preventDefault(),console.log(t);try{if(m&&t.data.title.length>0&&t.data.category.length>0&&t.data.content.length>0){l({...t,formError:!1,processing:!0});let s=new FormData;s.append("title",t.data.title),s.append("category",t.data.category),s.append("content",t.data.content),s.append("file",t.data.file);const r={headers:{"content-type":"multipart/form-data"}},o=await D.post("/thoughts/post",s,r);console.log(o),l({...t,response:o.data,error:!1,src:null,processing:!1,data:{title:"",category:"",content:"",file:""}}),window.scrollTo(0,0)}else l({...t,formError:!0,processing:!1})}catch(s){console.error(s.response.data),l({...t,response:s.response.data,error:!0,processing:!1}),window.scrollTo(0,0)}},{crop:E,croppedImageUrl:y,src:I}=t,{closeAdd:N,message:U}=n,C=()=>{N()};return console.log(y),console.log(n.cat),e.jsx("div",{className:"absolute overflow-y-scroll flex top-0 left-0 z-40 justify-center w-full min-h-full bg-dark-blue bg-opacity-50",children:e.jsxs("div",{className:"w-full md:w-11/12 min-h-full bg-white",children:[e.jsx("div",{onClick:C,className:"cursor-pointer close ml-auto",children:e.jsx("i",{className:"las la-times text-3xl"})}),e.jsx("div",{className:"text-center text-xl",children:"Post a writeup"}),!t.error&&t.response&&e.jsx("div",{className:"w-full text-center p-2 text-success-txt bg-[#88ff88]",children:t.response.message}),t.error&&e.jsx("div",{className:"w-full text-center p-2 bg-danger-bg text-danger-txt",children:t.response.message}),t.formError&&e.jsx("p",{className:"bg-danger-bg text-danger-txt",children:"Make sure you fill all fields."}),e.jsx("div",{className:"App p-5",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"picture w-full",children:[e.jsx("div",{className:"",children:e.jsx("input",{className:"",accept:"image/png, image/gif, image/jpg, image/jpeg",type:"file",onChange:j})}),e.jsxs("div",{className:" sm:flex flex-wrap",children:[e.jsxs("div",{className:"",children:[p&&e.jsx(R,{style:{height:400,width:"100%"},initialAspectRatio:16/9,src:p,ref:c,viewMode:1,guides:!0,minCropBoxHeight:10,minCropBoxWidth:10,background:!1,aspectRatio:16/9,responsive:!0,checkOrientation:!1}),p&&e.jsx("button",{className:"my-2 bg-silver p-2 rounded-lg border shadow border-[#aaa]",onClick:v,children:"Crop Image"})]}),e.jsx("div",{className:"px-4",children:m&&e.jsx("img",{alt:"Cropped Image",style:{width:400},src:m})})]})]}),e.jsx("div",{className:"form w-full sm:w-7/12",children:e.jsxs("form",{onSubmit:a=>{b(a)},children:[e.jsx("div",{className:"my-1",children:e.jsx(A,{id:"title",name:"title",autoComplete:"Title",value:t.data.title,onChange:g,className:" w-full",placeholder:"Post Title"})}),e.jsx("div",{className:"my-1",children:e.jsx(S,{id:"content",name:"content",value:t.data.content,onChange:a=>{g(a)},tagName:"p",className:"w-full h-84",rows:"10",placeholder:""})}),e.jsx("div",{className:"my-1",children:e.jsx(T,{id:"category",title:"Category",name:"category",options:n.cat&&n.cat.map(a=>a.category),className:"block w-full",autoComplete:"",onChange:g})}),e.jsx(k,{className:" bg-blue w-full flex text-center hover:bg-dark-blue",disabled:t.processing,children:e.jsx("p",{className:"text-center mx-auto",children:"Submit"})})]})})]})})]})})}export{M as default};