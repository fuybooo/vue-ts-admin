(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["systemabo"],{"0121":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-authabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-authabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"171cd91f",null);e["default"]=$.exports},"052e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-userabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-userabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"0c246582",null);e["default"]=$.exports},"24ae":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-organizationabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-organizationabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"70d007ea",null);e["default"]=$.exports},"2b8d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-dictionaryabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"434a4fca",null);e["default"]=$.exports},"377e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-organizationabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"2f870da4",null);e["default"]=$.exports},"393d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-dictionaryabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-dictionaryabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"ee486666",null);e["default"]=$.exports},"3ee8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-authabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"174e3f6e",null);e["default"]=$.exports},"5e2b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-roleabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-roleabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"6a0a8326",null);e["default"]=$.exports},6399:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-roleabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"f8b9436c",null);e["default"]=$.exports},"6f2a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-userabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"28b23258",null);e["default"]=$.exports},"7df8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("base-form",{ref:"form",attrs:{schema:t.schema,"is-row":"",inline:!1,"form-pattern":t.formPattern},on:{"update:formPattern":function(e){t.formPattern=e},"update:form-pattern":function(e){t.formPattern=e},submit:t.submit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},n=[],s=a("cebc"),i=(a("386d"),a("d225")),o=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("4e2b"),m=a("9ab4"),f=a("60a3"),d=a("fab8"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.formPattern="create",t.id=null,t.schema=[{prop:"username",label:"用户名"}],t.form=Object(d["a"])(t.schema),t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.formPattern=this.$route.params.pattern,"view"!==this.formPattern&&"edit"!==this.formPattern||(this.id=this.$route.params.id,this.search())}},{key:"search",value:function(){var t=this;this.$req(this.$urls.user.get,{id:this.id}).then(function(e){0===e.head.errCode&&t.updateForm(e.data)})}},{key:"updateForm",value:function(t){Object(d["h"])(this.form,t)}},{key:"submit",value:function(){var t=this;this.$refs.form.$refs.form.validate(function(e){if(!e)return!1;t.$req(t.$urls.user["create"===t.formPattern?"create":"update"],Object(s["a"])({},t.form,t.id?{id:t.id}:{})).then(function(e){0===e.head.errCode&&(t.id=e.data.id,t.$router.push({name:"systemabo-menuabo-detail",params:{pattern:"view",id:e.data.id}}),t.formPattern="view"),t.$tip(e)})})}}]),e}(f["c"]);b=m["a"]([Object(f["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"2dd9cd08",null);e["default"]=$.exports},a4e2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"common-el-main-padding h"},[a("router-view")],1)],1)},n=[],s=a("d225"),i=a("308d"),o=a("6bb5"),c=a("4e2b"),u=a("9ab4"),l=a("60a3"),m=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(l["c"]);m=u["a"]([Object(l["a"])({})],m);var f=m,d=f,b=a("0c7c"),h=Object(b["a"])(d,r,n,!1,null,"40ee7362",null);e["default"]=h.exports},cc75:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"h"},[a("el-main",{staticClass:"h"},[a("div",{staticClass:"common-query"},[a("base-form",{attrs:{schema:t.schema,inline:""},on:{create:t.handleClick},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),a("base-table",{ref:"table",attrs:{url:t.url,columns:t.columns,params:t.form},on:{"update:columns":function(e){t.columns=e},"update:params":function(e){t.form=e}},scopedSlots:t._u([{key:"op",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.toEdit(r)}}},[t._v("编辑")]),a("base-confirm",{staticClass:"ml10",on:{confirm:function(e){return t.del(r)}}})]}}])})],1)],1)},n=[],s=(a("386d"),a("d225")),i=a("b0b4"),o=a("308d"),c=a("6bb5"),u=a("4e2b"),l=a("9ab4"),m=a("60a3"),f=a("d9b7"),d=a("fab8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.schema=[{prop:"keywords",label:"搜索"}],t.form=Object(d["a"])(t.schema),t.url=t.$urls.user.list,t.columns=[{prop:"username",label:"用户名"},{contentSlot:"op",label:"操作",props:{width:f["a"].w180}}],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"handleClick",value:function(){this.$router.push({name:"systemabo-menuabo-detail",params:{pattern:"create"}})}},{key:"del",value:function(t){var e=this;this.$req(this.$urls.user.delete,{id:t.id}).then(function(t){0===t.head.errCode&&e.$refs.table.search(!0),e.$tip(t)})}},{key:"toEdit",value:function(t){this.$router.push({name:"systemabo-menuabo-detail",params:{pattern:"edit",id:t.id}})}}]),e}(m["c"]);b=l["a"]([Object(m["a"])({})],b);var h=b,p=h,v=a("0c7c"),$=Object(v["a"])(p,r,n,!1,null,"48a1ae16",null);e["default"]=$.exports}}]);
//# sourceMappingURL=systemabo.f85bf512.js.map