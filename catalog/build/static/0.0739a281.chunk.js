webpackJsonp([0],{774:function(n,e,t){var o=t(15),a=t(45),i=t(287).PageRenderer;i.__esModule&&(i=i.default);var r=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(776)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,n.exports=r},776:function(n,e){n.exports="```image\nsrc: catalog_logo.svg\nplain: true\n```\n\nHi!\n\nWelcome to your freshly set up Catalog. To get started immediately, check out the `catalog/` directory (or wherever you've set it up).\n\n- `WELCOME.md`: This Markdown document\n- `index.js`: The entry file to start Catalog. Change configuration and add pages here.\n- `index.html`: The HTML document which gets served. Usually there's no need to edit this unless for example you want to load a custom font.\n- `static/`: A directory with files that are served statically. For example the Catalog logo above.\n\nFor more details about how to use Catalog, check out the [documentation](https://docs.catalog.style/).\n\n\n```react\nresponsive: true\nstate: {clicked: 0}\n---\n<div>\n<style>{`\n.box {\n  background: black;\n  width: 100vw;\n  height: 100%;\n  padding:25px;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  font-family: 'Helvetica';\n  transition: .7s background;\n}\n@media (min-width: 360px) {\n  .box {\n    background: #2BF1D3;\n    color: #482AC6;\n    text-align: left;\n  }\n}\n@media (min-width: 1024px) {\n  .box {\n    background: #CED3DF;\n    color: #482AC6;\n  }\n}\n@media (min-width: 1440px) {\n  .box {\n    background: tomato;\n    color: purple;\n  }\n}\n@media (min-width: 1920px) {\n  .box {\n    background: purple;\n    color: #2BF1D3;\n    font-family: 'Georgia';\n  }\n}\n`}</style>\n<div className='box'>\n    <h1>Hello World</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n</div>\n</div>\n```"}});
//# sourceMappingURL=0.0739a281.chunk.js.map