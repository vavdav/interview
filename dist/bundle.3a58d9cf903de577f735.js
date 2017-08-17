webpackJsonp([1],{113:function(e,t,a){"use strict";function n(e,a,n,i,r){return{type:t.ADD_CONTACT,payload:{id:e,fullName:a,bio:n,phone:i,mail:r}}}function i(e,a,n,i,r){return{type:t.UPDATE_CONTACT,payload:{id:e,fullName:a,bio:n,phone:i,mail:r}}}function r(e){return{type:t.REMOVE_CONTACT,payload:{id:e}}}function o(e,a){if(void 0===e&&(e=c),a.error)return e;var n=a.payload;switch(a.type){case t.ADD_CONTACT:return e.concat([s({},n)]);case t.REMOVE_CONTACT:return e.filter(function(e){return e.id!==n.id});case t.UPDATE_CONTACT:return e.slice().map(function(e){return e.id===n.id?s({},n):e})}return e}var s=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_CONTACT="contacts/ADD",t.UPDATE_CONTACT="contacts/UPDATE",t.REMOVE_CONTACT="contacts/REMOVE",t.addContact=n,t.updateContact=i,t.removeContact=r;var c=[{id:"1",fullName:"Frantisek Vopicka",bio:"Super chlap",phone:"123 456 789",mail:"vopicka@gmail.com"},{id:"2",fullName:"Alena Vopickova",bio:"Super zenska",phone:"123 456 111",mail:"vopickova@gmail.com"},{id:"3",fullName:"Alan Papousek",bio:"Super zenska",phone:"123 456 111",mail:"vopickova@gmail.com"}];t.default=o},114:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),i=a(74),r=a(39),o=a(27),s=a(40),c=a(265),l=a(273),u=c.default(),p=r.createStore(l.default,{});i.render(n.createElement(s.Provider,{store:p},n.createElement(o.BrowserRouter,null,u)),document.getElementById("root"))},265:function(e,t,a){"use strict";function n(){return i.createElement(o.default,null,i.createElement(r.Switch,null,i.createElement(r.Route,{exact:!0,path:"/",component:s.default}),i.createElement(r.Route,{path:"/new-contact",component:c.default}),i.createElement(r.Route,{path:"/contact/:id",component:c.default}),i.createElement(r.Route,{path:"*",component:l.default})))}Object.defineProperty(t,"__esModule",{value:!0});var i=a(3),r=a(27),o=a(266),s=a(269),c=a(270),l=a(272);t.default=n},266:function(e,t,a){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=a(3);a(267),a(268);var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return i.createElement("div",{className:"App"},this.props.children)},t}(i.Component);t.default=r},267:function(e,t){},268:function(e,t){},269:function(e,t,a){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=a(3),r=a(40),o=a(27),s=a(112),c=a(66),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={searchString:"",sortAz:!0},t.clearSearch=function(){t.setState({searchString:""})},t.handleSearch=function(e){t.setState({searchString:e.target.value})},t.setSortingAz=function(e){t.setState({sortAz:e})},t}return n(t,e),t.prototype.renderSearch=function(){return i.createElement("div",{className:"Search"},i.createElement("div",{className:"Search__clear",onClick:this.clearSearch},"X"),i.createElement("input",{className:"Search__input",type:"text",value:this.state.searchString,placeholder:"Search ...",onChange:this.handleSearch}))},t.prototype.renderFilter=function(){var e=this,t=c("Filter__item",this.state.sortAz&&"Filter__item--active"),a=c("Filter__item",!this.state.sortAz&&"Filter__item--active");return i.createElement("div",{className:"Filter"},i.createElement("div",{className:t,onClick:function(){return e.setSortingAz(!0)}},"A-Z"),i.createElement("div",{className:a,onClick:function(){return e.setSortingAz(!1)}},"Z-A"))},t.prototype.renderContacts=function(){var e=this;if(!this.props.contacts.length)return i.createElement("div",{className:"List__content List__content--empty"},"Contact List is empty");var t=""===this.state.searchString?this.props.contacts:this.props.contacts.filter(function(t){return t.fullName.toLowerCase().indexOf(e.state.searchString)>=0});if(!t.length)return i.createElement("div",{className:"List__content List__content--empty"},"No result for ",this.state.searchString," found");var a=this.state.sortAz?"asc":"desc",n=s.orderBy(t,[function(e){return e.fullName.toLowerCase()}],[a]);return i.createElement("div",{className:"List__content"},n.map(function(e){return i.createElement(o.Link,{className:"ListItem",key:"item"+e.id,to:"/contact/"+e.id},i.createElement("div",{className:"ListItem__image"}),e.fullName)}))},t.prototype.render=function(){return i.createElement("div",null,i.createElement("div",{className:"List"},i.createElement("div",{className:"ListHeader"},this.renderSearch(),this.renderFilter(),i.createElement("div",{className:"ListHeader__label"},"Contact List")),i.createElement("div",{className:"ListContent"},this.renderContacts()),i.createElement("div",{className:"ListFooter"},i.createElement(o.Link,{to:"/new-contact",className:"AddNew"},i.createElement("span",{className:"AddNew__icon"},"+"),"Add new contact"))))},t}(i.Component),u=function(e){return{contacts:e.contacts}};t.default=r.connect(u,void 0)(l)},270:function(e,t,a){"use strict";function n(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),o=a(40),s=a(271),c=a(113),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={bio:t.props.isNew?"":t.props.contact.bio,fullName:t.props.isNew?"":t.props.contact.fullName,isEditing:t.props.isNew,isValidMail:n(t.props.isNew?"":t.props.contact.mail),mail:t.props.isNew?"":t.props.contact.mail,phone:t.props.isNew?"":t.props.contact.phone},t.setEditMode=function(){t.setState({isEditing:!0})},t.cancelEditMode=function(){t.setState({bio:t.props.isNew?"":t.props.contact.bio,fullName:t.props.isNew?"":t.props.contact.fullName,isEditing:!1,mail:t.props.isNew?"":t.props.contact.mail,phone:t.props.isNew?"":t.props.contact.phone})},t.saveChanges=function(){if(t.setState({isEditing:!1}),t.props.isNew){var e=Math.random().toString(36).substr(2,10);t.props.addContact(e,t.state.fullName,t.state.bio,t.state.phone,t.state.mail),t.props.history.replace("/contact/"+e)}else t.props.updateContact(t.props.contact.id,t.state.fullName,t.state.bio,t.state.phone,t.state.mail)},t.deleteItem=function(){t.props.isNew||t.props.removeContact(t.props.contact.id),t.props.history.replace("/")},t.updateField=function(e,a){var i=(r={},r[e]=a,r);"mail"===e&&(i.isValidMail=n(a)),t.setState(i);var r},t.isAbleToSave=function(){return t.state.isValidMail&&""!==t.state.fullName&&""!==t.state.phone},t.goToHomepage=function(){t.props.isNew?t.props.history.replace("/"):t.props.history.push("/")},t}return i(t,e),t.prototype.renderFooter=function(){return r.createElement("div",{className:"Detail__footer"},!this.state.isEditing&&r.createElement(s.default,{label:"Edit",onClick:this.setEditMode}),this.state.isEditing&&r.createElement(s.default,{type:"positive",label:"Save",onClick:this.saveChanges,disabled:!this.isAbleToSave()}),this.state.isEditing&&!this.props.isNew&&r.createElement(s.default,{type:"negative",label:"Cancel Edit",onClick:this.cancelEditMode}),!this.props.isNew&&!this.state.isEditing&&r.createElement(s.default,{type:"negative",label:"Delete",onClick:this.deleteItem}),(!this.state.isEditing||this.props.isNew)&&r.createElement(s.default,{label:"Back",onClick:this.goToHomepage}))},t.prototype.render=function(){var e=this;return r.createElement("div",{className:"Detail"},r.createElement("div",{className:"Detail__header"},r.createElement("div",{className:"profile-pic"}),r.createElement("input",{className:"name",type:"text",name:"",value:this.state.fullName,placeholder:"Full Name",disabled:!this.state.isEditing,onChange:function(t){return e.updateField("fullName",t.target.value)}})),r.createElement("div",{className:"Detail__content"},r.createElement("div",{className:"input-wrap"},r.createElement("label",{htmlFor:"bio"},"Bio"),r.createElement("textarea",{name:"bio",className:"bio",placeholder:"Decsription",disabled:!this.state.isEditing,value:this.state.bio,onChange:function(t){return e.updateField("bio",t.target.value)}})),r.createElement("div",{className:"input-wrap"},r.createElement("label",{htmlFor:"tel"},"Phone"),r.createElement("input",{type:"text",name:"tel",className:"tel",value:this.state.phone,placeholder:"+XXX XXX XXX XXX",disabled:!this.state.isEditing,onChange:function(t){return e.updateField("phone",t.target.value)}})),r.createElement("div",{className:"input-wrap"},r.createElement("label",{htmlFor:"email"},"E-mail ",!this.state.isValidMail&&"NOT VALID"),r.createElement("input",{type:"text",className:"email",value:this.state.mail,placeholder:"E-mail",disabled:!this.state.isEditing,onChange:function(t){return e.updateField("mail",t.target.value)}}))),this.renderFooter())},t}(r.Component),u=function(e,t){return t.match.params.id?{contact:e.contacts.filter(function(e){return e.id===t.match.params.id})[0]}:{isNew:!0}},p=function(e){return{addContact:function(t,a,n,i,r){return e(c.addContact(t,a,n,i,r))},removeContact:function(t){return e(c.removeContact(t))},updateContact:function(t,a,n,i,r){return e(c.updateContact(t,a,n,i,r))}}};t.default=o.connect(u,p)(l)},271:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),i=a(66),r=function(e){var t=i("Button",e.className,{"Button--positive":e.type&&"positive"===e.type,"Button--negative":e.type&&"negative"===e.type,"Button--disabled":!!e.disabled});return e.disabled?n.createElement("div",{className:t},e.label):n.createElement("div",{className:t,onClick:e.onClick},e.label)};t.default=r},272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),i=a(27),r=function(){return n.createElement("div",{className:"PageNotFound"},"Sorry, page not found. ",n.createElement(i.Link,{to:"/"},"Go To HomePage"))};t.default=r},273:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(39),i=a(113);t.default=n.combineReducers({contacts:i.default})}},[114]);