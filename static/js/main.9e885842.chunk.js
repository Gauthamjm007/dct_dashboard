(this.webpackJsonpdct_dashboard=this.webpackJsonpdct_dashboard||[]).push([[0],{271:function(e,t,a){e.exports=a(463)},276:function(e,t,a){},461:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),c=a.n(l),o=(a(276),a(48)),i=a(51),m=a(500),s=a(231),u=a(46),d=a(49),p=a(497),g=a(108),E=a(109),f=a(498),b=a(110),h={material:{type:"light",background:{paper:"rgb(255, 255, 255)",default:"rgb(245, 245, 245)"},custom:{primary:"rgb(0, 0, 0)",secondary:"rgb(235, 241, 251)",contrastText:"#fff"},contrastText:"#000"},reply:{type:"dark",background:{paper:"rgb(37, 40, 47)",default:"rgb(50, 51, 61)"},custom:{secondary:"rgb(52, 66, 60)",primary:"rgb(0,216,255)",contrastText:"#fff"},contrastText:"#fff"}},v=function(e){var t=h[e],a=t.contrastText,n=Object(d.a)(t,["contrastText"]);return Object(u.a)({},n,{contrastText:a,contrastThreshold:2,border:"#DFE3E8",divider:"#DFE3E8",common:{black:"#000",white:"#fff",contrastText:a,commonBackground:"rgb(45, 45, 45)",neutral:"#E4E7EB",muted:"#9EA0A4"},primary:{light:p.a[300],main:p.a[500],dark:p.a[700],contrastText:a},success:{light:g.a[300],main:g.a[500],dark:g.a[700],contrastText:a},info:{light:E.a[300],main:E.a[500],dark:E.a[700],contrastText:a},warning:{light:f.a[300],main:f.a[500],dark:f.a[700],contrastText:a},danger:{light:b.a[300],main:b.a[500],dark:b.a[700],contrastText:a}})},y={useNextVariants:!0,fontSize:11,fontFamily:["Montserrat","sans-serif","Helvetica Neue","Arial"].join(",")};var x=function(e){var t=v(e);return Object(s.a)({palette:t,typography:y,zIndex:{appBar:1200,drawer:1100},props:{MuiButtonBase:{},MuiPopover:{elevation:1}},overrides:{MuiPaper:{elevation0:{boxShadow:"0 0 14px 0 rgba(53,64,82,.05)"}},MuiTableCell:{root:{borderBottom:"1px solid rgba(224, 224, 224, .5)"}}}})},j=r.a.createContext(null);function k(e){var t=e.children,a=Object(n.useContext)(j).theme;return r.a.createElement(m.a,{theme:x(a)},t)}var O=a(27),N=Object(O.a)(),T=a(505),S=a(4),w=a(502),I=a(503),C=a(504),D=a(53),M=a(501),B=Object(M.a)((function(e){return{root:{height:"100%"}}})),P=function(e){var t=e.className,a=e.title,n=e.value,l=e.icon,c=(e.caption,Object(d.a)(e,["className","title","value","icon","caption"])),o=B(Object(u.a)({},e));return r.a.createElement(w.a,Object.assign({},c,{className:Object(S.a)(o.root,t),elevation:0}),r.a.createElement(I.a,{title:a,titleTypographyProps:{align:"center"}}),r.a.createElement(C.a,null,r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement(T.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l,r.a.createElement(D.a,{variant:"h4"},n)))))};P.defaultProps={className:"root",title:"Title",value:"value"};var z=P,L=a(506),F=a(524),R=a(508),A=a(203),W=a.n(A),_=Object(M.a)((function(e){return{root:{height:"100%",borderRadius:"20",boxShadow:"0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)"},route:{textDecoration:"none",color:e.palette.contrastText}}})),U=a(28),V=a(24),J=Object(V.b)()((function(e){var t=r.a.useState(null),a=Object(o.a)(t,2),n=a[0],l=a[1],c=function(t){l(null),e.dispatch(function(e){return{type:"REMOVE_STUDENT",payload:e}}(t))},i=e.className,m=e.title,s=e.route,d=e.email,p=e.mobile,g=e.lastlogin,E=_(Object(u.a)({},e));return r.a.createElement(w.a,{className:Object(S.a)(E.root,i),elevation:0},r.a.createElement(I.a,{action:r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{"aria-label":"more","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},r.a.createElement(W.a,null)),r.a.createElement(F.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:c},r.a.createElement(R.a,{onClick:c},r.a.createElement(U.a,{to:s,className:Object(S.a)(E.route,i)},"View More")),r.a.createElement(R.a,{onClick:function(){return c(p)}},"Remove"))),title:m,titleTypographyProps:{align:"center"}}),r.a.createElement(C.a,null,r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement(T.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("p",{style:{fontSize:"7"}},d),r.a.createElement("p",{style:{fontSize:"7"}},p),r.a.createElement("p",{style:{fontSize:"7"}},"Last Login: ",new Date(g).toDateString()," at"," ",new Date(g).toLocaleTimeString())))))})),K=a(509),H=Object(M.a)((function(e){return{title:{paddingBottom:e.spacing(3)}}}));function $(e){var t=e.title,a=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{className:a.title,variant:"h2"},t),r.a.createElement(K.a,null))}$.defaultProps={title:"Page Title"};var G=a(527),Q=a(465),Y=Object(Q.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content"},avatar:{width:100,height:100},name:{marginTop:e.spacing(2),marginBottom:e.spacing(1)}}})),q=function(e){var t=e.className,a=(e.name,e.avatar,e.role,Object(d.a)(e,["className","name","avatar","role"])),n=Y();return r.a.createElement("div",Object.assign({},a,{className:Object(S.a)(n.root,t)}),r.a.createElement(G.a,{alt:"Person",className:n.avatar,component:U.a,src:e.avatar,to:"/"}),r.a.createElement(D.a,{className:n.name,variant:"h4"},e.name),r.a.createElement(D.a,{variant:"body2"},e.role))};q.defaultProps={className:"root",avatar:"https://i.ibb.co/Rz8hnQG/logo512.png",name:"User 1",role:"Admin"};var X=q;function Z(e){var t=e.children,a=e.title;return r.a.createElement(w.a,{elevation:0},r.a.createElement(I.a,{title:a}),r.a.createElement(K.a,{light:!0}),r.a.createElement(C.a,null,t),r.a.createElement(K.a,{light:!0}))}var ee=a(510),te=a(514),ae=a(513),ne=a(511),re=a(512),le=Object(Q.a)((function(){return{table:{minWidth:650,minHeight:350}}}));function ce(e){var t=le();return r.a.createElement(ee.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(ae.a,null,"Number"),r.a.createElement(ae.a,{align:"left"},"Task Name"),r.a.createElement(ae.a,{align:"left"},"Completed"),r.a.createElement(ae.a,{align:"left"},"Incomplete"),r.a.createElement(ae.a,{align:"left"},"In Progress"))),r.a.createElement(te.a,null,e.data.map((function(t){return r.a.createElement(re.a,{key:t.title},r.a.createElement(ae.a,{component:"th",scope:"row"},t.num),r.a.createElement(ae.a,{align:"left"},t.title),r.a.createElement(ae.a,{align:"left"},t.complete),r.a.createElement(ae.a,{align:"left"},e.users-t.complete-t.inprogress),r.a.createElement(ae.a,{align:"left"},t.inprogress))}))))}var oe=Object(M.a)((function(e){return{root:{padding:e.spacing(4)}}})),ie=a(214),me=a.n(ie),se=a(219),ue=a.n(se),de=a(216),pe=a.n(de),ge=a(23);function Ee(e){return r.a.createElement(ge.d,{width:"100%",height:350},r.a.createElement(ge.b,{width:900,height:250,data:e.data},r.a.createElement(ge.c,{strokeDasharray:"3 3"}),r.a.createElement(ge.e,{dataKey:"num"}),r.a.createElement(ge.f,null),r.a.createElement(ge.a,{dataKey:"complete",barSize:7,fill:"#34d12c"}),r.a.createElement(ge.a,{dataKey:"inprogress",barSize:7,fill:"#faa302"}),r.a.createElement(ge.a,{dataKey:"incomplete",barSize:7,fill:"#f04a29"})))}var fe=a(215),be=a.n(fe),he=a(217),ve=a.n(he),ye=a(218),xe=a.n(ye),je=a(220),ke=a.n(je),Oe=Object(V.b)((function(e){return{student:e.student}}))((function(e){var t=oe();console.log(e.student,"student"),console.log();var a=(Object.keys(e.student[1]).length-11)*e.student.length,n=String(e.student.length),l=String(Object.keys(e.student[1]).length-11),c=String((e.student.map((function(e){return e["Time Spent(mins)"]})).map(Number).reduce((function(e,t){return e+t}),0)/e.student.filter((function(e){return 0!==Number(e["Time Spent(mins)"])})).length).toFixed(2)),o=function(t){return e.student.map((function(e){return Object.values(e)})).flat().filter((function(e){return e.includes(t)})).length},i=/[1-9]+/g,m=Object.keys(e.student[0]).filter((function(e){return i.test(e)})),s=m.map((function(t,a){return{title:t,num:a,complete:e.student.filter((function(e){return e[t].includes("Completed")})).length,inprogress:e.student.filter((function(e){return e[t].includes("In")})).length,incomplete:Math.abs(m.length-e.student.filter((function(e){return e[t].includes("Completed")})).length-e.student.filter((function(e){return e[t].includes("In")})).length)}}));return console.log(s,"all tasks data"),r.a.createElement("div",{className:t.root},r.a.createElement(T.a,{container:!0,spacing:4},r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"Total Number of Students",value:n,icon:r.a.createElement(me.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"Number of Assignments Given",value:l,icon:r.a.createElement(be.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"Average Time Spent on assignments ",value:c.concat(" min"),icon:r.a.createElement(pe.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"A/g Time Per Assignment ",value:String((Number(c)/Number(l)).toFixed(2))+" min",icon:r.a.createElement(ve.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"Number of Completed tasks out of ".concat(a),value:String(o("Completed")),icon:r.a.createElement(xe.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"In Progress tasks out of ".concat(a),value:String(o("In")),icon:r.a.createElement(ue.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(z,{title:"In Complete tasks out of ".concat(a),value:String(Math.abs(a-o("In")-o("Completed"))),icon:r.a.createElement(ke.a,{style:{width:60,height:60}})})),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(Z,{title:"Completed(G) vs In Progress(O) vs InComplete(R) Assignments"},r.a.createElement(Ee,{data:s}))),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(Z,{title:"Student Tasks Details"},r.a.createElement(ce,{data:s,users:n,tasks:m.length})))))})),Ne=Object(M.a)((function(e){return{root:{padding:e.spacing(4)}}})),Te=Object(V.b)((function(e){return{members:e.members,student:e.student}}))((function(e){var t=Ne();return r.a.createElement("div",{className:t.root},r.a.createElement(T.a,{container:!0,spacing:4},e.student.sort((function(e,t){return e.Name.localeCompare(t.Name)})).map((function(e){return r.a.createElement(T.a,{item:!0,lg:4,sm:6,xl:3,xs:12,key:e.id},r.a.createElement(J,{route:"/student/".concat(e.Mobile),id:e.Mobile,title:e.Name,email:e.Email,mobile:e.Mobile,lastlogin:e.LastLogin}))}))))})),Se=function(e){var t=e.layout,a=e.component,n=e.layoutProps,l=Object(d.a)(e,["layout","component","layoutProps"]);return r.a.createElement(i.b,Object.assign({},l,{render:function(e){return r.a.createElement(t,n,r.a.createElement(a,e))}}))},we=a(25),Ie=a(143),Ce=a(515),De=a(525),Me=a(526),Be=a(507),Pe=a(466),ze=a(516),Le=a(517),Fe=a(106),Re=a.n(Fe),Ae=a(222),We=a.n(Ae),_e=a(223),Ue=a.n(_e),Ve=a(221),Je=a.n(Ve),Ke=[{title:"Upload",href:"/upload",icon:r.a.createElement(Je.a,null)},{title:"Dashboard",href:"/dashboard",icon:r.a.createElement(We.a,null)},{title:"Members Details",href:"/details",icon:r.a.createElement(Ue.a,null)}],He=Object(M.a)((function(e){return Object(we.a)({drawer:{borderRight:0,zIndex:1200,width:268,top:60},root:{backgroundColor:e.palette.background.paper,display:"flex",flexDirection:"column",height:"100%",paddingTop:e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},menuButton:{position:"absolute",top:0,right:5},profile:{marginBottom:e.spacing(5)},listItem:{cursor:"pointer","&:hover":{backgroundColor:e.palette.custom.secondary,borderLeft:"4px solid ".concat(e.palette.custom.primary),borderRadius:"4px","& $listItemIcon":{marginLeft:"-4px"}},"& + &":{marginTop:e.spacing(1)}},activeListItem:{borderLeft:"4px solid ".concat(e.palette.custom.primary),borderRadius:"4px",backgroundColor:e.palette.custom.secondary,"& $listItemText":{color:e.palette.contrastText},"& $listItemIcon":{marginLeft:"-4px"}},listItemIcon:{marginRight:0},listItemText:{fontWeight:500,color:e.palette.contrastText}},e.breakpoints.down("sm"),{drawer:{top:0},menuButton:{dispaly:"none"},profile:{marginTop:e.spacing(5)}})}));var $e=function(e){var t=e.open,a=e.variant,n=e.onClose,l=He();return r.a.createElement(De.a,{anchor:"left",classes:{paper:l.drawer},open:t,onClose:n,variant:a},r.a.createElement("section",{className:l.root},r.a.createElement(Me.a,{mdUp:!0},r.a.createElement(L.a,{className:l.menuButton,"aria-label":"Menu",onClick:n},r.a.createElement(Re.a,null))),r.a.createElement(X,{className:l.profile}),r.a.createElement(Be.a,{component:"div",disablePadding:!0},Ke.map((function(e){return r.a.createElement(Pe.a,{key:e.title,activeClassName:l.activeListItem,className:l.listItem,component:U.b,to:e.href},r.a.createElement(ze.a,{className:l.listItemIcon},e.icon),r.a.createElement(Le.a,{classes:{primary:l.listItemText},primary:e.title}))})))))},Ge=a(518),Qe=a(519),Ye=a(226),qe=a.n(Ye),Xe=a(227),Ze=a.n(Xe),et=Object(M.a)((function(e){var t;return t={root:{borderBottom:"1px solid ".concat(e.palette.background.default),boxShadow:"0 0 35px 0  ".concat(e.palette.background.default),backgroundColor:e.palette.background.paper,display:"flex",alignItems:"center",height:60,zIndex:e.appBar},toolbar:{minHeight:"auto",width:"100%",paddingLeft:0},brandWrapper:{background:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",width:280,height:60,flexShrink:0},logo:{width:"calc(100% - 90px)",maxWidth:"100%",margin:"auto",fontFamily:"Montserrat,sans-serif",fontSize:14,fontWeight:700,letterSpacing:3,alignItems:"center",color:e.palette.custom.contrastText},logoimg:{height:50,alignItems:"center",width:200},title:{marginLeft:e.spacing(5),textTransform:"uppercase",textDecoration:"none",fontSize:14,color:e.palette.contrastText},menuButton:{color:"#000",marginLeft:-4},themeToggler:{marginLeft:"auto",color:e.palette.custom.primary},homeButton:{marginLeft:e.spacing(1)}},Object(we.a)(t,e.breakpoints.down("sm"),{brandWrapper:{width:75},logo:{display:"none"}}),Object(we.a)(t,"homeicon",{color:e.palette.custom.primary}),t})),tt=a(523),at=a(225),nt=a.n(at),rt=a(224),lt=a.n(rt);function ct(e){var t=e.className,a=r.a.useState({checkedA:!0}),n=Object(o.a)(a,2),l=n[0],c=n[1],i=r.a.useContext(j),m=(i.theme,i.setTheme);return r.a.createElement("div",{className:t},r.a.createElement(D.a,{component:"div"},r.a.createElement(T.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(T.a,{item:!0},r.a.createElement(lt.a,null)),r.a.createElement(T.a,{item:!0},r.a.createElement(tt.a,{checked:l.checkedA,onChange:function(e){c(Object(u.a)({},l,Object(we.a)({},e.target.name,e.target.checked))),e.target.checked?m("material"):m("reply")},name:"checkedA",color:"primary",inputProps:{"aria-label":"primary checkbox"}})),r.a.createElement(T.a,{item:!0},r.a.createElement(nt.a,null)))))}var ot=Object(V.b)((function(e){return{student:e.student}}))((function(e){var t=e.className,a=e.children,n=e.openSidebar,l=e.onToggleSidebar,c=et(e);return r.a.createElement(Ge.a,{className:Object(S.a)(c.root,t)},r.a.createElement(Qe.a,{className:c.toolbar},r.a.createElement("div",{className:c.brandWrapper},r.a.createElement("div",{className:c.logo},r.a.createElement("div",{align:"center"},r.a.createElement("img",{src:"https://i.ibb.co/NjSMLR8/dct.png",alt:"logo",className:c.logoimg}))),r.a.createElement(L.a,{className:c.menuButton,"aria-label":"Menu",onClick:l,disabled:0===e.student.length},n?r.a.createElement(Re.a,null):r.a.createElement(qe.a,null))),r.a.createElement(ct,{className:c.themeToggler}),r.a.createElement(L.a,{className:c.homeButton},r.a.createElement(U.a,{to:"/"},r.a.createElement(Ze.a,{className:Object(S.a)(c.homeicon,t)})))),a)})),it=Object(M.a)((function(e){return Object(we.a)({root:{height:"100%",background:e.palette.background.default,color:e.palette.contrastText},content:{padding:e.spacing(3),paddingTop:e.spacing(10),backgroundColor:e.palette.background.default,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{marginLeft:"270px"}},e.breakpoints.down("sm"),{content:{padding:0,paddingTop:e.spacing(9)}})}));var mt=function(e){var t,a=e.children,l=it(),c=Object(Ie.a)(),i=Object(Ce.a)(c.breakpoints.up("lg"),{defaultMatches:!0}),m=Object(n.useState)(!1),s=Object(o.a)(m,2),u=s[0],d=s[1],p=function(){d(!u)};return r.a.createElement("div",{className:l.root},r.a.createElement(ot,{openSidebar:u,onToggleSidebar:p}),r.a.createElement($e,{onClose:p,open:u,variant:i?"persistent":"temporary"}),r.a.createElement("main",{className:Object(S.a)((t={},Object(we.a)(t,l.contentShift,u),Object(we.a)(t,l.content,!0),t))},a))},st=a(520),ut=a(521),dt=Object(M.a)((function(e){return{root:{minWidth:500},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function pt(e){var t=dt(),a=r.a.createElement("span",{className:t.bullet},"\u2022");return r.a.createElement(w.a,{className:t.root},r.a.createElement(C.a,null,r.a.createElement(D.a,{variant:"h5",component:"h2"},a,"Name : ",e.name,r.a.createElement("br",null),r.a.createElement("br",null),a,"Email : ",e.email,r.a.createElement("br",null),r.a.createElement("br",null),a,"Mobile : ",e.mobile,r.a.createElement("br",null),r.a.createElement("br",null),a,"Enrolled Date : ",new Date(e.enroll_date).toDateString(),r.a.createElement("br",null),r.a.createElement("br",null),a,"Validity Till : ",e.validity,r.a.createElement("br",null),r.a.createElement("br",null),a,"Time Spent : ",e.time_spent,"min",r.a.createElement("br",null),r.a.createElement("br",null),a,"Completed Task : ",e.completed,r.a.createElement("br",null),r.a.createElement("br",null),a,"Incompleted Task : ",e.incompleted,r.a.createElement("br",null),r.a.createElement("br",null),a,"In Progress Task : ",e.progress,r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(st.a,null,r.a.createElement(U.a,{to:"/details"},r.a.createElement(ut.a,{size:"small"},"Back"))))}function gt(e){return r.a.createElement(ge.d,{width:"100%",height:350},r.a.createElement(ge.b,{width:900,height:250,data:e.data},r.a.createElement(ge.c,{strokeDasharray:"3 3"}),r.a.createElement(ge.e,{dataKey:"task"}),r.a.createElement(ge.f,null),r.a.createElement(ge.a,{dataKey:"time",barSize:7,fill:"#34d12c"})))}var Et=Object(Q.a)((function(){return{table:{minWidth:650,minHeight:350}}}));function ft(e){var t=Et();return r.a.createElement(ee.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(ae.a,null,"ID"),r.a.createElement(ae.a,{align:"left"},"Name"),r.a.createElement(ae.a,{align:"left"},"Status"),r.a.createElement(ae.a,{align:"left"},"Time Taken"))),r.a.createElement(te.a,null,e.data.map((function(e){return r.a.createElement(re.a,{key:e.title},r.a.createElement(ae.a,{component:"th",scope:"row"},e.task),r.a.createElement(ae.a,{align:"left"},e.taskName),r.a.createElement(ae.a,{align:"left"},e.time,"s"),r.a.createElement(ae.a,{align:"left"},"In"===e.status?r.a.createElement(ut.a,{variant:"contained",color:"inherit"},"In Progress"):"Completed"===e.status?r.a.createElement(ut.a,{variant:"contained",color:"primary"},"Completed"):r.a.createElement(ut.a,{variant:"contained",color:"secondary"},"In Complete")))}))))}var bt=Object(V.b)((function(e,t){var a=t.match.params.id;return{student:e.student.find((function(e){return String(e.Mobile)===String(a)}))}}))((function(e){var t=/[1-9]+/g,a=/[a-z]+/gi,n=Object.keys(e.student).filter((function(e){return t.test(e)})).map((function(t,n){return{task:String(n),taskName:t,time:0!==e.student[t].length?e.student[t].match(/\d+/g)[0]:0,status:0!==e.student[t].length?e.student[t].match(a)[0]:0}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{items:!0,xs:12},r.a.createElement($,{title:"".concat(e.student.Name," Details")})),r.a.createElement(T.a,{items:!0,xs:12},r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement(pt,{name:e.student.Name,email:e.student.Email,mobile:e.student.Mobile,enroll_date:e.student.EnrollDate,validity:e.student.ValidTill,time_spent:e.student["Time Spent(mins)"],completed:Object.values(e.student).filter((function(e){return e.includes("Completed")})).length,progress:Object.values(e.student).filter((function(e){return e.includes("In")})).length,incompleted:Math.abs(19-Object.values(e.student).filter((function(e){return e.includes("Completed")})).length-Object.values(e.student).filter((function(e){return e.includes("In")})).length)}))),r.a.createElement(T.a,{items:!0,xs:12}),r.a.createElement(T.a,{items:!0,xs:12},r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement($,{title:"Student task completed in sec"}),r.a.createElement(gt,{data:n}))),r.a.createElement(T.a,{items:!0,xs:12},r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement(Z,{title:"student task detail"},r.a.createElement(ft,{data:n}))))))})),ht=a(232),vt=Object(M.a)((function(e){return{dropzone:{height:"200px",width:"200px",backgroundColor:e.palette.custom.contrastText,border:"2px dashed rgb(187, 186, 186)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"12px",color:e.palette.custom.primary,"&:hover":{cursor:"pointer"}}}})),yt=a(229),xt=a.n(yt),jt=a(460);var kt=Object(V.b)()((function(e){var t=vt(),a=Object(n.useCallback)((function(t){t.forEach((function(t){var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var t=a.result;jt({noheader:!0,output:"json"}).fromString(t).then((function(t){var a=[];t.forEach((function(e,n){if(0!==n){var r={};Object.keys(e).forEach((function(a){var n=e[a],l=t[0][a];r[l]=n})),a.push(r)}}));var n=function(){return e.history.push("/dashboard")};e.dispatch({type:"SET_STUDENT",payload:JSON.parse(JSON.stringify(a).replace(/\s(?=\w+":)/g,""))},n),console.log(JSON.parse(JSON.stringify(a).replace(/\s(?=\w+":)/g,""))),xt.a.fire("File Uploaded","Your CSV has been uploaded sucessfully","success"),n()}))},a.readAsBinaryString(t)}))}),[]),l=Object(ht.a)({onDrop:a}),c=l.getRootProps,o=l.getInputProps;return r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(T.a,{container:!0,justify:"center"},r.a.createElement("div",{className:t.dropzone},r.a.createElement("div",c(),r.a.createElement("input",o()),r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))))))}));var Ot=function(){return r.a.createElement(i.d,null,r.a.createElement(Se,{component:Oe,exact:!0,layout:mt,path:"/dashboard"}),r.a.createElement(Se,{component:Te,exact:!0,layout:mt,path:"/details"}),r.a.createElement(Se,{component:bt,exact:!0,layout:mt,path:"/student/:id"}),r.a.createElement(Se,{component:kt,exact:!0,layout:mt,path:"/upload"}),r.a.createElement(i.a,{to:"/upload"}))};var Nt=function(){var e=Object(n.useState)("material"),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(j.Provider,{value:{theme:a,setTheme:l}},r.a.createElement(k,null,r.a.createElement(i.c,{history:N},r.a.createElement(Ot,null))))},Tt=(a(461),a(230)),St=a.n(Tt);var wt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(St.a,null,r.a.createElement(Nt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var It=a(79),Ct=a(233),Dt=[];function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STUDENT":return t.payload;case"REMOVE_STUDENT":return e.filter((function(e){return e.Mobile!==t.payload}));default:return Object(Ct.a)(e)}}var Bt=function(){return Object(It.c)(Object(It.b)({student:Mt}))}();Bt.subscribe((function(){console.log(Bt.getState())}));var Pt=r.a.createElement(V.a,{store:Bt},r.a.createElement(wt,null));c.a.render(Pt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[271,1,2]]]);
//# sourceMappingURL=main.9e885842.chunk.js.map