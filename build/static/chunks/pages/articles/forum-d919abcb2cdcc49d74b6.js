_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"1ovI":function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),a=n("Ol7k"),i=n("so/r"),o=n("vOnD"),s=n("w9p+"),l=n("ODXe"),d=n("5rEg"),j=n("2/Rp"),u=n("YFqc"),p=n.n(u),m=n("3zrx"),b=n("nOHt"),x=n.n(b),h=o.b.div.withConfig({displayName:"SearchContentForm__SearchContentFormWrapper",componentId:"sc-9frwln-0"})(["margin:30px auto;width:900px;display:flex;justify-content:flex-end;.write-btn{background:#fff;color:#313355;border:1px solid #313355;}.search-form{width:400px;margin-right:10px;.ant-input-affix-wrapper{&:hover{border:1px solid #ddd;}}.ant-input-affix-wrapper-focused{border-color:#fff;box-shadow:none;border:1px solid #ddd;}.ant-input-search-button{background:#313355;color:#fff;border:1px solid #313355;}}@media (max-width:900px){width:100%;}"]),f=Object(b.withRouter)((function(e){var t=e.contentType,n=e.router,a=Object(m.a)(""),i=Object(l.a)(a,2),o=i[0],s=i[1],u=Object(c.useCallback)((function(e){""===e?x.a.push("".concat(n.route)):x.a.push("".concat(n.route,"/?term=").concat(e))}),[n.route,o]);return Object(r.jsxs)(h,{children:[Object(r.jsx)(d.a.Search,{className:"search-form",placeholder:"\uac80\uc0c9",allowClear:!0,enterButton:!0,onChange:s,onSearch:u}),Object(r.jsx)(p.a,{href:"/articles/".concat(t,"/write"),children:Object(r.jsx)("a",{children:Object(r.jsx)(j.a,{type:"primary",className:"write-btn",children:"\uae00\uc4f0\uae30"})})})]})})),O=a.a.Content,g=Object(o.b)(O).withConfig({displayName:"ArticleLayout__ContentWrapper",componentId:"r3cj0j-0"})(["width:1300px;margin:0 auto;margin-top:65px;@media (max-width:1368px){width:100%;}@media (max-width:950px){margin-top:125px;}"]),w=o.b.div.withConfig({displayName:"ArticleLayout__ArticleWrapper",componentId:"r3cj0j-1"})(["margin:0 auto;width:900px;@media (max-width:900px){width:100%;}"]);t.a=function(e){var t=e.children,n=e.contentType;return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(i.a,{}),Object(r.jsxs)(g,{children:[Object(r.jsx)(f,{contentType:n}),"forum"!==n&&Object(r.jsx)(s.a,{}),Object(r.jsx)(w,{children:t})]})]})}},"3zrx":function(e,t,n){"use strict";var r=n("q1tI");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useState)(e),n=t[0],c=t[1],a=Object(r.useCallback)((function(e){c(e.target.value)}),[]);return[n,a]}},cxS1:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return g}));var r=n("nKUr"),c=n("q1tI"),a=n("1ovI"),i=n("/MKj"),o=n("p+NB"),s=n("g0zk"),l=n("2fM7"),d=n("9yH6"),j=n("W9HT"),u=n("vOnD"),p=n("nOHt"),m=n.n(p),b=n("8Kt/"),x=n.n(b),h=u.b.div.withConfig({displayName:"forum__SpinWrapper",componentId:"sc-11m321c-0"})(["text-align:center;margin:100px 0;"]),f=u.b.div.withConfig({displayName:"forum__ForumFilterWrapper",componentId:"sc-11m321c-1"})(["margin-bottom:10px;.ant-radio-button-wrapper-checked{color:#888;text-decoration:underline;&:hover{color:#888;}}.ant-radio-button-wrapper{transition:none;&::before{display:none;}&:hover{text-decoration:underline;}background:transparent;color:#888;border:none;font-size:12px;.ant-radio-button{}.ant-radio-button-checked{display:none;}}"]),O=0,g=!0;t.default=Object(p.withRouter)((function(e){var t=e.router,n=Object(c.useState)("latest"),u=n[0],p=n[1],b=Object(c.useState)("\uc804\uccb4"),g=b[0],w=b[1],v=t.query.term,y=Object(c.useCallback)((function(e){w(e),v?m.a.push("/articles/forum?term=".concat(v)):m.a.push("/articles/forum")}),[t]),k=Object(c.useCallback)((function(e){p(e.target.value)}),[]),C=Object(c.useCallback)((function(e){v?m.a.push("/articles/forum?term=".concat(v)):m.a.push("/articles/forum")}),[t]),N=Object(i.c)(),_=Object(i.d)((function(e){return e.post})),z=_.forumPosts,E=_.loadPostsLoading,I=Object(i.d)((function(e){return e.post})).temporalPostsLength,S=function(){var e=document.documentElement.scrollHeight;document.documentElement.scrollTop+document.documentElement.clientHeight>=e&&!E&&(I>=10&&N(Object(o.Y)({type:u,skip:O,term:t.query.term,field:g})),O+=10)};return Object(c.useEffect)((function(){return N(Object(o.Y)({type:u,term:t.query.term,skip:O,field:g})),O+=10,function(){O=0,N(Object(o.V)())}}),[t]),Object(c.useEffect)((function(){return window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[I]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(x.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:"\ud3ec\ub7fc"})]}),Object(r.jsxs)(a.a,{contentType:"forum",children:[Object(r.jsxs)(f,{children:[Object(r.jsxs)(l.a,{defaultValue:"\uc804\uccb4",onChange:y,children:[Object(r.jsx)(l.a.Option,{value:"\uc804\uccb4",children:"\uc804\uccb4"}),Object(r.jsx)(l.a.Option,{value:"\uc790\uc720",children:"\uc790\uc720"}),Object(r.jsx)(l.a.Option,{value:"QnA",children:"QnA"})]}),Object(r.jsxs)(d.a.Group,{onChange:k,defaultValue:"latest",children:[Object(r.jsx)(d.a.Button,{value:"latest",onClick:C,children:"\ucd5c\uc2e0\uc21c"}),Object(r.jsx)(d.a.Button,{value:"likes",onClick:C,children:"\ucd94\ucc9c\uc21c"}),Object(r.jsx)(d.a.Button,{value:"comments",onClick:C,children:"\ub313\uae00\uc21c"}),Object(r.jsx)(d.a.Button,{value:"scraps",onClick:C,children:"\uc2a4\ud06c\ub7a9\uc21c"}),Object(r.jsx)(d.a.Button,{value:"views",onClick:C,children:"\uc870\ud68c\uc21c"})]})]}),Object(r.jsx)(s.a,{data:z,type:"forum"}),E&&Object(r.jsx)(h,{children:Object(r.jsx)(j.a,{tip:"\ubd88\ub7ec\uc624\ub294\uc911..."})})]})]})}))},g0zk:function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),a=n.n(c),i=n("VXEj"),o=n("pVnL"),s=n.n(o),l=n("lSNA"),d=n.n(l),j=n("J4zp"),u=n.n(j),p=n("TSYQ"),m=n.n(p),b=n("Zm9Q"),x=n("H84U");function h(e){var t=e.className,n=e.direction,r=e.index,a=e.marginDirection,i=e.children,o=e.split,l=e.wrap,j=c.useContext(O),u=j.horizontalSize,p=j.verticalSize,m=j.latestIndex,b={};return"vertical"===n?r<m&&(b={marginBottom:u/(o?2:1)}):b=s()(s()({},r<m&&d()({},a,u/(o?2:1))),l&&{paddingBottom:p}),null===i||void 0===i?null:c.createElement(c.Fragment,null,c.createElement("div",{className:t,style:b},i),r<m&&o&&c.createElement("span",{className:"".concat(t,"-split"),style:b},o))}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},O=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),g={small:8,middle:16,large:24};var w=function(e){var t,n=c.useContext(x.b),r=n.getPrefixCls,a=n.space,i=n.direction,o=e.size,l=void 0===o?(null===a||void 0===a?void 0:a.size)||"small":o,j=e.align,p=e.className,w=e.children,v=e.direction,y=void 0===v?"horizontal":v,k=e.prefixCls,C=e.split,N=e.style,_=e.wrap,z=void 0!==_&&_,E=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),I=c.useMemo((function(){return(Array.isArray(l)?l:[l,l]).map((function(e){return function(e){return"string"===typeof e?g[e]:e||0}(e)}))}),[l]),S=u()(I,2),A=S[0],B=S[1],D=Object(b.a)(w,{keepEmpty:!0});if(0===D.length)return null;var L=void 0===j&&"horizontal"===y?"center":j,P=r("space",k),F=m()(P,"".concat(P,"-").concat(y),(t={},d()(t,"".concat(P,"-rtl"),"rtl"===i),d()(t,"".concat(P,"-align-").concat(L),L),t),p),M="".concat(P,"-item"),W="rtl"===i?"marginLeft":"marginRight",T=0,U=D.map((function(e,t){return null!==e&&void 0!==e&&(T=t),c.createElement(h,{className:M,key:"".concat(M,"-").concat(t),direction:y,index:t,marginDirection:W,split:C,wrap:z},e)}));return c.createElement("div",s()({className:F,style:s()(s()({},z&&{flexWrap:"wrap",marginBottom:-B}),N)},E),c.createElement(O.Provider,{value:{horizontalSize:A,verticalSize:B,latestIndex:T}},U))},v=n("mr32"),y=n("diRs"),k=n("Tckk"),C=n("1GRj"),N=n("9BLJ"),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zm-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}},{tag:"path",attrs:{d:"M894 345a343.92 343.92 0 00-189-130v.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4a31.95 31.95 0 0040.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102zm505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1A367.31 367.31 0 00729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"}},{tag:"path",attrs:{d:"M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"}}]},name:"comment",theme:"outlined"},z=n("6VBw"),E=function(e,t){return c.createElement(z.a,Object.assign({},e,{ref:t,icon:_}))};E.displayName="CommentOutlined";var I=c.forwardRef(E),S=n("yyWI"),A=n("cJ7L"),B=n("WhZy"),D=n("BtR2"),L=n("vOnD"),P=n("YFqc"),F=n.n(P),M=n("VaKW"),W=n("je4i"),T=n.n(W),U=n("zAG/"),q=Object(L.b)(i.b.Item).withConfig({displayName:"ListItem__ListItemWrapper",componentId:"hsjj3d-0"})(["background:#fff;padding:10px 30px;margin-bottom:10px;transition:0.3s;.ant-list-item-action{margin-top:5px;margin-left:0;}.ant-list-item-meta-title{font-size:18px;}&:hover{box-shadow:0 3px 7px rgba(0,0,0,0.21);transition:0.3s;}"]),H=L.b.div.withConfig({displayName:"ListItem__ListHeader",componentId:"hsjj3d-1"})(["margin-bottom:10px;display:flex;justify-content:space-around;.tag-wrapper{flex:1;}.user-date-wrapper{text-align:right;.user-nickname{margin-right:10px;}.create-date{color:#888;}}@media (max-width:768px){flex-direction:column;.user-date-wrapper{margin-top:10px;}}"]),R=function(e){var t=e.icon,n=e.text;return Object(r.jsxs)(w,{children:[a.a.createElement(t),n]})},V=function(e){var t=e.item,n=e.type;return"study"==n||"project"==n?Object(r.jsx)(F.a,{href:"/articles/".concat(n,"/").concat(t._id),children:Object(r.jsx)("a",{children:Object(r.jsxs)(q,{actions:[Object(r.jsx)(R,{icon:N.a,text:t.views},"list-vertical-eye-o"),Object(r.jsx)(R,{icon:I,text:t.comments.length},"list-vertical-comment-o"),Object(r.jsx)(R,{icon:S.a,text:t.scraps.length},"list-vertical-scrap-o")],children:[Object(r.jsxs)(H,{children:[Object(r.jsxs)("div",{className:"tag-wrapper",children:[t.techStack.map((function(e,t){return Object(r.jsx)(v.a,{color:"magenta",children:e},e+T.a.generate())})),Object(r.jsx)(v.a,{color:"geekblue",children:t.location}),t.isOngoing?Object(r.jsx)(v.a,{color:"volcano",children:"\ubaa8\uc9d1\uc911"}):Object(r.jsx)(v.a,{color:"green",children:"\ubaa8\uc9d1\uc644\ub8cc"})]}),Object(r.jsxs)("div",{className:"user-date-wrapper",children:[Object(r.jsxs)(y.a,{content:Object(r.jsx)("div",{onClick:function(e){e.stopPropagation()},children:t.writer&&Object(r.jsx)(M.a,{writer:t.writer})}),children:[Object(r.jsx)(k.a,{onClick:function(e){e.preventDefault()},style:{cursor:"pointer"},size:24,icon:Object(r.jsx)(A.a,{}),src:t.writer&&""!==t.writer.avatarUrl&&t.writer.avatarUrl&&Object(r.jsx)(C.a,{width:24,height:24,src:"".concat(U.c,"/").concat(t.writer.avatarUrl)})})," "]}),Object(r.jsx)("span",{className:"user-nickname",children:t.writer?t.writer.nickname:"\ud0c8\ud1f4\ud55c \ud68c\uc6d0"}),Object(r.jsx)("span",{className:"create-date",children:"".concat(new Date(t.createdAt).getFullYear(),".").concat(new Date(t.createdAt).getMonth()+1,".").concat(new Date(t.createdAt).getDate())})]})]}),Object(r.jsx)(i.b.Item.Meta,{title:t.title}),""]})})}):Object(r.jsx)(F.a,{href:"/articles/".concat(n,"/").concat(t._id),children:Object(r.jsx)("a",{children:Object(r.jsxs)(q,{actions:[Object(r.jsx)(R,{icon:N.a,text:t.views},"list-vertical-eye-o"),Object(r.jsx)(R,{icon:B.a,text:t.comments.length},"list-vertical-message"),Object(r.jsx)(R,{icon:D.a,text:t.likes.length},"list-vertical-like-o"),Object(r.jsx)(R,{icon:S.a,text:t.scraps.length},"list-vertical-scrap-o")],children:[Object(r.jsxs)(H,{children:[Object(r.jsx)("div",{className:"tag-wrapper",children:Object(r.jsx)(v.a,{color:"red",children:t.field},t)}),Object(r.jsxs)("div",{className:"user-date-wrapper",children:[Object(r.jsxs)(y.a,{content:Object(r.jsx)("div",{onClick:function(e){e.stopPropagation()},children:t.writer&&Object(r.jsx)(M.a,{writer:t.writer})}),children:[Object(r.jsx)(k.a,{onClick:function(e){e.preventDefault()},style:{cursor:"pointer"},size:24,icon:Object(r.jsx)(A.a,{}),src:t.writer&&""!==t.writer.avatarUrl&&t.writer.avatarUrl&&Object(r.jsx)(C.a,{width:24,height:24,src:"".concat(U.c,"/").concat(t.writer.avatarUrl)})})," "]}),Object(r.jsx)("span",{className:"user-nickname",children:t.writer?t.writer.nickname:"\ud0c8\ud1f4\ud55c \ud68c\uc6d0"}),Object(r.jsx)("span",{className:"create-date",children:"".concat(new Date(t.createAt).getFullYear(),".").concat(new Date(t.createAt).getMonth()+1,".").concat(new Date(t.createAt).getDate())})]})]}),Object(r.jsx)(i.b.Item.Meta,{title:t.title}),""]})})})},Y=function(e){var t=e.data,n=e.type;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return Object(r.jsx)(V,{item:e,type:n},e.id+T.a.generate())}))})};t.a=a.a.memo(Y)},oPB4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/forum",function(){return n("cxS1")}])}},[["oPB4",0,1,5,6,2,4,3,7,8,11,12,13,15,16]]]);