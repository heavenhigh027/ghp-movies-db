(this["webpackJsonpghp-movies-db"]=this["webpackJsonpghp-movies-db"]||[]).push([[0],{101:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);n(96);var a=n(0),s=n.n(a),i=n(10),c=n.n(i),r=(n(62),n(20)),o=n(21),l=n(23),j=n(22),d=n(18),h=(n(101),n(102),n(12)),b=n(53),u=n(154),m=n(149),x=n(153),O=n(2),g=function(e){var t=e.movies;return Object(O.jsx)(d.b,{to:"/movies/".concat(t.show.id),children:Object(O.jsx)(m.a,{button:!0,children:Object(O.jsx)(x.a,{primary:t.show.name})})})};var v=function(e){return Object(O.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)(u.a,{component:"nav",children:e.list.map((function(e){return Object(O.jsx)(g,{movies:e},e.show.id)}))})})},p=n(155),f=n(168),y=n(73),N=n.n(y),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onMoviesInputChange=function(e){a.setState({movieName:e.target.value,isFetching:!0}),fetch("https://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){return a.setState({movies:e,isFetching:!1})}))},a.state={movies:[],movieName:"",isFetching:!1,importantText:""},a.onMoviesInputChange=a.onMoviesInputChange.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movies,n=e.movieName,a=e.isFetching,s=e.importantText;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsxs)(p.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(O.jsx)(p.a,{item:!0,xs:5}),Object(O.jsx)(p.a,{item:!0,children:Object(O.jsx)(f.a,{id:"search",label:"Search Movies",type:"search",margin:"normal",value:n,onChange:this.onMoviesInputChange,helperText:s})}),Object(O.jsx)(p.a,{item:!0,children:Object(O.jsx)(N.a,{})}),Object(O.jsx)(p.a,{item:!0,xs:4})]})}),Object(O.jsxs)("div",{children:[!a&&0===t.length&&""===n.trim()&&Object(O.jsx)("p",{}),!a&&0===t.length&&""!==n.trim()&&Object(O.jsx)("p",{children:"No Movies have been found with this name"}),!a&&Object(O.jsx)(v,{list:this.state.movies})]})]})}}]),n}(a.Component),w=n(38),P="LEFT",k="RIGHT",D=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,s=[];a<=t;)s.push(a),a+=n;return s},M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).fetchPageNumbers=function(){var e=a.totalPages,t=a.state.currentPage,n=a.pageNeighbours,s=2*a.pageNeighbours+3;if(e>s+2){var i=Math.max(2,t-n),c=Math.min(e-1,t+n),r=D(i,c),o=i>2,l=e-c>1,j=s-(r.length+1);switch(!0){case o&&!l:var d=D(i-j,i-1);r=[P].concat(Object(w.a)(d),Object(w.a)(r));break;case!o&&l:var h=D(c+1,c+j);r=[].concat(Object(w.a)(r),Object(w.a)(h),[k]);break;default:r=[P].concat(Object(w.a)(r),[k])}return[1].concat(Object(w.a)(r),[e])}return D(1,e)},a.gotoPage=function(e){var t=a.props.onPageChanged,n=void 0===t?function(e){return e}:t,s=Math.max(0,Math.min(e,a.totalPages)),i={currentPage:s,totalPages:a.totalPages,pageLimit:a.pageLimit,totalRecords:a.totalRecords};a.setState({currentPage:s},(function(){return n(i)}))},a.handleClick=function(e){return function(t){t.preventDefault(),a.gotoPage(e)}},a.handleMoveLeft=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage-2*a.pageNeighbours-1)},a.handleMoveRight=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage+2*a.pageNeighbours+1)};var s=e.totalRecords,i=void 0===s?null:s,c=e.pageLimit,o=void 0===c?10:c,l=e.pageNeighbours,j=void 0===l?0:l;return a.pageLimit="number"===typeof o?o:10,a.totalRecords="number"===typeof i?i:0,a.pageNeighbours="number"===typeof j?Math.max(0,Math.min(j,2)):0,a.totalPages=Math.ceil(a.totalRecords/a.pageLimit),a.state={currentPage:1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords||1===this.totalPages)return null;var t=this.state.currentPage,n=this.fetchPageNumbers();return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)("nav",{"aria-label":"Shows Pagination",children:Object(O.jsx)("ul",{className:"pagination",children:n.map((function(n,a){return n===P?Object(O.jsx)("li",{className:"page-item",children:Object(O.jsxs)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:e.handleMoveLeft,children:[Object(O.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(O.jsx)("span",{className:"sr-only",children:"Previous"})]})},a):n===k?Object(O.jsx)("li",{className:"page-item",children:Object(O.jsxs)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:e.handleMoveRight,children:[Object(O.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),Object(O.jsx)("span",{className:"sr-only",children:"Next"})]})},a):Object(O.jsx)("li",{className:"page-item".concat(t===n?" active":""),children:Object(O.jsx)("a",{className:"page-link",href:"#",onClick:e.handleClick(n),children:n})},a)}))})})})}}]),n}(a.Component),S=n(156),F=n(160),I=n(158),R=n(157),L=n(159),T=n(58),A=n.n(T),z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onPageChanged=function(e){var t=a.state.tvShows,n=e.currentPage,s=e.totalPages,i=e.pageLimit,c=(n-1)*i,r=t.slice(c,c+i);a.setState({currentPage:n,currentShows:r,totalPages:s})},a.state={tvShows:[],currentShows:[],currentPage:null,totalPages:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tvmaze.com/shows").then((function(e){return e.json()})).then((function(t){e.setState({tvShows:t})}))}},{key:"render",value:function(){var e=this.state,t=e.tvShows,n=e.currentShows,a=e.currentPage,s=e.totalPages,i=t.length;if(0===i)return null;var c=["text-dark py-2 pr-4 m-0",a?"border-gray border-right":""].join(" ").trim();return Object(O.jsxs)(S.a,{children:[Object(O.jsx)(C,{}),Object(O.jsxs)("div",{className:"w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between",children:[Object(O.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(O.jsxs)("h2",{className:c,children:[Object(O.jsx)("strong",{className:"text-secondary",children:i})," TV Shows"]}),a&&Object(O.jsxs)("span",{className:"current-page d-inline-block h-100 pl-4 text-secondary",children:["Page ",Object(O.jsx)("span",{className:"font-weight-bold",children:a})," / ",Object(O.jsx)("span",{className:"font-weight-bold",children:s})]})]}),Object(O.jsx)("div",{className:"d-flex flex-row py-4 align-items-center",children:Object(O.jsx)(M,{totalRecords:i,pageLimit:16,pageNeighbours:1,onPageChanged:this.onPageChanged})})]}),Object(O.jsx)("div",{className:"gridContainer",spacing:3,children:n.map((function(e,t){return Object(O.jsx)("div",{style:{textAlign:"justify"},className:"gridItem",children:Object(O.jsx)(d.b,{style:{textDecoration:"none"},to:"/movieinfo/".concat(e.id),children:Object(O.jsxs)("div",{children:[Object(O.jsx)(R.a,{style:{height:400},component:"img",image:e.image.original}),Object(O.jsxs)(I.a,{children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#000000",color:"#ffffff"},children:e.name}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a,{variant:"outlined",children:["Premiered: ",e.premiered]}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{startIcon:Object(O.jsx)(A.a,{}),variant:"contained",color:"primary",children:e.rating.average})]}),Object(O.jsx)(F.a,{})]})})},t)}))})]})}}]),n}(a.Component),G=n(78),B=n(170),V=n(165),E=n(162),J=n(163),_=n(164),q=n(59),H=n(74),U=n.n(H),W=n(161),Y={appBar:{position:"relative"},flex:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}};function K(e){return Object(O.jsx)(W.a,Object(G.a)({direction:"up"},e))}var Q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={open:!1,show:null},e.handleClose=function(){e.setState({open:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){return e.setState({show:t,open:!0})}))}},{key:"render",value:function(){var e=this.state.show;return Object(O.jsx)("div",{children:null!==e&&Object(O.jsxs)(B.a,{fullscreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:K,children:[Object(O.jsx)(E.a,{style:Y.appBar,children:Object(O.jsxs)(J.a,{children:[Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)(_.a,{color:"default",onClick:this.handleClose,"aria-label":"Close",children:Object(O.jsx)(U.a,{})})}),Object(O.jsx)(q.a,{variant:"title",color:"inherit",style:Y.flex,children:e.name})]})}),Object(O.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{button:!0,children:null!=e.image&&Object(O.jsx)("img",{alt:"Show",src:e.image.medium})})}),Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(m.a,{button:!0,children:Object(O.jsx)(x.a,{primary:"Premiered",secondary:e.premiered})}),Object(O.jsx)(V.a,{}),Object(O.jsx)(m.a,{button:!0,children:Object(O.jsx)(x.a,{primary:"Rating",secondary:e.rating.average})}),Object(O.jsx)(V.a,{}),Object(O.jsx)(m.a,{button:!0,children:Object(O.jsx)(x.a,{primary:"Episodes",secondary:e._embedded.episodes.length})}),Object(O.jsx)(V.a,{})]})})]})]})})}}]),n}(a.Component),X=Q,Z=n(166),$=n(167),ee=n(75),te=n.n(ee),ne=Object(Z.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",GridTemplateRow:"auto",gridGap:e.spacing(5)},Grid:{textAlign:"justify"},divider:{margin:e.spacing(2,0)},button:{margin:e.spacing(1)},input:{display:"none"}}})),ae=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={movieDetails:{},loading:!0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.split("/")[2];fetch("https://api.tvmaze.com/shows/".concat(t,"?embed=cast")).then((function(e){return e.json()})).then((function(t){e.setState({movieDetails:t,loading:!1})}))}},{key:"render",value:function(){return Object(O.jsx)(S.a,{className:ne.root,children:this.state.loading?Object(O.jsx)("div",{children:"Loading..."}):Object(O.jsxs)("div",{classname:"movieDetails",children:[Object(O.jsxs)("div",{className:"posterContainer",style:{paddingTop:"3%"},children:[Object(O.jsx)("div",{className:"poster",style:{borderRadius:5},children:Object(O.jsxs)($.a,{children:[Object(O.jsx)(R.a,{style:{height:550},component:"img",image:this.state.movieDetails.image.original}),Object(O.jsxs)(I.a,{style:{textAlign:"justify"},children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#000000",color:"#ffffff"},children:Object(O.jsx)("strong",{children:this.state.movieDetails.name})}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{variant:"outlined",className:ne.button,children:Object(O.jsxs)("strong",{children:["Premiered: ",this.state.movieDetails.premiered]})}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{startIcon:Object(O.jsx)(A.a,{}),variant:"contained",color:"primary",children:this.state.movieDetails.rating.average}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{variant:"outlined",className:ne.button,children:Object(O.jsxs)("strong",{children:["Genres: ",this.state.movieDetails.genres.map((function(e,t){return Object(O.jsx)("span",{children:e+" "},t)}))]})})]})]})}),Object(O.jsxs)("div",{className:"movieInfo",xs:8,style:{textAlign:"justify"},children:[Object(O.jsxs)("div",{className:"summary",children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#000000",color:"#ffffff"},children:Object(O.jsx)("h3",{children:"Summary"})}),Object(O.jsx)("br",{}),this.state.movieDetails.summary]}),Object(O.jsx)(V.a,{}),Object(O.jsxs)("div",{className:"language",children:[Object(O.jsx)(L.a,{variant:"contained",color:"primary",className:ne.button,children:Object(O.jsx)("strong",{children:"Language:"})})," ",this.state.movieDetails.language]}),Object(O.jsx)(V.a,{}),Object(O.jsxs)("div",{className:"runtime",children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#800080",color:"#ffffff"},children:Object(O.jsx)("strong",{children:"Runtime:"})})," ",this.state.movieDetails.runtime]}),Object(O.jsx)(V.a,{}),Object(O.jsxs)("div",{className:"schedule",children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#FF1493",color:"#ffffff"},children:Object(O.jsx)("strong",{children:"Schedule:"})}),Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{variant:"contained",startIcon:Object(O.jsx)(te.a,{}),style:{backgroundColor:"#FFFF00",color:"#000000"}})," ",this.state.movieDetails.schedule.time,Object(O.jsx)("br",{}),Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#FFFF00",color:"#000000"},children:Object(O.jsx)("strong",{children:"Days:"})})," ",this.state.movieDetails.schedule.days.map((function(e,t){return Object(O.jsx)("span",{children:e+" "},t)}))]}),Object(O.jsx)(V.a,{}),Object(O.jsxs)("div",{className:"status",children:[Object(O.jsx)(L.a,{variant:"contained",style:{backgroundColor:"#008000",color:"#ffffff"},children:Object(O.jsx)("strong",{children:"Status:"})}),this.state.movieDetails.status]})]})]}),Object(O.jsx)("div",{children:Object(O.jsxs)(L.a,{variant:"contained",style:{backgroundColor:"#000000",color:"#ffffff"},children:[Object(O.jsx)("h3",{children:"Cast"}),Object(O.jsx)("br",{})]})}),Object(O.jsxs)("div",{className:"castContainer",children:[this.state.movieDetails._embedded.cast.map((function(e,t){return Object(O.jsx)("div",{classname:"cast",item:!0,xs:3,children:Object(O.jsx)("div",{children:Object(O.jsxs)($.a,{children:[Object(O.jsx)(R.a,{style:{height:350,width:300},component:"img",image:e.person.image.original}),Object(O.jsx)(I.a,{children:Object(O.jsx)(q.a,{component:"h2",children:e.person.name})})]})})},t)})),Object(O.jsx)("div",{className:"viewMore",item:!0,xs:3,style:{justifyContent:"center",alignContent:"center",paddingTop:"10%"},children:Object(O.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(O.jsx)(L.a,{variant:"contained",color:"primary",children:"View More TV  Shows"})})})]})]})})}}]),n}(a.Component),se=function(e){return Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",component:z}),Object(O.jsx)(h.a,{path:"/movies/:id",component:X}),Object(O.jsx)(h.a,{path:"/movieinfo/:id",component:ae})]})},ie=n(76),ce=n.n(ie);function re(){return Object(O.jsx)("div",{children:Object(O.jsxs)(q.a,{color:"primary",style:{flex:1,fontSize:10,fontWeight:"bold"},align:"center",children:["Made with",Object(O.jsx)(_.a,{color:"primary",children:Object(O.jsx)(ce.a,{})}),"by Mantoss"]})})}var oe=n(77),le=n.n(oe),je=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"App-logo",children:Object(O.jsx)("img",{alt:"app icon",width:"85",src:"https://img.icons8.com/clouds/200/000000/retro-tv.png"})}),Object(O.jsx)("div",{className:"siteName",children:Object(O.jsx)("h1",{children:"Movies Database"})}),Object(O.jsx)("div",{className:"homeBtn",children:Object(O.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(O.jsx)(le.a,{})})})]}),Object(O.jsx)(E.a,{position:"static",children:Object(O.jsx)(J.a,{children:Object(O.jsx)(q.a,{variant:"subtitle1",color:"inherit",style:{flex:1},align:"center",children:"Look Up Your Favorite TV Shows and Movies"})})}),Object(O.jsx)(se,{}),Object(O.jsx)(re,{})]})}}]),n}(s.a.Component),de=je;c.a.render(Object(O.jsx)(d.a,{children:Object(O.jsx)(de,{})}),document.getElementById("root"))},62:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.381cc017.chunk.js.map