(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4f86a16"],{"7c15":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"p",(function(){return u})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return w})),n.d(t,"o",(function(){return k})),n.d(t,"n",(function(){return y})),n.d(t,"m",(function(){return _})),n.d(t,"l",(function(){return v}));var o=n("cee4"),a=n("4360");function r(e,t){return new Promise((n,a)=>{o["a"].get(e,{params:t}).then(e=>{n(e.data)}).catch(e=>{a(e)})})}function s(e,t,n){return new Promise((a,r)=>{null==n?o["a"].post(e,t).then(e=>{a(e.data)}).catch(e=>{r(e)}):o["a"].post(e,t,n).then(e=>{a(e.data)}).catch(e=>{r(e)})})}console.log("production"),o["a"].defaults.baseURL="http://www.wanyeel.com:5001/api",o["a"].defaults.timeout=1e4,o["a"].defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",o["a"].interceptors.request.use(e=>{const t=a["a"].state.token;return t&&(e.headers.access_token=t),e},e=>Promise.error(e)),o["a"].interceptors.response.use(e=>200===e.status?Promise.resolve(e):Promise.reject(e),e=>{if(console.log(e),e.response.status){switch(e.response.status){case 401:(void 0).$router.replace({path:"/login",query:{redirect:(void 0).$router.currentRoute.fullPath}});break;case 403:localStorage.removeItem("token"),a["a"].commit("setToken",null),setTimeout(()=>{(void 0).$router.replace({path:"/login",query:{redirect:(void 0).$router.currentRoute.fullPath}})},1e3);break;case 404:break;default:break}return Promise.reject(e.response)}});const i=(e,t)=>r(e,t),c=e=>s("/login",e),l=e=>s("/send_sms",e),d=e=>s("/send_email",e),u=e=>s("/update_password",e),h=e=>s("/check_keys",e),p=e=>s("/register",e),f=e=>s("/save_report",e),g=e=>s("/save_spec",e),m=e=>s("/del_spec",e),b=e=>r("/get_spec/parentOne",e),w=e=>r("/get_spec/parentArea",e),k=e=>s("/stocks_1d_by_weight",e),y=e=>s("/stocks_1d_by_len",e),_=e=>s("/stocks_2d_by_weight",e),v=e=>s("/stocks_2d_by_area",e,{timeout:3e6})},d474:function(e,t,n){"use strict";n.r(t);var o=n("8336"),a=n("99d9"),r=n("62ad"),s=n("a523"),i=n("adda"),c=n("0fd9"),l=n("0789"),d=n("8654"),u=function(){var e=this,t=e._self._c;return t(s["a"],{attrs:{id:"login","fill-height":"",tag:"section"}},[t(c["a"],{attrs:{justify:"center"}},[t(l["e"],{attrs:{appear:""}},[t("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning",light:"","max-width":"100%",width:"400"},scopedSlots:e._u([{key:"heading",fn:function(){return[t("div",{staticClass:"text-center"},[t("h1",{staticClass:"display-2 font-weight-bold mb-2"},[e._v("\n              忘记密码\n            ")])])]},proxy:!0}])},[t(a["b"],{staticClass:"text-center"},["account"==e.loginType?t(c["a"],[t(r["a"],{attrs:{cols:"12"}},[t(d["a"],{attrs:{color:"secondary",label:"手机号或邮箱...",rules:e.emailValidation,"prepend-icon":"mdi-file-phone-outline"},model:{value:e.phoneOrmail,callback:function(t){e.phoneOrmail=t},expression:"phoneOrmail"}})],1),t(r["a"],{attrs:{cols:"8"}},[t(d["a"],{attrs:{color:"secondary",label:"图片验证码...",rules:e.codeValidation,"prepend-icon":"mdi-alert-decagram"},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}})],1),t(r["a"],{attrs:{cols:"4"}},[t(i["a"],{attrs:{src:this.base64image,height:"40",width:"120",contain:""},on:{click:function(t){return e.reloadImg()}}}),t("div",{attrs:{align:"right"}},[t("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"8px",color:"#3c4858"},attrs:{align:"right"}},[t("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:"#",rel:"noopener"},on:{click:function(t){return e.reloadImg()}}},[e._v("\n                    点击刷新\n                  ")])])])],1),t(r["a"],{attrs:{cols:"8"}},[t(d["a"],{attrs:{color:"secondary",label:"验证码...",rules:e.codeValidation,"prepend-icon":"mdi-alert-decagram"},model:{value:e.validCode,callback:function(t){e.validCode=t},expression:"validCode"}})],1),t(r["a"],{attrs:{cols:"4","text-center":""}},[t(o["a"],{staticClass:"ma-1",attrs:{small:"",color:"warning",depressed:""},on:{click:function(t){return e.sendValidCode()}}},[e._v("\n                "+e._s(this.codeMsg)+"\n              ")])],1),t(r["a"],{attrs:{cols:"12"}},[t(d["a"],{attrs:{label:"密码...","append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:e.passwordValidation,type:e.show?"text":"password",color:"secondary","prepend-icon":"mdi-lock-outline"},on:{"click:append":function(t){t.preventDefault(),e.show=!e.show}},model:{value:e.loginPassword,callback:function(t){e.loginPassword=t},expression:"loginPassword"}})],1),t(r["a"],{attrs:{cols:"12"}},[t(d["a"],{attrs:{label:"密码...","append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:e.passwordValidation,type:e.show2?"text":"password",color:"secondary","prepend-icon":"mdi-lock-outline"},on:{"click:append":function(t){t.preventDefault(),e.show2=!e.show2}},model:{value:e.reloginPassword,callback:function(t){e.reloginPassword=t},expression:"reloginPassword"}})],1)],1):e._e(),t("pages-btn",{staticClass:"v-btn--text white--text",attrs:{large:"",color:"warning",depressed:""},on:{click:function(t){return e.reset()}}},[e._v("\n            修改密码\n          ")]),t("div",{staticClass:"text-center grey--text body-1 font-weight-light"},[t("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:"/pages/register",rel:"noopener"}},[e._v("\n              还没有账号，注册一个\n            ")])])],1)],1)],1)],1),t("base-material-snackbar",e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"base-material-snackbar",{top:!0,center:!0},!1),[t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.snackbarMsg))])])],1)},h=[],p=n("ec26"),f=n("7c15"),g={name:"Forget",components:{PagesBtn:()=>n.e("chunk-2d22e0db").then(n.bind(null,"f9b4"))},created(){this.loginuuid=Object(p["a"])(),this.getImage()},data:function(){return{show:!1,show2:!1,loginPassword:"",reloginPassword:"",phoneOrmail:"",imgCode:"",validCode:"",loginType:"account",loginuuid:"",base64image:"",snackbar:!1,color:"info",snackbarMsg:"",codeMsg:"验证码",validCodeBtn:!1}},computed:{emailValidation:function(){return[e=>this.checkInput_forValidate(e)||"手机号或邮箱格式不对"]},passwordValidation:function(){return[e=>this.checkLen_forValidate(e,6)||"密码至少6位"]},codeValidation:function(){return[e=>this.checkeqLen_forValidate(e,4)||"验证码4位"]}},methods:{checkInput_forValidate:function(e){const t=/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/,n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;return!!t.test(e)||!!n.test(e)},checkLen_forValidate:function(e,t){return!(e&&e.length<t)},checkeqLen_forValidate:function(e,t){return!(!e||e.length!=t)},alertErr:function(e,t){this.snackbar=!0,this.color=!0===e?"error":"info",this.snackbarMsg=t},reloadImg:function(){this.getImage()},getImage:function(){let e="/captcha/"+this.loginuuid;Object(f["a"])(e,{}).then(e=>{console.log(e),this.base64image="data:image/png;base64,"+e.data,console.log(this.base64image)}).catch(e=>{console.log("Network/Server error"),console.error(e)})},checkInput:function(e){const t=/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/,n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;return t.test(e)?"phone":n.test(e)?"email":"手机号码或邮箱格式不正确，请重新填写"},sendValidCode:function(){if(this.validCodeBtn=!0,"phone"==this.checkInput(this.phoneOrmail)){let e={phone:this.phoneOrmail,vcode:this.imgCode,uuid:this.loginuuid};Object(f["k"])(e).then(e=>{this.alertErr(!1,"验证码已发送到您的手机，请查收并输入验证码！")}).catch(e=>{this.alertErr(!0,e)})}if("email"==this.checkInput(this.phoneOrmail)){let e={email:this.phoneOrmail,vcode:this.imgCode,uuid:this.loginuuid};Object(f["j"])(e).then(e=>{this.alertErr(!1,"验证码已发送到您的邮箱，请查收并输入验证码！")}).catch(e=>{this.alertErr(!0,e)})}},reset:function(){let e={email:"",phone:"",code:this.validCode,password:this.loginPassword};"email"==this.checkInput(this.phoneOrmail)&&(e={email:this.phoneOrmail,code:this.validCode,password:this.loginPassword}),"phone"==this.checkInput(this.phoneOrmail)&&(e={phone:this.phoneOrmail,code:this.validCode,password:this.loginPassword}),Object(f["p"])(e).then(e=>{if(0==e.code)return this.alertErr(!1,"密码已修改，请重新登录！"),void this.$router.replace("/pages/login");this.alertErr(!0,e.msg)}).catch(e=>{this.alertErr(!0,e)})}}},m=g,b=n("2877"),w=Object(b["a"])(m,u,h,!1,null,null,null);t["default"]=w.exports},ec26:function(e,t,n){"use strict";const o="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var a={randomUUID:o};let r;const s=new Uint8Array(16);function i(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}const c=[];for(let u=0;u<256;++u)c.push((u+256).toString(16).slice(1));function l(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}function d(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();e=e||{};const o=e.random||(e.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return l(o)}t["a"]=d}}]);
//# sourceMappingURL=chunk-c4f86a16.5c90ffb0.js.map