(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["systemabb"],{"0cf1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"common-el-main-padding h"},[a("router-view")],1)],1)},n=[],s=a("d225"),i=a("308d"),o=a("6bb5"),c=a("4e2b"),u=a("9ab4"),l=a("60a3"),m=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(l["c"]);m=u["a"]([Object(l["a"])({})],m);var f=m,b=f,d=a("0c7c"),h=Object(d["a"])(b,r,n,!1,null,"53c48e5c",null);e["default"]=h.exports},"3c0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-menuabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"094bfc1d",null);e["default"]=$.exports},"4c3d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-authabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-authabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"71f64e78",null);e["default"]=$.exports},"4f0a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-userabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"0bdfc975",null);e["default"]=$.exports},"6ded":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-dictionaryabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"ad4fc52a",null);e["default"]=$.exports},7655:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-organizationabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-organizationabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"75124743",null);e["default"]=$.exports},"7ab1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-roleabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-roleabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"25d433c6",null);e["default"]=$.exports},"81d2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-organizationabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"df095776",null);e["default"]=$.exports},9148:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-userabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-userabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"66fddadb",null);e["default"]=$.exports},ab92:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-authabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"3787220f",null);e["default"]=$.exports},bc11:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-dictionaryabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-dictionaryabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"6c3bc9a6",null);e["default"]=$.exports},c47b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),b=a("fab8"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(b["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(b["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabb-roleabb-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);d=m["a"]([Object(f["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"b8477e2a",null);e["default"]=$.exports},cafa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),b=a("fab8"),d=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(b["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabb-menuabb-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabb-menuabb-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);d=l["a"]([Object(m["a"])({})],d);var h=d,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"b909b922",null);e["default"]=$.exports}}]);
//# sourceMappingURL=systemabb.b86b0b4f.js.map