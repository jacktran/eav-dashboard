(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(e,t,n){"use strict";n(33),n(335)},335:function(e,t,n){},336:function(e,t,n){"use strict";n(289);var a=n(290),r=(n(295),n(300)),o=n(39),c=n(40),i=n(82),l=n(81),s=n(83),u=(n(296),n(294)),d=n(0),f=n.n(d),p=n(51),h=u.a.Option,b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,selectSources:[]},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.k)().then(function(t){var n=t.data;e.setState(function(e){return{selectSources:n,loading:!1}})})}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,n=e.getFieldError,o=(0,e.isFieldTouched)("select_source")&&n("select_source");return f.a.createElement(a.a.Item,{label:"Select Source",validateStatus:o?"error":"",help:o||""},t("select_source",{initialValue:"database",rules:[{required:!0,message:"Please select a source!"}]})(f.a.createElement(u.a,{placeholder:"Please select a source",showSearch:!0,notFoundContent:this.state.loading?f.a.createElement(r.a,{size:"small"}):null},this.state.selectSources.map(function(e){return f.a.createElement(h,{key:e},e)}))))}}]),t}(d.PureComponent);t.a=b},337:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var a=n(0),r=n(1),o=n(338),c=n.n(o),i=n(8),l=n.n(i),s=n(50),u=n(132),d=n(16),f=n(128),p=n(19);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,k(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,r=e.getPrefixCls,o=n.props,i=o.prefixCls,f=o.size,p=o.loading,h=o.className,m=void 0===h?"":h,v=o.disabled,k=r("switch",i),g=l()(m,(y(t={},"".concat(k,"-small"),"small"===f),y(t,"".concat(k,"-loading"),p),t)),O=p?a.createElement(d.a,{type:"loading",className:"".concat(k,"-loading-icon")}):null;return a.createElement(u.a,{insertExtraNode:!0},a.createElement(c.a,b({},Object(s.a)(n.props,["loading"]),{prefixCls:k,className:g,disabled:v||p,ref:n.saveSwitch,loadingIcon:O})))},Object(p.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a["Component"]),n=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return a.createElement(f.a,null,this.renderSwitch)}}])&&m(n.prototype,r),o&&m(n,o),t}();O.__ANT_SWITCH=!0,O.propTypes={prefixCls:r.string,size:r.oneOf(["small","default","large"]),className:r.string}},338:function(e,t,n){e.exports=n(339)},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=n(21);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(8),y=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=d(t).call(this,e),n=!r||"object"!==typeof r&&"function"!==typeof r?p(a):r,h(p(p(n)),"handleClick",function(e){var t=n.state.checked,a=n.props.onClick,r=!t;n.setChecked(r,e),a&&a(r,e)}),h(p(p(n)),"handleKeyDown",function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)}),h(p(p(n)),"handleMouseUp",function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)}),h(p(p(n)),"saveNode",function(e){n.node=e});var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,c=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,a=n.disabled,r=n.onChange;a||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,o=t.disabled,c=t.loadingIcon,i=t.checkedChildren,u=t.unCheckedChildren,d=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),f=this.state.checked,p=b((h(e={},n,!!n),h(e,a,!0),h(e,"".concat(a,"-checked"),f),h(e,"".concat(a,"-disabled"),o),e));return r.a.createElement("button",l({},d,{type:"button",role:"switch","aria-checked":f,disabled:o,className:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),c,r.a.createElement("span",{className:"".concat(a,"-inner")},f?i:u))}}])&&u(n.prototype,o),c&&u(n,c),t}();y.propTypes={className:c.a.string,prefixCls:c.a.string,disabled:c.a.bool,checkedChildren:c.a.any,unCheckedChildren:c.a.any,onChange:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,tabIndex:c.a.number,checked:c.a.bool,defaultChecked:c.a.bool,autoFocus:c.a.bool,loadingIcon:c.a.node},y.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(i.polyfill)(y),t.default=y},541:function(e,t,n){"use strict";n.r(t),n.d(t,"EditAttribute",function(){return F});n(174);var a=n(84),r=(n(176),n(88)),o=(n(175),n(103)),c=(n(334),n(337)),i=(n(295),n(300)),l=(n(289),n(290)),s=(n(286),n(288)),u=n(7),d=n.n(u),f=(n(279),n(280)),p=n(102),h=(n(283),n(284)),b=n(282),y=n(39),m=n(40),v=n(82),k=n(81),g=n(83),O=(n(296),n(294)),S=n(0),_=n.n(S),E=n(34),w=n(3),C=n(51),j=n(336),P=O.a.Option;var F=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,backendType:[],fetchingBT:!0,frontendType:[],fetchingFT:!0,showSelectSource:!1,values:{}},n.onSave=function(){var e=Object(b.a)(d.a.mark(function e(t){var a,r,o,c,i,l,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState(function(e){return{loading:!0}}),a=h.a.loading("Saving changes..",0),e.prev=2,r={data:{type:"attribute",attributes:Object(p.a)({},t)}},e.next=6,Object(C.n)({entity:n.props.entity,code:n.props.attribute},r,{});case 6:o=e.sent,n.props.dispatch(Object(w.s)({entity:n.props.entity,attribute:n.props.index,data:o})),a(),n.setState(function(e){return{loading:!1}}),h.a.success("Changes has been saved.",1).then(function(){n.props.close()}),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),"network"===e.t0.type?(c="Network Error",i=e.t0.message):"server"===e.t0.type&&500===e.t0.status?(c=e.t0.error.errors[0].title,i=e.t0.error.errors[0].detail):(l=n.props.form.setFields,s={},e.t0.error.errors.forEach(function(e){var n=e.source.pointer.split("/");s[n[n.length-1]]={touched:!0,value:t[n[n.length-1]],errors:[new Error(e.detail)]}}),l(s),c="Input Error",i=""),a(),f.a.error({message:c,description:i,duration:0}),n.setState(function(e){return{loading:!1}});case 19:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),n.handleFrontendChange=function(e){"select"===e?n.setState(function(e){return{showSelectSource:!0}}):n.setState(function(e){return{showSelectSource:!1}})},n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e?(Object.keys(e).forEach(function(t){e[t]=Object(p.a)({},e[t],{touched:!0})}),n.props.form.setFields(e)):n.onSave(t)})},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(C.f)().then(function(t){var n=t.data;e.setState(function(e){return{backendType:n,fetchingBT:!1}})}),Object(C.h)().then(function(t){var n=t.data;e.setState(function(e){return{frontendType:n,fetchingFT:!1}})});var t=h.a.loading("Loading Attribute data..",0);Object(C.d)({entity:this.props.entity,code:this.props.attribute}).then(function(n){var a=n.data,r=e.props.form.setFieldsValue,o=a.backend_type,c=a.is_required,i=a.is_filterable,l=a.is_searchable,s=a.frontend_label,u=a.frontend_type,d=a.source_class;e.setState(function(e){return Object(p.a)({},e,{showSelectSource:"select"===u})}),r({backend_type:o,is_required:!!c,is_filterable:!!i,is_searchable:!!l,frontend_label:s,frontend_type:u,select_source:d}),t()})}},{key:"render",value:function(){var e,t=this.props.form,n=t.getFieldDecorator,u=t.getFieldsError,d=t.getFieldError,f=t.isFieldTouched,p=f("frontend_label")&&d("frontend_label"),h=f("frontend_type")&&d("frontend_type"),b=f("is_required")&&d("is_required"),y=f("is_filterable")&&d("is_filterable"),m=f("is_searchable")&&d("is_searchable"),v=f("backend_type")&&d("backend_type");return _.a.createElement(l.a,{layout:"horizontal",onSubmit:this.handleSubmit},_.a.createElement(l.a.Item,{label:"Entity"},n("entity",{initialValue:this.props.entity})(_.a.createElement(s.a,{disabled:!0}))),_.a.createElement(l.a.Item,{label:"Code"},n("code",{initialValue:this.props.attribute})(_.a.createElement(s.a,{disabled:!0}))),_.a.createElement(l.a.Item,{label:"Frontend Label",validateStatus:p?"error":"",help:p||""},n("frontend_label",{initialValue:this.state.values.frontend_label,rules:[{required:!0,message:"Please input label!"}]})(_.a.createElement(s.a,{placeholder:"Frontend Label",autoComplete:"off",autoFocus:!0}))),_.a.createElement(l.a.Item,{label:"Frontend Type",validateStatus:h?"error":"",help:h||""},n("frontend_type",{initialValue:this.state.values.frontend_type,rules:[{required:!0,message:"Please select frontend type!"}]})(_.a.createElement(O.a,{placeholder:"Please select frontend type",showSearch:!0,notFoundContent:this.state.fetchingFT?_.a.createElement(i.a,{size:"small"}):null,onChange:this.handleFrontendChange},this.state.frontendType.map(function(e){return _.a.createElement(P,{key:e},e)})))),this.state.showSelectSource&&_.a.createElement(j.a,{form:this.props.form}),_.a.createElement(r.a,null,_.a.createElement(o.a,{xs:8,md:2},_.a.createElement(l.a.Item,{label:"Required",validateStatus:b?"error":"",help:b||""},n("is_required",{valuePropName:"checked",initialValue:!!this.state.values.is_required})(_.a.createElement(c.a,null)))),_.a.createElement(o.a,{xs:8,md:2},_.a.createElement(l.a.Item,{label:"Filterable",validateStatus:y?"error":"",help:y||""},n("is_filterable",{valuePropName:"checked",initialValue:!!this.state.values.is_filterable})(_.a.createElement(c.a,null)))),_.a.createElement(o.a,{xs:8,md:2},_.a.createElement(l.a.Item,{label:"Searchable",validateStatus:m?"error":"",help:m||""},n("is_searchable",{valuePropName:"checked",initialValue:!!this.state.values.is_searchable})(_.a.createElement(c.a,null))))),_.a.createElement(l.a.Item,{label:"Backend Type",validateStatus:v?"error":"",help:v||""},n("backend_type",{initialValue:this.state.values.backend_type,rules:[{required:!0,message:"Please select backend type!"}]})(_.a.createElement(O.a,{placeholder:"Please select backend type",notFoundContent:this.state.fetchingBT?_.a.createElement(i.a,{size:"small"}):null},this.state.backendType.map(function(e){return _.a.createElement(P,{key:e},e)})))),_.a.createElement(l.a.Item,null,_.a.createElement(a.a,{style:{marginRight:8},onClick:this.props.close},"Cancel"),_.a.createElement(a.a,{type:"primary",htmlType:"submit",loading:this.state.loading,disabled:(e=u(),Object.keys(e).some(function(t){return e[t]}))},"Save")))}}]),t}(S.PureComponent),T=l.a.create({name:"add_attribute"})(F);t.default=Object(E.c)()(T)}}]);