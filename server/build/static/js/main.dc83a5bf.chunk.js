(this.webpackJsonproulettegame=this.webpackJsonproulettegame||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),o=c.n(s),r=c(6),l=c(63),i=c(8),u=(c(46),c(124)),d=c.p+"static/media/Atari-Logo.wine.5afb4f4f.svg",j=c(14),b=c(1);var m=function(e){var t=Object(j.c)((function(e){return e.sessionData.myBalance})),c=Object(j.c)((function(e){return e.sessionData.totalBet}));return Object(b.jsxs)(u.a,{container:!0,justifyContent:"center",alignItems:"center",className:"headerLogo",children:[Object(b.jsx)(u.a,{item:!0,sm:3,md:4,children:Object(b.jsx)("img",{src:d,alt:"NoImg",className:"logoImg"})}),Object(b.jsxs)(u.a,{item:!0,sm:9,md:8,children:["My balance: ",t-c]})]})},O=c.p+"static/media/wheel.b6313657.png",f=c.p+"static/media/rulewheel.0109cd28.png",h=c(5),p=c.n(h);var v=function(e){var t=e.spinState,c=e.currentLength,a=Object(n.useState)(0),s=Object(r.a)(a,2),o=s[0],l=s[1],i=Object(n.useState)(0),u=Object(r.a)(i,2),d=u[0],j=u[1];return Object(n.useEffect)((function(){l(360*function(){var e=d+4;return j(e),e}()-360/37*c)}),[c]),Object(n.useEffect)((function(){!0===t&&p()(".wheel").css("transform","rotate("+o+"deg)")}),[o]),Object(b.jsx)("div",{className:"noselect",children:Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("img",{src:f,className:"rulewheel",alt:"NoImg"}),Object(b.jsx)("img",{src:O,className:"wheel",alt:"NoImg"})]})})},x=c.p+"static/media/100.07ae9db1.png",g=c.p+"static/media/500.0028b117.png",C=c.p+"static/media/1k.a7a41479.png",k=c.p+"static/media/10k.a6a2ac70.png",S=c.p+"static/media/50k.eb2b3d33.png",M=c.p+"static/media/100k.cea5232f.png",y=c.p+"static/media/500k.1074f9d6.png",E=c.p+"static/media/1m.43060dc3.png",N=[{img:x,value:100},{img:g,value:500},{img:C,value:1e3},{img:k,value:1e4},{img:S,value:5e4},{img:M,value:1e5},{img:y,value:5e5},{img:E,value:1e6}];var T=function(e){var t=e.chipValue,c=e.setChipValue,a=function(e){c(e)},s=Object(j.c)((function(e){return e.sessionData.myBalance})),o=Object(j.c)((function(e){return e.sessionData.totalBet}));return Object(n.useEffect)((function(){s-o<t&&a(0)}),[o,s]),Object(b.jsx)(u.a,{container:!0,sm:12,spacing:5,justifyContent:"center",alignItems:"center",className:"noselect",children:N.map((function(e){return Object(b.jsx)(u.a,{item:!0,xs:3,sm:3,md:3,onClick:function(){s-o>=e.value&&a(e.value)},children:Object(b.jsx)("img",{src:e.img,className:s-o<e.value?"disableImg btnChip":t===e.value?"active-btnChip":"btnChip",alt:"NoImg"})})}))})},B=c(42),_=c.n(B),w=c(61),z=c(122),D=c(126),I=c(123),L=c.p+"static/media/spin.8fdafab2.png",V=c.p+"static/media/spin_hover.8fdafab2.png",A=c.p+"static/media/spin_click.8fdafab2.png",R=c.p+"static/media/resultpan.b08f345b.png",P=c.p+"static/media/resultpan_lose.d9ef4946.png",Y=c(62),F=c.n(Y).a.create({method:"POST",headers:{"Content-type":"application/json"}}),X={send:function(e){return F.post("/api/start-signal",e)}};var U=function(e){var t=e.totalBet,c=e.spinState,a=e.spinImg,s=e.setSpinState,o=e.setSpinImg,l=e.setCurrentLength,i=e.setTotalBet,d=e.setImgs,m=e.betState,O=e.setBetState,f=Object(j.c)((function(e){return e.sessionData.token})),h=Object(j.c)((function(e){return e.sessionData.myBalance})),p=Object(j.c)((function(e){return e.sessionData.totalBet})),v=Object(j.b)(),x=Object(n.useState)(null),g=Object(r.a)(x,2),C=g[0],k=g[1];Object(n.useEffect)((function(){o(V)}),[]);var S=function(){o(V)},M=function(){var e=Object(w.a)(_.a.mark((function e(){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m&&(c={token:f,betValue:t},s(!0),X.send(c).then((function(e){"ok"==e.data.status?(l(e.data.rotateNum),k(e.data.moneyResult),setTimeout((function(){s(!1)}),9500)):console.log(e.data.message)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){null!==c&&!1===c&&(B(),i({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,column1:0,column2:0,column3:0,dozen1:0,dozen2:0,dozen3:0,half1:0,half2:0,even:0,odd:0,red:0,black:0}),d({0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[],24:[],25:[],26:[],27:[],28:[],29:[],30:[],31:[],32:[],33:[],34:[],35:[],36:[],column1:[],column2:[],column3:[],dozen1:[],dozen2:[],dozen3:[],half1:[],half2:[],even:[],odd:[],red:[],black:[]}),O(!1),v({type:"SET_MYBALANCE",payload:h-p+C}),v({type:"SET_TOTALBET",totalBet:0}))}),[c]);var y=Object(n.useState)(!1),E=Object(r.a)(y,2),N=E[0],T=E[1],B=function(){return T(!0)};return Object(b.jsxs)(u.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(b.jsx)(u.a,{item:!0,sm:2,xs:2}),Object(b.jsx)(u.a,{item:!0,lg:12,md:12,sm:8,xs:8,children:Object(b.jsx)("div",{className:"noselect",children:!0===c?Object(b.jsx)("img",{src:A,style:{width:"100%",height:"100%"},alt:"NoImg"}):Object(b.jsx)("img",{src:a,className:"spin",alt:"NoImg",onClick:M,onMouseEnter:function(){o(L)},onMouseDown:function(){o(A)},onMouseUp:S,onMouseLeave:S})})}),Object(b.jsx)(u.a,{item:!0,sm:2,xs:2}),Object(b.jsx)(z.a,{open:N,onClose:function(){return T(!1)},closeAfterTransition:!0,BackdropComponent:D.a,BackdropProps:{timeout:1e3},children:Object(b.jsx)(I.a,{in:N,className:"resultpan",children:Object(b.jsx)("div",{style:{display:"relative"},children:C>0?Object(b.jsxs)("span",{children:[Object(b.jsxs)("label",{className:"resulttitle",children:[Object(b.jsx)("b",{style:{fontSize:"6vh"},children:"You Win!!!"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\xa0 ",C,"$"]}),Object(b.jsx)("img",{src:R,style:{width:"100%",height:"100%"},alt:"NoImg"})]}):Object(b.jsxs)("span",{children:[Object(b.jsx)("label",{className:"resulttitle",children:Object(b.jsx)("b",{style:{fontSize:"6vh"},children:"You lost!"})}),Object(b.jsx)("img",{src:P,style:{width:"100%",height:"100%"},alt:"NoImg"})]})})})})]})},J=c(10),K={3:"red ftdo",6:"black ftdo",9:"red ftdo",12:"red ftdo",15:"black ftdo",18:"red ftdo",21:"red ftdo",24:"black ftdo",27:"red ftdo",30:"red ftdo",33:"black ftdo",36:"red ftdo"},W={2:"black",5:"red",8:"black",11:"black",14:"red",17:"black",20:"black",23:"red",26:"black",29:"black",32:"red",35:"black"},$={1:"red",4:"black",7:"red",10:"black",13:"black",16:"red",19:"red",22:"black",25:"red",28:"black",31:"black",34:"red"},q=[3,6,9,12,15,18,21,24,27,30,33,36],G=[2,5,8,11,14,17,20,23,26,29,32,35],H=[1,4,7,10,13,16,19,22,25,28,31,34];var Q=function(e){var t=e.chipValue,c=e.totalBet,n=e.setTotalBet,a=e.imgs,s=e.setImgs,o=e.spinState,r=e.setBetState,l={100:x,500:g,1e3:C,1e4:k,5e4:S,1e5:M,5e5:y,1e6:E},i=[1,2,3,4,5,6,7,8,9,10,11,12],d=[13,14,15,16,17,18,19,20,21,22,23,24],j=[25,26,27,28,29,30,31,32,33,34,35,36],m=[1,4,7,10,13,16,19,22,25,28,31,34],O=[2,5,8,11,14,17,20,23,26,29,32,35],f=[3,6,9,12,15,18,21,24,27,30,33,36],h=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],v=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],N=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],T=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],B=Object(J.a)({},c),_=function(e){if(r(!0),0!==t&&(!1===o||null===o))switch(e.toString()){case"0":var l=Math.ceil(3*Math.random()-1.5),i=Math.ceil(3*Math.random()-1),u=a;u[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(B);break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"10":case"11":case"12":case"13":case"14":case"15":case"16":case"17":case"18":case"19":case"20":case"21":case"22":case"23":case"24":case"25":case"26":case"27":case"28":case"29":case"30":case"31":case"32":case"33":case"34":case"35":case"36":l=Math.ceil(3*Math.random()+1),i=Math.ceil(3*Math.random()-2),(u=a)[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(Object(J.a)({},B));break;case"column1":case"column2":case"column3":l=Math.ceil(3*Math.random()),i=Math.ceil(3*Math.random()-2),(u=a)[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(Object(J.a)({},B));break;case"dozen1":case"dozen2":case"dozen3":l=Math.ceil(10*Math.random()+20),i=Math.ceil(1*Math.random()-2),(u=a)[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(Object(J.a)({},B));break;case"half1":case"half2":case"even":case"odd":l=Math.ceil(10*Math.random()+5),i=Math.ceil(1*Math.random()-2),(u=a)[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(Object(J.a)({},B));break;case"red":case"black":l=Math.ceil(5*Math.random()+3),i=Math.ceil(1*Math.random()-3.5),(u=a)[e].push({x:l,y:i,chipValue:t}),s(u),B[e]=c[e]+t,n(Object(J.a)({},B))}},w=function(e){return Object(b.jsx)("div",{style:{position:"relative",width:"5vh"},children:c[e]>0?a[e].map((function(e){return Object(b.jsx)("img",{src:l[e.chipValue],alt:"NoImg",style:{width:"4vh",height:"4vh",position:"absolute",left:e.x+"vh",top:e.y+"vh"}})})):""})},z=function(e){switch(e){case"Columns3":for(var t=0;t<12;t++)p()("#cell"+f[t]).addClass("coverColor");break;case"Columns2":for(t=0;t<12;t++)p()("#cell"+O[t]).addClass("coverColor");break;case"Columns1":for(t=0;t<12;t++)p()("#cell"+m[t]).addClass("coverColor");break;case"Dozens1":for(t=0;t<12;t++)p()("#cell"+i[t]).addClass("coverColor"),p()("#cell"+d[t]).removeClass("coverColor"),p()("#cell"+j[t]).removeClass("coverColor");break;case"Dozens2":for(t=0;t<12;t++)p()("#cell"+i[t]).removeClass("coverColor"),p()("#cell"+d[t]).addClass("coverColor"),p()("#cell"+j[t]).removeClass("coverColor");break;case"Dozens3":for(t=0;t<12;t++)p()("#cell"+i[t]).removeClass("coverColor"),p()("#cell"+d[t]).removeClass("coverColor"),p()("#cell"+j[t]).addClass("coverColor");break;case"half1":for(t=0;t<6;t++)p()("#cell"+m[t]).addClass("coverColor"),p()("#cell"+O[t]).addClass("coverColor"),p()("#cell"+f[t]).addClass("coverColor");break;case"half2":for(t=6;t<12;t++)p()("#cell"+m[t]).addClass("coverColor"),p()("#cell"+O[t]).addClass("coverColor"),p()("#cell"+f[t]).addClass("coverColor");break;case"Even":for(t=0;t<18;t++)p()("#cell"+N[t]).addClass("coverColor");break;case"Odd":for(t=0;t<18;t++)p()("#cell"+T[t]).addClass("coverColor");break;case"Red":for(t=0;t<18;t++)p()("#cell"+h[t]).addClass("coverColor");break;case"Black":for(t=0;t<18;t++)p()("#cell"+v[t]).addClass("coverColor");break;default:for(t=0;t<12;t++)p()("#cell"+i[t]).removeClass("coverColor"),p()("#cell"+d[t]).removeClass("coverColor"),p()("#cell"+j[t]).removeClass("coverColor")}};return Object(b.jsx)(u.a,{item:!0,style:{position:"relative"},children:Object(b.jsx)("table",{border:"0",cellSpacing:"0",cellPadding:"0",className:{100:"chip-100-cursor",500:"chip-500-cursor",1e3:"chip-1k-cursor",1e4:"chip-10k-cursor",5e4:"chip-50k-cursor",1e5:"chip-100k-cursor",5e5:"chip-500k-cursor",1e6:"chip-1m-cursor"}[t]+" noselect",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{rowSpan:"3",id:"zero",onClick:function(){return _("0")},children:[w("0"),"0"]}),q.map((function(e){return t=e,Object(b.jsxs)("td",{id:"cell"+t,className:K[t],onClick:function(){return _(t)},children:[w(t),t]});var t})),Object(b.jsxs)("td",{className:"le_1",onMouseEnter:function(){return z("Columns3")},onMouseOut:function(){return z("")},style:{width:"5vh",height:"5vh",borderRadius:"0 30px 0 0"},onClick:function(){return _("column3")},children:[w("column3"),"2 TO 1"]})]}),Object(b.jsxs)("tr",{children:[G.map((function(e){return t=e,Object(b.jsxs)("td",{id:"cell"+t,className:W[t],onClick:function(){return _(t)},children:[w(t),t]});var t})),Object(b.jsxs)("td",{className:"le",onMouseEnter:function(){return z("Columns2")},onMouseOut:function(){return z("")},onClick:function(){return _("column2")},children:[w("column2"),"2 TO 1"]})]}),Object(b.jsxs)("tr",{children:[H.map((function(e){return t=e,Object(b.jsxs)("td",{id:"cell"+t,className:$[t],onClick:function(){return _(t)},children:[w(t),t]});var t})),Object(b.jsxs)("td",{className:"le",onMouseEnter:function(){return z("Columns1")},onMouseOut:function(){return z("")},style:{borderRadius:"0 0 30px 0"},onClick:function(){return _("column1")},children:[w("column1"),"2 TO 1"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{rowSpan:"2",children:"\xa0"}),Object(b.jsxs)("td",{className:"lor",colSpan:"4",onMouseEnter:function(){return z("Dozens1")},onMouseOut:function(){return z("")},onClick:function(){return _("dozen1")},children:[w("dozen1"),"1ST 12"]}),Object(b.jsxs)("td",{className:"lor",colSpan:"4",onMouseEnter:function(){return z("Dozens2")},onMouseOut:function(){return z("")},onClick:function(){return _("dozen2")},children:[w("dozen2"),"2ND 12"]}),Object(b.jsxs)("td",{className:"lor flor",colSpan:"4",onMouseEnter:function(){return z("Dozens3")},onMouseOut:function(){return z("")},onClick:function(){return _("dozen3")},children:[w("dozen3"),"3RD 12"]}),Object(b.jsx)("td",{children:"\xa0"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{className:"lor",colSpan:"2",style:{borderRadius:"0 0 0 30px"},onMouseEnter:function(){return z("half1")},onMouseOut:function(){return z("")},onClick:function(){return _("half1")},children:[w("half1"),"1 - 18"]}),Object(b.jsxs)("td",{className:"lor",colSpan:"2",onMouseEnter:function(){return z("Even")},onMouseOut:function(){return z("")},onClick:function(){return _("even")},children:[w("even"),"EVEN"]}),Object(b.jsx)("td",{colSpan:"2",className:"a_red",onMouseEnter:function(){return z("Red")},onMouseOut:function(){return z("")},onClick:function(){return _("red")},children:w("red")}),Object(b.jsx)("td",{colSpan:"2",className:"a_black",onMouseEnter:function(){return z("Black")},onMouseOut:function(){return z("")},onClick:function(){return _("black")},children:w("black")}),Object(b.jsxs)("td",{className:"lor",colSpan:"2",onMouseEnter:function(){return z("Odd")},onMouseOut:function(){return z("")},onClick:function(){return _("odd")},children:[w("odd"),"ODD"]}),Object(b.jsxs)("td",{className:"lor flor",colSpan:"2",style:{borderRadius:"0 0 30px 0"},onMouseEnter:function(){return z("half2")},onMouseOut:function(){return z("")},onClick:function(){return _("half2")},children:[w("half2"),"19 - 36"]})]})]})})})};var Z=function(){var e=Object(j.b)(),t=Object(n.useState)(null),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),i=l[0],d=l[1],m=Object(n.useState)(""),O=Object(r.a)(m,2),f=O[0],h=O[1],p=Object(n.useState)(100),x=Object(r.a)(p,2),g=x[0],C=x[1],k=Object(n.useState)(0),S=Object(r.a)(k,2),M=S[0],y=S[1],E={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,column1:0,column2:0,column3:0,dozen1:0,dozen2:0,dozen3:0,half1:0,half2:0,even:0,odd:0,red:0,black:0},N={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[],24:[],25:[],26:[],27:[],28:[],29:[],30:[],31:[],32:[],33:[],34:[],35:[],36:[],column1:[],column2:[],column3:[],dozen1:[],dozen2:[],dozen3:[],half1:[],half2:[],even:[],odd:[],red:[],black:[]},B=Object(n.useState)(E),_=Object(r.a)(B,2),w=_[0],z=_[1],D=Object(n.useState)(N),I=Object(r.a)(D,2),L=I[0],V=I[1];return Object(n.useEffect)((function(){window.onmessage=function(t){"iframe_message"===t.data.name&&(console.log(t.data.name),e({type:"SET_MYBALANCE",payload:t.data.allowanceAmount}),e({type:"SET_TOKEN",payload:t.data.token}),e({type:"SET_POOLADDRESS",payload:t.data.poolAddress}))},window.parent.postMessage({name:"iframe_message"},"*")}),[]),Object(n.useEffect)((function(){var t=0;for(var c in w)t+=w[c];e({type:"SET_TOTALBET",payload:t})}),[w]),Object(b.jsx)("div",{children:Object(b.jsxs)(u.a,{container:!0,children:[Object(b.jsx)(u.a,{item:!0,sm:12,md:1}),Object(b.jsxs)(u.a,{item:!0,sm:12,md:10,children:[Object(b.jsxs)(u.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:10,children:[Object(b.jsx)(u.a,{item:!0,sm:12,md:4,children:Object(b.jsx)(v,{spinState:a,currentLength:M})}),Object(b.jsxs)(u.a,{item:!0,sm:12,md:8,children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(u.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(u.a,{item:!0,md:9,children:Object(b.jsx)(T,{chipValue:g,setChipValue:C,spinState:a})}),Object(b.jsxs)(u.a,{item:!0,md:3,children:[Object(b.jsx)(U,{totalBet:w,spinState:a,setSpinState:s,spinImg:f,setSpinImg:h,setCurrentLength:y,setTotalBet:z,setImgs:V,betState:i,setBetState:d}),Object(b.jsx)("div",{className:"reset_button",onClick:function(){a||(z(E),V(N),d(!1))},children:"Reset"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(Q,{spinState:a,chipValue:g,totalBet:w,setTotalBet:z,imgs:L,setImgs:V,setBetState:d})]})]}),Object(b.jsx)(u.a,{item:!0,sm:12,md:2})]})]})})};var ee=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0];return t[1],Object(n.useEffect)((function(){}),[]),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(m,{balance:c}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/",component:Z})})]})},te=c(24),ce=c(66),ne=c(65),ae={myBalance:0,token:"",pooladdress:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MYBALANCE":return Object(J.a)(Object(J.a)({},e),{},{myBalance:t.payload});case"SET_TOKEN":try{var c=Object(ne.a)(t.payload);return Object(J.a)(Object(J.a)({},e),{},{token:t.payload,balance:c.balance})}catch(n){return Object(J.a)(Object(J.a)({},e),{},{token:"invalid",myBalance:0})}case"SET_POOLADDRESS":return Object(J.a)(Object(J.a)({},e),{},{pooladdress:t.payload});case"SET_TOTALBET":return Object(J.a)(Object(J.a)({},e),{},{totalBet:t.payload});default:return e}},oe=Object(te.b)({sessionData:se}),re=[ce.a],le=Object(te.d)(oe,{},Object(te.c)(te.a.apply(void 0,re),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||te.c));var ie=function(){return Object(b.jsx)(j.a,{store:le,children:Object(b.jsx)(ee,{})})},ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,127)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),ue()},46:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.dc83a5bf.chunk.js.map