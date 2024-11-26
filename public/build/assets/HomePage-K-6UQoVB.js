import{j as e,r as m,R as g,Y as j,a as d}from"./app-DaSSbKRA.js";import{S as w}from"./slick-theme-D6TLqQWZ.js";import{N,F as S}from"./NavBar-CN5XR_bi.js";import"./ApplicationLogo-NGpb7fRg.js";function k({slides:r}){const n={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return e.jsxs("div",{className:"w-10/12 m-auto",children:[e.jsx("h3",{className:"text-white text-center text-3xl font-bold",children:"Reviews from Clients"}),e.jsx("div",{className:"mt-20",children:e.jsx(w,{...n,children:r.map(t=>e.jsxs("div",{className:"text-[#121d30] mr-5 bg-white rounded-lg",children:[e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx("div",{className:"rounded-full w-24 h-24 overflow-hidden",children:e.jsx("img",{src:t.img,alt:""})})}),e.jsxs("div",{className:"p-5 text-center items-center justify-center gap-4 flex flex-col",children:[e.jsx("p",{className:"font-bold",children:t.name}),e.jsx("p",{className:"text-sm",children:t.review})]})]}))})})]})}function y(){return y=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},y.apply(this,arguments)}var C={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,n){},onStringTyped:function(r,n){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,n){},onTypingResumed:function(r,n){},onReset:function(r){},onStop:function(r,n){},onStart:function(r,n){},onDestroy:function(r){}},T=new(function(){function r(){}var n=r.prototype;return n.load=function(t,s,i){if(t.el=typeof i=="string"?document.querySelector(i):i,t.options=y({},C,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(h){return h.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),o=a.length;if(o)for(var c=0;c<o;c+=1)t.strings.push(a[c].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var i=document.createElement("style");i.setAttribute(s,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var i=document.createElement("style");i.setAttribute(s,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},r}()),b=new(function(){function r(){}var n=r.prototype;return n.typeHtmlChars=function(t,s,i){if(i.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a==="<"||a==="&"){var o;for(o=a==="<"?">":";";t.substring(s+1).charAt(0)!==o&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,i){if(i.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a===">"||a===";"){var o;for(o=a===">"?"<":"&";t.substring(s-1).charAt(0)!==o&&!(--s<0););s--}return s},r}()),P=function(){function r(t,s){T.load(this,s,t),this.begin()}var n=r.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=b.typeHtmlChars(t,s,i);var c=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var h=1;h+=(u=/\d+/.exec(u)[0]).length,c=parseInt(u),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),t=t.substring(0,s)+t.substring(s+h),i.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+o).charAt(0)!=="`"&&(o++,!(s+o>t.length)););var f=t.substring(0,s),p=t.substring(f.length+1,s+o),l=t.substring(s+o+1);t=f+p+l,o--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),s>=t.length?i.doneTyping(t,s):i.keepTyping(t,s,o),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},c)},a):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,i){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,s+=i);this.replaceText(a),this.typewrite(t,s)},n.doneTyping=function(t,s){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=b.backSpaceHtmlChars(t,s,i);var o=t.substring(0,s);if(i.replaceText(o),i.smartBackspace){var c=i.strings[i.arrayPos+1];i.stopNum=c&&o===c.substring(0,s)?s:0}s>i.stopNum?(s--,i.backspace(t,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],s))},a)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,i){this.pause.typewrite=i,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},r}();const E=m.memo(({style:r,className:n,typedRef:t,parseRef:s,stopped:i,children:a,startWhenVisible:o,...c})=>{const u=m.useRef(null),h=m.useMemo(()=>{var p;return[...Object.values(c).filter(l=>typeof l=="boolean"||typeof l=="number"||typeof l=="string"),(p=c.strings)==null?void 0:p.join(",")]},[c]);m.useEffect(()=>{const p=s&&s(u)||u.current,l=new P(p,{...c});if((i||o)&&(l==null||l.stop()),o){const x=new IntersectionObserver(([v])=>{v.isIntersecting&&(l==null||l.start(),x.disconnect())});x.observe(p)}return t&&l&&t(l),()=>{l.destroy()}},h);const f=a?g.cloneElement(a,{ref:u}):g.createElement("span",{style:r,ref:u});return g.createElement("span",{style:r,className:n,"data-testid":"react-typed"},f)});function L(){const[r,n]=m.useState([{img:"/img/2.jpg",name:"John Doe",review:"This is a test review. Sinmi is a very good project manager, he delivers in record time!"},{img:"/img/5856.jpg",name:"John Doe",review:"This is a test review. Sinmi is a very good project manager, he delivers in record time!"},{img:"/img/2.jpg",name:"John Doe",review:"This is a test review. Sinmi is a very good project manager, he delivers in record time!"},{img:"/img/5856.jpg",name:"John Doe",review:"This is a test review. Sinmi is a very good project manager, he delivers in record time!"},{img:"/img/2.jpg",name:"John Doe",review:"This is a test review. Sinmi is a very good project manager, he delivers in record time!"}]);return e.jsxs("div",{children:[e.jsxs(j,{children:[e.jsx("title",{children:"Home Page"}),e.jsx("meta",{name:"description",content:"Home Page, Blog - Sinmi Akinsanmi's website Portfolio page."}),e.jsx("meta",{name:"keywords",content:"Sinmi Akinsanmi, Home Page project management, operations management, product strategy and management, business management, business development, agile software development."})]}),e.jsx(N,{}),e.jsx("div",{className:"relative bg-[url('/img/road.jpg')] bg-center bg-cover bg-fixed bg-no-repeat h-screen",children:e.jsxs("div",{className:"z-5 flex flex-col items-center justify-center absolute left-0 top-0 bg-[#575c25] bg-opacity-60 w-full h-full",children:[e.jsx("h2",{className:"text-white uppercase font-bold text-5xl mt-60 mb-20 text-center",children:e.jsx(E,{strings:["Expert in project management","Expert in operations management","Expert in product strategy and management","Expert in business management","Expert in business development","Expert in agile software development"],typeSpeed:50,backSpeed:50,loop:!0})}),e.jsx("h3",{className:"p-2 text-white text-xl md:text-2xl w-full md:w-[700px] text-center",children:"As an avid and rapid learner, Sinmi has been able to excel in multifaceted roles in Fintech, Energy, Telecommunications, Power and Retail."}),e.jsxs("div",{className:"flex justify-between uppercase font-bold p-5 w-full sm:w-[500px]",children:[e.jsx(d,{href:"/book",children:e.jsx("div",{className:"px-4 py-2 rounded-full bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white cursor-pointer",children:"Book Sinmi"})}),e.jsx("div",{className:"px-4 py-2 rounded-full bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white cursor-pointer",children:"Join the journey"})]})]})}),e.jsxs("div",{className:"p-10 flex h-64 flex-col justify-center items-center",children:[e.jsx("h2",{className:"text-4xl font-semibold text-center capitalize w-full md:w-[500px]",children:"Welcome to the Official Site of Sinmi Akinsanmi"}),e.jsx("p",{className:"my-5",children:"Know more about Sinmi Akinsanmi"})]}),e.jsxs("div",{className:"bg-[#121d30] md:flex md:flex-row-reverse",children:[e.jsx("div",{className:"w-full flex justify-center items-center md:w-5/12 p-2 sm:p-0",children:e.jsx("img",{src:"/img/portrait.jpeg",className:"",alt:"",srcset:""})}),e.jsxs("div",{className:"text-white flex flex-col justify-center w-full md:w-7/12 p-2 sm:p-10 ",children:[e.jsx("h2",{className:"text-5xl uppercase font-bold",children:"Meet Sinmi"}),e.jsxs("div",{className:"text-lg space-y-3 my-3",children:[e.jsx("p",{children:"I embrace opportunities - as I approach life with faith, confidence and optimism.  I enjoy weighing ideas, analysing systems and businesses to produce the best of decisions."}),e.jsx("p",{children:"Most people go through life worried about the future. My aim is to use this pages to inspire, encourage and spread hope."}),e.jsx("p",{children:"I write about careers, leadership, life, books I read and products. I also speak publicly about these topics. The goal is not to just to motivate but hopefully I can inspire you to face life head on."}),e.jsx("p",{children:"You can follow me on twitter, where I also share my thoughts about life, tech, politics, economy and relationships."}),e.jsx("p",{children:"I am a full-time dad to two wonderful kids and I am married to Damilola."})]}),e.jsxs("div",{className:"font-semibold text-lg my-3",children:[e.jsx("p",{className:"italic",children:"Execution is the name of the game, No challenge is insurmountable!!!! I'm very positive about life,  tech, innovation and great products."}),e.jsx("p",{children:"- Sinmi Akinsanmi"})]}),e.jsxs("div",{className:"font-semibold",children:[e.jsx("i",{className:"font-bold las la-map-marker"})," Lagos, Africa."]})]})]}),e.jsx("div",{className:"py-32 h-98",children:e.jsxs("div",{className:"sm:flex ",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold",children:"About"}),e.jsx(d,{className:"w-full",href:"/about",children:e.jsxs("div",{className:"relative w-full group",children:[e.jsx("img",{src:"/img/about.jpg",alt:""}),e.jsx("div",{className:"transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50",children:"Find out more about Sinmi"})]})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold",children:"Thoughts"}),e.jsx(d,{className:"w-full",href:"/thoughts",children:e.jsxs("div",{className:"relative w-full group",children:[e.jsx("img",{src:"/img/thoughts.jpg",alt:""}),e.jsx("div",{className:"transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50",children:"Sinmi's thoughts"})]})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold",children:"Projects"}),e.jsx(d,{className:"w-full",href:"/projects",children:e.jsxs("div",{className:"relative w-full group",children:[e.jsx("img",{src:"/img/project.jpg",alt:""}),e.jsx("div",{className:"transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50",children:"Sinmi's Projects"})]})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold",children:"Contact"}),e.jsx(d,{className:"w-full",href:"/contact",children:e.jsxs("div",{className:"relative w-full group",children:[e.jsx("img",{src:"/img/contact.jpg",alt:""}),e.jsx("div",{className:"transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50",children:"Contact Sinmi"})]})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold",children:"Booking"}),e.jsx(d,{className:"w-full",href:"/book",children:e.jsxs("div",{className:"relative w-full group",children:[e.jsx("img",{src:"/img/book.jpg",alt:""}),e.jsx("div",{className:"transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50",children:"Book Sinmi"})]})})]})]})}),e.jsx("div",{className:"bg-[#121d30] bg-opacity-50 py-10 p-5 m-auto",children:e.jsx(k,{slides:r})}),e.jsx(S,{})]})}export{L as default};