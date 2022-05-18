(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i.n(n),s=(i(16),i(11)),c=i(3),r=i(4),o=i(7),l=i(6),m=i(1),d=i.n(m),j=(i(17),i(2)),b=(i(18),i(19),i(0)),h=function(e){var t=e.title,i=e.description,n=e.imgUrl,a=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:n,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:a,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(h,Object(j.a)({},e),e.imdbId)}))})},p=i(5),g=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}},e.onSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.movie)},e.onChange=function(t){var i=t.target,n=i.name,a=i.value;e.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{movie:Object(j.a)(Object(j.a)({},e.movie),{},Object(p.a)({},n,a))})}))},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.movie,t=e.title,i=e.description,n=e.imgUrl,a=e.imdbUrl,s=e.imdbId;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Add movie"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("label",{children:["title:",Object(b.jsx)("input",{type:"text",name:"title",value:t,onChange:this.onChange,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["description:",Object(b.jsx)("input",{type:"text",name:"description",value:i,onChange:this.onChange,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["imgUrl:",Object(b.jsx)("input",{type:"text",name:"imgUrl",value:n,onChange:this.onChange,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["imdbUrl:",Object(b.jsx)("input",{type:"text",name:"imdbUrl",value:a,onChange:this.onChange,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["imdbId:",Object(b.jsx)("input",{type:"text",name:"imdbId",value:s,onChange:this.onChange,required:!0})]}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{type:"submit",children:"Add movie"})})]})]})}}]),i}(m.Component),O=i(10),v=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={movies:O},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(u,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(g,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bb2ba567.chunk.js.map