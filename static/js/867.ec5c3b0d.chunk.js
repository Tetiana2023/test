"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867],{125:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(433),a=r(861),s=r(439),c=r(757),i=r.n(c),o=r(643),u=r(184),A=function(){return(0,u.jsx)("div",{style:{margin:"auto"},children:(0,u.jsx)(o.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},l="LoadMoreBtn_btnWrapper__pTc+-",f="LoadMoreBtn_button__wacIM",p=function(e){var t=e.onClick;return(0,u.jsx)("div",{className:l,children:(0,u.jsx)("button",{type:"button",className:f,onClick:t,children:"LOAD MORE"})})},d=r.p+"static/media/main-picture.db6709e825b888acd80e.png",v=r(791),x="UserCard_box__hV1cL",m="UserCard_logo__P80sQ",h="UserCard_picture__XP4I7",w="UserCard_userInfo__bUc26",b="UserCard_avatarBox__bPZPk",g="UserCard_image__EioKu",j="UserCard_text__c+pSg",N="UserCard_button__61Mjl",U="UserCard_buttonFollowing__2i1op",O=r(243),S=function(e){var t=e.user,r=t.id,n=t.tweets,c=t.followers,o=t.avatar,A=function(e,t){var r=(0,v.useState)((function(){var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t})),n=(0,s.Z)(r,2),a=n[0],c=n[1];return(0,v.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,c]}("following".concat(r),!1),l=(0,s.Z)(A,2),f=l[0],p=l[1],S=(0,v.useState)(c),L=(0,s.Z)(S,2),Z=L[0],H=L[1],I=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f?Z-1:Z+1,e.prev=1,e.next=4,O.Z.put("https://64411770792fe886a89e1645.mockapi.io/user/".concat(r),{followers:t});case 4:H(t),p(!f),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("li",{className:x,children:[(0,u.jsx)("a",{href:"./",children:(0,u.jsx)("img",{className:m,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ4SURBVHgB1Vg9U9tAEH3OxIVdODNQhMIUbijiwilS2C11fjNFmrhIEQooKKCAAgozA4VdWDNmn7UnzoekO4sPL29mR6fT6rh77L5dubVarX5j95iL/Wm1WlmVg+xzIpd97BhfYANdsZ/4BLBCGHEgUXQE47BEGHEkpB3AMKwRRoyEtC6MwiJhbbGxkPYVBpG6qaXYldhMbIH8UD2xPsorF/1uxe713Y7YofqnwBWBf2gG/u1zHQ/UiL/I918F7nNS8zyJMJb8qZT8eTD/IHatQu2L9YX4XpSsMRNfzo+RExLDugiUrJWCzO1X1lh684uScxQQX8QQS8kNsmTBtlgv0Jhv3vjGP6D6F766zlQsQxreughw7/tqRbC4ORnuxRaIRdi9RxYPXkSH3DNF+d/77vn7ZDENGHkkrSCeJveX2IzKOrAIPOJt8Msbn4hleq5J6gKxCLv2xiPkZJ2J/UeeknMdM2IeAnKHyLUO+t7IW2uGdKyLAJ7X2iliEeYLZEevd6EOqI5lJb6omKsTXtOIRVjZITuMIOpTjS9TKNSpRYVvDEz7qV53jhhhfstwijwFme/HeNlOdFU4Ke483Jn3bK7vOxwiHad1le2jEUvJgZBw48Ra7k9Un5ZKSgimJnsdksaWg/1Q2z+wvp/aj7FFuYUhxCLMdd0brYFPluqXe87yPPR8lyVkjZGGu4Y92LsipXHlIY8Zacg7aJLlOv0BXlYvRiVbDbYdrh2gD9O1j7Rq56pvU+zJHtzPRb0Knx/ik2HL6rvN91of233aDNEMa5GvSPlUdBH/mmjUEFv8+DYl8iGsEWZO5ENYIsykyIewQthrRf7D8ASrKwNlc4GdUAAAAABJRU5ErkJggg==",alt:"logo",width:"76",height:"22"})}),(0,u.jsx)("img",{className:h,src:d,alt:"mainPicture"}),(0,u.jsx)("img",{src:"data:image/png;base64,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",alt:"line"}),(0,u.jsx)("div",{className:b,children:(0,u.jsx)("img",{className:g,src:o,alt:"userPhoto"})}),(0,u.jsxs)("div",{className:w,children:[(0,u.jsxs)("p",{className:j,children:[n," TWEETS"]}),(0,u.jsxs)("p",{className:j,children:[Z.toLocaleString("en-US")," FOLLOWERS"]}),f?(0,u.jsx)("button",{className:U,type:"button",onClick:I,children:"FOLLOWING"}):(0,u.jsx)("button",{className:N,type:"button",onClick:I,children:"FOLLOW"})]})]},r)},L="UserList_listBox__W58F+",Z=function(e){var t=e.user;return(0,u.jsx)("ul",{className:L,children:t.map((function(e){return(0,u.jsx)(S,{user:e})}))})},H=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.Z.get("".concat("https://64411770792fe886a89e1645.mockapi.io","/user?limit=3&page=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,v.useState)([]),t=(0,s.Z)(e,2),r=t[0],c=t[1],o=(0,v.useState)(1),l=(0,s.Z)(o,2),f=l[0],d=l[1],x=(0,v.useState)(!1),m=(0,s.Z)(x,2),h=m[0],w=m[1],b=(0,v.useState)(""),g=(0,s.Z)(b,2)[1];(0,v.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,H(f);case 4:t=e.sent,c((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e(f)}),[f]);return(0,u.jsxs)("div",{children:[r.length>0&&(0,u.jsx)(Z,{user:r}),h&&(0,u.jsx)(A,{}),r.length<18&&(0,u.jsx)(p,{onClick:function(){d((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=867.ec5c3b0d.chunk.js.map