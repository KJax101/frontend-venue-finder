import React from "react";
import {Provider} from "react-redux";
import Main from "./components/Main" 
import store from "./store/store";
window.store=store
// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// ReactDOM.render((<Provider store= {store}> <Main/> </Provider>), document.getElementById("app"));
// ReactDOM.render((<Provider store={store}><Main/></Provider>), document.getElementById("app")); 

export default () => {
  return (
      <Provider store={store}><Main /></Provider>
  )
}
