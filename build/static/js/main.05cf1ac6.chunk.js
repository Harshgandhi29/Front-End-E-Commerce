(this["webpackJsonpswag-shop-web"]=this["webpackJsonpswag-shop-web"]||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(2),n=a.n(s),l=a(18),r=a.n(l),o=(a(155),a(9)),i=a(10),d=a(13),j=a(12),h=(a.p,a(156),a(91),a(11)),b=a.n(h),u=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={items:[],loading:!0,low:!1,q:0},e.componentDidMount=function(){b.a.get("https://crowdbuy.herokuapp.com/product",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){e.setState({items:t.data,loading:!1,low:!1}),console.log("responsedata"),console.log(t.data),e.props.check(t.data)&&e.setState({low:!0})}))},e.cart=function(t,a,c,s){var n=parseInt(localStorage.getItem(a));s?(localStorage.setItem(a,n+1),b.a.post("https://crowdbuy.herokuapp.com/shoppingcart",{productId:t,user_id:localStorage.getItem("id")},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})),console.log("ADDED TO CART")):s||0==n||(n-=1,localStorage.setItem(a,n)),e.setState({q:localStorage.getItem(a)}),console.log(localStorage.getItem(a))},e.find=function(e){return localStorage.getItem("id")==e},e.remove=function(){b.a.post("https://crowdbuy.herokuapp.com/product",{userId:localStorage.getItem("id")},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e),window.location.reload()}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:this.state.loading?Object(c.jsx)("div",{children:"Loading "}):Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"grid-container ",children:this.state.items.map((function(t,a){return Object(c.jsxs)("div",{style:{height:"500px",width:"350px",margin:"20px auto"},class:"card",children:[Object(c.jsx)("div",{class:"card-image waves-effect waves-block waves-light",children:Object(c.jsx)("img",{style:{height:"350px",width:"350px",margin:"auto"},class:"activator",src:t.URL})}),Object(c.jsxs)("div",{class:"card-content",children:[Object(c.jsxs)("span",{class:"card-title activator grey-text text-darken-4",children:[t.title,Object(c.jsx)("i",{class:"material-icons right"})]}),Object(c.jsx)("p",{children:Object(c.jsxs)("a",{children:["$",t.price]})})]}),Object(c.jsxs)("div",{class:"card-reveal",children:[Object(c.jsxs)("span",{class:"card-title grey-text text-darken-4",children:[t.title,Object(c.jsx)("i",{class:"material-icons right",children:"close"})]}),Object(c.jsx)("p",{children:t.description})]}),Object(c.jsxs)("button",{class:"btn waves-effect waves-light black",onClick:function(){e.cart(t._id,t.title,a,!0)},type:"submit",name:"action",children:["Add To Cart  (",localStorage.getItem(t.title),")"]}),Object(c.jsx)("button",{class:"btn waves-effect waves-light red",onClick:function(){e.cart(t._id,t.title,a,!1)},type:"submit",name:"action",children:"Remove From Cart  "}),e.find(t.userId)?Object(c.jsx)("button",{class:"btn waves-effect waves-light white",onClick:function(){e.remove()},type:"submit",style:{color:"black"},name:"action",children:"Delete"}):Object(c.jsx)("div",{})]})}))})})})}}]),a}(n.a.Component);a(45);function g(e){e.history;return Object(c.jsx)("div",{children:"Welcome to Blue Buy Sky"})}var p=a(4),m=a(34),x=a(5),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",errorMessage:"",checking:!1},e.handlechange=function(t){var a="checkbox"===t.target.type;e.setState(Object(m.a)({},t.target.name,a?t.target.checked:t.target.value))},e.handlesubmit=function(t){t.preventDefault(),b.a.post("https://crowdbuy.herokuapp.com/login",{email:e.state.email,password:e.state.password}).then((function(t){e.setState({errorMessage:"You are logging in"}),console.log(t.data),localStorage.setItem("jwt",t.data[0]),localStorage.setItem("id",t.data[1]),localStorage.setItem("name",t.data[2]),console.log("login"),console.log(localStorage.getItem("jwt")),console.log(localStorage.getItem("id")),e.props.history.push("/shop")}),(function(t){e.setState({errorMessage:t.response.data}),console.log(t.response.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{style:{maxWidth:"550px",margin:"0px auto"},className:"form",children:Object(c.jsx)("form",{onSubmit:this.handlesubmit,children:Object(c.jsxs)("div",{className:"form-in",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("u",{children:"Log in"})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",className:"form-control",name:"email",onChange:this.handlechange,placeholder:"Enter email"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{name:"password",type:"password",value:this.state.password,onChange:this.handlechange,className:"form-control",placeholder:"Enter password"})]}),Object(c.jsx)("button",{style:{backgroundColor:"black"},type:"submit",className:"btn btn-dark btn-lg btn-block",children:"Sign in"}),this.state.errorMessage&&Object(c.jsxs)("div",{children:[this.state.errorMessage," "]})]})})})}}]),a}(n.a.Component),f=Object(x.f)(O);function v(e){return Object(c.jsx)("div",{className:"nav-wrapper",children:Object(c.jsxs)("nav",{className:"black",children:[null===localStorage.getItem("jwt")?Object(c.jsx)("a",{class:"brand-logo center",children:"Crowd Buy"}):Object(c.jsxs)("a",{s:!0,class:"brand-logo center",children:["Welcome ",localStorage.getItem("name")," !"]}),Object(c.jsx)("ul",{children:null!==localStorage.getItem("jwt")?Object(c.jsxs)("ul",{children:[Object(c.jsxs)("ul",{id:"nav-mobile",class:"left hide-on-med-and-down",children:[Object(c.jsx)("li",{children:Object(c.jsx)(p.b,{to:"/new",children:Object(c.jsx)("a",{style:{width:"50px",height:"50px"},className:"btn-floating btn-large waves-effect waves-light red",children:Object(c.jsx)("i",{style:{position:"absolute",paddingBottom:"30px"},className:"material-icons",children:"add"})})})}),Object(c.jsxs)("ul",{id:"nav-mobile center",class:"left hide-on-med-and-down ",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/about",children:" About"})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/shop",children:" Shop"})]})]}),Object(c.jsx)("li",{children:"   "}),Object(c.jsx)("li",{children:"   "})]}),Object(c.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/cart",children:"Cart"})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/logout",children:"Logout"})]}),Object(c.jsx)("li",{children:"   "}),Object(c.jsx)("li",{children:"   "})]})]}):Object(c.jsxs)("ul",{children:[Object(c.jsxs)("ul",{id:"nav-mobile center",class:"left hide-on-med-and-down ",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/about",children:" About"})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/shop",children:" Shop"})]})]}),Object(c.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/register",children:" Register"})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(p.b,{to:"/login",children:" Login"})]}),Object(c.jsx)("li",{children:"  "}),Object(c.jsx)("li",{children:"   "})]})]})})]})})}var w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e,c;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(c=t.call.apply(t,[this].concat(n))).state=(e={id:"",name:"",email:"",password:"",errorMessage:""},Object(m.a)(e,"errorMessage",""),Object(m.a)(e,"checking",!1),e),c.handlechange=function(e){var t="checkbox"===e.target.type;c.setState(Object(m.a)({},e.target.name,t?e.target.checked:e.target.value))},c.handlesubmit=function(e){e.preventDefault(),b.a.post("https://crowdbuy.herokuapp.com/register",{name:c.state.name,email:c.state.email,password:c.state.password}).then((function(e){console.log(e.data._id),c.setState({errorMessage:"You are now registered!",id:e.data._id}),console.log(c.state.id),c.props.history.push("https://gifted-jang-7de344.netlify.app/login"),window.location.reload(!1)}),(function(e){c.setState({errorMessage:e.response.data}),console.log(e.response.data)}))},c}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{style:{maxWidth:"550px",margin:"0px auto"},className:"form",children:Object(c.jsxs)("form",{onSubmit:this.handlesubmit,children:[Object(c.jsx)("h3",{children:"Register"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Full Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"name",onChange:this.handlechange})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",onChange:this.handlechange})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",onChange:this.handlechange})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block black",children:"Register"}),Object(c.jsx)("div",{}),this.state.errorMessage&&Object(c.jsxs)("div",{className:"error",children:[" ",this.state.errorMessage," "]})]})})}}]),a}(n.a.Component),y=Object(x.f)(w),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={local:localStorage.getItem("id"),items:[],a:0,price:0,price_each:0},e.componentDidMount=function(){console.log("mounted"),localStorage.setItem("total",0),console.log("mounted"),console.log(localStorage.getItem("total")),b.a.get("https://crowdbuy.herokuapp.com/getcart",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),e.setState({items:t.data,total:0}),console.log(t.data),e.sum()}))},e.delete=function(e,t){b.a.post("https://crowdbuy.herokuapp.com/getcart",{data:e},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)}));var a=parseFloat(localStorage.getItem("total"));localStorage.setItem("total",a-t),window.location.reload(!1)},e.sum=function(){var t=0;e.state.items.map((function(e,a){return t+=parseFloat(e.price)*parseFloat(localStorage.getItem(e.title))})),e.setState({price:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{style:{margin:"auto",width:"25%"},children:[Object(c.jsxs)("div",{style:{alignContent:"center"},class:"col s12 m6 ",children:[Object(c.jsxs)("div",{style:{height:"auto",width:"450px"},class:"card black",children:[Object(c.jsxs)("div",{class:"card-content white-text",children:[Object(c.jsxs)("ul",{class:"collection with-header",children:[Object(c.jsx)("li",{class:"collection-header red darken-2",children:Object(c.jsx)("h4",{children:"Shopping Cart"})}),this.state.items.map((function(t,a){return Object(c.jsx)("div",{class:"column",children:0==localStorage.getItem(t.title)?Object(c.jsx)("div",{}):Object(c.jsx)("li",{style:{color:"black"},class:"collection-item ",children:Object(c.jsxs)("div",{children:[t.title," $",parseFloat(t.price)*parseFloat(localStorage.getItem(t.title)),Object(c.jsx)("a",{class:"secondary-content ",children:Object(c.jsx)("a",{onClick:function(){e.delete(t._id,parseFloat(t.price)*parseFloat(localStorage.getItem(t.title)))},class:"waves-effect waves-light btn-medium black-text",children:"Remove All"})})]})})})})),Object(c.jsx)("li",{class:"collection-header lighten-2",children:Object(c.jsxs)("h5",{style:{color:"black"},children:["$ ",this.state.price," "]})})," "]})," "]})," "]}),"   "]})," "]})}}]),a}(n.a.Component),k=Object(x.f)(S),I=(a(471),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={title:"",description:"",loaded:!1,img:" ",errorMessage:""},e.fileSelectedHandler=function(t){var a=new FileReader;a.readAsDataURL(t.target.files[0]),a.onloadend=function(){console.log(a.result),console.log("true"),e.setState({img:a.result,loaded:!0}),console.log(a.result)}},e.handlechange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.handlesubmit=function(t){t.preventDefault(),e.state.loaded?b.a.post("https://crowdbuy.herokuapp.com/product",{title:e.state.title,description:e.state.description,price:e.state.price,URL:e.state.img,userId:localStorage.getItem("id")}).then((function(t){e.setState({errorMessage:"Item has been added Successfully!"}),e.props.history.push("/shop")}),(function(t){e.setState({errorMessage:"Please Try Agin, All Entries Are Required"})})):e.setState({errorMessage:"Please Try Agin, All Entries Are Required"})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{style:{maxWidth:"550px",margin:"0px auto"},className:"row",children:Object(c.jsx)("div",{class:"col s12 m6",children:Object(c.jsx)("div",{class:"card blue-grey darken-1",children:Object(c.jsxs)("div",{class:"card-content white-text",children:[Object(c.jsx)("span",{class:"card-title",children:"Product"}),Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("div",{class:"row",children:Object(c.jsxs)("form",{class:"col s12",children:[Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{class:"input-field col s6",children:[Object(c.jsx)("input",{id:"input_text",type:"text",onChange:this.handlechange,name:"title","data-length":"10"}),Object(c.jsx)("label",{for:"input_text",children:"Product Title"})]}),Object(c.jsxs)("div",{class:"input-field col s6",children:[Object(c.jsx)("input",{id:"input_text",type:"text",onChange:this.handlechange,name:"price","data-length":"10"}),Object(c.jsx)("label",{for:"input_text",children:"Price"})]})]}),Object(c.jsx)("div",{class:"row",children:Object(c.jsxs)("div",{class:"input-field col s12",children:[Object(c.jsx)("textarea",{id:"textarea2",onChange:this.handlechange,name:"description",class:"materialize-textarea","data-length":"120"}),Object(c.jsx)("label",{for:"textarea2",children:"Description"})]})}),Object(c.jsx)("div",{class:"row",children:Object(c.jsx)("div",{class:"input-field col s12",children:Object(c.jsx)("input",{type:"file",onChange:this.fileSelectedHandler})})}),Object(c.jsxs)("button",{onClick:this.handlesubmit,class:"btn waves-effect waves-light",type:"submit",name:"action",children:["Add Product",Object(c.jsx)("i",{style:{position:"absolute"},class:"material-icons",children:"add_circle"})]}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{children:this.state.errorMessage})]})})]})]})})})})}}]),a}(n.a.Component)),C=Object(x.f)(I),A=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={items:[],loading:!0},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"item"})}}]),a}(n.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.clear(),this.props.history.push("/login")}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"Logout"})})}}]),a}(n.a.Component),M=Object(x.f)(N),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={quantity:0},e.loggedout=function(){e.setState({quantity:0}),console.log(e.quantity)},e.check=function(t){return 0!=e.state.quantity||(console.log(t),t.map((function(e,t){localStorage.setItem(e.title,0)})),e.setState({quantity:1}),!1)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/login",render:function(){return Object(c.jsx)(f,{})}}),Object(c.jsx)(x.a,{path:"/shop",render:function(){return Object(c.jsx)(u,{quantity:e.state.quantity,check:e.check})}}),Object(c.jsx)(x.a,{path:"/about",exact:!0,component:g}),Object(c.jsx)(x.a,{path:"/new",exact:!0,component:C}),Object(c.jsx)(x.a,{path:"/register",exact:!0,component:y}),Object(c.jsx)(x.a,{path:"/logout",render:function(){return Object(c.jsx)(M,{loggedout:e.loggedout})}}),Object(c.jsx)(x.a,{path:"/cart",exact:!0,component:k}),Object(c.jsx)(x.a,{path:"/shop/:id",exact:!0,component:A}),Object(c.jsx)(x.a,{path:"/",exact:!0,component:g})]})]})})}}]),a}(n.a.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,478)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),D()}},[[477,1,2]]]);
//# sourceMappingURL=main.05cf1ac6.chunk.js.map