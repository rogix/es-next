"use strict";(self.webpackChunkcode_blog=self.webpackChunkcode_blog||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Array Includes()",l={unversionedId:"es-2016/array-includes",id:"es-2016/array-includes",title:"Array Includes()",description:"The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",source:"@site/docs/es-2016/array-includes.mdx",sourceDirName:"es-2016",slug:"/es-2016/array-includes",permalink:"/es-next/es-2016/array-includes",draft:!1,editUrl:"https://github.com/rogix/es-next/blob/main/docs/es-2016/array-includes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ES2016 (ES7)",permalink:"/es-next/category/es2016-es7"},next:{title:"Exponencial Operator",permalink:"/es-next/es-2016/exponential-operator"}},s={},c=[{value:"indexOf()",id:"indexof",level:2},{value:"includes()",id:"includes",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-includes"},"Array Includes()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.")),(0,a.kt)("h2",{id:"indexof"},"indexOf()"),(0,a.kt)("p",null,"Let's say we have the following array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1, 2, 3, 4, 5];\n")),(0,a.kt)("p",null,"How to check if the value 3 is included in the array?"),(0,a.kt)("p",null,"Before the ",(0,a.kt)("inlineCode",{parentName:"p"},"includes()")," method was introduced, we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1, 2, 3, 4, 5];\n\narray.indexOf(3); // 2\n\narra.indexOf(6); // -1\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," method returns the index of the first occurrence of the specified value in the array, or -1 if the value is not present."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the above example, ",(0,a.kt)("inlineCode",{parentName:"p"},"array.indexOf(3)")," returns 2, because 3 is the second element in the array.")),(0,a.kt)("p",null,"This way if we want to check if the value 3 is included in the array, we can use the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const array = [1, 2, 3, 4, 5];\n\nif (array.indexOf(3) !== -1) {\n  console.log("The value 3 is included in the array");\n}\n')),(0,a.kt)("p",null,"But, ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," is not the best way to check this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The name of the method is not clear."),(0,a.kt)("li",{parentName:"ol"},"It doesn't work with ",(0,a.kt)("inlineCode",{parentName:"li"},"NaN")," values, because ",(0,a.kt)("inlineCode",{parentName:"li"},"indexOf()")," use the ",(0,a.kt)("inlineCode",{parentName:"li"},"strict equality (===)")," to compare the elements.")),(0,a.kt)("p",null,"So, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1, 2, 3, 4, 5, NaN];\n\narray.indexOf(NaN); // -1\n")),(0,a.kt)("p",null,"It return -1 because ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),"."),(0,a.kt)("h2",{id:"includes"},"includes()"),(0,a.kt)("p",null,"To fix this, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"includes()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1, 2, 3, 4, 5];\n\narray.includes(3); // true\n\narray.includes(6); // false\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"includes()")," method uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"sameValueZero")," algorithm to compare values.")))}p.isMDXComponent=!0}}]);