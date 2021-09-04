import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Home = lazy(() => import("./pages/index"));

//  category
const Drag = lazy(() => import("./pages/drag"));



const AppRouter = () => {

  return (
    <React.Fragment>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" component={Drag} />
      </Switch>
    </React.Fragment>
  );
};



export default AppRouter;
