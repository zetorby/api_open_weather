(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports={main:"header_main__7B0ZW"}},129:function(e,t,a){e.exports={title:"weatherItemTitle_title__2quNa"}},130:function(e,t,a){e.exports={time:"weatherItemDate_time__1zB1j"}},132:function(e,t,a){e.exports={humidity:"weatherItemHumidity_humidity__mUFXU"}},133:function(e,t,a){e.exports={wind:"weatherItemWind_wind__27j7q"}},134:function(e,t,a){e.exports={btn:"buttonToggleTemperature_btn__1OndB"}},146:function(e,t,a){e.exports={wrapper:"app_wrapper__3PHsh"}},155:function(e,t,a){e.exports=a(305)},304:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),s=a(57),c=a(30),u=a(127);var l=Object(c.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}},itemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},itemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_IS_LOADING":return t.isLoading;default:return e}},responseErrorText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESPONSE_ERROR_TEXT":return t.text;default:return e}}});var m,p=Object(c.d)(l,m,Object(c.a)(u.a)),d=a(24),h=a(25),_=a(27),E=a(26),f=a(28),g=a(128),v=a.n(g),w=function(){return r.a.createElement("header",{className:v.a.main},r.a.createElement("h1",null,"Current weather in your city"))};function T(e){return{type:"ITEMS_IS_LOADING",isLoading:e}}var y=a(129),b=a.n(y),S=function(e){return r.a.createElement("h3",{className:b.a.title},e?e.data:null)},x=a(130),O=a.n(x),I=a(131),N=function(e){return r.a.createElement("span",{className:O.a.time},e.data?I(1e3*e.data).format("DD/MM/YYYY hh:mm A"):null)},C=function(e){var t="",a="";return e.data?(t="http://openweathermap.org/img/w/".concat(e.data[0].icon,".png"),r.a.createElement("img",{src:t,alt:e.data[0].description})):r.a.createElement("div",null,a)},j=a(85),D=a.n(j),R=function(e){var t;return e.data?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:D.a.temp},Math.floor(e.data.temp-273.15)),r.a.createElement("span",{className:D.a.active},"\xb0C")):r.a.createElement(r.a.Fragment,null,t)},F=a(132),L=a.n(F),k=function(e){return r.a.createElement("span",{className:L.a.humidity},e.data?"Humidity: ".concat(e.data.humidity,"%"):null)},A=a(133),M=a.n(A),q=function(e){return r.a.createElement("span",{className:M.a.wind},e.data?"Wind: ".concat(e.data.speed," meter/sec"):null)},H=a(86),W=a.n(H),X=function(e){var t;return e.data?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:W.a.temp},Math.floor(9*(e.data.temp-273.15)/5+32)),r.a.createElement("span",{className:W.a.active},"\xb0F")):r.a.createElement(r.a.Fragment,null,t)},K=a(134),U=a.n(K),B=function(e){var t;return e.data?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:U.a.btn,onClick:e.handleToggleTemperature},e.state?"Fahrenheit":"Celsius")):r.a.createElement(r.a.Fragment,null,t)},P=a(36),Y=a.n(P),G=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(_.a)(this,Object(E.a)(t).call(this,e))).handleToggleTemperature=function(){a.setState({isCelsius:!a.state.isCelsius})},a.state={isCelsius:!0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:Y.a.wrapper},r.a.createElement("div",{className:Y.a.top},r.a.createElement(S,{data:e.name}),r.a.createElement(N,{data:e.dt}),r.a.createElement(B,{state:this.state.isCelsius,data:e.main,handleToggleTemperature:this.handleToggleTemperature})),r.a.createElement("div",{className:Y.a.mid},r.a.createElement("div",{className:Y.a.left},r.a.createElement(C,{data:e.weather}),this.state.isCelsius?r.a.createElement(R,{data:e.main}):r.a.createElement(X,{data:e.main})),r.a.createElement("div",{className:Y.a.right},r.a.createElement(k,{data:e.main}),r.a.createElement(q,{data:e.wind}))))}}]),t}(r.a.Component),J=a(135),V=a.n(J),$=[],z=function(){$=[];for(var e=0;e<localStorage.length;e++)$.push(localStorage.key(e))};function Z(e){var t=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(""===t)return[];var a=new RegExp("^"+t,"i");return $.filter(function(e){return a.test(e)})}function Q(e){return e}function ee(e){return r.a.createElement("span",null,e)}var te=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(_.a)(this,Object(E.a)(t).call(this))).onChange=function(t,a){var n=a.newValue;a.method;e.setState({value:n}),e.props.handleInputChange(n)},e.onSuggestionsFetchRequested=function(t){var a=t.value;e.setState({suggestions:Z(a)})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={value:"",suggestions:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"Enter city...",value:t,onChange:this.onChange};return r.a.createElement(V.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:Q,renderSuggestion:ee,inputProps:n})}}]),t}(r.a.Component),ae=a(309),ne=function(e){return r.a.createElement(ae.a,{onKeyDown:e.handleKeyDown,onClick:e.handleSubmit},"Weather")},re=a(308),ie=function(){return r.a.createElement(re.a,{active:!0,inline:"centered"})},oe=te,se=a(89),ce=a.n(se),ue=a(44),le=a.n(ue),me=function(){return r.a.createElement("div",{className:le.a.error_indicator},r.a.createElement("span",{className:le.a.boom},"BOOM!"),r.a.createElement("span",{className:le.a.error_text},"something has gone terribly wrong"),r.a.createElement("span",{className:le.a.error_text},"(but we already sent droids to fix it)"))},pe=a(90),de=a.n(pe),he=function(e){return r.a.createElement("span",{className:de.a.not_found},"City",r.a.createElement("span",{className:de.a.city},e.city),e.responseErrorText)},_e=a(91),Ee=a.n(_e),fe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(_.a)(this,Object(E.a)(t).call(this,e))).saveLocalStorage=function(e,t){var a=t,n=JSON.stringify(e);localStorage.setItem("".concat(a),n),z()},a.handleSubmit=function(){a.props.fetchData(a.state.city)},a.handleInputChange=function(e){a.setState({city:e})},a.handleKeyDown=function(e){"Enter"===e.key&&a.props.fetchData(a.state.city)},a.state={data:{},city:"",responseErrorText:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.data!==e.items||this.state.responseErrorText!==e.responseErrorText}},{key:"componentWillUpdate",value:function(e,t,a){this.setState({data:e.items,responseErrorText:e.responseErrorText}),this.saveLocalStorage(e.items,e.items.name)}},{key:"render",value:function(){var e;return e=this.state.responseErrorText.length>1?r.a.createElement(he,{responseErrorText:this.state.responseErrorText,city:this.state.city}):r.a.createElement(G,{data:this.state.data}),this.props.hasErrored?r.a.createElement(me,null):this.props.isLoading?r.a.createElement(ie,null):r.a.createElement("div",{onKeyDown:this.handleKeyDown,className:Ee.a.wrapper},r.a.createElement("div",{className:Ee.a.top_row},r.a.createElement(ce.a,{transitionName:"left",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},r.a.createElement(oe,{handleInputChange:this.handleInputChange})),r.a.createElement(ce.a,{transitionName:"right",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},r.a.createElement(ne,{handleSubmit:this.handleSubmit}))),e)}}]),t}(n.Component),ge=Object(s.b)(function(e){return{items:e.items,hasErrored:e.itemsHasErrored,isLoading:e.itemsIsLoading,responseErrorText:e.responseErrorText}},function(e){return{fetchData:function(t){return e(function(e){var t="".concat("http://api.openweathermap.org/data/2.5/","weather?q=").concat(e,"&appid=").concat("035dbcfcf47bf628b716a6443336475f");return function(e){e(T(!0)),fetch(t,{method:"get"}).then(function(t){if(!t.ok)throw e(T(!1)),e({type:"RESPONSE_ERROR_TEXT",text:t.statusText}),Error(t.statusText);return e(T(!1)),t}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"ITEMS_FETCH_DATA_SUCCESS",items:e}}(t))}).catch(function(){return e({type:"ITEMS_HAS_ERRORED",hasErrored:!0})})}}(t))}}})(function(e){return r.a.createElement(fe,e)}),ve=a(146),we=a.n(ve),Te=function(e){function t(){return Object(d.a)(this,t),Object(_.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("div",{className:we.a.wrapper},r.a.createElement(ge,null)))}}]),t}(n.Component);a(303),a(304);o.a.render(r.a.createElement(s.a,{store:p},r.a.createElement(Te,null)),document.getElementById("root"))},36:function(e,t,a){e.exports={wrapper:"weatherItem_wrapper__3DsFX",top:"weatherItem_top__2B3US",mid:"weatherItem_mid__VSiAX",left:"weatherItem_left__nFcdG",right:"weatherItem_right__3qjfD"}},44:function(e,t,a){e.exports={error_indicator:"errorIndicator_error_indicator__1LDuX",boom:"errorIndicator_boom__3c9qD",error_text:"errorIndicator_error_text__2mOkK"}},85:function(e,t,a){e.exports={temp:"weatherItemTemperature_temp__Rv-P1",active:"weatherItemTemperature_active__1Mitt",border:"weatherItemTemperature_border__2vbLL"}},86:function(e,t,a){e.exports={temp:"weatherItemTemperature_temp__14WD2",active:"weatherItemTemperature_active__2EFHh",border:"weatherItemTemperature_border__1xL1t"}},90:function(e,t,a){e.exports={not_found:"cityNotFound_not_found__crcC6",city:"cityNotFound_city__30pXX"}},91:function(e,t,a){e.exports={wrapper:"weatherList_wrapper__3u1mW",top_row:"weatherList_top_row__3Wl5F","react-autosuggest__container":"weatherList_react-autosuggest__container__2NK8k",error:"weatherList_error__1WymH"}}},[[155,1,2]]]);
//# sourceMappingURL=main.30ba5287.chunk.js.map