(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c13b2fb"],{"4bd4":function(t,e,a){"use strict";var r=a("58df"),s=a("7e2b"),i=a("3206");e["a"]=Object(r["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"787b":function(t,e,a){"use strict";a.r(e);var r=a("8336"),s=a("99d9"),i=a("62ad"),l=a("a523"),n=a("4bd4"),h=a("0fd9"),o=a("b974"),c=a("8654"),d=function(){var t=this,e=t._self._c;return e(l["a"],{attrs:{id:"cal-thread",fluid:"",tag:"section"}},[e(h["a"],[e(i["a"],{attrs:{cols:"12",md:"6"}},[e("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",icon:"mdi-bolt",title:"计算螺纹钢根数"}},[e(n["a"],{staticClass:"mt-5"},[e(o["a"],{attrs:{label:"长度(m)",items:t.items},model:{value:t.threadLength,callback:function(e){t.threadLength=e},expression:"threadLength"}}),e(c["a"],{attrs:{label:"直径(mm)",color:"secondary",type:"number"},model:{value:t.threadCircle,callback:function(e){t.threadCircle=e},expression:"threadCircle"}}),e(c["a"],{attrs:{label:"重量(t)",color:"secondary",type:"number"},model:{value:t.threadWeight,callback:function(e){t.threadWeight=e},expression:"threadWeight"}})],1),e(h["a"],[e(i["a"],{attrs:{cols:"6",md:"6"}},[e(s["a"],{staticClass:"pl-0"},[e(r["a"],{attrs:{color:"dark","min-width":"100"},on:{click:function(e){return t.resetLeft()}}},[t._v("\n                                重置\n                            ")])],1)],1),e(i["a"],{attrs:{cols:"6",md:"6"}},[e(s["a"],{staticClass:"pl-0"},[e(r["a"],{attrs:{color:"success","min-width":"100"},on:{click:function(e){return t.comLeft()}}},[t._v("\n                                计算\n                            ")])],1)],1)],1),e(n["a"],{staticClass:"mt-5"},[e(c["a"],{attrs:{readonly:"",label:"根数",color:"secondary",type:"number"},model:{value:t.threadNumber,callback:function(e){t.threadNumber=e},expression:"threadNumber"}})],1)],1)],1),e(i["a"],{attrs:{cols:"12",md:"6"}},[e("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",icon:"mdi-bolt",title:"计算螺纹钢重量"}},[e(n["a"],{staticClass:"mt-5"},[e(o["a"],{attrs:{label:"长度(m)",items:t.items},model:{value:t.threadLength2,callback:function(e){t.threadLength2=e},expression:"threadLength2"}}),e(c["a"],{attrs:{label:"直径(mm)",color:"secondary",type:"number"},model:{value:t.threadCircle2,callback:function(e){t.threadCircle2=e},expression:"threadCircle2"}}),e(c["a"],{attrs:{label:"根数",color:"secondary",type:"number"},model:{value:t.threadNumber2,callback:function(e){t.threadNumber2=e},expression:"threadNumber2"}})],1),e(h["a"],[e(i["a"],{attrs:{cols:"6",md:"6"}},[e(s["a"],{staticClass:"pl-0"},[e(r["a"],{attrs:{color:"dark","min-width":"100"},on:{click:function(e){return t.resetRight()}}},[t._v("\n                                重置\n                            ")])],1)],1),e(i["a"],{attrs:{cols:"6",md:"6"}},[e(s["a"],{staticClass:"pl-0"},[e(r["a"],{attrs:{color:"success","min-width":"100"},on:{click:function(e){return t.comRight()}}},[t._v("\n                                计算\n                            ")])],1)],1)],1),e(n["a"],{staticClass:"mt-5"},[e(c["a"],{attrs:{readonly:"",label:"重量（t）",color:"secondary",type:"number"},model:{value:t.threadWeight2,callback:function(e){t.threadWeight2=e},expression:"threadWeight2"}})],1)],1)],1)],1),e("base-material-snackbar",t._b({attrs:{timeout:2e3,type:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},"base-material-snackbar",{top:!0,center:!0},!1),[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.snackbarMsg))])])],1)},u=[],m={name:"Thread",data:function(){return{snackbar:!1,color:"info",snackbarMsg:"",dialog:!1,densityValue:9,density:7.85,items:[3,6,9,12],threadNumber:0,threadCircle:0,threadWeight:0,threadLength:0,threadNumber2:0,threadCircle2:0,threadWeight2:0,threadLength2:0}},methods:{alertErr:function(t,e){this.snackbar=!0,this.color=!0===t?"error":"info",this.snackbarMsg=e},comLeft:function(){if(0==this.threadCircle||0==this.threadWeight||0==this.threadLength)return this.alertErr(!0,"请输入必要的数值"),!1;let t=10*parseFloat(this.threadCircle),e=parseFloat(this.threadLength)/10,a=t/2*(t/2)*Math.PI*e,r=parseFloat(this.density)*a,s=1e3*this.threadWeight*1e3;this.threadNumber=s/r},comRight:function(){if(0==this.threadCircle2||0==this.threadLength2||0==this.threadNumber2)return this.alertErr(!0,"请输入必要的数值"),!1;let t=10*parseFloat(this.threadCircle2),e=parseFloat(this.threadLength2)/10,a=t/2*(t/2)*Math.PI*e,r=parseFloat(this.density)*a*this.threadNumber2;this.threadWeight2=r/1e3/1e3},resetLeft:function(){this.threadCircle=0,this.threadWeight=0,this.threadNumber=0},resetRight:function(){this.threadCircle2=0,this.threadNumber2=0,this.threadWeight2=0}}},b=m,p=a("2877"),f=Object(p["a"])(b,d,u,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3c13b2fb.da0e06c3.js.map