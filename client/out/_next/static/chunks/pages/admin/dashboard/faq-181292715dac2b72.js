(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[302],{4414:function(e,a,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/faq",function(){return d(3235)}])},6476:function(e,a,d){"use strict";var s=d(5893),n=d(5920),r=d.n(n);let i=e=>{let{children:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:r().container,children:a})})};a.Z=i},2459:function(e,a,d){"use strict";var s=d(5893);d(7294);var n=d(9070),r=d.n(n);let i=e=>{let{children:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:r().content,children:a})})};a.Z=i},8966:function(e,a,d){"use strict";var s=d(5893);d(7294);var n=d(8089),r=d.n(n),i=d(1664),t=d.n(i),c=d(1649),l=d(6336),_=d(1163);let o=()=>{let e=(0,_.useRouter)(),a=(0,c.v9)(e=>e.user.login),d=(0,c.I0)(),n=()=>{d((0,l.ni)()),e.push("/")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("header",{className:r().header,children:[(0,s.jsx)("div",{className:r().header__logo,children:(0,s.jsx)(t(),{href:"/admin/dashboard/index",children:"Admin Panel"})}),(0,s.jsxs)("ul",{className:r().header__user,children:[(0,s.jsx)("li",{children:(0,s.jsx)("span",{children:a&&"Admin"})}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:r().header__logout,onClick:n,role:"button",tabIndex:0,children:"Log Out"})})]})]})})};a.Z=o},8520:function(e,a,d){"use strict";var s=d(5893);d(7294);var n=d(8848),r=d.n(n),i=d(1664),t=d.n(i),c=d(1163);let l=()=>{let e=(0,c.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("aside",{className:r().sidebar,children:[(0,s.jsxs)("div",{className:r().sidebar__block,children:[(0,s.jsx)("h2",{children:"Pages"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"/admin/dashboard/index"==e.asPath?r().active:"",children:(0,s.jsx)(t(),{href:"/admin/dashboard/index",children:"Main"})}),(0,s.jsx)("li",{className:"/admin/dashboard/about"==e.asPath?r().active:"",children:(0,s.jsx)(t(),{href:"/admin/dashboard/about",children:"About Doctor"})}),(0,s.jsx)("li",{className:"/admin/dashboard/faq"==e.asPath?r().active:"",children:(0,s.jsx)(t(),{href:"/admin/dashboard/faq",children:"FAQ"})})]})]}),(0,s.jsxs)("div",{className:r().sidebar__block,children:[(0,s.jsx)("h2",{children:"Others"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"/admin/dashboard/orders"==e.asPath?r().active:"",children:(0,s.jsx)(t(),{href:"/admin/dashboard/orders",children:"List of orders"})}),(0,s.jsx)("li",{className:"/admin/dashboard/slider"==e.asPath?r().active:"",children:(0,s.jsx)(t(),{href:"/admin/dashboard/slider",children:"Slider"})})]})]})]})})};a.Z=l},4865:function(e,a,d){"use strict";d.d(a,{b:function(){return n}});var s=d(6154);let n=s.Z.create({baseURL:"".concat("https://parkovka.in.ua","/")})},3235:function(e,a,d){"use strict";d.r(a),d.d(a,{default:function(){return b}});var s=d(5893),n=d(7294),r=d(9008),i=d.n(r),t=d(6387),c=d.n(t),l=d(8966),_=d(6476),o=d(8520),h=d(2459),u=d(1664),x=d.n(u),f=d(4865);function b(){let[e,a]=(0,n.useState)([]),d=async(e,a)=>{e.preventDefault(),await f.b.delete("/faq/".concat(a)),window.location.replace("/admin/dashboard/faq")};return(0,n.useEffect)(()=>{let e=async()=>{let e=await f.b.get("/faq/");0!==e.data.length&&a(e.data)};e()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"FaQ dashboard page"})}),(0,s.jsx)(l.Z,{}),(0,s.jsxs)(_.Z,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(h.Z,{children:(0,s.jsxs)("div",{className:c().faq,children:[(0,s.jsx)("ul",{children:e.map((e,a)=>(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{className:c().faq__index,children:a+1}),(0,s.jsx)("div",{className:c().faq__title,children:e.title}),(0,s.jsx)("div",{className:c().faq__edit,children:(0,s.jsx)(x(),{href:"/admin/dashboard/faq/".concat(e._id),children:"Edit"})}),(0,s.jsx)("div",{className:c().faq__delete,children:(0,s.jsx)("button",{onClick:a=>d(a,e._id),children:"Delete"})})]},a))}),(0,s.jsx)(x(),{className:c().faq__add,href:"/admin/dashboard/faq/add",children:"Add new"})]})})]})]})}},5920:function(e){e.exports={container:"DasboardContainer_container__M3kNQ"}},9070:function(e){e.exports={content:"DasboardContent_content__qI5TS"}},8089:function(e){e.exports={header:"DasboardHeader_header__vQtaa",header__logo:"DasboardHeader_header__logo__Dj7Ew",header__user:"DasboardHeader_header__user__hcW2_",header__logout:"DasboardHeader_header__logout__FgcBa"}},8848:function(e){e.exports={sidebar:"DasboardSidebar_sidebar__Ejo12",sidebar__block:"DasboardSidebar_sidebar__block__ectdD",active:"DasboardSidebar_active__AYk0X"}},6387:function(e){e.exports={faq:"Index_faq__fVPoK",faq__index:"Index_faq__index__dpHmG",faq__edit:"Index_faq__edit__L7emv",faq__delete:"Index_faq__delete__eSIcg",faq__row:"Index_faq__row__vpurp",faq__submitBtn:"Index_faq__submitBtn__4nGD3",faq__add:"Index_faq__add__PcAMQ"}}},function(e){e.O(0,[513,774,888,179],function(){return e(e.s=4414)}),_N_E=e.O()}]);