(this.webpackJsonpmathteacher=this.webpackJsonpmathteacher||[]).push([[0],{110:function(e,t,a){},226:function(e,t,a){e.exports=a(389)},389:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),i=(a(110),a(52)),c=a(53),s=a(55),m=a(54),u=(a(74),a(44)),d=a(41),p=a(396),h=a(392),b=a(43),f=a(100),E=a(410),y=a(411),v=a(412),g=a(402),k=a(395),C=a(81),w=a.n(C),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:w()("2017-01-25"),selectedValue:w()("2017-01-25")},e.onSelect=function(t){e.setState({value:t,selectedValue:t})},e.onPanelChange=function(t){e.setState({value:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.selectedValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{message:"You selected date: ".concat(a&&a.format("YYYY-MM-DD"))})," ",l.a.createElement(k.a,{value:t,onSelect:this.onSelect,onPanelChange:this.onPanelChange})," ")}}]),a}(n.Component),x=a(400),I=x.a.TextArea,O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{placeholder:"Autosize height based on content lines",autoSize:!0}),l.a.createElement("div",{style:{margin:"24px 0"}})," ",l.a.createElement(I,{placeholder:"Autosize height with minimum and maximum number of lines",autoSize:{minRows:2,maxRows:6}})," ",l.a.createElement("div",{style:{margin:"24px 0"}})," ",l.a.createElement(I,{value:e,onChange:this.onChange,placeholder:"Controlled autosize",autoSize:{minRows:3,maxRows:5}})," ")}}]),a}(l.a.Component),j=a(109),A=a(155),T=p.a.TabPane,M=[{title:"Tab 1",content:"Content of Tab 1",key:"1"}],F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).newTabIndex=2,n.onChange=function(e){n.setState({activeKey:e})},n.onEdit=function(e,t){n[t](e)},n.add=function(){var e=n.state.panes,t="".concat(n.newTabIndex++),a=Object(j.a)(e);a.push({title:"Tab ".concat(t),content:"Content of Tab ".concat(t),key:t}),n.setState({panes:a,activeKey:t,content:[]})},n.remove=function(e){var t,a=n.state,l=a.panes,r=a.activeKey;l.forEach((function(a,n){a.key===e&&(t=n-1)}));var o=l.filter((function(t){return t.key!==e}));o.length&&r===e&&(r=t>=0?o[t].key:o[0].key),n.setState({panes:o,activeKey:r})},n.handleEditorChange=function(e,t){console.log("Content was updated:",e),n.setState({content:e})},n.state={activeKey:M[0].key,panes:M,content:[]},n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){alert("Text was submitted: "+this.state.content),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,a=t.panes,n=t.activeKey;return l.a.createElement(p.a,{type:"editable-card",onChange:this.onChange,activeKey:n,onEdit:this.onEdit}," ",a.map((function(t){return l.a.createElement(T,{tab:t.title,key:t.key,closable:t.closable}," ",t.content,l.a.createElement(A.a,{apiKey:"qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",initialValue:"",value:e.state.content,init:{height:500,menubar:!0,resize:!0,media_live_embeds:!0,autosave_ask_before_unload:!0,powerpaste_allow_local_images:!0,tinycomments_mode:"embedded",tinycomments_author:"Author",spellchecker_dialog:!0,spellchecker_whitelist:["Ephox","Moxiecode"],image_title:!0,automatic_uploads:!1,images_upload_url:"postAcceptor.php",a11y_advanced_options:!0,mediaembed_service_url:"SERVICE_URL",mediaembed_max_width:450,powerpaste_word_import:"prompt",powerpaste_html_import:"prompt",menu:{tc:{title:"TinyComments",items:"addcomment showcomments deleteallconversations"},format:{title:"Format",items:"checklist | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat"}},tiny_pageembed_classes:[{text:"Big embed",value:"my-big-class"},{text:"Small embed",value:"my-small-class"}],plugins:["code tinymcespellchecker link","searchreplace","media mediaembed","a11ychecker advcode advlist anchor autolink codesample fullscreen help image imagetools","lists link media noneditable powerpaste preview","searchreplace table template tinymcespellchecker visualblocks wordcount","pageembed code preview","lists checklist","paste tinycomments","advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks advcode fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | a11ycheck formatselect | checklist pageembed code preview searchreplace | bold italic backcolor | mybutton | addcomment showcomments| alignleft aligncenter alignright alignjustify | spellchecker language spellcheckdialog | bullist numlist outdent indent | image link media | removeformat | help",setup:function(e){var t=0;e.ui.registry.addMenuButton("mybutton",{text:"Add Choice",fetch:function(a){t++,a([{type:"menuitem",text:"FillBlank",onAction:function(){e.insertContent('<input type="text" id="FB" name="FB">')}},{type:"nestedmenuitem",text:"SingleChoice",getSubmenuItems:function(){return[{type:"menuitem",text:"TorF",onAction:function(){e.insertContent('<div id="'+t+'">&nbsp;<label for="T">True. </label>&nbsp;<input type="radio" id="T" name="TorF" value="true"><br>&nbsp;<label for="F">False. </label><input type="radio" id="F" name="TorF" value="false">')}},{type:"menuitem",text:"4thChoices",onAction:function(){e.insertContent('<div id="'+t+'">&nbsp;<label for="S4A">A. </label><input type="radio" id="S4A" name="4thChoices" value="A"><br>&nbsp;<label for="S4B">B. </label><input type="radio" id="S4B" name="4thChoices" value="B"><br>&nbsp;<label for="S4C">C. </label><input type="radio" id="S4C" name="4thChoices" value="C"><br>&nbsp;<label for="S4D">D. </label><input type="radio" id="S4D" name="4thChoices" value="D">')}}]}},{type:"nestedmenuitem",text:"MultiChoices",getSubmenuItems:function(){return[{type:"menuitem",text:"4thChoices",onAction:function(){e.insertContent('<div id="'+t+'">&nbsp;<label for="M4A">A. </label><input type="checkbox" id="M4A" name="4thChoices" value="A"><br>&nbsp;<label for="M4B">B. </label><input type="checkbox" id="M4B" name="4thChoices" value="B"><br>&nbsp;<label for="M4C">C. </label><input type="checkbox" id="M4C" name="4thChoices" value="C"><br>&nbsp;<label for="M4D">D. </label><input type="checkbox" id="M4D" name="4thChoices" value="D">')}},{type:"menuitem",text:"5thChoices",onAction:function(){e.insertContent('<div id="'+t+'">&nbsp;<label for="M5A">A. </label><input type="checkbox" id="M5A" name="5thChoices" value="A"><br>&nbsp;<label for="M5B">B. </label><input type="checkbox" id="M5B" name="5thChoices" value="B"><br>&nbsp;<label for="M5C">C. </label><input type="checkbox" id="M5C" name="5thChoices" value="C"><br>&nbsp;<label for="M5D">D. </label><input type="checkbox" id="M5D" name="5thChoices" value="D"><br>&nbsp;<label for="M5E">E. </label><input type="checkbox" id="M5E" name="5thChoices" value="E">')}}]}}])}})}},onEditorChange:e.handleEditorChange}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.state.content},onClick:function(){return e.props.history.push({pathname:"home/quizs",state:{content:e.state.content}})}}))})))}}]),a}(l.a.Component),P=a(405),q=a(406),_=a(407),D=a(98),K=a(403),R=a(397),N=a(399),B=a(391),z=a(394);function Y(e){console.log(e),K.b.error("Click on No")}var V=function(e){var t=e.visible,a=e.onCancel,r=e.onCreate,o=R.a.useForm(),i=Object(D.a)(o,1)[0];!function(e){var t=e.form,a=e.visible,l=Object(n.useRef)();Object(n.useEffect)((function(){l.current=a}),[a]);var r=l.current;Object(n.useEffect)((function(){!a&&r&&t.resetFields()}),[a])}({form:i,visible:t});var c=function(){i.validateFields().then((function(e){i.resetFields(),r(e)}))};return l.a.createElement(N.a,{title:"Add",visible:t,onOk:c,onCancel:a,footer:[l.a.createElement(b.a,{key:"back",onClick:a},"Return"),l.a.createElement(b.a,{key:"submit",type:"primary",onClick:c},"Submit")]},l.a.createElement(R.a,{form:i,layout:"vertical",name:"form"},l.a.createElement(R.a.Item,{name:"name",label:"Name",rules:[{required:!0}]},l.a.createElement(x.a,null)),l.a.createElement(R.a.Item,{name:"id",label:"ID",rules:[{required:!0}]},l.a.createElement(x.a,null)),l.a.createElement(R.a.Item,{name:"intro",label:"Introduction",rules:[{required:!0}]},l.a.createElement(x.a,null))))},L={form1:function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).formRef=l.a.createRef(),n.showUserModal=function(){n.setState({visible:!0})},n.hideUserModal=function(){n.setState({visible:!1})},n.handleDelete=function(e){K.b.success("Click on Yes");var t=Object(j.a)(n.state.data1);n.setState({data1:t.filter((function(t){return t.key!==e}))})},n.hideEditModal=function(){n.setState({vi:!1})},n.handleEdit=function(e){n.setState({index:e});var t=n.state.data1[e];n.setState({vi:!0}),n.formRef.current&&n.formRef.current.setFieldsValue({key:e,name:t.name,id:t.id,intro:t.intro})},n.columns=[{title:"Name",dataIndex:"name",width:150},{title:"Id",dataIndex:"id",width:150},{title:"Introduction",dataIndex:"intro"},{title:"Edit",dataIndex:"edit",render:function(e,t){return n.state.data1.length>0?l.a.createElement("a",{onClick:function(){return n.handleEdit(t.key)}},"Edit"):null}},{title:"Delete",dataIndex:"delete",render:function(e,t){return n.state.data1.length>0?l.a.createElement(B.a,{title:"Sure to delete?",onConfirm:function(){return n.handleDelete(t.key)},onCancel:Y,okText:"Yes",cancelText:"No"},l.a.createElement("a",null,"Delete")):null}}],n.state={name:"",id:"",intro:"",data1:[],data2:[],data3:[],index:"",count:8,visible:!1,vi:!1};for(var r=0;r<8;r++)n.state.data1.push({key:r,name:"Topic ".concat(r),id:40,intro:"topic no. ".concat(r)});for(var o=0;o<4;o++)n.state.data2.push({key:o,name:"teachers ".concat(o),id:32,intro:"teacher id. ".concat(o)});for(var c=0;c<10;c++)n.state.data3.push({key:c,name:"students ".concat(c),id:14,intro:"student id. ".concat(c)});return n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=function(t){t.preventDefault();var a=e.state,n=a.data1,l=a.index;if(e.setState({vi:!1}),e.formRef.current){var r=e.formRef.current.getFieldsValue;n.splice(l,1),n[l]={name:r.name,id:r.id,intro:r.intro}}e.setState({data1:Object(j.a)(n),index:""})};return l.a.createElement("div",null,l.a.createElement(b.a,{onClick:this.showUserModal,type:"primary",style:{marginBottom:16}},"Add a Topic"),l.a.createElement(V,{visible:this.state.visible,onCancel:this.hideUserModal,onCreate:function(t){var a=e.state,n=a.count,l=a.data1;e.setState({visible:!1});var r={key:n,name:t.name,id:t.id,intro:t.intro};e.setState({data1:[].concat(Object(j.a)(l),[r]),count:n+1})}}),l.a.createElement(N.a,{title:"Add",visible:this.state.vi,onOk:t,onCancel:this.hideEditModal,footer:[l.a.createElement(b.a,{key:"back",onClick:this.hideEditModal},"Return"),l.a.createElement(b.a,{key:"submit",type:"primary",onClick:t},"Submit")]},l.a.createElement(R.a,{layout:"vertical",name:"form",ref:this.formRef},l.a.createElement(R.a.Item,{name:"name",label:"Name",rules:[{required:!0}]},l.a.createElement(x.a,null)),l.a.createElement(R.a.Item,{name:"id",label:"ID",rules:[{required:!0}]},l.a.createElement(x.a,null)),l.a.createElement(R.a.Item,{name:"intro",label:"Introduction",rules:[{required:!0}]},l.a.createElement(x.a,null)))),l.a.createElement(z.a,{columns:this.columns,dataSource:this.state.data1,pagination:{pageSize:50},scroll:{y:240}}))}}]),a}(l.a.Component),form2:function(){return l.a.createElement(z.a,{columns:(void 0).columns,dataSource:(void 0).state.data2,pagination:{pageSize:50},scroll:{y:240}})},form3:function(){return l.a.createElement(z.a,{columns:(void 0).columns,dataSource:(void 0).state.data3,pagination:{pageSize:50},scroll:{y:240}})}},U=f.a.SubMenu,H=h.a.Content,Q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).rootSubmenuKeys=["sub1","sub2","sub3"],e.state={openKeys:["sub1"]},e.onOpenChange=function(t){var a=t.find((function(t){return-1===e.state.openKeys.indexOf(t)}));-1===e.rootSubmenuKeys.indexOf(a)?e.setState({openKeys:t}):e.setState({openKeys:a?[a]:[]})},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(f.a,{mode:"inline",openKeys:this.state.openKeys,onOpenChange:this.onOpenChange,style:{width:256}},l.a.createElement(U,{key:"sub1",icon:l.a.createElement(P.a,null),title:"Topics"},l.a.createElement(f.a.Item,{key:"1"},l.a.createElement(u.b,{to:"/home/homeboard/year"}," Year 7 ")),l.a.createElement(f.a.Item,{key:"2"},"Year 8"),l.a.createElement(f.a.Item,{key:"3"},"Year 9"),l.a.createElement(f.a.Item,{key:"4"},"Year 10"),l.a.createElement(f.a.Item,{key:"5"},"Year 11"),l.a.createElement(f.a.Item,{key:"6"},"Year 12"),l.a.createElement(f.a.Item,{key:"7"},"Year 13")),l.a.createElement(f.a.Item,{key:"8",icon:l.a.createElement(q.a,null)},l.a.createElement(u.b,{to:"/home/homeboard/teacher"}," Teacher ")),l.a.createElement(U,{key:"sub3",icon:l.a.createElement(_.a,null),title:"Students"},l.a.createElement(f.a.Item,{key:"15"},l.a.createElement(u.b,{to:"/home/homeboard/student"}," Year 7 ")),l.a.createElement(f.a.Item,{key:"16"},"Year 8"),l.a.createElement(f.a.Item,{key:"17"},"Year 9"),l.a.createElement(f.a.Item,{key:"18"},"Year 10"),l.a.createElement(f.a.Item,{key:"19"},"Year 11"),l.a.createElement(f.a.Item,{key:"20"},"Year 12"),l.a.createElement(f.a.Item,{key:"21"},"Year 13"))),l.a.createElement(H,{style:{margin:"0 1px"}},l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:800}},l.a.createElement(d.a,{path:"/home/homeboard/year",component:L.form1}),l.a.createElement(d.a,{path:"/home/homeboard/teacher",component:L.form2}),l.a.createElement(d.a,{path:"/home/homeboard/student",component:L.form3}))))}}]),a}(l.a.Component),J=a(219),W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:99.9})," ",l.a.createElement(J.a,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:99.9,status:"active"}),l.a.createElement(J.a,{type:"circle",strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:90})," ",l.a.createElement(J.a,{type:"circle",strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:100})," ")},G=a(171),$=a.n(G),X=a(211),Z=a(107),ee=a(398),te=a(114),ae=a(404),ne=a(408),le=a(409);function re(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}for(var oe=[],ie=0;ie<10;ie++)oe.push({key:ie,img:"Edward King ".concat(ie),question:32,answer:"London, Park Lane no. ".concat(ie)});var ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCancel=function(){return n.setState({previewVisible:!1})},n.handlePreview=function(){var e=Object(X.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,re(t.originFileObj);case 3:t.preview=e.sent;case 4:n.setState({previewImage:t.url||t.preview,previewVisible:!0,previewTitle:t.name||t.url.substring(t.url.lastIndexOf("/")+1)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.fileList;return n.setState({fileList:t})},n.state={selectionType:"radio",previewVisible:!1,previewImage:"",previewTitle:"",tableValid:!1,formData:[],fileList:[],question:[],selection:[],answer:[]},n.handleQuestionChange=n.handleQuestionChange.bind(Object(Z.a)(n)),n.handleSelectionChange=n.handleSelectionChange.bind(Object(Z.a)(n)),n.handleAnswerChange=n.handleAnswerChange.bind(Object(Z.a)(n)),n}return Object(c.a)(a,[{key:"handleQuestionChange",value:function(e){this.setState({question:e.target.value})}},{key:"handleSelectionChange",value:function(e){this.setState({selection:e.target.value})}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""!==this.state.question&&""!==this.state.answer&&null!==this.state.question&&null!==this.state.answer){var t={};t.question=this.state.question,t.answer=this.state.answer,this.setState({tableValid:!0,formData:t})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.previewVisible,n=t.previewImage,r=t.fileList,o=t.previewTitle,i=l.a.createElement("div",null,l.a.createElement(ne.a,null),l.a.createElement("div",{style:{marginTop:8}},"Upload")),c=l.a.createElement("div",null,l.a.createElement(z.a,{dataSource:this.state.formData})),s=this.props.location.content;return l.a.createElement(R.a,{name:"dynamic_form_nest_item",onFinish:function(e){console.log("Received values of form:",e)},autoComplete:"off"},l.a.createElement(R.a.List,{name:"users"},(function(t,c){var s=c.add,m=c.remove;return l.a.createElement("div",null,l.a.createElement(ee.a,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",fileList:r,onPreview:e.handlePreview,onChange:e.handleChange},r.length>=4?null:i),l.a.createElement(N.a,{visible:a,title:o,footer:null,onCancel:e.handleCancel},l.a.createElement("img",{alt:"example",style:{width:"100%"},src:n})),l.a.createElement(x.a.TextArea,{placeholder:"Question",autoSize:{minRows:1,maxRows:4},onChange:e.handleQuestionChange,value:e.state.question}),l.a.createElement(te.a.Group,{onChange:function(t){var a=t.target.value;e.setState({selectionType:a})},value:e.state.selectionType},l.a.createElement(te.a,{value:"radio"},"Single-choice"),l.a.createElement(te.a,{value:"checkbox"},"Multi-choice")),t.map((function(t){return l.a.createElement(ae.b,{key:t.key,style:{display:"flex",marginBottom:8},align:"start"},l.a.createElement(R.a.Item,Object.assign({},t,{name:[t.name,"choice"],fieldKey:[t.fieldKey,"choice"]}),l.a.createElement(x.a,{type:e.state.selectionType,onChange:e.handleSelectionChange,value:e.state.selection})),l.a.createElement(R.a.Item,Object.assign({},t,{name:[t.name,"answer"],fieldKey:[t.fieldKey,"answer"],rules:[{required:!0,message:"Missing answer"}]}),l.a.createElement(x.a.TextArea,{placeholder:"Answer",autoSize:{minRows:1,maxRows:4},onChange:e.handleAnswerChange,value:e.state.answer})),l.a.createElement(le.a,{onClick:function(){m(t.name)}}))})),l.a.createElement(R.a.Item,null,l.a.createElement(b.a,{type:"dashed",onClick:function(){s()},block:!0},l.a.createElement(ne.a,null)," Add field")))})),l.a.createElement(R.a.Item,null,l.a.createElement(b.a,{type:"primary",htmlType:"submit",onClick:this.handleSubmit},"Submit")),this.state.tableValid?c():"",l.a.createElement("form",null,l.a.createElement("h2",null,"Introduction to Software Engineering hahahaha"),l.a.createElement("h3",null,"Provide a hahahaha course overview"),l.a.createElement(A.a,{apiKey:"qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",value:s,init:{height:200,menubar:!1}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),")")}}]),a}(l.a.Component),se=a(66),me=a(393),ue=se.a.Option,de={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},pe={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},he=function(){var e=R.a.useForm(),t=Object(D.a)(e,1)[0],a=Object(n.useState)([]),r=Object(D.a)(a,2),o=r[0],i=r[1],c=o.map((function(e){return{label:e,value:e}})),s=l.a.createElement(R.a.Item,{name:"prefix",noStyle:!0},l.a.createElement(se.a,{style:{width:70}},l.a.createElement(ue,{value:"86"},"+86"),l.a.createElement(ue,{value:"87"},"+87"),l.a.createElement(ue,{value:"64"},"+64"),l.a.createElement(ue,{value:"01"},"+01")));return l.a.createElement(R.a,Object.assign({},de,{form:t,name:"mac",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{prefix:"64"},scrollToFirstError:!0}),l.a.createElement(R.a.Item,{name:"fname",label:l.a.createElement("span",null,"First Name\xa0"),rules:[{required:!0,message:"Please input your firstname!",whitespace:!0}]},l.a.createElement(x.a,{placeholder:"First Name"})),l.a.createElement(R.a.Item,{name:"lname",label:l.a.createElement("span",null,"Last Name\xa0"),rules:[{required:!0,message:"Please input your lastname!",whitespace:!0}]},l.a.createElement(x.a,{placeholder:"Last Name"})),l.a.createElement(R.a.Item,{name:"email",label:"Email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},l.a.createElement(me.a,{options:c,onChange:function(e){i(e?["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@icloud.com","@qq.com","@163.com","@126.com","@sina.com"].map((function(t){return"".concat(e).concat(t)})):[])}},l.a.createElement(x.a,{type:"email",placeholder:"Email"}))),l.a.createElement(R.a.Item,{name:"phone",label:"Phone Number"},l.a.createElement(x.a,{placeholder:"Phone Number",addonBefore:s,style:{width:"100%"}})),l.a.createElement(R.a.Item,{name:"address",label:l.a.createElement("span",null,"Address\xa0"),rules:[{whitespace:!0}]},l.a.createElement(x.a,{placeholder:"Address"})),l.a.createElement(R.a.Item,pe,l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Confirm")))},be=p.a.TabPane,fe=h.a.Header,Ee=h.a.Content,ye=h.a.Footer,ve=h.a.Sider,ge=function(){return l.a.createElement("div",null,"404!!!")},ke=function(){return l.a.createElement("div",null,"505!!!")},Ce=[{title:"Calendar",key:"/calendar",component:S},{title:"Homeboard",key:"/homeboard",component:Q},{title:"Messages",key:"/messages",component:O},{title:"Editor",key:"/editor",component:F},{title:"Practice",key:"/practice",component:W},{title:"Quiz",key:"/quizs",component:ce}],we=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={panes:Ce,collapsed:!1,pane:[]},e.onCollapse=function(t){console.log(t),e.setState({collapsed:t})},e.onEdit=function(t,a){e[a](t)},e.onTabChanged=function(t){e.setState({tabKey:t}),e.props.history.replace({pathname:"/home"+t,state:{tabKey:t}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{style:{minHeight:"100vh"}},l.a.createElement(b.a,{onClick:function(){return e.props.history.goBack()}},"Rollback"),l.a.createElement(ve,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},l.a.createElement("div",{className:"logo"}),l.a.createElement(f.a,{theme:"light",mode:"inline"},l.a.createElement(f.a.Item,{key:"1",icon:l.a.createElement(E.a,null),onClick:function(){return e.state.pane.push(e.state.panes[0])&&console.log(e.pane)}},l.a.createElement(u.b,{to:"/home/calendar"},"Calendar")),l.a.createElement(f.a.Item,{key:"2",icon:l.a.createElement(y.a,null),onClick:function(){return e.state.pane.push(e.state.panes[1])&&e.setState(e.pane)}},l.a.createElement(u.b,{to:"/home/homeboard"},"Homeboard")),l.a.createElement(f.a.Item,{key:"3",icon:l.a.createElement(E.a,null),onClick:function(){return e.state.pane.push(e.state.panes[2])&&e.setState(e.pane)}},l.a.createElement(u.b,{to:"/home/messages"},"Messages")),l.a.createElement(f.a.Item,{key:"4",icon:l.a.createElement(y.a,null),onClick:function(){return e.state.pane.push(e.state.panes[3])&&e.setState(e.pane)}},l.a.createElement(u.b,{to:"/home/editor"},"Editor")),l.a.createElement(f.a.Item,{key:"5",icon:l.a.createElement(E.a,null),onClick:function(){return e.state.pane.push(e.state.panes[4])&&e.setState(e.pane)}},l.a.createElement(u.b,{to:"/home/practice"},"Practice")),l.a.createElement(f.a.Item,{key:"6",icon:l.a.createElement(y.a,null),onClick:function(){return e.state.pane.push(e.state.panes[5])&&e.setState(e.pane)}},l.a.createElement(u.b,{to:"/home/quizs"},"Quiz")),l.a.createElement(f.a.Item,{key:"7",icon:l.a.createElement(v.a,null)}))),l.a.createElement(h.a,{className:"site-layout"},l.a.createElement(fe,{className:"site-layout-background",style:{padding:0}},l.a.createElement(p.a,{type:"editable-card",activeKey:this.props.location.state&&this.props.location.state.tabKey?this.props.location.state.tabKey:"",onChange:this.onTabChanged},l.a.createElement(be,{tab:"Home",key:"",closable:!1}),l.a.createElement(be,{tab:"About",key:"/about",closable:!1}),this.state.pane.map((function(e){return l.a.createElement(be,{tab:e.title,key:e.key,closable:!0})}))),l.a.createElement(u.b,{to:"/home/modify"},l.a.createElement(b.a,null,"Modify Account"))),l.a.createElement(Ee,{style:{margin:"0 1px"}},l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:800}},l.a.createElement(d.a,{path:"/home",exact:!0,component:ge}),l.a.createElement(d.a,{path:"/home/about",component:ke}),l.a.createElement(d.a,{path:"/home/calendar",component:S}),l.a.createElement(d.a,{path:"/home/homeboard",component:Q}),l.a.createElement(d.a,{path:"/home/messages",component:O}),l.a.createElement(d.a,{path:"/home/editor",component:F}),l.a.createElement(d.a,{path:"/home/practice",component:W}),l.a.createElement(d.a,{path:"/home/quizs",component:ce}),l.a.createElement(d.a,{path:"/home/modify",component:he}))),l.a.createElement(ye,{style:{textAlign:"center"}}))))}}]),a}(n.Component),Se=a(172),xe=a(413),Ie={labelCol:{span:8},wrapperCol:{span:8}},Oe=function(){var e=Object(n.useState)([]),t=Object(D.a)(e,2),a=t[0],r=t[1],o=a.map((function(e){return{label:e,value:e}}));return l.a.createElement(R.a,Object.assign({},Ie,{name:"nest-messages",onFinish:function(e){console.log(e)}}),l.a.createElement(R.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0,message:"Please input user name!"}]},l.a.createElement(x.a,{type:"name",placeholder:"Name"})),l.a.createElement(R.a.Item,{name:"email",label:"Email",rules:[{required:!0}],message:"Please input email!"},l.a.createElement(me.a,{options:o,onChange:function(e){r(e?["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@icloud.com","@qq.com","@163.com","@126.com","@sina.com"].map((function(t){return"".concat(e).concat(t)})):[])}},l.a.createElement(x.a,{type:"email",placeholder:"Email"}))),l.a.createElement(R.a.Item,{label:"New Password",name:"newpassword",rules:[{required:!0,message:"Please input new password!"}],hasFeedback:!0},l.a.createElement(x.a.Password,{prefix:l.a.createElement(xe.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),l.a.createElement(R.a.Item,{label:"Confirm Password",name:"conpassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("newpassword")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},l.a.createElement(x.a.Password,{prefix:l.a.createElement(xe.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),l.a.createElement(R.a.Item,{wrapperCol:Object(Se.a)(Object(Se.a)({},Ie.wrapperCol),{},{offset:8})},l.a.createElement(b.a,{type:"ghost",htmlType:"submit"},l.a.createElement(u.b,{to:"/"},"Reset Password"))))},je=a(401),Ae=a(123),Te=a(414),Me={labelCol:{span:8},wrapperCol:{span:8}},Fe={wrapperCol:{offset:8,span:8}},Pe=function(){return l.a.createElement(R.a,Object.assign({},Me,{name:"basic",className:"login-form",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),l.a.createElement(je.a,{size:140,icon:l.a.createElement(Te.a,null),style:{display:"block",margin:"auto"}}),l.a.createElement(R.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(x.a,{prefix:l.a.createElement(Te.a,{className:"site-form-item-icon"}),placeholder:"Username"})),l.a.createElement(R.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},l.a.createElement(x.a.Password,{prefix:l.a.createElement(xe.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),l.a.createElement(R.a.Item,Object.assign({},Fe,{name:"remember",valuePropName:"checked"}),l.a.createElement(Ae.a,null,"Remember me"),l.a.createElement(u.b,{to:"/pass",className:"login-form-forgot"},"Forgot password")),l.a.createElement(R.a.Item,Fe,l.a.createElement(b.a,{type:"ghost",htmlType:"submit"},l.a.createElement(u.b,{to:"/home"},"Sign in"))))},qe=function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(d.a,{component:Pe,exact:!0,path:"/"}),l.a.createElement(d.a,{component:we,path:"/home"}),l.a.createElement(d.a,{component:Oe,path:"/pass"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[226,1,2]]]);
//# sourceMappingURL=main.f803b0f9.chunk.js.map