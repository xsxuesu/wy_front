(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d24fe0b"],{"0fd9":function(t,e,i){"use strict";i("4b85");var a=i("2b0e"),s=i("d9f7"),n=i("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,a)=>(i[t+Object(n["E"])(a)]=e(),i),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),p=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:p})),h=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:h})),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(f)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,i){let a=b[t];if(null!=i){if(e){const i=e.replace(t,"");a+="-"+i}return a+="-"+i,a.toLowerCase()}}const y=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:p},...u,alignContent:{type:String,default:null,validator:h},...f},render(t,{props:e,data:i,children:a}){let n="";for(const s in e)n+=String(e[s]);let o=y.get(n);if(!o){let t;for(t in o=[],g)g[t].forEach(i=>{const a=e[i],s=m(t,i,a);s&&o.push(s)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(n,o)}return t(e.tag,Object(s["a"])(i,{staticClass:"row",class:o}),a)}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("fe6c"),s=i("58df");function n(t,e=[]){return Object(s["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},4093:function(t,e,i){"use strict";i.r(e);var a=i("62ad"),s=i("a523"),n=(i("b5b6"),i("8dd9")),o=i("3a66"),r=i("d10f"),l=i("58df"),c=i("80d2"),d=Object(l["a"])(n["a"],Object(o["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...n["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...n["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(c["h"])(t),left:Object(c["h"])(this.computedLeft),right:Object(c["h"])(this.computedRight),bottom:Object(c["h"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),p=i("132d"),u=i("0fd9"),h=i("2fa4"),f=function(){var t=this,e=t._self._c;return e(d,{attrs:{id:"pages-core-footer",absolute:"",color:"transparent",dark:""}},[e(s["a"],[e(u["a"],{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(i,s){return e(a["a"],{key:s,staticClass:"text-center",attrs:{cols:"6",md:"auto"}},[e("a",{staticClass:"mr-0",attrs:{href:i.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(i.text)}})])})),e(h["a"],{staticClass:"hidden-sm-and-down"}),e(a["a"],{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v("\n          © 2019, made with\n          "),e(p["a"],{attrs:{size:"20"}},[t._v("\n            mdi-heart\n          ")]),t._v("\n          by Creative Tim for a better web.\n        ")],1)])],2)],1)],1)},g=[],b={name:"PagesCoreFooter",data:()=>({links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]})},m=b,y=(i("4799"),i("2877")),v=Object(y["a"])(m,f,g,!1,null,null,null);e["default"]=v.exports},4799:function(t,e,i){"use strict";i("4b27")},"4b27":function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("2b0e");function s(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:a,children:s}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}var n=i("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let s;const{attrs:o}=i;return o&&(i.attrs={},s=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),a)}})},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2d24fe0b.f6bc96de.js.map