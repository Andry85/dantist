(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{8825:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/orders",function(){return a(1535)}])},6476:function(e,r,a){"use strict";var d=a(5893),s=a(5920),n=a.n(s);let t=e=>{let{children:r}=e;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:n().container,children:r})})};r.Z=t},2459:function(e,r,a){"use strict";var d=a(5893);a(7294);var s=a(9070),n=a.n(s);let t=e=>{let{children:r}=e;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:n().content,children:r})})};r.Z=t},8966:function(e,r,a){"use strict";var d=a(5893);a(7294);var s=a(8089),n=a.n(s),t=a(1664),i=a.n(t),c=a(1649),o=a(6336),l=a(1163);let _=()=>{let e=(0,l.useRouter)(),r=(0,c.v9)(e=>e.user.login),a=(0,c.I0)(),s=()=>{a((0,o.ni)()),e.push("/")};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("header",{className:n().header,children:[(0,d.jsx)("div",{className:n().header__logo,children:(0,d.jsx)(i(),{href:"/admin/dashboard/index",children:"Admin Panel"})}),(0,d.jsxs)("ul",{className:n().header__user,children:[(0,d.jsx)("li",{children:(0,d.jsx)("span",{children:r&&"Admin"})}),(0,d.jsx)("li",{children:(0,d.jsx)("span",{className:n().header__logout,onClick:s,role:"button",tabIndex:0,children:"Log Out"})})]})]})})};r.Z=_},8520:function(e,r,a){"use strict";var d=a(5893);a(7294);var s=a(8848),n=a.n(s),t=a(1664),i=a.n(t),c=a(1163);let o=()=>{let e=(0,c.useRouter)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("aside",{className:n().sidebar,children:[(0,d.jsxs)("div",{className:n().sidebar__block,children:[(0,d.jsx)("h2",{children:"Pages"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"/admin/dashboard/index"==e.asPath?n().active:"",children:(0,d.jsx)(i(),{href:"/admin/dashboard/index",children:"Main"})}),(0,d.jsx)("li",{className:"/admin/dashboard/about"==e.asPath?n().active:"",children:(0,d.jsx)(i(),{href:"/admin/dashboard/about",children:"About Doctor"})}),(0,d.jsx)("li",{className:"/admin/dashboard/faq"==e.asPath?n().active:"",children:(0,d.jsx)(i(),{href:"/admin/dashboard/faq",children:"FAQ"})})]})]}),(0,d.jsxs)("div",{className:n().sidebar__block,children:[(0,d.jsx)("h2",{children:"Others"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"/admin/dashboard/orders"==e.asPath?n().active:"",children:(0,d.jsx)(i(),{href:"/admin/dashboard/orders",children:"List of orders"})}),(0,d.jsx)("li",{className:"/admin/dashboard/slider"==e.asPath?n().active:"",children:(0,d.jsx)(i(),{href:"/admin/dashboard/slider",children:"Slider"})})]})]})]})})};r.Z=o},4865:function(e,r,a){"use strict";a.d(r,{b:function(){return s}});var d=a(6154);let s=d.Z.create({baseURL:"".concat("https://parkovka.in.ua","/")})},1535:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return b}});var d=a(5893),s=a(7294),n=a(9008),t=a.n(n),i=a(6621),c=a.n(i),o=a(8966),l=a(6476),_=a(8520),h=a(2459),u=a(1664),x=a.n(u),j=a(4865);function b(){let[e,r]=(0,s.useState)([]),a=async(e,r)=>{e.preventDefault(),await j.b.delete("/order/".concat(r)),window.location.replace("/admin/dashboard/orders")};(0,s.useEffect)(()=>{let e=async()=>{let e=await j.b.get("/order/");0!==e.data.length&&r(e.data)};e()},[]);let n=e=>{switch(e){case"open":return(0,d.jsx)("div",{style:{color:"#F7C04A"},children:e});case"closed":return(0,d.jsx)("div",{style:{color:"#D21312"},children:e});case"pending":return(0,d.jsx)("div",{style:{color:"#FA9884"},children:e});case"accepted":return(0,d.jsx)("div",{style:{color:"#539165"},children:e});default:return!1}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t(),{children:(0,d.jsx)("title",{children:"Orders dashboard page"})}),(0,d.jsx)(o.Z,{}),(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(_.Z,{}),(0,d.jsx)(h.Z,{children:(0,d.jsxs)("div",{className:c().orders,children:[(0,d.jsx)("ul",{children:e.map((e,r)=>(0,d.jsxs)("li",{children:[(0,d.jsx)("div",{className:c().orders__status,children:n(e.status)}),(0,d.jsx)("div",{className:c().orders__name,children:e.name}),(0,d.jsx)("div",{className:c().orders__phone,children:e.phone}),(0,d.jsxs)("div",{className:c().orders__date,children:[String(new Date(e.date).getDate()).padStart(2,"0"),"/",String(new Date(e.date).getMonth()+1).padStart(2,"0"),"/",new Date(e.date).getFullYear()]}),(0,d.jsx)("div",{className:c().orders__edit,children:(0,d.jsx)(x(),{href:"/admin/dashboard/orders/".concat(e._id),children:"Edit"})}),(0,d.jsx)("div",{className:c().orders__delete,children:(0,d.jsx)("button",{onClick:r=>a(r,e._id),children:"Delete"})})]},r))}),(0,d.jsx)(x(),{className:c().orders__add,href:"/admin/dashboard/orders/add",children:"Add new"})]})})]})]})}},5920:function(e){e.exports={container:"DasboardContainer_container__M3kNQ"}},9070:function(e){e.exports={content:"DasboardContent_content__qI5TS"}},8089:function(e){e.exports={header:"DasboardHeader_header__vQtaa",header__logo:"DasboardHeader_header__logo__Dj7Ew",header__user:"DasboardHeader_header__user__hcW2_",header__logout:"DasboardHeader_header__logout__FgcBa"}},8848:function(e){e.exports={sidebar:"DasboardSidebar_sidebar__Ejo12",sidebar__block:"DasboardSidebar_sidebar__block__ectdD",active:"DasboardSidebar_active__AYk0X"}},6621:function(e){e.exports={orders:"Index_orders__5wYnU",orders__status:"Index_orders__status__Sh4ZA",orders__name:"Index_orders__name__jjUE_",orders__edit:"Index_orders__edit__4FtIj",orders__delete:"Index_orders__delete__pMWrq",orders__row:"Index_orders__row__eSLmu",orders__submitBtn:"Index_orders__submitBtn__4zG6I",orders__add:"Index_orders__add__m4Dqp"}}},function(e){e.O(0,[513,774,888,179],function(){return e(e.s=8825)}),_N_E=e.O()}]);